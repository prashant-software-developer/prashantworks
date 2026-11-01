import { useId, type CSSProperties, type ReactNode, type SVGProps } from "react";

/**
 * "Shapes": the illustration language of this site.
 * Borrowed from fynolabs.si: hairline strokes, light mode, one blue, square nodes.
 * Different concept: instead of flows and gates, each drawing is a small composition of
 * primitives on a modular grid. Outline = in progress, hatched = being designed,
 * solid blue = done / the thing that matters. Motion is slow and only runs when allowed.
 */

const line = "stroke-muted-foreground";
const faint = "stroke-border";
const blue = "stroke-primary";

const Svg = ({ viewBox, className = "", children }: { viewBox: string; className?: string; children: ReactNode }) => (
  <svg viewBox={viewBox} className={`block ${className}`} fill="none" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

/** Slow rotation around a point (SVG user units). */
const spin = (cx: number, cy: number, secs = 60, reverse = false): CSSProperties => ({
  transformOrigin: `${cx}px ${cy}px`,
  transformBox: "view-box",
  animation: `spin ${secs}s linear infinite${reverse ? " reverse" : ""}`,
});

const Sq = ({ x, y, s, className, ...rest }: { x: number; y: number; s: number; className: string } & Omit<SVGProps<SVGRectElement>, "x" | "y">) => (
  <rect x={x - s / 2} y={y - s / 2} width={s} height={s} className={className} {...rest} />
);

/** Diagonal hatching inside a rectangle. */
const Hatch = ({ x, y, w, h, gap = 10, className = line, opacity = 0.35 }: { x: number; y: number; w: number; h: number; gap?: number; className?: string; opacity?: number }) => {
  const id = `h${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const lines: string[] = [];
  for (let k = -h; k < w; k += gap) lines.push(`M${x + k} ${y + h}L${x + k + h} ${y}`);
  return (
    <g>
      <clipPath id={id}>
        <rect x={x} y={y} width={w} height={h} />
      </clipPath>
      <path d={lines.join("")} clipPath={`url(#${id})`} className={className} strokeOpacity={opacity} strokeWidth="1" />
    </g>
  );
};

/** A panel with a faint dot grid that holds a drawing. */
export const Blueprint = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
    <div aria-hidden="true" className="blueprint-grid opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex h-full w-full items-center justify-center">{children}</div>
  </div>
);

/* ---------- Hero: idea (circle) → design (hatched square) → shipped (solid blue) ---------- */

export const HeroArt = ({ className }: { className?: string }) => {
  const id = `m${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const grid: string[] = [];
  for (let i = 0; i <= 480; i += 60) grid.push(`M${i} 0V480M0 ${i}H480`);
  return (
    <Svg viewBox="0 0 480 480" className={className}>
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="55%">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id={id}>
          <rect width="480" height="480" fill={`url(#${id}g)`} />
        </mask>
      </defs>
      <path d={grid.join("")} className={faint} strokeWidth="1" mask={`url(#${id})`} />

      {/* 01 idea */}
      <circle cx="170" cy="170" r="110" className={line} strokeOpacity="0.55" strokeWidth="1.25" />
      <g style={spin(170, 170, 50)}>
        <circle cx="170" cy="170" r="140" className={line} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 7" />
        <Sq x={170} y={30} s={10} className={`${blue} fill-background`} strokeWidth="1.25" />
      </g>
      <circle cx="170" cy="170" r="4" className="fill-muted-foreground" fillOpacity="0.6" />

      {/* 02 design */}
      <rect x="240" y="240" width="160" height="160" className={line} strokeOpacity="0.55" strokeWidth="1.25" />
      <Hatch x={240} y={240} w={160} h={160} gap={12} />

      {/* 03 shipped */}
      <path d="M300 420A120 120 0 0 1 420 300V420Z" className="fill-primary" />

      {/* the line that ties it together */}
      <path d="M170 170L420 420" className={blue} strokeWidth="1" strokeDasharray="1" pathLength={1} style={{ animation: "draw 1.8s cubic-bezier(0.65,0,0.35,1) both" }} />

      {/* small marks */}
      <Sq x={420} y={120} s={14} className="fill-primary" />
      <Sq x={420} y={120} s={34} className={blue} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M60 400h60M60 412h40" className={line} strokeOpacity="0.45" strokeWidth="1.5" />

      <g className="hidden fill-muted-foreground sm:block" style={{ fontSize: 11, letterSpacing: "0.12em" }}>
        <text x="62" y="58">01 IDEA</text>
        <text x="248" y="228">02 DESIGN</text>
        <text x="300" y="448">03 SHIP</text>
      </g>
    </Svg>
  );
};

