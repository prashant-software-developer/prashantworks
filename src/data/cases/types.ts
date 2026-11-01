/**
 * Case study content model. One object per project.
 * Every illustration on a case page is drawn from these fields, so the words and the drawings always match.
 */

/** Line icons drawn in src/components/Glyphs.tsx. Use them for the hero motif and feature tiles. */
export type IconKey =
  | "chat" | "voice" | "phone" | "calendar" | "tasks" | "shield" | "lock" | "cart" | "health" | "heart"
  | "book" | "cap" | "layout" | "link" | "chart" | "search" | "money" | "plane" | "game" | "mail"
  | "code" | "users" | "car" | "food" | "doc" | "video" | "spark" | "bell" | "map" | "star"
  | "gear" | "upload" | "home" | "graph" | "agent" | "ticket" | "box" | "megaphone" | "baby" | "terminal";

export type Kind = "inhouse" | "freelance" | "own";
export type Category = "AI products" | "SaaS" | "Mobile apps" | "Websites";

export type Audience = { who: string; need: string };
export type Step = { title: string; text: string };
export type Decision = {
  title: string;      // short name of the decision, e.g. "One inbox instead of three tabs"
  problem: string;    // what was hard, 1–2 sentences
  alt: string;        // the option I didn't pick, 1 sentence
  choice: string;     // what I designed, 1–2 sentences
  why: string;        // the reasoning / trade-off, 1–2 sentences
};
export type Feature = { icon: IconKey; title: string; text: string };

/** A chapter is a self-contained part of a big project (used for in-house work with many features). */
export type Chapter = {
  title: string;
  kicker: string;                 // one line: what this part is
  problem: string;
  thinking: string[];             // 3–5 short paragraphs of design thinking
  decisions?: Decision[];
  bullets?: string[];
  images?: string[];              // image keys from src/data/images.ts
  icon: IconKey;
};

export type CaseContent = {
  /** One-sentence promise shown under the title. */
  tagline: string;
  /** 2–3 sentence overview. */
  summary: string;
  seo: { title: string; description: string; keywords: string[] };
  context: {
    problem: string;              // 2–3 sentences: the situation and why it was hard
    audience: Audience[];         // 2–4 groups
    goals: string[];              // 3–4 goals
  };
  approach: Step[];               // 4 steps: how I ran the work as a freelancer
  journey: { title: string; steps: string[]; key: number }; // 4–6 steps of the main user flow; key = index of the moment that matters most
  structure?: { root: string; groups: { name: string; items: string[] }[] }; // information architecture, 3–5 groups × 2–4 items
  decisions: Decision[];          // 2–4 design decisions
  features: Feature[];            // 4–6 key features
  system?: { name: string; items: string[] }[]; // build stack as layers (only when I also built it)
  chapters?: Chapter[];
  outcome: string[];              // what was delivered (no invented numbers)
  learned: string[];              // 2–3 reflections
};

export type Project = {
  slug: string;
  title: string;                  // public name (client names anonymised)
  short: string;                  // 2–5 words: what it is
  kind: Kind;
  category: Category;
  role: string;                   // e.g. "Product design" or "Design + development"
  scope: string[];                // e.g. ["UX research", "UI design", "Design system"]
  platforms: string[];            // e.g. ["Web"], ["iOS", "Android"]
  icon: IconKey;                  // hero motif
  cover?: string;                 // image key for cards
  screens: string[];              // image keys for the case page; empty = illustrated placeholders
  status?: string;                // e.g. "Ongoing"
  featured?: boolean;
  legacy?: string[];              // old URLs that redirect here
};
