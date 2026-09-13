#!/usr/bin/env bash
# Verify every frozen path on tidox.online still answers 200.
# See docs/frozen-paths.md for why each path is pinned.
# Usage: scripts/verify-frozen-paths.sh [host]   (default: tidox.online)
set -uo pipefail

HOST="${1:-tidox.online}"
BASE="https://$HOST"

# Tier 1 and 2: must answer 200, and must not leave the host.
PINNED=(
  /app-ads.txt
  /robots.txt
  /sitemap-index.xml
  /sitemap-0.xml
  /privacy_policy.html
  /googlec75af7e410066abe.html
  /apps/
  /privacy
  /privacy/
  /terms
  /terms/
  /index.html
  /
)

# Tier 3: per-app pages. A same-host redirect is acceptable.
APPS=(
  about alarm app-locker audio-hub beam cleaner clipboard contact
  daily-companion flashcards guardian guitar-tuner kora local lucid
  offline-audio pdf-reader piano player pricing prompt qr-scanner reader
  recording remote-control scanner secure-browser sentinel sound-meter
  task-manager transcript voice-memo vr-player
)

# Restored aliases for URLs burned into older releases. See
# scripts/sync-alias-pages.sh. These are pinned like any other frozen path.
RESTORED=(
  /images/logo.png
  /og-image.jpg
  /support
  /privacy-policy
  /privacy/app-locker
  /echotype/privacy
)

fail=0

check() {
  local path="$1" label="$2"
  local out code final
  out="$(curl -s -o /dev/null -L --max-time 20 -w '%{http_code} %{url_effective}' "$BASE$path")"
  code="${out%% *}"
  final="${out#* }"
  if [ "$code" != "200" ]; then
    printf '  FAIL %-28s %s\n' "$path" "$code"
    return 1
  fi
  if [ "$label" = "pinned" ] && [[ "$final" != "$BASE"* ]]; then
    printf '  FAIL %-28s left the host: %s\n' "$path" "$final"
    return 1
  fi
  printf '  ok   %-28s %s\n' "$path" "$code"
  return 0
}

echo "Frozen paths on $HOST"
echo
echo "Tier 1 and 2 — pinned to this host:"
for p in "${PINNED[@]}"; do
  check "$p" pinned || fail=$((fail + 1))
done

echo
echo "Tier 3 — per-app pages:"
for a in "${APPS[@]}"; do
  check "/$a/" app || fail=$((fail + 1))
done
check /kora app || fail=$((fail + 1))

echo
echo "Restored aliases — pinned to this host:"
for p in "${RESTORED[@]}"; do
  check "$p" pinned || fail=$((fail + 1))
done

echo
if [ "$fail" -gt 0 ]; then
  echo "RESULT: $fail frozen path(s) broken on $HOST. Do not ship."
  exit 1
fi
echo "RESULT: all frozen paths healthy on $HOST."
