export const img = (id: string) => `/img/${id}.webp`;

export const contact = {
  name: "Prashant Kumar Singh",
  email: "prashantkumarsingh.work@gmail.com",
  phone: "+91 80093 96321",
  phoneHref: "tel:+918009396321",
  location: "Varanasi, India · Remote",
  call: "https://cal.com/prashantkumarsingh/free-product-discovery-call",
  cv: "https://drive.google.com/file/d/1FkhbsixJt0e38InoJ-Jwux-1TYOxv-fk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/prashant-product-engineer/",
  x: "https://x.com/prashantworkss",
  github: "https://github.com/prashant-software-developer",
  fynolabs: "https://fynolabs.si",
};

/* Proof, from the Oct 2026 resume */
export const proof = [
  { value: "2,500+", label: "AI tasks delivered" },
  { value: "90%", label: "Acceptance rate" },
  { value: "25+", label: "Contributors led" },
  { value: "22+", label: "Products shipped" },
];

/* Services (older site content, kept on /services) */
export const services = [
  {
    art: "product",
    title: "Product & MVP",
    text: "From idea to live product, fast. Design and engineering under one roof.",
    items: ["Product design", "Rapid MVP builds", "Landing pages", "Payment integration", "Web & mobile apps"],
  },
  {
    art: "chat",
    title: "AI features",
    text: "LLM features built and shipped into your product, not just consulted on.",
    items: ["LLM integration", "GPT-based tools", "Voice AI", "AI content assistants", "AI UX consultation"],
  },
  {
    art: "stack",
    title: "Technical support",
    text: "I look after your codebase, deployments and AI systems so the product keeps moving.",
    items: ["Codebase ownership", "Feature upgrades", "DevOps support", "AI tooling & prompting", "Deployments"],
  },
  {
    art: "data",
    title: "AI training data",
    text: "Benchmark-grade tasks, evaluations and RLHF for AI labs and data partners.",
    items: ["Prompt engineering", "Annotation & labeling", "RLHF & red-teaming", "Benchmark design"],
    link: "/ai-training",
  },
] as const;

