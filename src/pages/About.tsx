import { Link } from "react-router-dom";
import { CompanyIcon } from "../components/CompanyIcon";
import { GlyphTile } from "../components/Glyphs";
import type { IconKey } from "../data/cases/types";
import { BookButton, Closing, SectionHead } from "../components/Layout";
import { Shot } from "../components/Shot";
import { useTitle } from "../components/useTitle";
import { contact, experience, skills } from "../data/site";

const SKILL_ICONS: IconKey[] = ["tasks", "shield", "agent", "code", "layout"];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/* Things built on my own, each with its screen (Picstone has none saved, so it gets a drawing). */
const projects = [
  { name: "QriosX", url: "https://www.qriosx.com/", image: "14ea830a66", text: "AI coaching with grit-based challenges, journaling and learning dashboards.", tag: "Design + build" },
  { name: "LinkSaver", url: "https://www.linksaver.in/", image: "4619e38d1d", text: "A resource manager in React and Go, with nested folders and a Chrome extension.", tag: "Design + build" },
  { name: "Cognize", url: "http://cognize.live/", image: "edfbf3a9f7", text: "A lightweight lead board with activity tracking and auto summaries.", tag: "Design + build" },
  { name: "Picstone", url: "https://picstone-generative-ai.vercel.app/", image: "", text: "AI story generator: 107K+ views, 11K+ users. Top 5 at a Gen-AI hackathon.", tag: "Hackathon" },
];

/** The hero drawing: me in the middle, the places I've built around me. */
function Orbit() {
  const tiles = [
    { c: "FynoLabs", pos: "left-[6%] top-[14%]" },
    { c: "Ringover", pos: "right-[4%] top-[30%]" },
    { c: "Wispel", pos: "left-[14%] bottom-[10%]" },
    { c: "Expert data platforms", pos: "right-[16%] bottom-[6%]" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <circle cx="200" cy="200" r="120" className="stroke-border" strokeWidth="1" />
        <g style={{ transformOrigin: "200px 200px", animation: "spin 80s linear infinite" }}>
          <circle cx="200" cy="200" r="168" className="stroke-muted-foreground" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 7" />
          <rect x="195" y="27" width="10" height="10" className="fill-primary" />
        </g>
        <path d="M200 200L62 92M200 200L362 152M200 200L104 336M200 200L310 352" className="stroke-border" strokeWidth="1" strokeDasharray="3 5" />
      </svg>
      <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border bg-[hsl(225_20%_96%)]">
        <img src="/img/9b8afe6b00.webp" alt="Prashant Kumar Singh" className="h-full w-full object-cover" />
      </div>
      {tiles.map((t) => (
        <div key={t.c} className={`absolute ${t.pos}`}>
          <CompanyIcon company={t.c} size="h-12 w-12 md:h-14 md:w-14" />
        </div>
      ))}
    </div>
  );
}

function PicstoneArt() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(225_20%_96%)]">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <rect x="70" y="60" width="150" height="180" className="fill-background stroke-border" />
        <path d="M90 200l30-36 22 22 18-14 40 28" className="stroke-muted-foreground" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="180" cy="110" r="14" className="stroke-muted-foreground" strokeOpacity="0.6" strokeWidth="1.5" />
        <path d="M230 150h40" className="stroke-primary" strokeWidth="1.25" strokeDasharray="3 4" />
        <rect x="280" y="80" width="70" height="140" className="fill-primary" />
        <path d="M292 108h46M292 124h40M292 140h46M292 156h30" className="stroke-primary-foreground" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function About() {
  useTitle("About", "Founder of FynoLabs and product engineer at Ringover. Experience, projects and skills.");
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-6">
            <p className="eyebrow">About</p>
            <h1 className="display mt-8">
              Engineer, designer, <span className="text-primary">lead.</span>
            </h1>
            <p className="mt-8 max-w-lg text-body-lg text-muted-foreground lg:text-xl lg:leading-relaxed">
              I run AI training delivery at FynoLabs and build conversational AI at Ringover. Three years of shipping products, from first sketch to production.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookButton topic="hire" label="Book an intro call" />
              <a href={contact.cv} {...ext} className="text-link text-muted-foreground hover:text-foreground">Download CV</a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Orbit />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Experience" heading={<>Where I've <span className="text-primary">worked</span></>} aside="Remote, with teams in the US, Europe, Hong Kong and India." />
          <ol className="relative mt-20 md:mt-28 lg:mt-32">
            <span aria-hidden="true" className="absolute bottom-8 left-7 top-8 hidden w-px bg-border md:block" />
            {experience.map((e) => (
              <li key={e.company} className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[3.5rem_1fr] md:gap-x-10">
                <CompanyIcon company={e.company} />
                <div className="grid gap-6 border-b pb-14 lg:grid-cols-12 lg:gap-x-20 [li:last-child_&]:border-b-0 [li:last-child_&]:pb-0">
                  <div className="lg:col-span-4">
                    <p className="eyebrow">{e.period}</p>
                    <h3 className="mt-3 text-2xl font-light tracking-tight">{e.company}</h3>
                    <p className="mt-1 text-muted-foreground">{e.role}</p>
                    <p className="mt-1 text-small text-muted-foreground">{e.note}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="space-y-3 text-muted-foreground">
                      {e.points.slice(0, 2).map((p) => (
                        <li key={p} className="flex gap-4">
                          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {e.caseSlug && (
                      <Link to={`/work/${e.caseSlug}`} className="text-link mt-6 text-primary">Read the case study</Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Own projects */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Side projects" heading={<>Built on my <span className="text-primary">own</span></>} aside="Products I designed and shipped myself, end to end." />
          <div className="mt-20 grid gap-x-10 gap-y-20 lg:gap-x-14 lg:gap-y-24 sm:grid-cols-2 md:mt-28 lg:mt-32 lg:grid-cols-4">
            {projects.map((p) => (
              <a key={p.name} href={p.url} {...ext} className="group block">
                {p.image ? <Shot id={p.image} alt={`${p.name} screen`} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw" /> : <PicstoneArt />}
                <p className="eyebrow mt-6">{p.tag}</p>
                <p className="mt-3 flex items-center justify-between text-title group-hover:text-primary">
                  {p.name}
                </p>
                <p className="mt-2 text-small text-muted-foreground">{p.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + education */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Skills" heading={<>What I <span className="text-primary">bring</span></>} />
          <div className="mt-16 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-5 md:mt-20">
            {skills.map((s, i) => (
              <div key={s.title} className="bg-background p-8">
                <GlyphTile icon={SKILL_ICONS[i % SKILL_ICONS.length]} tone={i === 0 ? "solid" : "soft"} />
                <h3 className="mt-6 text-title">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {s.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t pt-10 md:grid-cols-2 md:gap-x-20">
            <div className="flex gap-5">
              <CompanyIcon company="IIIT Sonepat" />
              <div>
                <p className="eyebrow">Education</p>
                <p className="mt-3 text-title">B.Tech, Computer Science</p>
                <p className="mt-1 text-muted-foreground">IIIT Sonepat · 2021 – 2025 · 8.5 CGPA</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">Languages</p>
              <p className="mt-3 text-title">English and Hindi</p>
              <p className="mt-1 text-muted-foreground">Professional English · native Hindi</p>
            </div>
          </div>
        </div>
      </section>

      <Closing
        topic="hire"
        heading={<>Hiring for an AI team?<br /><span className="text-primary">Let's talk about the role.</span></>}
        body="Project lead or product engineer, remote and open to contract."
      />
    </>
  );
}
