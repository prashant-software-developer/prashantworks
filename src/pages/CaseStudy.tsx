import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DecisionSketch, HeroScene, JourneyFlow, seedOf, StackArt } from "../components/CaseArt";
import { GlyphTile } from "../components/Glyphs";
import { Closing } from "../components/Layout";
import { Lightbox } from "../components/Lightbox";
import { imgSrc, Shot } from "../components/Shot";
import { useTitle } from "../components/useTitle";
import { caseContent } from "../data/cases";
import type { CaseContent, Chapter, Decision, IconKey, Project } from "../data/cases/types";
import { projectBySlug, projects } from "../data/projects";
import NotFound from "./NotFound";
import { kindLabel, ProjectCard } from "../components/ProjectCard";


const pad = (n: number) => String(n).padStart(2, "0");
/** One column per item on wide screens, so a row never ends with a lone card. */
const COLS: Record<number, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };
const STEP_ICONS: IconKey[] = ["search", "map", "layout", "upload"];

function Head({ n, eyebrow, title, aside }: { n: number; eyebrow: string; title: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-20">
      <div className="lg:col-span-7">
        <p className="eyebrow flex items-center gap-3"><span className="text-primary">{pad(n)}</span><span className="h-px w-8 bg-border" />{eyebrow}</p>
        <h2 className="h-section mt-6">{title}</h2>
      </div>
      {aside && <div className="max-w-md text-body-lg text-muted-foreground lg:col-span-5 lg:self-end">{aside}</div>}
    </div>
  );
}

