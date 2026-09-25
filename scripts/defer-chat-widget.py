#!/usr/bin/env python3
"""Load the Chaport live-chat widget on first user interaction, not at page load.

The stock snippet injects app.chaport.com/javascripts/insert.js as soon as the
page parses. On a mid-range phone that bundle blocks the main thread for about
6.5 s (Lighthouse, /player/, 2026-09-25), which is most of the page's Total
Blocking Time. The chat bubble is only useful once a reader is engaging, so
the loader now waits for the first scroll, pointer, touch or key event, or for
15 s of idle time, whichever comes first. The `window.chaport` queue is still
created immediately, so any `chaport.q(...)` call made earlier is replayed.

Idempotent: a page that already carries the deferred loader is left alone.
Runs from scripts/publish.sh over every legacy page in the repo root.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MARKER = "data-chaport-deferred"
STOCK = re.compile(
    r"<script>\s*\(function\(w,d,v2\)\{\s*w\.chaport = \{ app_id : '(?P<app>[0-9a-f]+)' \};.*?\}\)\(window, document\);\s*</script>",
    re.S,
)
DEFERRED = """<script {marker}>
    (function(w,d,v2){{
      w.chaport = {{ app_id : '{app}' }};
      v2=w.chaport;v2._q=[];v2._l={{}};v2.q=function(){{v2._q.push(arguments)}};v2.on=function(e,fn){{if(!v2._l[e])v2._l[e]=[];v2._l[e].push(fn)}};
      var loaded=false,events=['scroll','pointerdown','touchstart','keydown'];
      function load(){{if(loaded)return;loaded=true;events.forEach(function(e){{w.removeEventListener(e,load)}});var s=d.createElement('script');s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';d.body.appendChild(s)}}
      events.forEach(function(e){{w.addEventListener(e,load,{{once:true,passive:true}})}});
      setTimeout(load,15000);
    }})(window, document);
  </script>"""


def patch(path: Path) -> bool:
    html = path.read_text(encoding="utf-8")
    if MARKER in html:
        return False
    new, count = STOCK.subn(lambda m: DEFERRED.format(marker=MARKER, app=m.group("app")), html)
    if not count:
        return False
    path.write_text(new, encoding="utf-8")
    return True


def main() -> int:
    skip = {"node_modules", "dist", "public", ".git", "src"}
    pages = [p for p in ROOT.rglob("*.html") if not skip & set(p.relative_to(ROOT).parts)]
    patched = [p for p in pages if patch(p)]
    remaining = [p for p in pages if "app.chaport.com" in p.read_text(encoding="utf-8") and MARKER not in p.read_text(encoding="utf-8")]
    print(f"chat widget deferred on {len(patched)} pages")
    for p in remaining:
        print(f"  NOT PATCHED (unknown snippet): {p.relative_to(ROOT)}")
    return 1 if remaining else 0


if __name__ == "__main__":
    sys.exit(main())
