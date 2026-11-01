import { useState } from "react";
import { Link } from "react-router-dom";
import { Closing, SectionHead } from "../components/Layout";
import { Shot } from "../components/Shot";
import { useTitle } from "../components/useTitle";
import type { Category } from "../data/cases/types";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

const filters: ("All" | Category)[] = ["All", "AI products", "SaaS", "Mobile apps", "Websites"];

export default function Work() {
  useTitle("Product design case studies", "57 product design and development case studies: AI products, SaaS platforms, mobile apps and websites, by freelance product designer Prashant Kumar Singh.");
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const inhouse = projects.filter((p) => p.kind === "inhouse");
  const freelance = projects.filter((p) => p.kind === "freelance");
  const own = projects.filter((p) => p.kind === "own");
  const list = freelance.filter((p) => f === "All" || p.category === f);

  return (
    <>
      <section className="pb-12 pt-20 md:pt-28">
        <div className="wrap">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-8">
              <p className="eyebrow">Work</p>
              <h1 className="display mt-8">
                Case studies, <span className="text-primary">in depth.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end text-body-lg text-muted-foreground lg:col-span-4 lg:text-xl lg:leading-relaxed">
              {projects.length} projects. Each one shows the problem, how I worked, the decisions I made and what was delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Freelance */}
      <section className="pb-24 pt-8 md:pb-32">
        <div className="wrap">
          <div className="flex flex-col gap-6 border-b pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Freelance & studio</p>
              <h2 className="mt-4 text-3xl font-light tracking-tight">Client and studio projects <span className="text-muted-foreground">· {freelance.length}</span></h2>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3" role="tablist" aria-label="Filter projects">
              {filters.map((x) => (
                <button
                  key={x}
                  role="tab"
                  aria-selected={f === x}
                  onClick={() => setF(x)}
                  className={`text-eyebrow uppercase transition-colors ${f === x ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {x} <span className="text-muted-foreground">{freelance.filter((p) => x === "All" || p.category === x).length}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-20 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-24">
            {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* Own products */}
      <section className="section-y border-t">
        <div className="wrap">
          <SectionHead eyebrow="Own products" heading={<>Built and run <span className="text-primary">by me</span></>} aside="Products I designed, coded and launched myself." />
          <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-20 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-24">
            {own.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* In-house */}
      <section className="section-y border-t bg-[hsl(225_20%_98.5%)]">
        <div className="wrap">
          <SectionHead eyebrow="In-house" heading={<>Product work <span className="text-primary">inside a team</span></>} aside="My full-time roles, kept separate from client work: the design thinking behind products used every day." />
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {inhouse.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`} className="group grid gap-6 border bg-background p-8 transition-colors hover:border-foreground/30 md:grid-cols-2 md:p-10 md:gap-10">
                {p.cover && <Shot id={p.cover} alt={`${p.title}: ${p.short}`} sizes="(min-width: 1024px) 25vw, 90vw" />}
                <div className="flex flex-col">
                  <p className="eyebrow">In-house · {p.role.replace(" (in-house)", "")}</p>
                  <h3 className="mt-4 text-3xl font-light tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.short}</p>
                  <span className="mt-auto flex items-center justify-between border-t pt-5 text-small">
                    Read the case study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
