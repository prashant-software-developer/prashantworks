/** Shared types and helpers for blog posts (kept separate so post files can import them without a cycle). */

export type Track = "Founders" | "AI labs" | "Both";

export type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; title: string; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "gallery"; items: { src: string; alt: string }[]; caption?: string };

export type Faq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  /** Day within its 30-day plan. */
  day: number;
  /** 1 = 5 Nov – 4 Dec 2026, 2 = 5 Dec 2026 – 3 Jan 2027. Defaults to 1. */
  plan?: 1 | 2;
  date: string; // ISO
  track: Track;
  title: string;
  /** One or two sentences under the title. Also the SEO description. */
  standfirst: string;
  /** Alt text for the hero animation. */
  heroAlt: string;
  keywords: string[];
  /** Answer-first summary: three or four one-sentence facts a reader (or a search engine) can take without reading on. */
  takeaways?: string[];
  body: Block[];
  /** Questions people ask about this topic, with direct answers. Rendered on the page and as FAQPage schema. */
  faq?: Faq[];
  /** Two short paragraphs: what this means for founders, what it means for labs. */
  forFounders: string;
  forLabs: string;
  sources: { title: string; url: string }[];
  cta: { label: string; topic?: "data" | "product" };
};

export const slide = (slug: string, n: number) => `/blog/${slug}/slides/${String(n).padStart(2, "0")}.png`;
