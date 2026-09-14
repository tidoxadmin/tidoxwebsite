#!/usr/bin/env bash
# Every /_astro asset referenced by a published page must exist in the working
# tree, and must be tracked by git.
#
# Astro hashes asset filenames, so each rebuild writes a new file. `git add -u`
# stages only tracked files, which silently leaves the new bundle behind and
# publishes pages that reference a 404. That is how the homepage shipped without
# its stylesheet on 2026-09-14.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail=0

refs="$(grep -rhoE '/_astro/[A-Za-z0-9._-]+\.(css|js)' \
  --include="*.html" --exclude-dir=dist --exclude-dir=node_modules \
  --exclude-dir=.git --exclude-dir=bkp_tidoxwebsite . 2>/dev/null | sort -u)"

if [[ -z "$refs" ]]; then
  echo "FAIL: no /_astro references found; is the tree built?"
  exit 1
fi

while read -r ref; do
  [[ -z "$ref" ]] && continue
  path=".${ref}"
  if [[ ! -f "$path" ]]; then
    echo "  MISSING  $ref"
    fail=$((fail + 1))
    continue
  fi
  if ! git ls-files --error-unmatch "${path#./}" >/dev/null 2>&1; then
    echo "  UNTRACKED $ref — run: git add ${path#./}"
    fail=$((fail + 1))
    continue
  fi
  echo "  ok        $ref"
done <<< "$refs"

if [[ "$fail" -ne 0 ]]; then
  echo "RESULT: $fail asset problem(s). Pages would ship referencing a 404."
  exit 1
fi
echo "RESULT: every referenced asset exists and is tracked."
