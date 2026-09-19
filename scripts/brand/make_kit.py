"""Build the Tidox favicon/og kit from make_mark.py geometry. Output: kit/."""
import os, subprocess
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import make_mark as M
OUT=__import__('sys').argv[1] if len(__import__('sys').argv)>1 else 'kit'; os.makedirs(OUT, exist_ok=True)
FONT='/Users/etido/Code/tidoemanuele/online-tidox-player-cast-android/app/src/main/res/font/batmfa__.ttf'
tile=M.svg(512,M.BG,72,rx=96)
open(f'{OUT}/favicon.svg','w').write(tile)
open(f'{OUT}/logo.svg','w').write(tile)
open(f'{OUT}/tidox-mark.svg','w').write(M.svg(1000,None,0))
# wordmark paths (font y-up -> y-down)
f=TTFont(FONT); gs=f.getGlyphSet(); cmap=f.getBestCmap()
x=0; paths=[]; gap=60
for ch in 'TIDOX':
    g=gs[cmap[ord(ch)]]; pen=SVGPathPen(gs); tp=TransformPen(pen,(1,0,0,-1,x,600)); g.draw(tp)
    paths.append((ch,pen.getCommands())); x+=g.width+gap
WM_W=x-gap
def wordmark(scale,ox,oy):
    return '<g transform="translate(%g,%g) scale(%g)">%s</g>'%(ox,oy,scale,''.join('<path fill="%s" d="%s"/>'%(M.RED if ch=='T' else M.WHITE,d) for ch,d in paths))
open(f'{OUT}/tidox-wordmark.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 %d 720">%s</svg>'%(WM_W,wordmark(1,0,0)))
# og image 1200x630
og='''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="Tidox — privacy-first mobile apps">
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#333333"/><stop offset="1" stop-color="#222222"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<g transform="translate(96,120) scale(0.34)">%s</g>
%s
<text x="330" y="330" font-family="Inter, Helvetica, Arial, sans-serif" font-size="46" fill="#e6e6e6">Privacy-first mobile apps</text>
<rect x="330" y="372" width="150" height="6" rx="3" fill="#d12f2f"/>
<text x="330" y="440" font-family="Inter, Helvetica, Arial, sans-serif" font-weight="700" font-size="30" fill="#9e9e9e">tidox.online</text>
</svg>'''%(tile.split('>',1)[1].rsplit('</svg>',1)[0].replace('width="512" height="512"','width="512" height="512"'), wordmark(0.175,330,118))
open(f'{OUT}/og-image.svg','w').write(og)
run=lambda *a: subprocess.run(a,check=True)
for n in (16,32,48,180,192,512):
    run('rsvg-convert','-w',str(n),'-h',str(n),f'{OUT}/favicon.svg','-o',f'{OUT}/icon-{n}.png')
os.replace(f'{OUT}/icon-16.png',f'{OUT}/favicon-16x16.png'); os.replace(f'{OUT}/icon-32.png',f'{OUT}/favicon-32x32.png')
os.replace(f'{OUT}/icon-180.png',f'{OUT}/apple-touch-icon.png'); os.replace(f'{OUT}/icon-192.png',f'{OUT}/android-chrome-192x192.png')
os.replace(f'{OUT}/icon-512.png',f'{OUT}/android-chrome-512x512.png')
run('cp',f'{OUT}/android-chrome-512x512.png',f'{OUT}/logo.png')
run('magick',f'{OUT}/favicon-16x16.png',f'{OUT}/favicon-32x32.png',f'{OUT}/icon-48.png',f'{OUT}/favicon.ico'); os.remove(f'{OUT}/icon-48.png')
run('rsvg-convert','-w','1200','-h','630',f'{OUT}/og-image.svg','-o',f'{OUT}/og-image.png')
run('magick',f'{OUT}/og-image.png','-quality','88',f'{OUT}/og-image.jpg'); os.remove(f'{OUT}/og-image.png')
print(sorted(os.listdir(OUT)))
