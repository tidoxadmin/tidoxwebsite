#!/usr/bin/env python3
"""Replace YouTube demo iframes on legacy pages with a click-to-play facade.

Each embedded player loaded about 1 MB of YouTube scripts and fonts on page load
and set third-party cookies, which Lighthouse logged as Chrome issues on eight
product pages (2026-09-25). The facade shows the video thumbnail and a play
button; a click swaps in a youtube-nocookie.com player with autoplay. Same box,
same title, no requests to YouTube until the reader asks for the video.

Idempotent: pages that already carry the facade are left alone.
Runs from scripts/publish.sh.
"""
from __future__ import annotations

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MARKER = "data-yt-facade"
IFRAME = re.compile(r'<iframe src="https://www\.youtube\.com/embed/(?P<id>[\w-]{11})" title="(?P<title>[^"]*)"[^>]*></iframe>')
FACADE = (
    '<button type="button" ' + MARKER + '="{id}" aria-label="Play video: {title}" '
    'style="position:absolute;inset:0;width:100%;height:100%;border:0;padding:0;cursor:pointer;background:#000 center/cover no-repeat url(https://i.ytimg.com/vi/{id}/hqdefault.jpg);">'
    '<span aria-hidden="true" style="position:absolute;left:50%;top:50%;width:68px;height:48px;margin:-24px 0 0 -34px;border-radius:14px;background:#f44336;display:flex;align-items:center;justify-content:center;">'
    '<span style="width:0;height:0;border-left:18px solid #fff;border-top:11px solid transparent;border-bottom:11px solid transparent;margin-left:4px;"></span></span></button>'
)
LOADER = """<script data-yt-facade-loader>
    document.addEventListener('click', function (event) {
      var button = event.target.closest && event.target.closest('[data-yt-facade]');
      if (!button) return;
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + button.getAttribute('data-yt-facade') + '?autoplay=1&playsinline=1';
      frame.title = button.getAttribute('aria-label').replace(/^Play video: /, '');
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      frame.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0;';
      button.replaceWith(frame);
    });
  </script>"""


def patch(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if MARKER in text or "youtube.com/embed/" not in text:
        return False
    new, count = IFRAME.subn(lambda m: FACADE.format(id=m.group("id"), title=html.escape(html.unescape(m.group("title")), quote=True)), text)
    if not count:
        return False
    new = new.replace("</body>", LOADER + " </body>", 1)
    path.write_text(new, encoding="utf-8")
    return True


def main() -> int:
    skip = {"node_modules", "dist", "public", ".git", "src"}
    pages = [p for p in ROOT.rglob("*.html") if not skip & set(p.relative_to(ROOT).parts)]
    patched = [p for p in pages if patch(p)]
    left = [p for p in pages if "youtube.com/embed/" in p.read_text(encoding="utf-8")]
    print(f"youtube facade on {len(patched)} pages")
    for p in left:
        print(f"  NOT PATCHED: {p.relative_to(ROOT)}")
    return 1 if left else 0


if __name__ == "__main__":
    sys.exit(main())
