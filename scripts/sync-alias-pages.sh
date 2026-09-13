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
  "identity:."
  "privacy_policy.html:privacy"
)

for entry in "${ALIASES[@]}"; do
  alias_path="${entry%%:*}"
  source_page="${entry##*:}"
  if [[ "$source_page" == "." ]]; then
    source_file="index.html"
  else
    source_file="$source_page/index.html"
  fi

  if [[ ! -f "$source_file" ]]; then
    echo "FAIL: source page missing: $source_file"
    exit 1
  fi

  if [[ "$alias_path" == *.html ]]; then
    # A file alias, not a directory: /privacy_policy.html is linked from inside
    # shipped APKs and has to answer with the policy itself, not a redirect.
    cp "$source_file" "$alias_path"
    echo "  /$alias_path <- /$source_page/"
  else
    mkdir -p "$alias_path"
    cp "$source_file" "$alias_path/index.html"
    echo "  /$alias_path/ <- /$source_page/"
  fi
done

echo "Alias pages synced."
