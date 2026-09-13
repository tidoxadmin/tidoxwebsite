# Frozen paths on tidox.online

These URLs are burned into shipped APKs, Play Console listings, and ad-network
crawlers. They must keep returning `200` from the apex host `tidox.online`
forever, on every host migration and every site redesign.

A frozen path may never be redirected to another host. Installed app versions
cannot be patched, and some crawlers do not follow cross-host redirects.

Run `scripts/verify-frozen-paths.sh` before and after any DNS or hosting change.

## Tier 1 — ad and store trust files

| Path | Consumer | Notes |
| --- | --- | --- |
| `/app-ads.txt` | AdMob crawler | Must stay at the apex root. The publisher line is `google.com, pub-8027163152836505, DIRECT, f08c47fec0942fa0`. Play Console lists `tidox.online` as the developer website, which is where the crawler looks. |
| `/robots.txt` | Google, Bing | Points at `/sitemap-index.xml`. |
| `/sitemap-index.xml` | Google Search Console | Child sitemap `/sitemap-0.xml`. |

Search Console verification is the DNS TXT record
`google-site-verification=Lkbvnfw-USMbXfdLtDA2T1f1MLCrX4OnGzQKvMTpnrM` on the
apex. It lives in Cloudflare DNS and survives a hosting change.

No app declares an App Links `autoVerify` intent filter for `tidox.online`, so
`/.well-known/assetlinks.json` is not required today. Adding an App Links host
later adds a Tier 1 path.

## Tier 2 — legal URLs referenced from inside shipped apps

| Path | References | Notes |
| --- | --- | --- |
| `/privacy_policy.html` | 59 | The most widely burned-in URL in the portfolio. |
| `/privacy` and `/privacy/` | 2 | |
| `/terms` and `/terms/` | 1 | |
| `/index.html` | 1 | |
| `/` | 21 | Includes 14 legacy `http://tidox.online` references. |

## Tier 3 — per-app pages used as Play listing website URLs

One page per app, all under the apex: `/about/`, `/alarm/`, `/app-locker/`,
`/audio-hub/`, `/beam/`, `/cleaner/`, `/clipboard/`, `/contact/`,
`/daily-companion/`, `/flashcards/`, `/guardian/`, `/guitar-tuner/`, `/kora/`,
`/local/`, `/lucid/`, `/offline-audio/`, `/pdf-reader/`, `/piano/`, `/player/`,
`/pricing/`, `/prompt/`, `/qr-scanner/`, `/reader/`, `/recording/`,
`/remote-control/`, `/scanner/`, `/secure-browser/`, `/sentinel/`,
`/sound-meter/`, `/task-manager/`, `/transcript/`, `/voice-memo/`,
`/vr-player/`.

`/kora` (no trailing slash) is also burned into an app and currently answers
`301` to `/kora/`. A same-host redirect is acceptable for Tier 3.

## Known broken references

These URLs are burned into apps but already return `404`. They predate this
document. Fix them during the migration rather than after it.

| Path | References | Suggested fix |
| --- | --- | --- |
| `/images/logo.png` | 14 | Serve the brand logo at this path. The references use `http://`, so the HTTPS redirect must stay. |
| `/og-image.jpg` | 74 | Referenced by the homepage Open Graph tags, so social cards are blank today. |
| `/support` | 1 | Alias to `/contact/`. |
| `/privacy-policy` | 1 | Alias to `/privacy/`. |
| `/privacy/app-locker` | 1 | Alias to `/app-locker/` or a per-app privacy page. |
| `/echotype/privacy` | 1 | Alias to `/privacy/`. |