/* ---------- Path cards (320 × 200) ---------- */

/** Build a product: blocks stepping up, the last one shipped. */
export const ProductArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    <path d="M40 176H280" className={faint} strokeWidth="1" />
    <rect x="56" y="124" width="48" height="48" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <rect x="108" y="92" width="48" height="48" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <Hatch x={108} y={92} w={48} h={48} gap={8} />
    <rect x="160" y="60" width="48" height="48" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <Hatch x={160} y={60} w={48} h={48} gap={8} />
    <rect x="212" y="28" width="48" height="48" className="fill-primary" />
    <path d="M56 172L260 28" className={blue} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 5" />
  </Svg>
);

/** AI training data: a field of data points; a lens picks out the good ones. */
export const DataArt = ({ className }: { className?: string }) => {
  const cx = 196, cy = 100, r = 50;
  const pts: { x: number; y: number; inside: boolean }[] = [];
  for (let i = 0; i < 11; i++)
    for (let j = 0; j < 6; j++) {
      const x = 40 + i * 24, y = 40 + j * 24;
      pts.push({ x, y, inside: (x - cx) ** 2 + (y - cy) ** 2 < (r - 6) ** 2 });
    }
  return (
    <Svg viewBox="0 0 320 200" className={className}>
      {pts.map((p) => (
        <Sq key={`${p.x}-${p.y}`} x={p.x} y={p.y} s={p.inside ? 6 : 4} className={p.inside ? "fill-primary" : "fill-muted-foreground"} fillOpacity={p.inside ? 1 : 0.28} />
      ))}
      <circle cx={cx} cy={cy} r={r} className={blue} strokeWidth="1.25" />
      <circle cx={cx} cy={cy} r={r + 14} className={blue} strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 6" style={spin(cx, cy, 40)} />
    </Svg>
  );
};

/** A lead at the centre, reviewers around, contributors on the outer ring. */
export const TeamArt = ({ className }: { className?: string }) => {
  const ring = (n: number, rad: number, off = 0) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2 + off;
      return { x: 160 + Math.cos(a) * rad, y: 100 + Math.sin(a) * rad };
    });
  return (
    <Svg viewBox="0 0 320 200" className={className}>
      <circle cx="160" cy="100" r="44" className={blue} strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="160" cy="100" r="82" className={line} strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 6" />
      <g style={spin(160, 100, 90)}>
        {ring(12, 82).map((p, i) => (
          <Sq key={i} x={p.x} y={p.y} s={8} className={`${line} fill-background`} strokeOpacity="0.6" strokeWidth="1.25" />
        ))}
      </g>
      {ring(4, 44, Math.PI / 4).map((p, i) => (
        <Sq key={i} x={p.x} y={p.y} s={10} className={`${blue} fill-background`} strokeWidth="1.25" />
      ))}
      <circle cx="160" cy="100" r="16" className="fill-primary" />
    </Svg>
  );
};
export const LeadArt = TeamArt;

/** AI features: a person and a model overlap; the useful part is where they meet. */
export const ChatArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    <circle cx="130" cy="100" r="62" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <circle cx="190" cy="100" r="62" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <path d="M160 45.7A62 62 0 0 1 160 154.3A62 62 0 0 1 160 45.7Z" className="fill-primary" />
    <Sq x={92} y={100} s={8} className="fill-muted-foreground" fillOpacity="0.5" />
    <path d="M228 92l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" className="fill-muted-foreground" fillOpacity="0.5" />
  </Svg>
);

/** Support: three layers kept in line; the live one is blue. */
export const StackArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    <rect x="60" y="44" width="170" height="26" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <rect x="80" y="87" width="170" height="26" className="fill-primary" />
    <rect x="100" y="130" width="170" height="26" className={line} strokeOpacity="0.5" strokeWidth="1.25" />
    <Hatch x={100} y={130} w={170} h={26} gap={8} />
    <path d="M60 30V170M280 30V170" className={faint} strokeWidth="1" strokeDasharray="2 5" />
    <circle cx="44" cy="100" r="4" className="fill-muted-foreground" fillOpacity="0.5" />
  </Svg>
);

