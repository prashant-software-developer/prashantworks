import { useState } from "react";
import { Closing } from "../components/Layout";
import { Lightbox } from "../components/Lightbox";
import { imgSrc, Shot } from "../components/Shot";
import { useTitle } from "../components/useTitle";
import { gallery } from "../data/gallery";

export default function Gallery() {
  useTitle("Gallery", "Product screens: dashboards, AI tools, mobile apps and landing pages.");
  const [open, setOpen] = useState<number | null>(null);
  const srcs = gallery.map((g) => imgSrc(g.id, 2400));
  return (
    <>
      <section className="pb-16 pt-20 md:pt-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">Gallery</p>
            <h1 className="display mt-8">A wall of <span className="text-primary">screens.</span></h1>
          </div>
          <p className="max-w-xl self-end text-body-lg text-muted-foreground lg:col-span-4 lg:text-xl">{gallery.length} screens. Tap any to open it full size.</p>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {gallery.map((g, i) => (
            <button key={g.id} onClick={() => setOpen(i)} className="group block cursor-zoom-in" aria-label={`Open screen ${i + 1}`}>
              <Shot id={g.id} alt="" mode="full" eager={i < 6} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
            </button>
          ))}
        </div>
      </section>
      <Closing />
      <Lightbox srcs={srcs} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  );
}
