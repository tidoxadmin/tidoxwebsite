# Tidox brand mark

`make_mark.py` holds the geometry of the Tidox mark: the T (red), the
play-triangle standing for the D (white) and the X (black), interlocked with no
gaps. Letterforms come from the Batman Forever Alternate font used for the app
title in Tidox Player (`online-tidox-player-cast-android/app/src/main/res/font/batmfa__.ttf`).

`make_kit.py [outdir]` renders the favicon set, `logo.svg`, `tidox-mark.svg`
(transparent), `tidox-wordmark.svg` and the 1200x630 og image. It needs
`rsvg-convert`, ImageMagick (`magick`) and the `fonttools` Python package.

The kit output is what ships at the site root and in `images/`. The same mark
is the Google Play Developer page icon and header.