/** Terminal-Bench: a terminal frame, a prompt, the cursor that passes. */
export const TerminalArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    <rect x="100" y="44" width="136" height="120" className={faint} strokeWidth="1" />
    <rect x="84" y="32" width="136" height="120" className="fill-background stroke-muted-foreground" strokeOpacity="0.55" strokeWidth="1.25" />
    <path d="M104 74l14 12-14 12" className={line} strokeOpacity="0.7" strokeWidth="1.5" />
    <rect x="128" y="82" width="12" height="18" className="fill-primary motion-safe:animate-pulse" />
    <path d="M104 124h80" className={line} strokeOpacity="0.35" strokeWidth="1.5" />
  </Svg>
);

/** SWE-bench: the same file twice; one line moves, and it's the fix. */
export const DiffArt = ({ className }: { className?: string }) => {
  const ys = [44, 68, 92, 116, 140, 164];
  const w = [70, 52, 80, 60, 74, 44];
  return (
    <Svg viewBox="0 0 320 200" className={className}>
      {ys.map((y, i) => (
        <g key={y}>
          <path d={`M48 ${y}h${w[i]}`} className={line} strokeOpacity={i === 2 ? 0.25 : 0.45} strokeWidth="2" strokeDasharray={i === 2 ? "3 4" : undefined} />
          {i === 2 ? (
            <rect x={188} y={y - 6} width={w[i] + 12} height={12} className="fill-primary" />
          ) : (
            <path d={`M188 ${y}h${w[i]}`} className={line} strokeOpacity="0.45" strokeWidth="2" />
          )}
        </g>
      ))}
      <path d="M128 92C150 92 160 92 182 92" className={blue} strokeWidth="1" strokeDasharray="2 4" />
      <path d="M160 30V178" className={faint} strokeWidth="1" />
    </Svg>
  );
};

/** PaperBench: a paper branches into a rubric; one leaf is graded. */
export const PaperArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    <path d="M48 36h64l20 20v108H48z" className={line} strokeOpacity="0.55" strokeWidth="1.25" />
    <path d="M112 36v20h20" className={line} strokeOpacity="0.55" strokeWidth="1.25" />
    <Hatch x={60} y={70} w={60} h={80} gap={10} opacity={0.25} />
    <path d="M132 100h40M172 52v96M172 52h36M172 100h36M172 148h36" className={faint} strokeWidth="1.25" />
    <Sq x={226} y={52} s={20} className={line} strokeOpacity="0.55" strokeWidth="1.25" />
    <Sq x={226} y={100} s={20} className="fill-primary" />
    <Sq x={226} y={148} s={20} className={line} strokeOpacity="0.55" strokeWidth="1.25" />
    <Sq x={262} y={100} s={6} className="fill-primary" />
  </Svg>
);

/** Four review stages: circles that keep fewer points, until one solid result. */
export const ReviewArt = ({ className }: { className?: string }) => {
  const cs = [190, 430, 670, 910];
  const counts = [16, 10, 5, 0];
  const labels = ["01 SCORED TRIAL", "02 PEER REVIEW", "03 CALIBRATION", "04 SIGN-OFF"];
  const pts = (cx: number, n: number) =>
    Array.from({ length: n }, (_, k) => {
      const a = k * 2.399963; // golden angle
      const rr = 18 + Math.sqrt(k / Math.max(n, 1)) * 70;
      return { x: cx + Math.cos(a) * rr, y: 130 + Math.sin(a) * rr };
    });
  return (
    <Svg viewBox="40 0 1020 290" className={className}>
      {cs.map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy={130} r={110} className={i === 3 ? blue : line} strokeOpacity={i === 3 ? 0.7 : 0.4} strokeWidth="1.25" />
          {pts(cx, counts[i]).map((p, k) => (
            <Sq key={k} x={p.x} y={p.y} s={7} className="fill-muted-foreground" fillOpacity={0.45} />
          ))}
          {i < 3 && <Sq x={cx} y={130} s={10} className="fill-primary" />}
          {i === 3 && <Sq x={cx} y={130} s={64} className="fill-primary" />}
          <text x={cx} y={280} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 15, letterSpacing: "0.12em" }}>
            {labels[i]}
          </text>
        </g>
      ))}
    </Svg>
  );
};

