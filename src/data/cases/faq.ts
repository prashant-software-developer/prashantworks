import type { CaseContent, Project } from "./types";

/**
 * Short, answer-first Q&A for each case study. Shown on the page ("In brief") and sent as FAQPage
 * structured data, so search engines and AI assistants can quote a clean answer about each project.
 * Built only from the case study's own content, so it never says more than the page does.
 */
const sentence = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
const list = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export function caseFaq(p: Project, c: CaseContent): { q: string; a: string }[] {
  const who = c.context.audience.map((a) => lower(a.who));
  const kind =
    p.kind === "inhouse" ? `as an in-house ${lower(p.role.replace(" (in-house)", ""))}` : p.kind === "own" ? "as his own product" : "as a freelance project";
  return [
    { q: `What is ${p.title}?`, a: `${sentence(c.summary)}` },
    { q: `What problem does ${p.title} solve?`, a: sentence(c.context.problem) },
    { q: `Who is ${p.title} for?`, a: sentence(`It is built for ${list(who)}`) },
    {
      q: `What did Prashant Kumar Singh do on ${p.title}?`,
      a: sentence(`Prashant worked on it ${kind}, covering ${list(p.scope.map(lower))} for ${list(p.platforms)}. Delivered: ${list(c.outcome.map(lower).map((o) => o.replace(/\.$/, "")))}`),
    },
    {
      q: `What were the key design decisions in ${p.title}?`,
      a: c.decisions.map((d) => `${sentence(d.title)} ${sentence(d.choice)}`).join(" "),
    },
  ];
}
