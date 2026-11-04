import { caseContent } from "./data/cases";
import { contact, experience, faqs, pricing, services } from "./data/site";
import { caseFaq } from "./data/cases/faq";
import { projects } from "./data/projects";
import { images } from "./data/images";

/**
 * Search metadata for every route: titles, descriptions, canonical URLs, social images and structured data.
 * Used by the pre-renderer (scripts/prerender.mjs) to write real HTML for each page, and by useTitle on the client.
 */

import { NAME, ORIGIN, staticMeta } from "./seo-pages";
export { NAME, ORIGIN };

export type Meta = { path: string; title: string; description: string; image: string; jsonLd: object[]; priority: number; images?: string[] };

const UPDATED = "2026-11-04";
/** Where clients come from: used for areaServed so local and AI search can match "near me" and country queries. */
const AREAS = ["United States", "United Kingdom", "European Union", "Hong Kong", "India", "Worldwide (remote)"].map((name) => ({ "@type": "Place", name }));

const org = {
  "@type": "Organization",
  "@id": "https://fynolabs.si/#org",
  name: "FynoLabs",
  url: contact.fynolabs,
  description: "AI training data and product studio: benchmark-grade coding and evaluation data for frontier AI labs, and product design and build for startups.",
  founder: { "@id": `${ORIGIN}/#person` },
};

const person = {
  "@type": "Person",
  "@id": `${ORIGIN}/#person`,
  name: NAME,
  givenName: "Prashant Kumar",
  familyName: "Singh",
  jobTitle: "Freelance Product Designer & Developer; Founder of FynoLabs",
  description: "Product designer and engineer who designs and builds AI products, SaaS platforms and mobile apps, and leads AI training data delivery for frontier AI labs through FynoLabs.",
  url: `${ORIGIN}/`,
  email: `mailto:${contact.email}`,
  image: `${ORIGIN}/img/9b8afe6b00.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  homeLocation: { "@type": "Place", name: "Varanasi, India" },
  worksFor: [{ "@id": "https://fynolabs.si/#org" }],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Information Technology, Sonepat", url: "https://iiitsonepat.ac.in/" },
  hasOccupation: [
    { "@type": "Occupation", name: "Product designer", occupationLocation: AREAS },
    { "@type": "Occupation", name: "Software engineer", occupationLocation: AREAS },
    { "@type": "Occupation", name: "AI training data project lead", occupationLocation: AREAS },
  ],
  knowsAbout: ["Product design", "UX design", "UI design", "AI product design", "Conversational AI", "SaaS dashboards", "Design systems", "MVP development", "React", "Next.js", "Node.js", "Python", "Go", "AI training data", "RLHF", "LLM evaluation", "SWE-bench", "Terminal-Bench", "PaperBench"],
  knowsLanguage: ["English", "Hindi"],
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
  areaServed: AREAS,
  priceRange: "$25 – $3,000",
  telephone: contact.phone,
  email: contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  availableLanguage: ["English", "Hindi"],
  knowsAbout: ["AI product design", "SaaS design", "MVP development", "AI feature integration", "AI training data"],
  potentialAction: { "@type": "ReserveAction", target: `${ORIGIN}/book`, name: "Book a free 30-minute discovery call" },
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

const serviceItems = services.map((sv) => ({
  "@type": "Service",
  name: sv.title,
  description: sv.text,
  serviceType: sv.items.join(", "),
  provider: { "@id": `${ORIGIN}/#service` },
  areaServed: AREAS,
  url: `${ORIGIN}${"link" in sv ? sv.link : "/services"}`,
}));

