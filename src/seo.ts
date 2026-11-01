import { caseContent } from "./data/cases";
import { contact, faqs, pricing } from "./data/site";
import { projects } from "./data/projects";
import { images } from "./data/images";

/**
 * Search metadata for every route: titles, descriptions, canonical URLs, social images and structured data.
 * Used by the pre-renderer (scripts/prerender.mjs) to write real HTML for each page, and by useTitle on the client.
 */

import { NAME, ORIGIN } from "./seo-pages";
export { NAME, ORIGIN };

export type Meta = { path: string; title: string; description: string; image: string; jsonLd: object[]; priority: number };

const person = {
  "@type": "Person",
  "@id": `${ORIGIN}/#person`,
  name: NAME,
  jobTitle: "Freelance Product Designer & Developer",
  url: `${ORIGIN}/`,
  email: `mailto:${contact.email}`,
  image: `${ORIGIN}/img/9b8afe6b00.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressCountry: "IN" },
  knowsAbout: ["Product design", "UX design", "AI product design", "SaaS design", "React", "Next.js", "Node.js", "Python", "AI training data", "RLHF"],
  sameAs: [contact.linkedin, contact.x, contact.github, contact.fynolabs],
};

const service = {
  "@type": "ProfessionalService",
  "@id": `${ORIGIN}/#service`,
  name: `${NAME} · Product design and development`,
  url: `${ORIGIN}/`,
  image: `${ORIGIN}/og.jpg`,
  description: "Freelance product design and development for AI startups and SaaS teams: MVPs, AI features, dashboards, mobile apps and websites.",
  founder: { "@id": `${ORIGIN}/#person` },
  areaServed: "Worldwide",
  priceRange: "$25 – $3,000",
  address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressCountry: "IN" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plans",
    itemListElement: pricing.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.text,
      price: p.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    })),
  },
};

const crumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${ORIGIN}${it.path}` })),
});

const imageUrl = (key?: string) => {
  if (!key || !images[key]) return `${ORIGIN}/og.jpg`;
  const v = images[key].v.filter((x) => x <= 1600).pop() ?? images[key].v[0];
  return `${ORIGIN}/img/${key}-${v}.webp`;
};

const T = (t: string) => `${t} · ${NAME}`;

const pages: Omit<Meta, "image">[] = [
  {
    path: "/",
    title: `Freelance AI Product Designer & Developer · ${NAME}`,
    description: "I design and build AI products, SaaS platforms and mobile apps for startups, end to end. 57 in-depth case studies. Book a free 30-minute call.",
    priority: 1,
    jsonLd: [
      person,
      service,
      { "@type": "WebSite", "@id": `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: NAME, publisher: { "@id": `${ORIGIN}/#person` } },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  },
  {
    path: "/work",
    title: T("Product Design Case Studies"),
    description: "57 product design and development case studies: AI products, SaaS dashboards, mobile apps and websites. The problem, the process and every key decision.",
    priority: 0.9,
    jsonLd: [
      {
        "@type": "CollectionPage",
        name: "Product design case studies",
        url: `${ORIGIN}/work`,
        hasPart: projects.map((p) => ({ "@type": "CreativeWork", name: p.title, url: `${ORIGIN}/work/${p.slug}` })),
      },
      crumbs([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
    ],
  },
  {
    path: "/services",
    title: T("Product Design & MVP Development Services"),
    description: "Hire a freelance product designer and developer: MVP builds, AI feature integration, SaaS design and technical support. Clear plans from $25 an hour.",
    priority: 0.9,
    jsonLd: [service, crumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])],
  },
  {
    path: "/ai-training",
    title: T("AI Training Data & Evaluation Lead"),
    description: "Benchmark-grade AI training data for AI labs: Terminal-Bench, SWE-bench and PaperBench tasks, RLHF and evaluation, reviewed in four stages before they ship.",
    priority: 0.8,
    jsonLd: [
      { "@type": "Service", name: "AI training data and evaluation", provider: { "@id": `${ORIGIN}/#person` }, areaServed: "Worldwide", serviceType: "AI training data" },
      crumbs([{ name: "Home", path: "/" }, { name: "AI Training", path: "/ai-training" }]),
    ],
  },
  {
    path: "/about",
    title: T("About · Product Designer & Engineer"),
    description: "Prashant Kumar Singh: founder of FynoLabs and product engineer. Experience across AI products, SaaS and mobile, side projects, skills and education.",
    priority: 0.7,
    jsonLd: [{ "@type": "ProfilePage", mainEntity: person }, crumbs([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])],
  },
  {
    path: "/gallery",
    title: T("UI Design Gallery"),
    description: "A gallery of product screens: SaaS dashboards, AI tools, mobile apps and landing pages designed by freelance product designer Prashant Kumar Singh.",
    priority: 0.5,
    jsonLd: [crumbs([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])],
  },
  {
    path: "/book",
    title: T("Book a Free Discovery Call"),
    description: "Book a free 30-minute discovery call with Prashant Kumar Singh. Talk through your product, what to build first, timeline and budget. No commitment.",
    priority: 0.8,
    jsonLd: [crumbs([{ name: "Home", path: "/" }, { name: "Book a call", path: "/book" }])],
  },
];

export function allMeta(): Meta[] {
  const out: Meta[] = pages.map((p) => ({ ...p, image: `${ORIGIN}/og.jpg` }));
  for (const p of projects) {
    const c = caseContent[p.slug];
    if (!c) continue;
    const path = `/work/${p.slug}`;
    out.push({
      path,
      title: T(c.seo.title),
      description: c.seo.description,
      image: imageUrl(p.cover),
      priority: p.featured || p.kind === "inhouse" ? 0.8 : 0.6,
      jsonLd: [
        {
          "@type": "CreativeWork",
          "@id": `${ORIGIN}${path}#case-study`,
          name: `${p.title}: ${p.short}`,
          headline: c.tagline,
          description: c.summary,
          url: `${ORIGIN}${path}`,
          image: imageUrl(p.cover),
          keywords: c.seo.keywords.join(", "),
          genre: "Case study",
          about: p.category,
          author: { "@id": `${ORIGIN}/#person` },
          creator: { "@id": `${ORIGIN}/#person` },
        },
        crumbs([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: p.title, path }]),
      ],
    });
  }
  return out;
}

const index = new Map(allMeta().map((m) => [m.path, m]));
export const metaFor = (path: string) => index.get(path.replace(/\/+$/, "") || "/");

/** Old URLs from the Figma site, kept alive with permanent redirects. */
export const redirects: { from: string; to: string }[] = [
  { from: "/ringover", to: "/work/ringover" },
  ...projects.flatMap((p) => (p.legacy ?? []).map((l) => ({ from: `/${l}`, to: `/work/${p.slug}` }))),
  { from: "/home", to: "/" },
];
