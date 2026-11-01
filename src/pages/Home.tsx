import { Link } from "react-router-dom";
import { Blueprint, DataArt, HeroArt, LeadArt, ProductArt, IllustratedSteps } from "../components/Art";
import { BookButton, Closing, Reassure, SectionHead } from "../components/Layout";
import { Glyph } from "../components/Glyphs";
import { useTitle } from "../components/useTitle";
import type { IconKey } from "../data/cases/types";
import { contact, faqs } from "../data/site";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

/*
 * Page plan (who comes here, and what makes them book):
 *  1. Hero: the outcome in five words, one button, the small print that removes risk.
 *  2. Trust: the kinds of teams I build for.
 *  3. Three doors: founders (build), AI teams (data), hiring managers (hire). Each ends in a booking.
 *  4. Proof: numbers from real delivery.
 *  5. Work: four projects, screens do the talking.
 *  6. After you book: what happens, so the call feels safe.
 *  7. Prices up front, so nobody books just to ask.
 *  8. Questions people ask before booking.
 *  9. One last button.
 */

const trust: { label: string; icon: IconKey }[] = [
  { label: "AI startups", icon: "spark" },
  { label: "B2B SaaS teams", icon: "layout" },
  { label: "Design agencies", icon: "users" },
  { label: "Healthcare & education", icon: "health" },
  { label: "Frontier AI labs, via FynoLabs", icon: "agent" },
];

const doors = [
  {
    art: ProductArt,
    who: "Founders & product teams",
    title: "Build a product",
    body: "MVPs, SaaS and mobile apps, designed and coded by one person. No handoffs.",
    price: "Projects from $2,000",
    topic: "product",
    cta: "Book a product call",
    more: { to: "/services", label: "Services & pricing" },
  },
  {
    art: DataArt,
    who: "AI labs & data partners",
    title: "Train your AI model",
    body: "Benchmark-grade coding and evaluation tasks, reviewed in four stages before they ship.",
    price: "Tasks from $30",
    topic: "data",
    cta: "Book a data call",
    more: { to: "/ai-training", label: "How I run AI training" },
  },
  {
    art: LeadArt,
    who: "Hiring managers",
    title: "Hire me for your team",
    body: "Project lead or product engineer for AI products, remote and open to contract.",
    price: "Remote · Available now",
    topic: "hire",
    cta: "Book an intro call",
    more: { to: "/about", label: "Experience & CV" },
  },
];

const proof = [
  { value: "2,500+", label: "AI tasks delivered" },
  { value: "90%", label: "Acceptance rate" },
  { value: "22+", label: "Products shipped" },
  { value: "3 yrs", label: "Shipping software" },
];
const statCell = [
  "border-b pr-6 lg:border-b-0 lg:border-r lg:pr-10",
  "border-b border-l pl-6 lg:border-b-0 lg:border-l-0 lg:border-r lg:px-10",
  "pr-6 lg:border-r lg:px-10",
  "border-l pl-6 lg:border-l-0 lg:pl-10",
];

const after = [
  { when: "Day 1", title: "Free 30-minute call", text: "Your goals, users and constraints. My honest view." },
  { when: "Next", title: "A clear plan", text: "Scope, timeline and milestones in writing." },
  { when: "Then", title: "Build and ship", text: "Regular updates until launch, then support after." },
];

const prices = [
  { name: "Flex support", price: "$25", unit: "/ hour", text: "Small tasks and quick fixes." },
  { name: "Design studio", price: "$2,000", unit: "/ project", text: "Complete UI/UX and prototypes." },
  { name: "Build & launch", price: "$3,000", unit: "/ project", text: "Designed, built and launched." },
];




