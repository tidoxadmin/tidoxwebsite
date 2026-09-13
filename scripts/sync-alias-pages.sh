#!/usr/bin/env bash
# Serve the legal and support URLs that are burned into shipped APKs.
#
# Older releases link to paths this site never had. Those APKs cannot be
# patched, so each dead path gets its own copy of the real page instead of a
# redirect: some Play and crawler checks fetch the URL without following
# client-side redirects, and a 404 on a privacy policy URL is a policy problem
# across the whole portfolio.
#
# Each copy keeps the source page's canonical URL, so search engines still
# index one address per document.
#
# See docs/frozen-paths.md. Run after scripts/publish.sh.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# alias path <- source page
ALIASES=(
  "privacy-policy:privacy"
  "privacy/app-locker:privacy"
  "echotype/privacy:privacy"
  "support:contact"
)

for entry in "${ALIASES[@]}"; do
  alias_path="${entry%%:*}"
  source_page="${entry##*:}"
  source_file="$source_page/index.html"

  if [[ ! -f "$source_file" ]]; then
    echo "FAIL: source page missing: $source_file"
    exit 1
  fi

  mkdir -p "$alias_path"
  cp "$source_file" "$alias_path/index.html"
  echo "  /$alias_path/ <- /$source_page/"
done

echo "Alias pages synced."
