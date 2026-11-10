import { Blueprint, DiffArt, PaperArt, ReviewArt, TerminalArt, IllustratedSteps } from "../components/Art";
import { Link } from "react-router-dom";
import { BookButton, Closing, Reassure, SectionHead } from "../components/Layout";
import { useTitle } from "../components/useTitle";
import { contact } from "../data/site";

const stats = [
  { value: "90%", label: "Acceptance rate" },
  { value: "4.89/5", label: "Average quality rating" },
  { value: "45/50", label: "Terminal-Bench tasks accepted" },
  { value: "48 h", label: "Free review turnaround" },
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
  { art: PaperArt, name: "PaperBench", count: "15 reviewed · 14 accepted", text: "Agent reproductions of research papers, graded against weighted rubric trees." },
];

const tiers = [
  {
    name: "Free task review",
    price: "$0",
    unit: "/ 48 hours",
    text: "Send one task, rubric or test suite. You get a written review: where an agent could shortcut it, what the tests miss, and how to fix it.",
    items: ["One task, rubric or test suite", "Shortcut and reward-hacking check", "Test coverage gaps", "Written fixes you keep", "NDA signed first if you need one"],
    cta: "Send a task",
  },
  {
    name: "Paid pilot",
    price: "10 tasks",
    unit: "/ 1 week",
    text: "A small batch on your rubric and platform, priced per task by complexity and agreed upfront. You grade every task before deciding to scale.",
    items: ["Vetted authors on your domain", "Second-specialist review on every task", "Oracle, no-op and shortcut checks", "Weekly report: acceptance, rework, notes", "One point of contact: me"],
    cta: "Start a pilot",
    featured: true,
  },
  {
    name: "Managed delivery",
    price: "Custom",
    unit: "",
    text: "Full volume after the pilot, with the same review gates and a weekly quality report.",
    items: ["Everything in the pilot", "Contributor sourcing, onboarding and pay", "Calibration when grading drifts", "Coding, STEM and finance tasks", "Volume pricing"],
    cta: "Plan a programme",
  },
];

const steps = [
  { when: "Within 48 hours", title: "Free review", text: "One task or rubric, reviewed in writing. You see how I think before you pay." },
  { when: "Week 1", title: "Paid pilot", text: "10 tasks on your rubric. You grade every one." },
  { when: "Weeks 2+", title: "Scale", text: "Full volume with the same four review gates and a weekly report." },
];

const trust = [
  { title: "NDA first", text: "I sign your NDA before seeing tasks, rubrics or model outputs." },
  { title: "Never named", text: "Clients and programmes are never named in public, on this site or anywhere else." },
  { title: "Your platform", text: "Work happens in your tools and repositories when you prefer. Nothing leaves them." },
  { title: "One owner", text: "You talk to one accountable person, not a marketplace of strangers." },
];

export default function AiTraining() {
  useTitle("AI Training", "Benchmark-grade AI training data for labs and data partners: Terminal-Bench, SWE-bench and PaperBench work, four review gates, 90% acceptance. Free 48-hour task review.");
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
                For frontier AI labs and data partners. I author tasks myself, so I know where agents cheat and tests break. Send one task and get a written review in 48 hours, free.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookButton topic="data" label="Get a free task review" />
                <a href={`mailto:${contact.email}?subject=Free%2048-hour%20task%20review`} className="text-link text-muted-foreground hover:text-foreground">Email a task</a>
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
          <SectionHead eyebrow="Engagement" heading={<>Start free, <span className="text-primary">then prove it</span></>} aside="Most vendors ask you to commit first. Here you judge the work on your own rubric before you scale." />
          <div className="mt-20 grid gap-8 md:mt-28 lg:mt-32 lg:grid-cols-3 lg:gap-10">
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

      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Confidentiality" heading={<>Your data <span className="text-primary">stays yours</span></>} />
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="border-t pt-8">
                <h3 className="text-2xl font-light tracking-tight">{t.title}</h3>
                <p className="mt-4 text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Closing topic="data" heading={<>Have a task you're unsure about?<br /><span className="text-primary">Send it. Review in 48 hours.</span></>} body="One task, rubric or test suite. You get written fixes for free, and a pilot plan if you want one." />
    </>
  );
}