export default function Home() {
  useTitle("", "Product engineer and founder of FynoLabs. I design, build and train AI products end to end. Book a free 30-minute call.");
  // The four strongest projects, all with real product shots.
  // Same kind of image on every card: a plain app screen, framed on the grey panel.
  const picks = [
    { slug: "ringover", image: "98cce517ef" },
    { slug: "agentic-soc-platform", image: "soc/03" },
    { slug: "ai-governance-console", image: "b79b757600" },
    { slug: "qriosx", image: "14ea830a66" },
  ].flatMap(({ slug, image }) => {
    const p = projects.find((x) => x.slug === slug);
    return p ? [{ p, image }] : [];
  });

  return (
    <>
      {/* 1. Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full bg-primary opacity-50 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 bg-primary" />
              </span>
              Open to new projects
            </p>
            <h1 className="display mt-8">
              Ship your AI product <span className="text-primary">faster.</span>
            </h1>
            <p className="mt-8 max-w-lg text-body-lg text-muted-foreground lg:text-xl lg:leading-relaxed">
              I design, build and train AI products end to end. One partner instead of a designer, a developer and a data team.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookButton />
              <Link to="/work" className="text-link text-muted-foreground hover:text-foreground">
                See my work
              </Link>
            </div>
            <Reassure className="mt-4" />
          </div>
          <div className="lg:col-span-6">
            <HeroArt className="mx-auto w-full max-w-[560px]" />
          </div>
        </div>
      </section>

      {/* 2. Trust */}
      <section aria-label="Who I build for" className="border-y">
        <div className="wrap flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:gap-16">
          <p className="eyebrow shrink-0">Building for</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-3 text-body-lg font-light text-foreground/70">
                <Glyph icon={t.icon} className="h-5 w-5 text-foreground/60" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Three doors */}
      <section className="section-y">
        <div className="wrap">
          <SectionHead
            eyebrow="How can I help?"
            heading={<>Pick what you <span className="text-primary">need.</span></>}
            aside="Every path ends in the same place: a free call where we work out the next step."
          />
          <div className="mt-20 grid gap-8 md:mt-28 lg:mt-32 lg:grid-cols-3 lg:gap-10">
            {doors.map(({ art: Drawing, who, title, body, price, topic, cta }) => (
              <Link key={title} to={`/book?topic=${topic}`} className="group flex flex-col border transition-colors duration-300 hover:border-foreground/30">
                <Blueprint className="h-56 border-b px-8 md:h-64">
                  <Drawing className="h-full max-h-48 w-full max-w-[18rem]" />
                </Blueprint>
                <div className="flex flex-1 flex-col p-8 md:p-12">
                  <p className="eyebrow">{who}</p>
                  <h3 className="mt-5 text-2xl font-light tracking-tight">{title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{body}</p>
                  <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <p className="text-small text-muted-foreground">{price}</p>
                    <span className="font-medium text-primary underline-offset-4 group-hover:underline">{cta}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Proof */}
      <section aria-label="Track record">
        <div className="wrap">
          <div className="grid grid-cols-2 border-y lg:grid-cols-4">
            {proof.map((s, i) => (
              <div key={s.label} className={`py-14 lg:py-20 ${statCell[i]}`}>
                <p className="text-section font-light tracking-tight tabular-nums">{s.value}</p>
                <p className="eyebrow mt-5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Work */}
      <section className="section-y">
        <div className="wrap">
          <SectionHead eyebrow="Selected work" heading={<>Products I've <span className="text-primary">shipped</span></>} aside={`Security, AI governance, coaching and booking platforms. ${projects.length} case studies in total.`} />
          <div className="mt-20 grid gap-x-12 gap-y-20 lg:gap-x-20 lg:gap-y-28 md:mt-28 lg:mt-32 md:grid-cols-2">
            {picks.map(({ p, image }) => <ProjectCard key={p.slug} p={p} image={image} />)}
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/work" className="btn-ghost">See all {projects.length} case studies</Link>
            <Link to="/gallery" className="text-link text-muted-foreground hover:text-foreground">Gallery</Link>
          </div>
        </div>
      </section>

      {/* 6. After you book */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="After you book" heading={<>No surprises, <span className="text-primary">from day one.</span></>} />
          <div className="mt-20 md:mt-28">
            <IllustratedSteps steps={after} />
          </div>
        </div>
      </section>

      {/* 7. Prices up front */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" heading={<>Clear prices, <span className="text-primary">up front.</span></>} aside="Need something else? We'll shape it on the call." />
          <div className="mt-20 grid border-t md:mt-28 lg:mt-32 lg:grid-cols-3">
            {prices.map((p, i) => (
              <div key={p.name} className={`border-b py-10 lg:border-b-0 lg:py-14 ${i > 0 ? "lg:border-l lg:pl-10" : ""} ${i < 2 ? "lg:pr-10" : ""}`}>
                <p className="eyebrow">{p.name}</p>
                <p className="mt-6">
                  <span className="text-5xl font-light tracking-tight">{p.price}</span> <span className="text-small text-muted-foreground">{p.unit}</span>
                </p>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-10">
            <BookButton topic="product" label="Get a quote on a call" />
            <Link to="/services#pricing" className="text-link text-muted-foreground hover:text-foreground">What's included</Link>
          </div>
        </div>
      </section>

      {/* 8. Questions */}
      <section className="section-y border-t">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">Questions</p>
            <h2 className="h-section mt-8">Before you <span className="text-primary">book.</span></h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Something else? <a href={`mailto:${contact.email}`} className="text-foreground underline underline-offset-4 hover:text-primary">Email me</a>.
            </p>
          </div>
          <div className="border-t lg:col-span-7">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-body-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-foreground" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-foreground transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-xl pb-6 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Last call */}
      <Closing />
    </>
  );
}
