#!/usr/bin/env bash
# Expose pre-Astro static pages through public/ so dev/preview/build serve them.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"
mkdir -p "$PUBLIC"

SKIP='^(dist|src|public|node_modules|theme|scripts|docs|demo|\.git|\.omc)$'

for dir in "$ROOT"/*/; do
  name="$(basename "$dir")"
  [[ "$name" =~ $SKIP ]] && continue
  [[ -f "$dir/index.html" ]] || continue
  ln -sfn "../$name" "$PUBLIC/$name"
done

echo "Linked legacy pages into public/"