function DecisionBlock({ d, i, seed }: { d: Decision; i: number; seed: number }) {
  return (
    <article className="grid gap-10 border-t py-14 lg:grid-cols-12 lg:gap-x-20 lg:py-20">
      <div className="lg:col-span-4">
        <p className="eyebrow text-primary">Decision {pad(i + 1)}</p>
        <h3 className="mt-4 text-2xl font-light tracking-tight md:text-3xl">{d.title}</h3>
        <p className="mt-5 text-muted-foreground">{d.problem}</p>
      </div>
      <div className="lg:col-span-8">
        <div className="relative grid gap-10 sm:grid-cols-2 sm:gap-14">
          <div className="border-t pt-6">
            <div className="bg-[hsl(225_20%_97.5%)] px-10 py-8"><div className="mx-auto max-w-[10rem] opacity-70"><DecisionSketch seed={seed + i} chosen={false} /></div></div>
            <p className="eyebrow mt-6 flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg>
              Considered
            </p>
            <p className="mt-3 text-muted-foreground">{d.alt}</p>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <div className="bg-[hsl(225_20%_97.5%)] px-10 py-8"><div className="mx-auto max-w-[10rem]"><DecisionSketch seed={seed + i} chosen /></div></div>
            <p className="eyebrow mt-6 flex items-center gap-2 text-primary">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" /></svg>
              Chosen
            </p>
            <p className="mt-3">{d.choice}</p>
          </div>
        </div>
        <div className="mt-10 flex gap-4">
          <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7.5 15h5M8.5 17.5h3M10 2.5a5 5 0 00-3 9c.6.5 1 1.2 1 2V14h4v-.5c0-.8.4-1.5 1-2a5 5 0 00-3-9z" />
          </svg>
          <div>
            <p className="eyebrow">Why it works</p>
            <p className="mt-2 text-body-lg">{d.why}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChapterBlock({ c, i, open }: { c: Chapter; i: number; open: (key: string) => void }) {
  const imgs = c.images ?? [];
  return (
    <article className="grid items-start gap-10 border-t py-16 md:py-20 lg:grid-cols-12 lg:gap-x-16">
      <div className="lg:col-span-5">
        <p className="text-4xl font-extralight leading-none tracking-tight text-primary" aria-hidden="true">{pad(i + 1)}</p>
        <p className="eyebrow mt-8">{c.kicker}</p>
        <h3 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">{c.title}</h3>
        <p className="mt-5 text-muted-foreground">{c.problem}</p>
        {c.thinking.length > 0 && (
          <details className="group/d mt-8 border-t">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-small uppercase tracking-widest text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden">
              How I approached it
              <span className="text-lg leading-none transition-transform group-open/d:rotate-45" aria-hidden="true">+</span>
            </summary>
            <ul className="space-y-4 pb-2">
              {c.thinking.map((t, j) => (
                <li key={j} className="flex gap-4 text-muted-foreground">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
      {imgs.length > 0 && (
        <div className="lg:col-span-7">
          <button className="group block w-full cursor-zoom-in" onClick={() => open(imgs[0])} aria-label={`Open ${c.title} screens`}>
            <Shot id={imgs[0]} alt={`${c.title} screen`} mode="full" sizes="(min-width: 1024px) 55vw, 90vw" />
          </button>
          {imgs.length > 1 && (
            <button className="text-link mt-5 text-muted-foreground hover:text-foreground" onClick={() => open(imgs[0])}>
              View all {imgs.length} screens
            </button>
          )}
        </div>
      )}
    </article>
  );
}

function StructureTree({ s }: { s: NonNullable<CaseContent["structure"]> }) {
  return (
    <div className={`grid border-t sm:grid-cols-2 ${s.groups.length >= 5 ? "lg:grid-cols-5" : s.groups.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {s.groups.map((g, i) => (
        <div key={g.name} className={`border-b py-8 lg:border-b-0 lg:py-10 ${i % 2 ? "sm:border-l sm:pl-8" : "sm:pr-8"} ${i % Math.min(s.groups.length, 5) ? "lg:border-l lg:pl-8" : "lg:border-l-0 lg:pl-0"}`}>
          <p className={`eyebrow ${i === 0 ? "text-primary" : ""}`}>{g.name}</p>
          <ul className="mt-6 space-y-3">
            {g.items.map((it) => <li key={it} className="text-body-lg">{it}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudy({ slug: fixed }: { slug?: string }) {
  const params = useParams();
  const slug = fixed ?? params.slug ?? "";
  const p = projectBySlug(slug);
  const c = caseContent[slug];
  useTitle(c?.seo.title ?? p?.title ?? "Not found", c?.seo.description);
  const gallery = useMemo(() => {
    if (!p || !c) return [] as string[];
    const fromChapters = c.chapters?.flatMap((ch) => ch.images ?? []) ?? [];
    return fromChapters.length ? fromChapters : p.screens;
  }, [p, c]);
  const [open, setOpen] = useState<number | null>(null);
  if (!p || !c) return <NotFound />;

  const seed = seedOf(p.slug);
  const related = projects.filter((x) => x.slug !== p.slug && x.kind !== "inhouse" && x.category === p.category).sort((a, b) => (seedOf(a.slug + p.slug) % 97) - (seedOf(b.slug + p.slug) % 97)).slice(0, 3);
  const chips = [...p.platforms, ...p.scope].slice(0, 3);
  const openKey = (k: string) => setOpen(Math.max(0, gallery.indexOf(k)));
  // Screens worth a section: everything except the image already shown in the hero.
  const extra = p.screens.filter((k) => k !== p.cover);
  const shown = extra.slice(0, extra.length >= 5 ? 5 : extra.length);
  let n = 0;
  const topic = p.kind === "inhouse" ? "hire" : p.category === "AI products" ? "product" : "product";

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-2">
            <Link to="/work" className="inline-flex items-center gap-2 hover:text-foreground">Work</Link>
            <span>/</span>
            <span className="text-foreground">{p.title}</span>
          </nav>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-20">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-2.5">
                <span className={`h-2 w-2 ${p.kind === "inhouse" ? "border border-primary" : "bg-primary"}`} />
                {kindLabel(p)} · {p.category}{p.status ? ` · ${p.status}` : ""}
              </p>
              <h1 className="display mt-6">{p.title}</h1>
              <p className="mt-6 max-w-2xl text-xl font-light leading-snug md:text-2xl">{c.tagline}</p>
            </div>
            <p className="max-w-md text-muted-foreground lg:col-span-5">{c.summary}</p>
          </div>

          <div className="mt-14 md:mt-20">
            {p.cover ? (
              <Shot id={p.cover} alt={`${p.title}: ${p.short}`} mode="full" eager className="md:aspect-[16/10]" sizes="90vw" />
            ) : (
              <div className="bg-[hsl(225_20%_97%)] p-4 md:p-8">
                <HeroScene icon={p.icon} slug={p.slug} chips={chips} />
              </div>
            )}
          </div>

          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Role", v: p.role },
              { k: "Type", v: p.kind === "inhouse" ? "In-house, full-time" : p.kind === "own" ? "My own product" : "Freelance" },
              { k: "Platforms", v: p.platforms.join(", ") },
              { k: "Scope", v: p.scope.slice(0, 4).join(", ") },
            ].map((f) => (
              <div key={f.k} className="border-t pt-5">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-2">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problem and audience */}
      <section className="section-y border-t">
        <div className="wrap">
          <Head n={++n} eyebrow="The problem" title={<>What needed <span className="text-primary">solving</span></>} />
          <p className="mt-12 max-w-3xl text-lg font-light leading-relaxed md:text-xl md:leading-relaxed">{c.context.problem}</p>

          <div className="mt-14 md:mt-16">
            <p className="eyebrow">Who it’s for</p>
            <ul className={`mt-5 grid gap-x-10 gap-y-8 border-t pt-8 ${c.context.audience.length === 3 ? "sm:grid-cols-3" : `sm:grid-cols-2 ${COLS[Math.min(c.context.audience.length, 5)]}`}`}>
              {c.context.audience.map((a) => (
                <li key={a.who}>
                  <p className="text-title">{a.who}</p>
                  <p className="mt-2 text-muted-foreground">{a.need}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach: hidden for now, the decisions tell this story with less text */}
      {false && (
      <section className="section-y border-t bg-[hsl(225_20%_98.5%)]">
        <div className="wrap">
          <Head n={++n} eyebrow={p.kind === "inhouse" ? "How I work in the team" : "How I worked"} title={<>From brief to <span className="text-primary">hand-off</span></>} />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <span className="absolute left-6 right-[12%] top-6 hidden h-px bg-border lg:block" aria-hidden="true" />
            {c.approach.map((s, i) => (
              <li key={s.title} className="relative">
                <GlyphTile icon={STEP_ICONS[i % 4]} tone={i === c.approach.length - 1 ? "solid" : "plain"} />
                <p className="eyebrow mt-6 text-primary">Step {pad(i + 1)}</p>
                <h3 className="mt-3 text-title">{s.title}</h3>
                <p className="mt-3 text-small text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      )}

      {/* Main flow (chapter pages walk through the product instead) */}
      {!c.chapters && (
      <section className="section-y border-t">
        <div className="wrap">
          <Head n={++n} eyebrow="The main flow" title={c.journey.title} aside="The moment in blue is the one the whole design is built around." />
          <div className="mt-14 hidden bg-[hsl(225_20%_97%)] px-6 py-10 md:block">
            <JourneyFlow steps={c.journey.steps} keyIndex={c.journey.key} />
          </div>
          <ol className="mt-10 border-l md:hidden">
            {c.journey.steps.map((s, i) => (
              <li key={s} className="relative pb-6 pl-8 last:pb-0">
                <span className={`absolute -left-[7px] top-1 h-3.5 w-3.5 ${i === c.journey.key ? "bg-primary" : "border border-muted-foreground bg-background"}`} />
                <p className="eyebrow">{pad(i + 1)}</p>
                <p className={`mt-1 ${i === c.journey.key ? "text-primary" : ""}`}>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      )}

      {/* Structure */}
      {c.structure && (
        <section className="section-y border-t">
          <div className="wrap">
            <Head n={++n} eyebrow="Structure" title={<>How {c.structure.root} is <span className="text-primary">organised</span></>} aside="Everything has one home. Getting this right first keeps every screen simpler." />
            <div className="mt-14 md:mt-20">
              <StructureTree s={c.structure} />
            </div>
          </div>
        </section>
      )}

      {/* Chapters (in-house) */}
      {c.chapters && (
        <section className="section-y border-t">
          <div className="wrap">
            <Head n={++n} eyebrow="Inside the work" title={<>The thinking, <span className="text-primary">feature by feature</span></>} aside="Each part of the product, the problem behind it and how I approached it." />
            <div className="mt-14">
              {c.chapters.map((ch, i) => <ChapterBlock key={ch.title} c={ch} i={i} open={openKey} />)}
            </div>
          </div>
        </section>
      )}

      {/* Decisions */}
      <section className="section-y border-t">
        <div className="wrap">
          <Head n={++n} eyebrow="Key decisions" title={<>Choices that <span className="text-primary">shaped it</span></>} aside="What I considered, what I chose, and why." />
          <div className="mt-14">
            {c.decisions.slice(0, 3).map((d, i) => <DecisionBlock key={d.title} d={d} i={i} seed={seed} />)}
          </div>
        </div>
      </section>

      {/* Features (the chapters already cover these) */}
      {!c.chapters && (
      <section className="section-y border-t bg-[hsl(225_20%_98.5%)]">
        <div className="wrap">
          <Head n={++n} eyebrow="What’s inside" title={<>Key <span className="text-primary">features</span></>} />
          <div className="mt-14 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f, i) => (
              // With an odd count the first feature spans two columns, so every row is full.
              <div key={f.title} className={`bg-background p-8 ${i === 0 && c.features.length % 2 === 1 ? "sm:col-span-2" : ""}`}>
                <GlyphTile icon={f.icon} tone={i === 0 ? "solid" : "soft"} />
                <h3 className="mt-6 text-title">{f.title}</h3>
                <p className="mt-2 text-small text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Screens (projects without chapters): only screens beyond the hero image, laid out for how many there are */}
      {!c.chapters && extra.length > 0 && (
        <section className="section-y border-t">
          <div className="wrap">
            <Head n={++n} eyebrow="Screens" title={<>Selected <span className="text-primary">screens</span></>} aside="Tap any screen to open it full size." />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-10">
              {shown.map((k, j) => {
                const wide = shown.length === 1 || (shown.length !== 2 && shown.length !== 4 && j === 0);
                return (
                  <button key={k} className={`group block cursor-zoom-in ${wide ? "md:col-span-2" : ""}`} onClick={() => openKey(k)} aria-label={`Open ${p.title} screen`}>
                    <Shot id={k} alt={`${p.title} screen`} mode="full" className={wide ? "md:aspect-[16/9]" : ""} sizes={wide ? "90vw" : "(min-width: 768px) 45vw, 90vw"} />
                  </button>
                );
              })}
            </div>
            {extra.length > shown.length && (
              <button className="text-link mt-8 text-muted-foreground hover:text-foreground" onClick={() => openKey(extra[0])}>
                View all {extra.length} screens
              </button>
            )}
          </div>
        </section>
      )}

      {/* Build */}
      {c.system && (
        <section className="section-y border-t">
          <div className="wrap">
            <Head n={++n} eyebrow="How it was built" title={<>Designed <span className="text-primary">and built</span></>} aside="I designed it and wrote the code, so the design survived contact with reality." />
            <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-x-20">
              <div className="mx-auto w-full max-w-sm lg:col-span-4">
                <StackArt layers={c.system.length} />
              </div>
              <div className="border-t lg:col-span-8">
                {c.system.map((l, i) => (
                  <div key={l.name} className="grid gap-3 border-b py-7 md:grid-cols-[12rem_1fr] md:gap-10">
                    <p className={i === 0 ? "text-primary" : ""}>{l.name}</p>
                    <ul className="flex flex-wrap gap-2">{l.items.map((x) => <li key={x} className="chip">{x}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Outcome */}
      <section className="section-y border-t">
        <div className="wrap">
          <Head n={++n} eyebrow="Outcome" title={<>What was <span className="text-primary">delivered</span></>} />
          <ul className={`mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 ${COLS[Math.min(c.outcome.length, 5)]}`}>
            {c.outcome.map((o) => (
              <li key={o} className="border-t pt-5">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" /></svg>
                <p className="mt-4">{o}</p>
              </li>
            ))}
          </ul>

          {c.learned.length > 0 && (
            <div className="mt-20 md:mt-28">
              <p className="eyebrow">What I learned</p>
              <div className={`mt-6 grid gap-x-10 gap-y-10 ${c.learned.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                {c.learned.map((l, i) => (
                  <div key={l} className="border-t pt-6">
                    <p className="eyebrow text-primary">{pad(i + 1)}</p>
                    <p className="mt-4 text-xl font-light leading-snug md:text-2xl">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-y border-t">
          <div className="wrap">
            <div className="flex items-end justify-between gap-6">
              <h2 className="h-section">More <span className="text-primary">work</span></h2>
              <Link to="/work" className="text-link text-muted-foreground hover:text-foreground">All work</Link>
            </div>
            <div className="mt-14 grid gap-x-10 gap-y-20 lg:gap-x-14 lg:gap-y-24 md:grid-cols-3">
              {related.map((r) => <ProjectCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}

      <Closing topic={topic} />
      <Lightbox srcs={gallery.map((k) => imgSrc(k, 2400))} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  );
}
