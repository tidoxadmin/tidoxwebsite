"""Tidox mark: T (red) + play-triangle as D (white) + X (black), letterforms from Batman Forever Alternate."""
import sys
T=[(790,595),(659,464),(484,464),(484,-126),(306,-126),(306,464),(131,464),(0,595)]   # flat stem base on the X baseline
X=[(801,6),(590,6),(401,195),(212,6),(0,6),(295,300),(0,596),(212,596),(401,406),(590,596),(801,596),(506,300)]
XDX,XDY=484,-132   # X top-left corner sits exactly in the T inner corner           # X placement in font units
TRI=[(484,464),(484,-126),(484+295,300-132)]   # fills the X left notch, flush with stem   # apex on X's left notch
RED,WHITE,BLACK,BG='#d12f2f','#fdfdfd','#000000','#303030'
def poly(pts,fill,dx=0,dy=0):
    return '<polygon fill="%s" points="%s"/>'%(fill,' '.join('%g,%g'%(x+dx,y+dy) for x,y in pts))
def mark_group(scale,ox,oy):
    # font y-up -> svg y-down: y' = -y
    inner=poly(T,RED)+poly(X,BLACK,XDX,XDY)+poly(TRI,WHITE)
    return '<g transform="translate(%g,%g) scale(%g,%g)">%s</g>'%(ox,oy,scale,-scale,inner)
def svg(size,bg,pad,rx=0):
    w,h=1285,721; ymax,ymin=595,-126
    s=(size-2*pad)/w
    ox=pad; oy=(size-h*s)/2 + ymax*s
    body=('<rect width="%d" height="%d" rx="%d" fill="%s"/>'%(size,size,rx,bg)) if bg else ''
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d">%s%s</svg>'%(size,size,body,mark_group(s,ox,oy))
if __name__=='__main__':
    out=sys.argv[1]
    open(out+'/tidox_mark.svg','w').write(svg(1000,None,0))
    open(out+'/tidox_icon_512.svg','w').write(svg(512,BG,72))
    open(out+'/tidox_icon_round.svg','w').write(svg(512,BG,72,rx=96))
