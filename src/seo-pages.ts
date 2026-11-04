/** Titles and descriptions for the fixed pages. Kept small so every page can use it without loading case studies. */
export const NAME = "Prashant Kumar Singh";
export const ORIGIN = "https://www.prashantworks.com";
const T = (t: string) => `${t} · ${NAME}`;

export const staticMeta: Record<string, { title: string; description: string }> = {
  "/": { title: `Freelance AI Product Designer & Developer · ${NAME}`, description: "I design and build AI products, SaaS platforms and mobile apps for startups, end to end. 57 in-depth case studies. Book a free 30-minute call." },
  "/work": { title: T("Product Design Case Studies"), description: "57 product design and development case studies: AI products, SaaS dashboards, mobile apps and websites. The problem, the process and every key decision." },
  "/services": { title: T("Product Design & MVP Development Services"), description: "Hire a freelance product designer and developer: MVP builds, AI feature integration, SaaS design and technical support. Clear plans from $25 an hour." },
  "/ai-training": { title: T("AI Training Data & Evaluation Lead"), description: "Benchmark-grade AI training data for AI labs: Terminal-Bench, SWE-bench and PaperBench tasks, RLHF and evaluation, reviewed in four stages before they ship." },
  "/about": { title: T("About · Strategic Project Lead, AI Data Programs"), description: "Prashant Kumar Singh: strategic project lead for AI data and evaluation programs, founder of FynoLabs and product engineer at Ringover. Experience, skills and education." },
  "/gallery": { title: T("UI Design Gallery"), description: "A gallery of product screens: SaaS dashboards, AI tools, mobile apps and landing pages designed by freelance product designer Prashant Kumar Singh." },
  "/book": { title: T("Book a Free Discovery Call"), description: "Book a free 30-minute discovery call with Prashant Kumar Singh. Talk through your product, what to build first, timeline and budget. No commitment." },
};