/** Booking: a week of slots, one taken. */
export const CallArt = ({ className }: { className?: string }) => (
  <Svg viewBox="0 0 320 200" className={className}>
    {Array.from({ length: 5 }, (_, c) =>
      Array.from({ length: 4 }, (_, r) => {
        const x = 70 + c * 40, y = 40 + r * 36;
        const on = c === 2 && r === 1;
        return on ? (
          <g key={`${c}${r}`}>
            <rect x={x} y={y} width={26} height={26} className="fill-primary" />
            <circle cx={x + 13} cy={y + 13} r={26} className={blue} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 5" style={spin(x + 13, y + 13, 30)} />
          </g>
        ) : (
          <rect key={`${c}${r}`} x={x} y={y} width={26} height={26} className={line} strokeOpacity={r === 3 && c > 2 ? 0.2 : 0.4} strokeWidth="1.25" />
        );
      }),
    )}
  </Svg>
);

/* ---------- Steps: talk → plan → ship, one small scene per step ---------- */

const TalkArt = () => (
  <Svg viewBox="0 0 240 140" className="h-full w-full">
    <rect x={40} y={30} width={96} height={46} className={`${line} fill-background`} strokeOpacity="0.6" strokeWidth="1.25" />
    <path d="M56 76v14l14-14" className={`${line} fill-background`} strokeOpacity="0.6" strokeWidth="1.25" />
    <path d="M54 46h64M54 58h44" className={line} strokeOpacity="0.45" strokeWidth="1.25" />
    <rect x={112} y={62} width={92} height={46} className="fill-background stroke-primary" strokeWidth="1.25" />
    <path d="M188 108v14l-14-14" className="fill-background stroke-primary" strokeWidth="1.25" />
    <rect x={126} y={76} width={52} height={6} className="fill-primary" />
    <rect x={126} y={88} width={34} height={6} className="fill-primary" fillOpacity="0.35" />
  </Svg>
);

const PlanArt = () => (
  <Svg viewBox="0 0 240 140" className="h-full w-full">
    <rect x={62} y={18} width={116} height={74} className={`${line} fill-background`} strokeOpacity="0.6" strokeWidth="1.25" />
    <Hatch x={74} y={30} w={40} h={22} gap={6} />
    <rect x={74} y={30} width={40} height={22} className={line} strokeOpacity="0.45" />
    <path d="M124 34h42M124 44h30M74 64h92M74 76h64" className={line} strokeOpacity="0.45" strokeWidth="1.25" />
    <path d="M40 116h160" className={faint} strokeWidth="1.25" />
    <path d="M40 116h112" className={blue} strokeWidth="1.25" />
    <rect x={36} y={112} width={8} height={8} className="fill-background stroke-primary" strokeWidth="1.25" />
    <rect x={96} y={112} width={8} height={8} className="fill-background stroke-primary" strokeWidth="1.25" />
    <rect x={148} y={110} width={12} height={12} className="fill-primary" />
    <rect x={196} y={112} width={8} height={8} className={`${line} fill-background`} strokeOpacity="0.5" strokeWidth="1.25" />
  </Svg>
);

const ShipArt = () => (
  <Svg viewBox="0 0 240 140" className="h-full w-full">
    <path d="M30 122h180" className={faint} strokeWidth="1.25" />
    <rect x={44} y={86} width={36} height={36} className={`${line} fill-background`} strokeOpacity="0.6" strokeWidth="1.25" />
    <Hatch x={98} y={62} w={36} h={36} gap={6} />
    <rect x={98} y={62} width={36} height={36} className={line} strokeOpacity="0.6" strokeWidth="1.25" />
    <rect x={152} y={30} width={44} height={44} className="fill-primary" />
    <path d="M62 86L116 62M116 62L174 30" className={blue} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 4" />
  </Svg>
);

const STEP_ART = [TalkArt, PlanArt, ShipArt];

/** Three steps as illustrated cards: a scene, when it happens, what it is. */
export const IllustratedSteps = ({ steps }: { steps: { when: string; title: string; text: string }[] }) => (
  <ol className="grid gap-10 md:grid-cols-3 lg:gap-12">
    {steps.map((s, i) => {
      const Art = STEP_ART[Math.min(i, STEP_ART.length - 1)];
      return (
        <li key={s.title}>
          <Blueprint className="h-48 bg-[hsl(225_20%_97.5%)] px-8 py-6 md:h-56">
            <div className="h-full w-full max-w-[16rem]"><Art /></div>
          </Blueprint>
          <p className="eyebrow mt-8 text-primary">{String(i + 1).padStart(2, "0")} · {s.when}</p>
          <h3 className="mt-3 text-2xl font-light tracking-tight">{s.title}</h3>
          <p className="mt-3 max-w-sm text-body-lg text-muted-foreground">{s.text}</p>
        </li>
      );
    })}
  </ol>
);
