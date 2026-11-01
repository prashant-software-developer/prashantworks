import os, re, json
import numpy as np
from PIL import Image, ImageFilter
W="/sessions/tender-quirky-euler/mnt/My Website"
OUT=f"{W}/public/img"
raw={f[:10]:f for f in os.listdir("raw")}
work=open(f"{W}/src/data/work.ts").read()
gal=open(f"{W}/src/data/gallery.ts").read()
covers=re.findall(r'image: "([0-9a-f]{10})"',work)
casepart=work[work.index("export const cases"):]
caseids=[i for i in re.findall(r'"([0-9a-f]{10})"',casepart) if i in raw]
galids=re.findall(r'"id": "([0-9a-f]{10})"',gal)
allids=sorted(set(covers+caseids+galids))
print(len(covers),len(caseids),len(galids),len(allids))

# framed sources: ringover family, vyuu covers, qriosx + ai calls slides
ring=re.search(r'slug: "ringover"(.*?)slug: "vyuu-ai"',casepart,re.S).group(1)
ringids=set(re.findall(r'"([0-9a-f]{10})"',ring))
crop_ids=ringids|{"3d9d18d252","f54fc0e553","9407b11e74","b79b757600","03e0739881",
  "14ea830a66","10443a3814","9fbde4bde5","1f466df2b8","0fae3984cf","e71c65c0cb","49b766aa43",
  "9f7513e0f4","849e2df822","f1aa2074e1","7efa0cbaba","9d33f3b05c","4d23386204","2dc72d5092"}

def frame_margin(im):
    # Ringover / Vyuu style: a white card centred on a decorative frame. Measure the left margin on the middle row,
    # then use it on every side (the cards are centred).
    a=np.asarray(im.convert("RGB")); H,Wd,_=a.shape
    row=a[H//2]
    for x in range(int(Wd*0.12)):
        if row[x:x+6].min()>=253: 
            m=x+int(min(Wd,H)*0.003); return (m,m,Wd-m,H-m)
    return None

def bg_bbox(im, bg=(244,245,249), tol=8):
    a=np.asarray(im.convert("RGB")).astype(int); H,Wd,_=a.shape
    diff=(np.abs(a-np.array(bg)).max(axis=2)>tol)
    on=diff.mean(axis=1)>0.004
    # split content rows into runs; drop a short first run (a slide title) when a gap follows it
    runs=[]; start=None
    for y,v in enumerate(on):
        if v and start is None: start=y
        if not v and start is not None:
            runs.append([start,y]); start=None
    if start is not None: runs.append([start,H])
    merged=[]
    for r in runs:
        if merged and r[0]-merged[-1][1] < H*0.012: merged[-1][1]=r[1]
        else: merged.append(r)
    if len(merged)>1 and merged[0][1]-merged[0][0] < H*0.12: merged=merged[1:]
    y0,y1=merged[0][0],merged[-1][1]
    sub=diff[y0:y1]
    cols=np.where(sub.mean(axis=0)>0.004)[0]
    rows=np.array([y0,y1-1])
    if len(cols)==0: return None
    p=int(min(Wd,H)*0.02)
    return (max(cols[0]-p,0),max(rows[0]-p,0),min(cols[-1]+p,Wd),min(rows[-1]+p,H))

def white_bbox(im, frac=0.15):
    a=np.asarray(im.convert("RGB")); H,Wd,_=a.shape
    white=(a.min(axis=2)>=252)
    rows=np.where(white.mean(axis=1)>frac)[0]; cols=np.where(white.mean(axis=0)>frac)[0]
    if len(rows)==0 or len(cols)==0: return None
    x0,x1,y0,y1=cols[0],cols[-1],rows[0],rows[-1]
    if (x1-x0)*(y1-y0) < 0.3*H*Wd: return None
    p=int(min(Wd,H)*0.012)
    return (max(x0-p,0),min(y0+int(H*0.004),H),min(x1+p,Wd),min(y1+p,H))

slide_ids={"14ea830a66","10443a3814","9fbde4bde5","1f466df2b8","0fae3984cf","e71c65c0cb","49b766aa43","9f7513e0f4","849e2df822","f1aa2074e1","7efa0cbaba","9d33f3b05c","4d23386204","2dc72d5092"}

def panel_bbox(im):
    a=np.asarray(im.convert("RGB"))
    white=(a.min(axis=2)>=253)
    H,Wd=white.shape
    rows=np.where(white.mean(axis=1)>0.35)[0]; cols=np.where(white.mean(axis=0)>0.35)[0]
    if len(rows)==0 or len(cols)==0: return None
    y0,y1,x0,x1=rows[0],rows[-1],cols[0],cols[-1]
    if (x1-x0)*(y1-y0) > 0.97*H*Wd: return None
    pad=int(min(Wd,H)*0.004)
    return (x0+pad,y0+pad,x1-pad,y1-pad)

manifest={}
cropped=[]
def save(im,key):
    w,h=im.size; vs=[]
    for t in (800,1600,2400):
        if t>w and t!=800: 
            continue
        tw=min(t,w); th=round(h*tw/w)
        r=im.resize((tw,th),Image.LANCZOS) if tw!=w else im
        if tw<w: r=r.filter(ImageFilter.UnsharpMask(radius=0.8,percent=55,threshold=2))
        r.save(f"{OUT}/{key}-{t}.webp","WEBP",quality=90,method=6)
        vs.append(t)
    manifest[key]={"w":w,"h":h,"v":vs}

for i in allids:
    im=Image.open("raw/"+raw[i]).convert("RGB")
    if i in crop_ids:
        if i in slide_ids:
            bb=white_bbox(im) or bg_bbox(im)
        elif i in ("b79b757600","03e0739881"): bb=panel_bbox(im)
        else: bb=frame_margin(im)
        if bb: im=im.crop(bb); cropped.append((i,bb))
    save(im,i)
# local SOC exports
S="/sessions/tender-quirky-euler/mnt/Portfolio/Cregent"
for f in sorted(os.listdir(S)):
    if not f.endswith(".png") or f.startswith("01"): continue
    n=f.split(" ")[0]
    im=Image.open(os.path.join(S,f)).convert("RGB")
    if im.height>im.width*1.9: im=im.crop((0,0,im.width,int(im.width*1.75)))
    save(im,f"soc/{n}")
json.dump({"manifest":manifest,"cropped":cropped},open("/tmp/pw/manifest.json","w"),default=int)
print("cropped",len(cropped))
for c in cropped: print(c)
