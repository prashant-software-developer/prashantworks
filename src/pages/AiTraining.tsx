import { Blueprint, DiffArt, PaperArt, ReviewArt, TerminalArt, IllustratedSteps } from "../components/Art";
import { Link } from "react-router-dom";
import { BookButton, Closing, Reassure, SectionHead } from "../components/Layout";
import { useTitle } from "../components/useTitle";
import { contact } from "../data/site";

const stats = [
  { value: "2,500+", label: "Tasks delivered" },
  { value: "90%", label: "Acceptance rate" },
  { value: "4.89/5", label: "Average quality rating" },
  { value: "25+", label: "Contributors & reviewers" },
];
const statCell = [
  "border-b pr-6 lg:border-b-0 lg:border-r lg:pr-10",
  "border-b border-l pl-6 lg:border-b-0 lg:border-l-0 lg:border-r lg:px-10",
  "pr-6 lg:border-r lg:px-10",
  "border-l pl-6 lg:border-l-0 lg:pl-10",
];

const benches = [
  { art: TerminalArt, name: "Terminal-Bench", count: "50 authored · 45 accepted", text: "Dockerized terminal tasks with reference solutions and deterministic tests." },
  { art: DiffArt, name: "SWE-bench", count: "9 authored · 7 accepted", text: "Real repository bugs, a fix, and the tests that prove it." },
  { art: PaperArt, name: "PaperBench", count: "24 authored · 22 accepted", text: "Research papers turned into graded rubric trees." },
];

const tiers = [
  {
    name: "Individual specialist",
    price: "From $30",
    unit: "/ task",
    text: "I do the work myself, where quality and accountability matter most.",
    items: ["Prompt writing & evaluation", "CLI reasoning task design", "Annotation & labeling", "RLHF & red-teaming", "Benchmark creation + test suites"],
    cta: "Contact me",
  },
  {
    name: "Coordinated delivery",
    price: "Custom",
    unit: "",
    text: "A vetted team through FynoLabs, with me as your single point of contact.",
    items: ["Everything in the specialist tier", "Contributor sourcing & management", "Peer review & calibration", "High-volume datasets", "STEM, coding and finance"],
    cta: "Start a pilot",
    featured: true,
  },
];

const steps = [
  { when: "Day 1", title: "Share scope", text: "Domain, volume, rubric and timeline." },
  { when: "Week 1", title: "Paid pilot", text: "5–10 vetted experts on a small batch you can grade." },
  { when: "Weeks 2+", title: "Scale", text: "Full volume within weeks, with review built in." },
];

export default function AiTraining() {
  useTitle("AI Training", "Benchmark-grade AI training data: Terminal-Bench, SWE-bench and PaperBench tasks, a four-stage review flow, and a team of 25+ contributors.");
  return (
    <>
      <section className="pb-10 pt-20 md:pb-16 md:pt-32">
        <div className="wrap">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-8">
              <p className="eyebrow">AI Training</p>
              <h1 className="display mt-8">
                Benchmark-grade
                <br />
                AI data,
                <br />
                <span className="text-primary">led end to end.</span>
              </h1>
            </div>
            <div className="flex max-w-xl flex-col justify-end lg:col-span-4">
              <p className="text-body-lg text-muted-foreground lg:text-xl lg:leading-relaxed">
                For frontier AI labs and data partners. I author tasks myself and lead the team that scales them.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookButton topic="data" label="Book a data call" />
                <a href={`mailto:${contact.email}?subject=AI%20training%20project`} className="text-link text-muted-foreground hover:text-foreground">Email a brief</a>
              </div>
              <Reassure className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Track record" className="pt-8 md:pt-16">
        <div className="wrap">
          <div className="grid grid-cols-2 border-y lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-14 lg:py-20 ${statCell[i]}`}>
                <p className="text-section font-light tracking-tight tabular-nums">{s.value}</p>
                <p className="eyebrow mt-5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap">
          <SectionHead eyebrow="Hands-on" heading={<>Tasks I <span className="text-primary">author</span></>} aside="The oracle passes. Empty agents and broken mutants fail. Holdout inputs catch hardcoded answers." />
          <div className="mt-20 grid gap-8 md:mt-28 lg:mt-32 lg:grid-cols-3 lg:gap-10">
            {benches.map(({ art: Drawing, name, count, text }) => (
              <div key={name} className="flex flex-col border">
                <Blueprint className="h-64 border-b px-6">
                  <Drawing className="h-full max-h-56 w-full max-w-[22rem]" />
                </Blueprint>
                <div className="p-8 md:p-12">
                  <p className="eyebrow text-primary">{count}</p>
                  <h3 className="mt-5 text-title">{name}</h3>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Quality" heading={<>Four gates before <span className="text-primary">anything ships</span></>} aside="Most work passes. What doesn't goes back with notes, not to you." />
          <ReviewArt className="mt-20 h-auto w-full md:mt-28 lg:mt-32" />
        </div>
      </section>

      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="How we start" heading={<>Pilot first, <span className="text-primary">then scale</span></>} />
          <div className="mt-20 md:mt-28">
            <IllustratedSteps steps={steps} />
          </div>
        </div>
      </section>

      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Engagement" heading={<>Two ways to <span className="text-primary">work together</span></>} />
          <div className="mt-20 grid gap-8 md:mt-28 lg:mt-32 lg:grid-cols-2 lg:gap-10">
            {tiers.map((t) => (
              <div key={t.name} className={`flex flex-col border p-8 md:p-12 ${t.featured ? "border-primary" : ""}`}>
                <p className="eyebrow">{t.name}</p>
                <p className="mt-8">
                  <span className="text-5xl font-light tracking-tight">{t.price}</span> <span className="text-small text-muted-foreground">{t.unit}</span>
                </p>
                <p className="mt-4 text-muted-foreground">{t.text}</p>
                <ul className="mt-8 flex-1 space-y-4 border-t pt-8 text-small">
                  {t.items.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.5em] h-1.5 w-1.5 shrink-0 bg-primary" />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link to="/book?topic=data" className={`mt-10 ${t.featured ? "btn-primary" : "btn-ghost"}`}>{t.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Closing topic="data" heading={<>Have a dataset to build?<br /><span className="text-primary">Start with a pilot.</span></>} body="Tell me the domain, task type and volume. We'll scope a paid pilot with 5–10 vetted experts." />
    </>
  );
}
