/** Titles and descriptions for the fixed pages. Kept small so every page can use it without loading case studies. */
export const NAME = "Prashant Kumar Singh";
export const ORIGIN = "https://www.prashantworks.com";
const T = (t: string) => `${t} · ${NAME}`;

export const staticMeta: Record<string, { title: string; description: string }> = {
  "/": { title: `AI Product Designer & Developer · ${NAME}`, description: "Fixed-price MVP sprints for founders and benchmark-grade AI training data for labs. 22+ products shipped, 90% AI task acceptance. Start with a free review." },
  "/work": { title: T("Product Design Case Studies"), description: "57 product design and development case studies: AI products, SaaS dashboards, mobile apps and websites. The problem, the process and every key decision." },
  "/services": { title: T("Product Design & MVP Development Services"), description: "Fixed-price design sprint ($2,000) and MVP sprint ($3,000), AI feature builds and flex support from $25 an hour. Start with a free one-page teardown." },
  "/ai-training": { title: T("AI Training Data, Benchmark Tasks & Evaluation"), description: "Benchmark-grade AI training data for labs and data partners: coding tasks, evaluation and RLHF, reviewed in four gates. 90% acceptance. Free 48-hour task review, then a 10-task paid pilot." },
  "/about": { title: T("About"), description: "Prashant Kumar Singh: product engineer at Ringover and founder of FynoLabs. I design, build and train AI products end to end. Experience, projects and skills." },
  "/gallery": { title: T("UI Design Gallery"), description: "A gallery of product screens: SaaS dashboards, AI tools, mobile apps and landing pages designed by freelance product designer Prashant Kumar Singh." },
  "/blog": { title: T("Blog: AI Products & AI Training Data"), description: "Short, sourced write-ups on building AI products and benchmark-grade AI training data. The full version of every post on X, Threads and Instagram, with sources." },
  "/book": { title: T("Book a Free Discovery Call"), description: "Book a free 30-minute discovery call with Prashant Kumar Singh. Talk through your product, what to build first, timeline and budget. No commitment." },
};
