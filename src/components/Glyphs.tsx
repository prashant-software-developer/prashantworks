import type { ReactNode } from "react";
import type { IconKey } from "../data/cases/types";

/**
 * The site's own line icons (24 × 24). Ink lines with one blue accent each, in the same drawing language as the
 * illustrations: hairline strokes, square ends where possible, blue only on the part that matters.
 */

const A = "stroke-primary"; // accent stroke
const AF = "fill-primary"; // accent fill

const G: Record<IconKey, ReactNode> = {
  chat: (<><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12.5h5" className={A} /></>),
  voice: (<><path d="M4 10v4M7.5 7v10M14.5 6v12M18 9v6M21 11v2" /><path d="M11 3v18" className={A} /></>),
  phone: (<><path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z" /><path d="M15 3a6 6 0 0 1 6 6" className={A} /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /><rect x="13" y="13" width="4" height="4" className={AF} stroke="none" /></>),
  tasks: (<><path d="M10 6h10M10 12h10M10 18h10" /><path d="M3.5 6l1.5 1.5L8 4.5" className={A} /><rect x="4" y="11" width="3" height="3" /><rect x="4" y="17" width="3" height="3" /></>),
  shield: (<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" className={A} /></>),
  lock: (<><rect x="4.5" y="10.5" width="15" height="10" /><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" /><path d="M12 14.5v2.5" className={A} /></>),
  cart: (<><path d="M3 4h2.5l2.5 11h11l2-8H6.5" /><circle cx="9.5" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><rect x="11" y="8.5" width="4" height="3.5" className={AF} stroke="none" /></>),
  health: (<><rect x="3.5" y="3.5" width="17" height="17" /><path d="M12 7.5v9M7.5 12h9" className={A} /></>),
  heart: (<><path d="M12 20s-8-4.6-8-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.8C20 15.4 12 20 12 20z" /><path d="M5 12h3l1.5-2.5 2 5 1.5-2.5H19" className={A} /></>),
  book: (<><path d="M3 5.5c3-1 6-1 9 1 3-2 6-2 9-1V19c-3-1-6-1-9 1-3-2-6-2-9-1z" /><path d="M12 6.5V20" /><path d="M16 5v6l1.5-1 1.5 1V5" className={A} /></>),
  cap: (<><path d="M2.5 9.5L12 5l9.5 4.5L12 14z" /><path d="M6.5 11.5v4c3 2.5 8 2.5 11 0v-4" /><path d="M21.5 9.5v6" className={A} /></>),
  layout: (<><rect x="3" y="4" width="18" height="16" /><path d="M3 8.5h18M9 8.5V20" /><rect x="12" y="11.5" width="6" height="5" className={AF} stroke="none" /></>),
  link: (<><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" className={A} /></>),
  chart: (<><path d="M3.5 20.5h17" /><path d="M6 20V14M10 20V10M18 20v-8" /><path d="M14 20V5" className={A} /></>),
  search: (<><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /><circle cx="10.5" cy="10.5" r="2" className={AF} stroke="none" /></>),
  money: (<><rect x="2.5" y="6" width="19" height="12" /><path d="M5.5 9v6M18.5 9v6" /><circle cx="12" cy="12" r="2.6" className={A} /></>),
  plane: (<><path d="M3 13l18-7-5 14-4-6z" /><path d="M12 14l9-8" /><path d="M3 20h5" className={A} /></>),
  game: (<><path d="M7 7h10a5 5 0 0 1 4.8 6.4l-1.3 4.2a2 2 0 0 1-3.4.8L14.5 16h-5L7 18.4a2 2 0 0 1-3.4-.8l-1.3-4.2A5 5 0 0 1 7 7z" /><path d="M7.5 10.5v3M6 12h3" /><circle cx="16" cy="11" r="0.9" className={AF} stroke="none" /><circle cx="17.8" cy="13" r="0.9" className={AF} stroke="none" /></>),
  mail: (<><rect x="3" y="5.5" width="18" height="13" /><path d="M3 6l9 7 9-7" /><circle cx="19.5" cy="5.5" r="2.5" className={AF} stroke="none" /></>),
  code: (<><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path d="M13.5 4.5l-3 15" className={A} /></>),
  users: (<><circle cx="8.5" cy="8" r="3" /><path d="M3 19c.5-3.5 3-5.5 5.5-5.5s5 2 5.5 5.5" /><circle cx="16.5" cy="9" r="2.5" className={A} /><path d="M15 14c2.8 0 5.3 1.5 6 4.5" className={A} /></>),
  car: (<><path d="M3 16v-3l2.5-5h11L20 13l1 3z" /><path d="M5 13h15" /><circle cx="7.5" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" className={A} /></>),
  food: (<><circle cx="13" cy="12" r="7" /><circle cx="13" cy="12" r="3.5" className={A} /><path d="M3 4v6M3 10v10M5 4v4a2 2 0 0 1-2 2" /></>),
  doc: (<><path d="M5.5 3h9l4 4v14h-13z" /><path d="M14.5 3v4h4" /><path d="M8.5 11h7M8.5 14.5h7" /><path d="M8.5 18h4" className={A} /></>),
  video: (<><rect x="3" y="5" width="18" height="14" /><path d="M10 9v6l5-3z" className={AF} stroke="none" /></>),
  spark: (<><path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" /><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" className={AF} stroke="none" /></>),
  bell: (<><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" /><path d="M10 20.5h4" /><circle cx="17.5" cy="6" r="2.2" className={AF} stroke="none" /></>),
  map: (<><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" className={AF} stroke="none" /></>),
  star: (<><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" /><circle cx="12" cy="12" r="1.8" className={AF} stroke="none" /></>),
  gear: (<><path d="M12 2.5l1.6 2.6 3-.6.6 3 2.6 1.6-1.4 2.9 1.4 2.9-2.6 1.6-.6 3-3-.6L12 21.5l-1.6-2.6-3 .6-.6-3-2.6-1.6 1.4-2.9-1.4-2.9 2.6-1.6.6-3 3 .6z" /><circle cx="12" cy="12" r="3" className={A} /></>),
  upload: (<><path d="M4 15v5h16v-5" /><path d="M12 15V4M7.5 8.5L12 4l4.5 4.5" className={A} /></>),
  home: (<><path d="M3.5 11L12 4l8.5 7v9.5h-17z" /><rect x="10" y="14" width="4" height="6.5" className={AF} stroke="none" /></>),
  graph: (<><path d="M3.5 20.5h17M3.5 3.5v17" /><path d="M6.5 16l4-5 3 3 5-7" /><circle cx="18.5" cy="7" r="1.8" className={AF} stroke="none" /></>),
  agent: (<><rect x="5.5" y="7" width="13" height="11" /><path d="M12 7V4M9 21h6M3 12v2M21 12v2" /><rect x="8.5" y="10.5" width="2.2" height="2.2" className={AF} stroke="none" /><rect x="13.3" y="10.5" width="2.2" height="2.2" className={AF} stroke="none" /><path d="M9.5 15h5" /></>),
  ticket: (<><path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z" /><path d="M14 7v10" className={A} strokeDasharray="1.5 2" /></>),
  box: (<><path d="M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M12 12v9M12 12l8.5-4.5" /><path d="M3.5 7.5L12 12" className={A} /></>),
  megaphone: (<><path d="M3 10v4h3l9 5V5L6 10z" /><path d="M6 14l1.5 5h3" /><path d="M18 9a4 4 0 0 1 0 6M20 6.5a8 8 0 0 1 0 11" className={A} /></>),
  baby: (<><circle cx="12" cy="8" r="4.5" /><path d="M5 21c.8-4 3.5-6.5 7-6.5s6.2 2.5 7 6.5" /><path d="M12 3.5c1.5 0 2 1.5 1 2.2" className={A} /></>),
  terminal: (<><rect x="3" y="4" width="18" height="16" /><path d="M7 9l3 3-3 3" /><path d="M12.5 15H17" className={A} /></>),
};

export function Glyph({ icon, className = "h-6 w-6", stroke = 1.5 }: { icon: IconKey; className?: string; stroke?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {G[icon] ?? G.spark}
    </svg>
  );
}

/** A glyph inside the site's square tile. */
export function GlyphTile({ icon, size = "h-12 w-12", glyph = "h-6 w-6", tone = "plain" }: { icon: IconKey; size?: string; glyph?: string; tone?: "plain" | "soft" | "solid" }) {
  const t =
    tone === "solid" ? "bg-primary text-primary-foreground [&_.stroke-primary]:stroke-primary-foreground [&_.fill-primary]:fill-primary-foreground" :
    tone === "soft" ? "bg-[hsl(225_20%_96%)] text-foreground" : "border bg-background text-foreground";
  return (
    <span className={`flex shrink-0 items-center justify-center ${size} ${t}`}>
      <Glyph icon={icon} className={glyph} />
    </span>
  );
}

/** Raw glyph paths, for drawing a glyph large inside another SVG. */
export function GlyphPaths({ icon }: { icon: IconKey }) {
  return <>{G[icon] ?? G.spark}</>;
}
