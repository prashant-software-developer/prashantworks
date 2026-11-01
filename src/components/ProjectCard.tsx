import { Link } from "react-router-dom";
import type { Project } from "../data/cases/types";
import { CoverArt } from "./CaseArt";
import { images } from "../data/images";
import { Shot } from "./Shot";

export const kindLabel = (p: Project) => (p.kind === "inhouse" ? `In-house · ${p.title}` : p.kind === "own" ? "Own product" : "Freelance project");

/** Cards use the cover only when it is close to the 4:3 frame; otherwise the illustration. */
const fitsFrame = (id: string) => {
  const m = images[id];
  return !!m && Math.abs(m.w / m.h / (4 / 3) - 1) <= 0.05;
};

/** image: show this screenshot framed instead of the cover (used where cards must match). */
export function ProjectCard({ p, image }: { p: Project; image?: string }) {
  return (
    <Link to={`/work/${p.slug}`} className="group flex h-full flex-col">
      {image ? <Shot id={image} framed alt={`${p.title}: ${p.short}`} sizes="(min-width: 768px) 45vw, 90vw" /> : p.cover && fitsFrame(p.cover) ? <Shot id={p.cover} alt={`${p.title}: ${p.short}`} sizes="(min-width: 768px) 45vw, 90vw" /> : <CoverArt icon={p.icon} slug={p.slug} />}
      <div className="mt-8 flex flex-1 items-start justify-between gap-8 border-b pb-8">
        <div>
          <p className="eyebrow">{kindLabel(p)} · {p.category}</p>
          <h3 className="mt-4 text-title">{p.title}</h3>
          <p className="mt-2 text-body-lg text-muted-foreground">{p.short}</p>
        </div>
      </div>
    </Link>
  );
}