/* Experience: Oct 2026 strategic resume, merged with the older site */
export const experience = [
  {
    role: "Founder & Project Lead",
    company: "FynoLabs",
    note: "AI training & product studio",
    url: "https://fynolabs.si",
    period: "2025 – Present",
    points: [
      "Lead 25+ coding and evaluation contributors and reviewers producing benchmark-grade tasks for frontier AI labs and data partners: 2,500+ tasks delivered at a 90% acceptance rate and a 4.89/5 average quality rating.",
      "Built a four-stage review flow: scored trial on the client rubric, peer review of every item, senior calibration when grading drifts, and final sign-off before anything ships.",
      "Track acceptance, rework and throughput per contributor; coach or rotate out low performers and promote strong builders to reviewers.",
      "Agree rubrics, domains and acceptance criteria with clients, run paid pilots with 5–10 vetted experts, then scale to full volume within weeks.",
      "Hands-on author: 50 Terminal-Bench tasks (45 accepted), 9 SWE-bench tasks (7 accepted) and 24 PaperBench tasks (22 accepted).",
    ],
  },
  {
    role: "AI Evaluation Contractor",
    company: "Expert data platforms",
    note: "Coding agents and web UI evaluation",
    period: "Jan 2026 – Present",
    points: [
      "Author and review coding-agent tasks and model responses against strict rubrics; 4.89/5 quality rating.",
      "Rank AI-generated websites side by side on layout, hierarchy, accessibility and usability, with evidence-based rationale.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Ringover",
    note: "B2B SaaS, conversational AI · Atlanta, GA (Remote)",
    url: "https://www.ringover.com/",
    period: "Oct 2024 – Present",
    caseSlug: "ringover",
    points: [
      "Design and ship conversational AI features for Empower, a call intelligence platform for global sales teams: the Ask Empower LLM assistant, Call Studio, Pitch Room and an AI power dialer.",
      "Own features end to end across iOS, Android, Web and browser extensions, with a shared component library keeping every platform consistent.",
      "Built an integrations hub for CRMs and calendars, and rebuilt admin workflows for license management, user access and settings.",
      "Led product UX for onboarding, power dialers, call logs, analytics and in-call and post-call actions, then built them in code.",
    ],
  },
  {
    role: "Software Developer & Product Designer",
    company: "Wispel",
    note: "Sales engagement platform · Paris (Remote)",
    url: "https://www.wispel.app/",
    period: "Jun 2023 – Sep 2024",
    points: [
      "Early engineer working directly with the founders, owning features from prototype to production.",
      "Built real-time calling, messaging and email on the Vonage SDK with React and Redux.",
      "Engineered Node.js, Express and MongoDB services on AWS, integrating Freshsales, GoHighLevel and Google APIs.",
      "Turned user and market research into rapid Next.js prototypes that set feature priorities.",
    ],
  },
];

export const ownProjects = [
  { name: "QriosX", url: "https://www.qriosx.com/", text: "AI coaching with grit-based challenges, journaling and learning dashboards." },
  { name: "LinkSaver", url: "https://www.linksaver.in/", text: "Resource manager in React and Go, with a Chrome extension." },
  { name: "Cognize", url: "http://cognize.live/", text: "Lightweight lead board with activity tracking and auto summaries." },
  { name: "Picstone", url: "https://picstone-generative-ai.vercel.app/", text: "AI story generator: 107K+ views, 11K+ users, Top 5 at a Gen-AI hackathon." },
];

export const skills = [
  { title: "Program leadership", items: ["Project scoping", "Rubric & acceptance criteria", "Pilot-to-scale delivery", "Throughput tracking", "Hiring & vetting"] },
  { title: "Quality operations", items: ["Scored trials", "Peer review", "Calibration", "Final sign-off", "Failure analysis"] },
  { title: "AI evaluation", items: ["Terminal-Bench", "SWE-bench", "PaperBench", "Coding-agent tasks", "Deterministic tests", "RLHF"] },
  { title: "Engineering", items: ["Python", "TypeScript", "Go", "Docker", "React", "Next.js", "Node.js", "AWS"] },
  { title: "Product design", items: ["Figma design systems", "Research", "Wireframes", "Prototypes", "UX for AI products"] },
];

export const audiences = [
  { title: "Founders", text: "Building a first product." },
  { title: "Agencies", text: "Need development support." },
  { title: "AI labs & data partners", text: "Need benchmark-grade data." },
  { title: "Product teams", text: "Launching new features." },
];

export const process = [
  { when: "Week 1", title: "Discovery", text: "Goals, scope and what success looks like." },
  { when: "Week 1–2", title: "Plan", text: "Timeline, milestones and deliverables in writing." },
  { when: "Ongoing", title: "Build", text: "Design and development, with updates every few days." },
];

export const pricing = [
  {
    name: "Flex support",
    price: "$25",
    unit: "/ hour",
    text: "Small tasks, quick fixes and ongoing work.",
    items: ["Design & development support", "Pay only for what you use", "Turnaround in 24–48 hours", "Direct 1:1 communication"],
    cta: "Contact me",
  },
  {
    name: "Design studio",
    price: "$2,000",
    unit: "/ project",
    text: "Polished UX/UI for founders validating an idea.",
    items: ["Complete UI/UX design", "Wireframes + prototypes", "Design system foundations", "2 revision cycles"],
    cta: "Start a design project",
    featured: true,
  },
  {
    name: "Build & launch",
    price: "$3,000",
    unit: "/ project",
    text: "Designed, built and launched, end to end.",
    items: ["Everything in Design studio", "Frontend + backend", "Cloud deployment", "AI integration", "30 days post-launch support"],
    cta: "Build with me",
  },
];

/* Questions people ask before booking (home page + FAQ structured data). */
export const faqs = [
  { q: "What do we cover on the free call?", a: "Your product goals, challenges and opportunities, and how I can help design, build or scale it. No pressure, just a clear next step." },
  { q: "Can you both design and build?", a: "Yes. I design in Figma and build in React, Next.js, Node.js and Python, so nothing gets lost between design and code." },
  { q: "Do you work with teams outside India?", a: "Yes. I work remotely and have shipped with teams in the US, Europe, Hong Kong and India." },
  { q: "Do you take AI training projects?", a: "Yes. Through FynoLabs I lead 25+ contributors and reviewers. Most teams start with a paid pilot of 5–10 vetted experts." },
  { q: "How fast can we start?", a: "Book a call this week. I reply to every message within one business day." },
];
