#!/usr/bin/env bash
# Merge Astro dist into gh-pages root (keeps existing product pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run theme:build
npm run build

cp dist/index.html index.html
mkdir -p _astro
cp -r dist/_astro/* _astro/

# Sync legacy static pages from dist (public symlinks → built copies)
for dir in dist/*/; do
  name="$(basename "$dir")"
  [[ "$name" == "_astro" ]] && continue
  [[ "$name" == "index.html" ]] && continue
  [[ -f "$dir/index.html" ]] || continue
  mkdir -p "$name"
  cp "$dir/index.html" "$name/index.html"
done

if [[ -f dist/sitemap-index.xml ]]; then
  cp dist/sitemap-index.xml sitemap-index.xml
fi

python3 scripts/patch-legacy-css.py
bash scripts/verify-brand-assets.sh

echo "Published homepage + assets. Product pages still use patched legacy CSS."
