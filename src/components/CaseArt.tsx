import { useId } from "react";
import type { Category, IconKey } from "../data/cases/types";
import { GlyphPaths } from "./Glyphs";

/**
 * Case study illustrations. One drawing language across the site:
 * hairline ink, one blue, square nodes, hatching for "in design", solid blue for "shipped".
 * Every drawing is generated from the project's own data (its icon, platforms, audiences, flow),
 * so no two case pages look the same.
 */

export const seedOf = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return Math.abs(h);
};
const uid = () => `a${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

function Hatch({ id, gap = 9 }: { id: string; gap?: number }) {
  return (
    <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d={`M0 0V${gap}`} className="stroke-muted-foreground" strokeOpacity="0.35" strokeWidth="1" />
    </pattern>
  );
}

function Shadow({ id }: { id: string }) {
  return (
    <filter id={id} x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#141a2b" floodOpacity="0.10" />
    </filter>
  );
}

const textW = (s: string, size = 13) => s.length * size * 0.56 + 26;

/* ---------- Hero: idea, design and the shipped product around the project's own glyph ---------- */

export function HeroScene({ icon, slug, chips }: { icon: IconKey; slug: string; chips: string[] }) {
  const id = uid();
  const s = seedOf(slug);
  const flip = s % 2 === 1;
  const shape = (s >> 3) % 3; // 0 quarter disc, 1 half disc, 2 square
  const W = 600, H = 460;
  const cx = 300, cy = 220, card = 176;
  const x0 = cx - card / 2, y0 = cy - card / 2;
  const grid: string[] = [];
  for (let i = 0; i <= W; i += 40) grid.push(`M${i} 0V${H}`);
  for (let j = 0; j <= H; j += 40) grid.push(`M0 ${j}H${W}`);
  const mirror = flip ? `translate(${W} 0) scale(-1 1)` : undefined;
  const chipList = chips.slice(0, 3);
  const chipPos = [
    { x: 40, y: 64 },
    { x: 430, y: 120 },
    { x: 60, y: 372 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="60%">
          <stop offset="0.45" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id={`${id}m`}><rect width={W} height={H} fill={`url(#${id}g)`} /></mask>
        <Hatch id={`${id}h`} />
        <Shadow id={`${id}s`} />
      </defs>
      <path d={grid.join("")} className="stroke-border" strokeWidth="1" mask={`url(#${id}m)`} />
      <g transform={mirror}>
        {/* idea */}
        <circle cx={x0 + 4} cy={y0 + 10} r={118} className="stroke-muted-foreground" strokeOpacity="0.45" strokeWidth="1.25" />
        <circle cx={x0 + 4} cy={y0 + 10} r={4} className="fill-muted-foreground" fillOpacity="0.5" />
        {/* design */}
        <rect x={x0 + 70} y={y0 + 96} width={190} height={150} fill={`url(#${id}h)`} className="stroke-muted-foreground" strokeOpacity="0.45" strokeWidth="1.25" />
        {/* shipped */}
        {shape === 0 && <path d={`M${x0 + 260} ${y0 + 246}h-96a96 96 0 0 1 96-96z`} className="fill-primary" />}
        {shape === 1 && <path d={`M${x0 + 164} ${y0 + 246}a48 48 0 0 1 96 0z`} className="fill-primary" />}
        {shape === 2 && <rect x={x0 + 196} y={y0 + 182} width={64} height={64} className="fill-primary" />}
        {/* orbit */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: "view-box", animation: "spin 70s linear infinite" }}>
          <circle cx={cx} cy={cy} r={150} className="stroke-muted-foreground" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 7" />
          <rect x={cx - 5} y={cy - 155} width={10} height={10} className="fill-primary" />
        </g>
      </g>
      {/* connectors to chips */}
      {chipList.map((c, i) => {
        const p = chipPos[i];
        const px = flip ? W - p.x - textW(c) : p.x;
        const mx = px + textW(c) / 2;
        return <path key={c} d={`M${mx} ${p.y + 15}L${cx} ${cy}`} className="stroke-border" strokeWidth="1" strokeDasharray="3 5" />;
      })}
      {/* the product, as a card */}
      <rect x={x0} y={y0} width={card} height={card} className="fill-background stroke-border" filter={`url(#${id}s)`} />
      <g transform={`translate(${x0 + 30} ${y0 + 30}) scale(${(card - 60) / 24})`} className="stroke-foreground" strokeWidth={0.32} strokeLinejoin="round" strokeLinecap="round">
        <GlyphPaths icon={icon} />
      </g>
      {/* chips: platforms and scope */}
      {chipList.map((c, i) => {
        const p = chipPos[i];
        const w = textW(c);
        const px = flip ? W - p.x - w : p.x;
        return (
          <g key={c}>
            <rect x={px} y={p.y} width={w} height={30} className={i === 0 ? "fill-primary" : "fill-background stroke-border"} />
            <text x={px + w / 2} y={p.y + 19.5} textAnchor="middle" className={i === 0 ? "fill-primary-foreground" : "fill-foreground"} style={{ fontSize: 13, letterSpacing: "0.02em" }}>
              {c}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- Who it's for: audiences orbit the product ---------- */

/** A small person mark for an audience group; the first group is the primary user, in solid blue. */
export function PersonaMark({ index }: { index: number }) {
  const lead = index === 0;
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="47" height="47" className={lead ? "fill-primary stroke-primary" : "fill-[hsl(225_20%_96%)] stroke-border"} />
      <circle cx="24" cy="19" r="6" className={lead ? "stroke-primary-foreground" : "stroke-foreground"} strokeWidth="1.4" />
      <path d="M13 37c1.5-6 6-9 11-9s9.5 3 11 9" className={lead ? "stroke-primary-foreground" : "stroke-foreground"} strokeWidth="1.4" />
      {!lead && <rect x={30 + (index % 3) * 2} y="9" width="5" height="5" className="fill-primary" />}
    </svg>
  );
}

export function AudienceArt({ icon, count }: { icon: IconKey; count: number }) {
  const id = uid();
  const W = 420, H = 320, cx = 210, cy = 160;
  const n = Math.max(2, Math.min(count, 5));
  const pts = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2 + 0.35;
    return { x: cx + Math.cos(a) * 150, y: cy + Math.sin(a) * 110 };
  });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs><Shadow id={`${id}s`} /></defs>
      <ellipse cx={cx} cy={cy} rx={150} ry={110} className="stroke-muted-foreground" strokeOpacity="0.35" strokeDasharray="2 7" />
      <ellipse cx={cx} cy={cy} rx={84} ry={62} className="stroke-border" />
      {pts.map((p, i) => <path key={i} d={`M${p.x} ${p.y}L${cx} ${cy}`} className={i === 0 ? "stroke-primary" : "stroke-border"} strokeWidth="1" strokeDasharray={i === 0 ? undefined : "3 5"} />)}
      <rect x={cx - 42} y={cy - 42} width={84} height={84} className="fill-background stroke-border" filter={`url(#${id}s)`} />
      <g transform={`translate(${cx - 24} ${cy - 24}) scale(2)`} className="stroke-foreground" strokeWidth={0.75} strokeLinejoin="round" strokeLinecap="round">
        <GlyphPaths icon={icon} />
      </g>
      {pts.map((p, i) => (
        <g key={`n${i}`}>
          <circle cx={p.x} cy={p.y} r={21} className={i === 0 ? "fill-primary" : "fill-background stroke-muted-foreground"} strokeOpacity="0.6" />
          <text x={p.x} y={p.y + 5} textAnchor="middle" className={i === 0 ? "fill-primary-foreground" : "fill-foreground"} style={{ fontSize: 14 }}>
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- The main flow: steps along a line, the key moment in blue ---------- */

function wrap(s: string, max = 16) {
  const words = s.split(" ");
  const lines: string[] = [""];
  for (const w of words) {
    const cur = lines[lines.length - 1];
    if ((cur + " " + w).trim().length > max && cur) lines.push(w);
    else lines[lines.length - 1] = (cur + " " + w).trim();
  }
  return lines.slice(0, 3);
}

export function JourneyFlow({ steps, keyIndex }: { steps: string[]; keyIndex: number }) {
  const id = uid();
  const W = 1000, H = 300;
  const n = steps.length;
  const xs = steps.map((_, i) => 90 + (i * (W - 180)) / Math.max(n - 1, 1));
  const base = 170;
  const k = Math.min(Math.max(keyIndex, 0), n - 1);
  // an "attention" curve that rises to the key moment
  const peak = xs[k];
  const curve = `M40 ${base - 20} C ${peak - 220} ${base - 24}, ${peak - 120} 40, ${peak} 40 S ${peak + 220} ${base - 24}, ${W - 40} ${base - 20}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs><Hatch id={`${id}h`} gap={8} /></defs>
      <path d={curve} className="stroke-primary" strokeOpacity="0.45" strokeWidth="1.25" />
      <text x={peak} y={26} textAnchor="middle" className="fill-primary" style={{ fontSize: 11, letterSpacing: "0.14em" }}>THE MOMENT THAT MATTERS</text>
      <path d={`M40 ${base}H${W - 40}`} className="stroke-border" strokeWidth="1" />
      <path d={`M${xs[0]} ${base}H${xs[k]}`} className="stroke-primary" strokeWidth="2" />
      {xs.map((x, i) => (
        <g key={i}>
          <path d={`M${x} ${base}V${i === k ? 60 : base - 30}`} className={i === k ? "stroke-primary" : "stroke-border"} strokeDasharray="2 5" />
          {i === k ? (
            <>
              <rect x={x - 22} y={base - 22} width={44} height={44} className="fill-primary" />
              <rect x={x - 34} y={base - 34} width={68} height={68} className="stroke-primary" strokeOpacity="0.4" strokeDasharray="2 5" />
            </>
          ) : (
            <rect x={x - 11} y={base - 11} width={22} height={22} fill={i < k ? `url(#${id}h)` : undefined} className={`${i < k ? "" : "fill-background "}stroke-muted-foreground`} strokeOpacity="0.7" strokeWidth="1.25" />
          )}
          <text x={x} y={base + 62} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 12, letterSpacing: "0.12em" }}>
            {String(i + 1).padStart(2, "0")}
          </text>
          {wrap(steps[i]).map((ln, j) => (
            <text key={j} x={x} y={base + 86 + j * 20} textAnchor="middle" className={i === k ? "fill-primary" : "fill-foreground"} style={{ fontSize: 16 }}>
              {ln}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ---------- A decision: what I considered vs what I chose, as two small screens ---------- */

function Wire({ v, chosen, x, hid }: { v: number; chosen: boolean; x: number; hid: string }) {
  const stroke = chosen ? "stroke-foreground" : "stroke-muted-foreground";
  const op = chosen ? 0.75 : 0.45;
  const blocks: { x: number; y: number; w: number; h: number; hot?: boolean }[] = [];
  // four layout ideas; the chosen one always has one blue block where attention should go
  if (v === 0) {
    for (let i = 0; i < 4; i++) blocks.push({ x: 14, y: 30 + i * 26, w: chosen ? 120 : 52, h: 18, hot: chosen && i === 0 });
    if (!chosen) for (let i = 0; i < 4; i++) blocks.push({ x: 74, y: 30 + i * 26, w: 60, h: 18 });
  } else if (v === 1) {
    blocks.push({ x: 14, y: 30, w: 120, h: chosen ? 48 : 20, hot: chosen });
    blocks.push({ x: 14, y: chosen ? 86 : 58, w: 56, h: chosen ? 40 : 32 });
    blocks.push({ x: 78, y: chosen ? 86 : 58, w: 56, h: chosen ? 40 : 32 });
    if (!chosen) blocks.push({ x: 14, y: 98, w: 120, h: 28 });
  } else if (v === 2) {
    if (chosen) { blocks.push({ x: 14, y: 30, w: 36, h: 96 }); blocks.push({ x: 58, y: 30, w: 76, h: 60, hot: true }); blocks.push({ x: 58, y: 98, w: 76, h: 28 }); }
    else { for (let i = 0; i < 3; i++) blocks.push({ x: 14 + i * 41, y: 30, w: 35, h: 14 }); blocks.push({ x: 14, y: 52, w: 120, h: 74 }); }
  } else {
    if (chosen) { blocks.push({ x: 14, y: 30, w: 120, h: 30 }); blocks.push({ x: 14, y: 68, w: 120, h: 30 }); blocks.push({ x: 84, y: 106, w: 50, h: 20, hot: true }); }
    else { blocks.push({ x: 14, y: 30, w: 120, h: 96 }); blocks.push({ x: 24, y: 40, w: 100, h: 8 }); blocks.push({ x: 24, y: 56, w: 70, h: 8 }); }
  }
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={0} width={148} height={140} className={`${stroke} fill-background`} strokeOpacity={op} strokeWidth="1.25" />
      <path d="M0 18h148" className={stroke} strokeOpacity={op} />
      <circle cx={9} cy={9} r={2.2} className={chosen ? "fill-foreground" : "fill-muted-foreground"} fillOpacity={op} />
      <circle cx={17} cy={9} r={2.2} className={chosen ? "fill-foreground" : "fill-muted-foreground"} fillOpacity={op} />
      {blocks.map((b, i) =>
        b.hot ? (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} className="fill-primary" />
        ) : (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={chosen ? undefined : `url(#${hid})`} className={stroke} strokeOpacity={op} />
        ),
      )}
    </g>
  );
}

export function DecisionArt({ seed }: { seed: number }) {
  const id = uid();
  const v = seed % 4;
  return (
    <svg viewBox="0 0 360 172" className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs><Hatch id={`${id}h`} gap={7} /></defs>
      <Wire v={v} chosen={false} x={4} hid={`${id}h`} />
      <path d="M160 70h34" className="stroke-primary" strokeWidth="1.25" />
      <path d="M188 64l6 6-6 6" className="stroke-primary" strokeWidth="1.25" />
      <Wire v={v} chosen x={206} hid={`${id}h`} />
      <text x={78} y={164} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 11, letterSpacing: "0.12em" }}>CONSIDERED</text>
      <text x={280} y={164} textAnchor="middle" className="fill-primary" style={{ fontSize: 11, letterSpacing: "0.12em" }}>CHOSEN</text>
    </svg>
  );
}

/** One side of a decision: the considered layout (grey) or the chosen one (with its blue focus). */
export function DecisionSketch({ seed, chosen }: { seed: number; chosen: boolean }) {
  const id = uid();
  return (
    <svg viewBox="-2 -2 152 144" className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs><Hatch id={`${id}h`} gap={7} /></defs>
      <Wire v={seed % 4} chosen={chosen} x={0} hid={`${id}h`} />
    </svg>
  );
}

/* ---------- Build stack: layers as stacked planes, the top one live ---------- */

export function StackArt({ layers }: { layers: number }) {
  const n = Math.max(2, Math.min(layers, 5));
  const W = 300, H = 60 + n * 46;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" fill="none" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => {
        const y = 30 + (n - 1 - i) * 46;
        const top = i === n - 1;
        return (
          <g key={i}>
            <path d={`M150 ${y}L270 ${y + 34}L150 ${y + 68}L30 ${y + 34}Z`} className={top ? "fill-primary" : "fill-background stroke-muted-foreground"} strokeOpacity="0.6" strokeWidth="1.25" />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- Placeholder for screens not yet published: a wireframe, never an empty box ---------- */

export function ScreenPlaceholder({ category, seed, label = "Screens available on request" }: { category: Category; seed: number; label?: string }) {
  const id = uid();
  const v = seed % 3;
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(225_20%_96%)]">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <defs><Hatch id={`${id}h`} gap={8} /><Shadow id={`${id}s`} /></defs>
        {category === "Mobile apps" ? (
          <>
            {[0, 1].map((k) => (
              <g key={k} transform={`translate(${k === 0 ? 118 : 214} ${k === 0 ? 34 : 54})`}>
                <rect width={86} height={180} rx={14} className="fill-background stroke-border" filter={`url(#${id}s)`} />
                <rect x={30} y={8} width={26} height={5} rx={2.5} className="fill-border" />
                <rect x={10} y={24} width={66} height={k === 0 ? 50 : 36} fill={`url(#${id}h)`} className="stroke-muted-foreground" strokeOpacity="0.4" />
                {[0, 1, 2].map((r) => <rect key={r} x={10} y={(k === 0 ? 84 : 70) + r * 22} width={r === v % 3 ? 66 : 48} height={12} className={r === v % 3 && k === 1 ? "fill-primary" : "fill-border"} />)}
                <rect x={10} y={156} width={66} height={14} className={k === 0 ? "fill-primary" : "fill-border"} />
              </g>
            ))}
          </>
        ) : category === "Websites" ? (
          <g transform="translate(60 30)">
            <rect width={280} height={240} className="fill-background stroke-border" filter={`url(#${id}s)`} />
            <path d="M0 22h280" className="stroke-border" />
            <rect x={16} y={40} width={130} height={14} className="fill-foreground" fillOpacity="0.75" />
            <rect x={16} y={62} width={100} height={14} className="fill-foreground" fillOpacity="0.75" />
            <rect x={16} y={86} width={110} height={6} className="fill-border" />
            <rect x={16} y={106} width={60} height={20} className="fill-primary" />
            <rect x={160} y={40} width={104} height={86} fill={`url(#${id}h)`} className="stroke-muted-foreground" strokeOpacity="0.4" />
            {[0, 1, 2].map((c) => <rect key={c} x={16 + c * 88} y={146} width={78} height={72} className="stroke-border" />)}
          </g>
        ) : (
          <g transform="translate(40 34)">
            <rect width={320} height={232} className="fill-background stroke-border" filter={`url(#${id}s)`} />
            <path d="M0 22h320M70 22v210" className="stroke-border" />
            {[0, 1, 2, 3].map((r) => <rect key={r} x={12} y={36 + r * 20} width={r === 0 ? 46 : 36} height={8} className={r === 0 ? "fill-primary" : "fill-border"} />)}
            {[0, 1, 2].map((c) => <rect key={c} x={84 + c * 78} y={36} width={68} height={40} className="stroke-border" />)}
            <rect x={84} y={88} width={224} height={84} fill={`url(#${id}h)`} className="stroke-muted-foreground" strokeOpacity="0.4" />
            <path d={v === 0 ? "M94 160l40-30 30 14 40-36 34 18 60-24" : v === 1 ? "M94 150l50-10 40 12 50-40 74 20" : "M94 164l30-40 40 22 44-34 40 10 46-22"} className="stroke-primary" strokeWidth="1.75" />
            {[0, 1, 2].map((r) => <rect key={r} x={84} y={184 + r * 14} width={224 - r * 40} height={6} className="fill-border" />)}
          </g>
        )}
      </svg>
      <span className="absolute bottom-3 left-3 bg-background/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{label}</span>
    </div>
  );
}

/* ---------- Card thumbnail for projects without screens ---------- */

export function CoverArt({ icon, slug }: { icon: IconKey; slug: string }) {
  const id = uid();
  const s = seedOf(slug);
  const shape = (s >> 2) % 3;
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(225_20%_96%)]">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" fill="none" aria-hidden="true">
        <defs><Hatch id={`${id}h`} /><Shadow id={`${id}s`} /></defs>
        <circle cx={s % 2 ? 140 : 260} cy={110} r={86} className="stroke-muted-foreground" strokeOpacity="0.4" strokeWidth="1.25" />
        <rect x={s % 2 ? 196 : 104} y={136} width={110} height={100} fill={`url(#${id}h)`} className="stroke-muted-foreground" strokeOpacity="0.4" strokeWidth="1.25" />
        {shape === 0 && <path d={`M${s % 2 ? 306 : 214} 236h-64a64 64 0 0 1 64-64z`} className="fill-primary" />}
        {shape === 1 && <path d={`M${s % 2 ? 242 : 150} 236a32 32 0 0 1 64 0z`} className="fill-primary" />}
        {shape === 2 && <rect x={s % 2 ? 262 : 170} y={192} width={44} height={44} className="fill-primary" />}
        <rect x={152} y={82} width={96} height={96} className="fill-background stroke-border" filter={`url(#${id}s)`} />
        <g transform="translate(170 100) scale(2.5)" className="stroke-foreground" strokeWidth={0.6} strokeLinejoin="round" strokeLinecap="round">
          <GlyphPaths icon={icon} />
        </g>
      </svg>
    </div>
  );
}
