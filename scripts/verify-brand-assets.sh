#!/usr/bin/env bash
# Fail if third-party brand icons (Astro, Cursor, Meta) ship in public assets.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail=0

check_absent() {
  local label="$1"
  local pattern="$2"
  local file="$3"
  if [[ -f "$file" ]] && grep -qE "$pattern" "$file"; then
    echo "FAIL: $label detected in $file"
    fail=1
  fi
}

# Astro default favicon path signature
check_absent "Astro icon" 'M50\.4 78\.5|astro\.build' favicon.svg

# Cursor / purple-hex logo gradients from old logo.svg
check_absent "Cursor icon" '#4E00D3|#7935EF|#9C5AFF|mask0_13247' images/logo.svg

# Meta infinity / explicit facebook branding in HTML heads we control
for f in src/layouts/BaseLayout.astro src/pages/index.astro; do
  if [[ -f "$f" ]] && grep -qiE 'facebook|meta\.com|fb:app_id' "$f"; then
    echo "FAIL: Meta/Facebook reference in $f"
    fail=1
  fi
done

if [[ "$fail" -ne 0 ]]; then
  exit 1
fi

echo "Brand asset check passed (Tidox-only icons)."