const page = (path: string, type = "WebPage") => ({
  "@type": type,
  "@id": `${ORIGIN}${path}#page`,
  url: `${ORIGIN}${path}`,
  name: staticMeta[path]?.title,
  description: staticMeta[path]?.description,
  inLanguage: "en",
  isPartOf: { "@id": `${ORIGIN}/#website` },
  about: { "@id": `${ORIGIN}/#person` },
  dateModified: UPDATED,
});

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
    title: staticMeta["/"].title,
    description: staticMeta["/"].description,
    priority: 1,
    jsonLd: [
      person,
      service,
      org,
      { "@type": "WebSite", "@id": `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: NAME, inLanguage: "en", publisher: { "@id": `${ORIGIN}/#person` } },
      page("/"),
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  },
  {
    path: "/work",
    title: staticMeta["/work"].title,
    description: staticMeta["/work"].description,
    priority: 0.9,
    jsonLd: [
      {
        "@type": "CollectionPage",
        "@id": `${ORIGIN}/work#page`,
        name: "Product design case studies",
        url: `${ORIGIN}/work`,
        inLanguage: "en",
        dateModified: UPDATED,
        hasPart: projects.map((p) => ({ "@type": "CreativeWork", name: p.title, url: `${ORIGIN}/work/${p.slug}` })),
      },
      crumbs([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
    ],
  },
  {
    path: "/services",
    title: staticMeta["/services"].title,
    description: staticMeta["/services"].description,
    priority: 0.9,
    jsonLd: [service, ...serviceItems, page("/services"), crumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])],
  },
  {
    path: "/ai-training",
    title: staticMeta["/ai-training"].title,
    description: staticMeta["/ai-training"].description,
    priority: 0.8,
    jsonLd: [
      { "@type": "Service", name: "AI training data and evaluation", description: "Benchmark-grade coding and evaluation tasks (Terminal-Bench, SWE-bench, PaperBench), RLHF and rubric grading for frontier AI labs and data partners, with a four-stage review.", provider: { "@id": `${ORIGIN}/#person` }, areaServed: AREAS, serviceType: "AI training data, RLHF, LLM evaluation" },
      page("/ai-training"),
      crumbs([{ name: "Home", path: "/" }, { name: "AI Training", path: "/ai-training" }]),
    ],
  },
  {
    path: "/about",
    title: staticMeta["/about"].title,
    description: staticMeta["/about"].description,
    priority: 0.7,
    jsonLd: [{ ...page("/about", "ProfilePage"), mainEntity: { "@id": `${ORIGIN}/#person` } }, person, org, crumbs([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])],
  },
  {
    path: "/gallery",
    title: staticMeta["/gallery"].title,
    description: staticMeta["/gallery"].description,
    priority: 0.5,
    jsonLd: [page("/gallery", "CollectionPage"), crumbs([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])],
  },
  {
    path: "/book",
    title: staticMeta["/book"].title,
    description: staticMeta["/book"].description,
    priority: 0.8,
    jsonLd: [{ ...page("/book", "ContactPage"), mainEntity: { "@id": `${ORIGIN}/#service` } }, service, crumbs([{ name: "Home", path: "/" }, { name: "Book a call", path: "/book" }])],
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
      images: [p.cover, ...p.screens].filter((k, i, a): k is string => !!k && a.indexOf(k) === i).slice(0, 8).map((k) => imageUrl(k)),
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
          about: [p.category, ...c.seo.keywords.slice(0, 3)],
          inLanguage: "en",
          dateModified: UPDATED,
          isPartOf: { "@id": `${ORIGIN}/#website` },
          author: { "@id": `${ORIGIN}/#person` },
          creator: { "@id": `${ORIGIN}/#person` },
          ...(p.kind === "inhouse" ? {} : { provider: { "@id": `${ORIGIN}/#service` } }),
        },
        { "@type": "FAQPage", "@id": `${ORIGIN}${path}#faq`, mainEntity: caseFaq(p, c).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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

/** llms.txt (summary) and llms-full.txt (every case study in plain text) for AI assistants and answer engines. */
export function llmsText(full: boolean) {
  const lines: string[] = [];
  lines.push(`# ${NAME}`, "");
  lines.push(`> ${person.description} Based in Varanasi, India; works remotely with teams in the US, UK, Europe, Hong Kong and India. Book a free 30-minute call: ${ORIGIN}/book`, "");
  lines.push("## Key facts", "");
  lines.push(`- Services: ${services.map((s) => s.title).join("; ")}.`);
  lines.push(`- Prices: ${pricing.map((p) => `${p.name} ${p.price} ${p.unit}`).join("; ")}.`);
  lines.push(`- Experience: ${experience.map((e) => `${e.role}, ${e.company} (${e.period})`).join("; ")}.`);
  lines.push(`- Education: B.Tech Computer Science, IIIT Sonepat (2021–2025).`);
  lines.push(`- Contact: ${contact.email} · ${contact.linkedin} · ${ORIGIN}/book`, "");
  lines.push("## Pages", "");
  for (const p of pages) lines.push(`- [${staticMeta[p.path].title}](${ORIGIN}${p.path === "/" ? "/" : p.path}): ${staticMeta[p.path].description}`);
  lines.push("", "## Case studies", "");
  for (const p of projects) {
    const c = caseContent[p.slug];
    if (!c) continue;
    lines.push(`- [${p.title}: ${p.short}](${ORIGIN}/work/${p.slug}) (${p.kind === "inhouse" ? "in-house" : p.kind === "own" ? "own product" : "freelance"}, ${p.category}): ${c.tagline}`);
  }
  if (full) {
    for (const p of projects) {
      const c = caseContent[p.slug];
      if (!c) continue;
      lines.push("", `## ${p.title}`, "", `URL: ${ORIGIN}/work/${p.slug}`, `Type: ${p.kind} · ${p.category} · Role: ${p.role} · Platforms: ${p.platforms.join(", ")}`, "", c.summary, "", `Problem: ${c.context.problem}`, "");
      lines.push(`Who it's for: ${c.context.audience.map((a) => `${a.who} (${a.need})`).join("; ")}`, "");
      lines.push("How I worked:", ...c.approach.map((a, i) => `${i + 1}. ${a.title}: ${a.text}`), "");
      lines.push("Key decisions:", ...c.decisions.map((d) => `- ${d.title}. Problem: ${d.problem} Considered: ${d.alt} Chose: ${d.choice} Why: ${d.why}`), "");
      lines.push("Delivered:", ...c.outcome.map((o) => `- ${o}`));
    }
  }
  return lines.join("\n") + "\n";
}
