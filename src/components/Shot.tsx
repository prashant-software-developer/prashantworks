import type { ImgHTMLAttributes } from "react";
import { images } from "../data/images";

/**
 * Every screenshot on the site goes through here, so they all look the same:
 * one 4:3 frame, one soft grey background, the screen inset with a hairline border,
 * rounded corners and a soft shadow. Sharp: the browser picks the 800, 1600 or 2400 px
 * export that matches the screen, so nothing is blurred by scaling.
 */

export const imgSrc = (id: string, w = 1600) => {
  const m = images[id];
  if (!m) return `/img/${id}.webp`;
  const pick = m.v.filter((v) => v <= w).pop() ?? m.v[0];
  return `/img/${id}-${pick}.webp`;
};

const srcSet = (id: string) => {
  const m = images[id];
  if (!m) return undefined;
  return m.v.map((v) => `/img/${id}-${v}.webp ${Math.min(v, m.w)}w`).join(", ");
};

type ImgProps = { id: string; sizes: string; alt: string } & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes" | "alt">;

export function Img({ id, sizes, alt, ...rest }: ImgProps) {
  const m = images[id];
  return <img src={imgSrc(id)} srcSet={srcSet(id)} sizes={sizes} alt={alt} width={m?.w} height={m?.h} decoding="async" {...rest} />;
}

/**
 * peek: the screen rises from the bottom of the frame (cards).
 * full: the whole screen sits centred in the frame (case studies, gallery).
 */
export function Shot({
  id,
  alt,
  sizes = "(min-width: 768px) 50vw, 100vw",
  mode = "full",
  eager = false,
  framed = false,
  className = "",
}: {
  id: string;
  alt: string;
  sizes?: string;
  mode?: "peek" | "full";
  eager?: boolean;
  /** Always show the screen framed on the grey panel, never edge to edge. */
  framed?: boolean;
  className?: string;
}) {
  const loading = eager ? "eager" : "lazy";
  // Exactly-4:3 cover art already has its own background and device frame, so it fills the frame
  // instead of getting a second border and shadow. Case images (ids with a folder) are plain screens.
  const m = images[id];
  const bleed = !framed && mode === "full" && !!m && m.w * 3 === m.h * 4 && !id.includes("/");
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-[hsl(225_20%_96%)] ${className}`}>
      {bleed ? (
        <Img id={id} alt={alt} sizes={sizes} loading={loading} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      ) : mode === "peek" ? (
        <div className="absolute inset-x-[7%] bottom-0 top-[8%] overflow-hidden rounded-t-[10px] border border-b-0 border-black/[0.06] bg-background shadow-[0_24px_48px_-24px_rgba(20,24,40,0.25)] transition-transform duration-500 group-hover:-translate-y-1.5">
          <Img id={id} alt={alt} sizes={sizes} loading={loading} className="h-full w-full object-cover object-left-top" />
        </div>
      ) : (
        <div className="absolute inset-[6%] flex items-center justify-center [container-type:size]">
          {/* Grow to the largest size that fits the frame, whatever the image's shape. */}
          <Img
            id={id}
            alt={alt}
            sizes={sizes}
            loading={loading}
            style={{ width: images[id] ? `min(100cqw, 100cqh * ${images[id].w / images[id].h})` : "100%" }}
            className="h-auto max-h-full max-w-full rounded-[8px] border border-black/[0.06] bg-background object-contain shadow-[0_20px_40px_-24px_rgba(20,24,40,0.3)]"
          />
        </div>
      )}
    </div>
  );
}
