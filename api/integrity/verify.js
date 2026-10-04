// Play Integrity token verifier for Tidox paid builds.
//
// POST { package: "online.tidox.transcriber.premium", token: "<integrity token>" }
// -> { licensed: true|false|null, verdict: "LICENSED"|"UNLICENSED"|"UNEVALUATED"|null,
//      appIntegrity: "PLAY_RECOGNIZED"|..., nonce: "<echoed nonce>" }
//
// Stateless. Decodes the token through Google (decodeIntegrityToken) with a
// service account from the Cloud project linked to the app in Play Console.
// Nothing is stored or logged beyond the platform's request log.
//
// Env: PLAY_INTEGRITY_SA = service-account JSON (one line).

const ALLOWED_PACKAGES = new Set([
  "online.tidox.transcriber.premium",
]);
const SCOPE = "https://www.googleapis.com/auth/playintegrity";

function b64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function accessToken(sa) {
  const { createSign } = await import("node:crypto");
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email, scope: SCOPE, aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600,
  }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${b64url(signer.sign(sa.private_key))}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  return (await res.json()).access_token;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {};
  const pkg = String(body.package || "");
  const token = String(body.token || "");
  if (!ALLOWED_PACKAGES.has(pkg)) return res.status(400).json({ error: "unknown package" });
  if (!token || token.length > 20000) return res.status(400).json({ error: "bad token" });
  const raw = process.env.PLAY_INTEGRITY_SA;
  if (!raw) return res.status(503).json({ error: "verifier not configured" });

  try {
    const sa = JSON.parse(raw);
    const at = await accessToken(sa);
    const g = await fetch(
      `https://playintegrity.googleapis.com/v1/${encodeURIComponent(pkg)}:decodeIntegrityToken`,
      { method: "POST", headers: { Authorization: `Bearer ${at}`, "Content-Type": "application/json" }, body: JSON.stringify({ integrity_token: token }) },
    );
    if (!g.ok) {
      const text = await g.text();
      return res.status(502).json({ error: "decode failed", status: g.status, detail: text.slice(0, 300) });
    }
    const payload = (await g.json()).tokenPayloadExternal || {};
    const verdict = payload.accountDetails?.appLicensingVerdict || null;
    const appIntegrity = payload.appIntegrity?.appRecognitionVerdict || null;
    const tokenPkg = payload.appIntegrity?.packageName || null;
    const licensed = verdict === "LICENSED" ? true : verdict === "UNLICENSED" ? false : null;
    return res.status(200).json({
      licensed, verdict, appIntegrity,
      packageMatches: tokenPkg === pkg,
      nonce: payload.requestDetails?.nonce || null,
      requestPackage: payload.requestDetails?.requestPackageName || null,
    });
  } catch (e) {
    return res.status(500).json({ error: "verifier error", detail: String(e).slice(0, 200) });
  }
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
