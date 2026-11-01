import type { CaseContent } from "./types";

export const content: Record<string, CaseContent> = {
  "generative-ai-studio": {
    tagline: "Write, generate images and refine drafts with AI in one workspace",
    summary: "Generative AI Studio is a web workspace where people create text and images with AI and keep every prompt, output and version together. It’s for marketers, founders and small creative teams who otherwise jump between separate tools. I designed the product end to end: the workspace model, the creation flow and the screens.",
    seo: {
      title: "Generative AI Studio: UX case study",
      description: "Generative AI Studio: a workspace for creating text and images with AI. How a freelance product designer put prompts, drafts and versions in one place.",
      keywords: ["generative AI product design", "AI workspace UX case study", "AI content tool designer", "product designer for AI startups", "AI creative tool UI design", "freelance AI product designer"],
    },
    context: {
      problem: "People who create with AI tend to work across several tools: one for text, another for images, and a notes app for the prompts that worked. Results get lost, versions pile up, and there’s no way to see how a piece reached its final form. The studio had to bring generation, editing and history into one place without turning into a crowded control panel.",
      audience: [
        { who: "Marketing teams", need: "Produce on-brand copy and visuals quickly and keep them organised by campaign." },
        { who: "Founders and solo makers", need: "Get a usable first draft without learning prompt tricks." },
        { who: "Designers and writers", need: "Steer and refine outputs rather than accept the first result." },
      ],
      goals: ["One workspace for text and image generation", "Keep prompts, outputs and versions together", "Make refining a result as easy as generating one", "Stay calm and readable as projects grow"],
    },
    approach: [
      { title: "Framing the workspace", text: "I started by mapping what people make with generative tools and where their work breaks down between tools. That gave me a short list of jobs the studio had to cover in its first version." },
      { title: "Modelling projects and assets", text: "I defined how projects, assets, prompts and versions relate before drawing any screens. Settling this model early meant every later screen had a clear place to put things." },
      { title: "Designing the creation canvas", text: "I designed the core creation screen, where the prompt, the outputs and the edit tools sit side by side. I iterated on the layout until generating and refining felt like one continuous action." },
      { title: "States, specs and hand-off", text: "I documented loading, failed-generation and empty-project states for each key screen. The components were organised for the build, with behaviour notes on every screen in the main flow." },
    ],
    journey: { title: "From idea to finished asset", steps: ["Open a project", "Describe what you need", "Compare generated options", "Refine the chosen draft", "Export or save"], key: 3 },
    structure: {
      root: "Generative AI Studio",
      groups: [
        { name: "Projects", items: ["All projects", "Project board", "Shared with me"] },
        { name: "Create", items: ["Text generation", "Image generation", "Prompt bar", "Edit tools"] },
        { name: "Library", items: ["Assets", "Saved prompts", "Version history"] },
        { name: "Settings", items: ["Brand presets", "Team members", "Usage"] },
      ],
    },
    decisions: [
      {
        title: "Versions as a branch, not a pile",
        problem: "Every regeneration creates a new output, and in most tools older ones either vanish or stack up in an endless scroll.",
        alt: "A flat gallery of every output, newest first.",
        choice: "I designed a version trail for each asset, where every regeneration or edit is a step you can return to and branch from.",
        why: "People often realise an earlier version was better only after a few more attempts. A trail keeps that path visible without cluttering the main canvas.",
      },
      {
        title: "Prompt stays beside the result",
        problem: "When the prompt disappears after you submit it, it’s hard to tell what produced a result or how to adjust it.",
        alt: "A chat-style thread where prompts and outputs scroll away together.",
        choice: "I kept the prompt pinned next to each output and editable in place, so changing a word and regenerating is a single step.",
        why: "A chat thread suits conversation, but creative work is about tweaking one instruction at a time. Keeping cause and effect side by side makes each iteration easier to read.",
      },
      {
        title: "Brand presets over long prompts",
        problem: "Teams repeat the same tone, colours and audience in every prompt, and small differences make outputs drift apart.",
        alt: "Asking users to save and paste their own prompt templates.",
        choice: "I added brand presets, set once in settings and applied to every generation, shown as a small chip on the prompt bar.",
        why: "Presets keep outputs consistent across a team without making each prompt longer. The chip shows what’s being applied, so nothing feels hidden.",
      },
    ],
    features: [
      { icon: "spark", title: "Text and image generation", text: "Create copy and visuals from the same prompt bar inside a project." },
      { icon: "layout", title: "Side-by-side options", text: "Compare several generated options before choosing one to refine." },
      { icon: "graph", title: "Version trail", text: "Step back to any earlier version and branch from it." },
      { icon: "star", title: "Brand presets", text: "Apply a team’s tone, colours and audience to every generation automatically." },
      { icon: "box", title: "Asset library", text: "Keep every output, prompt and version organised by project." },
    ],
    outcome: [
      "A project and asset model covering prompts, outputs and versions",
      "The core creation screen with prompt bar, output options and edit tools",
      "Version trail, library and brand preset screens",
      "Empty, loading and failed-generation states for each key screen",
      "An organised component file and annotated hand-off for the build",
    ],
    learned: [
      "In creative AI tools the second and third attempts matter more than the first, so I now design for iteration before generation.",
      "Settling the data model before the layout saved me from redrawing screens later.",
    ],
  },

  "ai-insights-platform": {
    tagline: "Ask questions about your business data and get answers you can check",
    summary: "AI Insights Platform lets people ask questions about their business data in plain language and get charts, summaries and the reasoning behind them. It’s for managers and operators who need answers without waiting on an analyst. I designed the question flow, the answer views and the dashboards that collect saved insights.",
    seo: {
      title: "AI Insights Platform: UX case study",
      description: "AI Insights Platform turns plain-language questions into charts and answers. How a freelance product designer made AI answers traceable and easy to trust.",
      keywords: ["AI analytics product design", "natural language BI UX", "AI dashboard design case study", "data assistant UX design", "freelance product designer SaaS", "AI insights platform design"],
    },
    context: {
      problem: "Most teams have more data than they can read, and getting an answer usually means filing a request and waiting for someone who knows the tools. An AI assistant can answer in seconds, but an answer without sources is hard to act on, and a wrong one is worse than none. The platform needed to make answers fast and checkable at the same time.",
      audience: [
        { who: "Business managers", need: "Get a clear answer to a specific question without learning a reporting tool." },
        { who: "Operations leads", need: "Watch the few numbers that matter and know when something changes." },
        { who: "Data analysts", need: "See how the AI reached an answer and correct it when it’s wrong." },
      ],
      goals: ["Let anyone ask a question in plain language", "Show where every answer comes from", "Turn good answers into reusable dashboards", "Keep analysts in control of metric definitions"],
    },
    approach: [
      { title: "Mapping the questions", text: "I listed the kinds of questions people ask of business data, from quick lookups to comparisons over time. That told me which answer formats the product had to support first." },
      { title: "Designing for trust", text: "I worked out what an answer needs to show to be believed: the data used, the filters applied and how the figure was calculated. Those became fixed parts of every answer card." },
      { title: "Answer and dashboard screens", text: "I designed the ask box, the answer cards and the dashboard where saved answers live. I checked every layout against realistic sample data so charts held up with long labels and empty periods." },
      { title: "Edge cases and hand-off", text: "I covered ambiguous questions, missing data and slow queries with their own states. I handed over annotated screens and a component set for charts and answer cards." },
    ],
    journey: { title: "From question to shared insight", steps: ["Ask in plain language", "Confirm what was meant", "Read the answer", "Check the sources", "Pin to a dashboard"], key: 3 },
    structure: {
      root: "AI Insights Platform",
      groups: [
        { name: "Ask", items: ["Question box", "Suggested questions", "Recent questions"] },
        { name: "Answers", items: ["Answer card", "Chart view", "How it was calculated"] },
        { name: "Dashboards", items: ["Pinned insights", "Shared dashboards", "Alerts"] },
        { name: "Data", items: ["Connected sources", "Metric definitions", "Access"] },
      ],
    },
    decisions: [
      {
        title: "Show the working under every answer",
        problem: "A confident figure from an AI says nothing about whether it’s right, and one wrong number in a meeting can damage trust in the whole product.",
        alt: "A clean answer with its sources hidden on a separate details page.",
        choice: "I put a short “How it was calculated” strip under each answer, listing the tables, filters and time range, expandable to the full query.",
        why: "With the reasoning one click away, managers can move fast and analysts can spot mistakes quickly. It adds a little height to each card, which I judged a fair price.",
      },
      {
        title: "Clarify before answering",
        problem: "Words like revenue or active customer can mean different things, and the AI might quietly guess.",
        alt: "Always answer straight away and let users rephrase if the result looks wrong.",
        choice: "When a question maps to more than one metric, the assistant shows the possible meanings as quick choices before running anything.",
        why: "One extra tap costs less than a wrong answer acted upon. Clear questions skip the step, so it only appears when it helps.",
      },
      {
        title: "Answers become dashboard tiles",
        problem: "Teams ask the same questions every week, and each time the assistant starts from scratch.",
        alt: "A separate dashboard builder with its own chart editor.",
        choice: "Any answer can be pinned to a dashboard as a live tile that reruns on a schedule and keeps its original question as the title.",
        why: "Building dashboards from answers people already trust avoids a second, more complex tool. The question as title also keeps tiles readable for colleagues who didn’t ask it.",
      },
    ],
    features: [
      { icon: "search", title: "Plain-language questions", text: "Ask about any connected data the way you’d ask a colleague." },
      { icon: "chart", title: "Auto-chosen charts", text: "Each answer uses a chart type that fits the shape of the data." },
      { icon: "doc", title: "Visible calculations", text: "Every answer lists the data, filters and time range behind it." },
      { icon: "layout", title: "Pinned dashboards", text: "Save useful answers as tiles that refresh on their own." },
      { icon: "bell", title: "Change alerts", text: "Get notified when a pinned metric moves outside its usual range." },
    ],
    outcome: [
      "The question, clarification and answer flow",
      "An answer card pattern with charts and a visible calculation strip",
      "Dashboard screens built from pinned answers, with sharing and alerts",
      "Data source and metric definition screens for analysts",
      "A chart and card component set with annotated hand-off",
    ],
    learned: [
      "With AI answers, trust is a layout problem as much as a model problem: where the sources sit decides whether anyone reads them.",
      "Designing with messy sample data surfaced chart issues that tidy placeholder figures would have hidden.",
    ],
  },

  "neurodivergent-ai-coaching": {
    tagline: "Calm, predictable AI coaching that adapts to how each person thinks",
    summary: "This is an AI coaching product for neurodivergent adults who want help with planning, focus and daily routines. It offers short, structured coaching sessions in a calm interface that each person can tune to their needs. I designed the experience across web and mobile, with accessibility built into every screen.",
    seo: {
      title: "Neurodivergent AI Coaching: UX case study",
      description: "An AI coaching app for neurodivergent people. How a freelance product designer built a calm, predictable interface with sensory and pacing controls.",
      keywords: ["accessible AI app design", "neurodivergent UX design", "ADHD app design case study", "AI coaching app UX", "inclusive product design", "freelance product designer health tech"],
    },
    context: {
      problem: "Most coaching and productivity apps assume one way of thinking: busy dashboards, streaks, frequent nudges and open-ended chat. For many neurodivergent people those patterns add load instead of reducing it, and a blank chat box can be harder to start than the task itself. The product had to offer real structure and support while letting each person control pace, tone and sensory input.",
      audience: [
        { who: "Neurodivergent adults", need: "Get help planning and starting tasks without feeling overwhelmed or judged." },
        { who: "Students and early-career people", need: "Build study or work routines that fit the way they focus." },
        { who: "Coaches and supporters", need: "Support someone between sessions using only what that person chooses to share." },
      ],
      goals: ["Make starting a session effortless", "Give each person control over pace, tone and sensory load", "Keep every screen predictable and easy to scan", "Support progress without guilt-based motivation"],
    },
    approach: [
      { title: "Understanding the load", text: "I reviewed accessibility guidance for cognitive and sensory needs, and how existing coaching apps handle structure. I turned that into a short set of principles: predictable layouts, one task per screen and no surprise movement." },
      { title: "Shaping the coaching flow", text: "I mapped a coaching session as a guided sequence with a clear start and end, instead of an open chat. Each step asks one thing and shows what comes next." },
      { title: "Designing adjustable screens", text: "I designed the web and mobile screens with settings for text size, motion, colour intensity and the coach’s tone. Every layout was checked at large text sizes and with reduced motion." },
      { title: "Accessibility specs and hand-off", text: "I documented contrast, focus order and screen reader labels for each component. The comfort settings went into the hand-off as design tokens, so developers could apply them across the app." },
    ],
    journey: { title: "A coaching session", steps: ["Check in on energy", "Pick one focus", "Break it into steps", "Start the first step", "Reflect and close"], key: 2 },
    structure: {
      root: "AI Coaching",
      groups: [
        { name: "Today", items: ["Energy check-in", "Today’s focus", "Next small step"] },
        { name: "Coaching", items: ["Guided sessions", "Task breakdown", "Talk it through"] },
        { name: "Routines", items: ["Morning and evening", "Reminders", "Visual timers"] },
        { name: "Progress", items: ["Weekly summary", "Wins log", "Shared notes"] },
        { name: "Comfort", items: ["Text and spacing", "Motion and sound", "Coach tone"] },
      ],
    },
    decisions: [
      {
        title: "Guided sessions instead of open chat",
        problem: "An empty chat box asks the person to know what to say, which is often the exact point where they get stuck.",
        alt: "A free-form AI chat with suggested prompts above the input.",
        choice: "I designed sessions as short guided sequences: the coach asks one question at a time with tappable answers, and typing is always possible but never required.",
        why: "Structure lowers the effort to begin, while the open input keeps the person in charge. Confident users lose a little flexibility, which the “Talk it through” mode gives back.",
      },
      {
        title: "Comfort settings at the start",
        problem: "Sensory and pacing needs vary widely, and an interface that suits one person can drain another.",
        alt: "Standard accessibility options tucked away in a settings menu.",
        choice: "I put a short comfort setup into onboarding covering text size, motion, colour intensity, notification style and how direct the coach should be, editable any time from one place.",
        why: "Asking up front signals that adjusting the app is expected, not a special case. It adds a step to onboarding, but that step makes every later screen fit better.",
      },
      {
        title: "Progress without streaks",
        problem: "Streaks and red badges can turn a missed day into a feeling of failure, which often leads people to abandon the app.",
        alt: "Daily streaks and completion rates, as most habit apps use.",
        choice: "I replaced streaks with a wins log and a gentle weekly summary that highlights what went well and never counts missed days.",
        why: "The product’s job is to help people come back, not to score them. Dropping streaks loses an easy motivator, so the summary offers positive feedback in its place.",
      },
    ],
    features: [
      { icon: "heart", title: "Daily check-in", text: "A quick energy check shapes how much the coach suggests that day." },
      { icon: "tasks", title: "Task breakdown", text: "The coach splits a daunting task into small, concrete steps." },
      { icon: "calendar", title: "Visual routines", text: "Morning and evening routines shown as simple timelines with gentle timers." },
      { icon: "gear", title: "Comfort settings", text: "Control text size, motion, colour intensity, sound and the coach’s tone." },
      { icon: "star", title: "Wins log", text: "A record of what went well, with no streaks or missed-day counts." },
    ],
    outcome: [
      "A guided coaching session flow for web and mobile",
      "Onboarding with comfort setup and coach tone choices",
      "Today, routines, progress and settings screens",
      "Accessibility specs covering contrast, focus order, screen reader labels and reduced motion",
      "Comfort settings defined as design tokens for the build",
    ],
    learned: [
      "Accessibility here wasn’t a checklist at the end; it was the product, and starting from it made every decision clearer.",
      "Removing a feature like streaks can be as much a design decision as adding one.",
    ],
  },

  "prompt-generator": {
    tagline: "Answer a few questions and get a well-structured prompt ready to use",
    summary: "Prompt Generator turns a handful of answers about a task into a clear, structured prompt for any large language model. It’s for people who use AI at work but don’t want to learn prompt writing. I designed the question flow, the live prompt view and the saved prompt library.",
    seo: {
      title: "Prompt Generator: LLM tool UX case study",
      description: "Prompt Generator builds strong AI prompts from a few simple answers. How a freelance product designer turned prompt writing into a short, guided form.",
      keywords: ["prompt generator UX design", "LLM tool product design", "AI prompt builder case study", "AI tool UX designer", "form design for AI tools", "freelance product designer AI"],
    },
    context: {
      problem: "Good prompts follow a pattern: a role, the task, the context, the constraints and the format you want back. Most people know what they want but not how to say it to a model, so they write one line and get a vague answer. The tool had to capture the right details without feeling like a long form.",
      audience: [
        { who: "Professionals using AI daily", need: "Get reliable results for routine tasks like emails, summaries and reports." },
        { who: "Newcomers to AI tools", need: "Learn what makes a good prompt by seeing one built from their own answers." },
        { who: "Teams sharing prompts", need: "Reuse proven prompts so everyone gets consistent output." },
      ],
      goals: ["Ask only what improves the prompt", "Show the prompt forming as the user answers", "Make the result easy to copy, edit and save", "Teach good structure without a tutorial"],
    },
    approach: [
      { title: "Taking a good prompt apart", text: "I reviewed how strong prompts are put together across common tasks and pulled out the parts that matter most. Each part became one question in the generator." },
      { title: "Choosing the question sets", text: "I grouped tasks into a handful of types, each with its own short set of questions and sensible defaults. Optional questions sit behind a “More detail” link so the main path stays short." },
      { title: "Designing the split screen", text: "I designed a screen with the questions on one side and the live prompt on the other. I worked through long answers, empty fields and very short tasks to keep both sides readable." },
      { title: "Library and mapping rules", text: "I added a library for saving, naming and tagging prompts. Alongside the screens, I handed over the question set for each task type and the rules for how answers map into the prompt." },
    ],
    journey: { title: "From task to ready prompt", steps: ["Pick a task type", "Answer short questions", "Watch the prompt build", "Tweak and copy", "Save to library"], key: 2 },
    structure: {
      root: "Prompt Generator",
      groups: [
        { name: "Generate", items: ["Task types", "Question flow", "Live prompt"] },
        { name: "Output", items: ["Copy", "Edit in place", "Format options"] },
        { name: "Library", items: ["Saved prompts", "Tags", "Recently used"] },
        { name: "Account", items: ["Preferences", "Default tone", "Plan"] },
      ],
    },
    decisions: [
      {
        title: "Live preview beside the questions",
        problem: "If the prompt only appears at the end, users can’t see how each answer changes it, and the form feels like a chore.",
        alt: "A step-by-step wizard that reveals the prompt on its final screen.",
        choice: "I designed a split screen where the prompt builds up as each answer comes in, with the newly added part briefly highlighted.",
        why: "Seeing the effect of every answer makes the questions feel worth filling in and teaches the structure along the way. It needs a wider layout, so on small screens the preview collapses into a drawer.",
      },
      {
        title: "Task type first, questions second",
        problem: "A single generic form would ask too much for simple tasks and too little for complex ones.",
        alt: "One universal form with every field shown.",
        choice: "The user picks a task type first, such as an email, a summary or an analysis, and sees only the questions that type needs, with defaults already filled in.",
        why: "Tailored questions keep the path short and relevant. It does mean maintaining separate question sets, so I documented them as simple tables the team can extend.",
      },
      {
        title: "Plain-language labels, not prompt jargon",
        problem: "Terms like persona, few-shot or output schema mean little to most users and make the tool feel technical.",
        alt: "Expert terminology with tooltip definitions.",
        choice: "I wrote every question in everyday words, like “Who should the AI act as?” and “What should the answer look like?”, while the generated prompt uses the proper structure.",
        why: "Users answer in their own terms and still get a well-built prompt. Anyone curious can read the result and see how their answers were turned into it.",
      },
    ],
    features: [
      { icon: "tasks", title: "Task templates", text: "Start from a task type with its own short question set." },
      { icon: "terminal", title: "Live prompt preview", text: "Watch the prompt take shape as each answer is added." },
      { icon: "gear", title: "Smart defaults", text: "Sensible answers are prefilled, so users only change what matters." },
      { icon: "doc", title: "One-click copy", text: "Copy the finished prompt as plain text, ready for any AI tool." },
      { icon: "book", title: "Prompt library", text: "Save, tag and reuse the prompts that worked." },
    ],
    outcome: [
      "A task picker and a question set for each task type",
      "The split-screen generator with live preview and a mobile drawer",
      "Copy, edit and save flows for finished prompts",
      "A prompt library with tags and recently used prompts",
      "Annotated screens plus the rules that map answers into a prompt",
    ],
    learned: [
      "The best way to teach a skill inside a tool is to let people watch its result form, not to explain it.",
      "Short forms come from choosing what not to ask; every question I cut made the generator better.",
    ],
  },

  "promptspot": {
    tagline: "One spot to find, share and save the prompts that work",
    summary: "PromptSpot is a community where people share prompts that work and discover ones made by others, organised by task. It’s for anyone who uses AI and wants better results without starting from a blank page. I designed the discovery, prompt page and publishing flows, then released the design publicly as a community file.",
    seo: {
      title: "PromptSpot: prompt community UX case study",
      description: "PromptSpot is a community for sharing and discovering AI prompts. How a freelance product designer made prompts easy to browse, judge and reuse.",
      keywords: ["prompt library design", "community platform UX case study", "AI prompt sharing app design", "content discovery UX", "freelance product designer community app", "UI design for AI products"],
    },
    context: {
      problem: "Good prompts are scattered across social posts, forum threads and personal notes, and there’s no easy way to tell which ones produce good results. A plain list of prompts quickly turns into noise. PromptSpot needed to help people find the right prompt for a task and judge its quality before copying it.",
      audience: [
        { who: "Everyday AI users", need: "Find a proven prompt for a task without writing one from scratch." },
        { who: "Prompt writers", need: "Share their work, get credit for it and see how others use it." },
        { who: "Teams and educators", need: "Collect useful prompts into sets they can point others to." },
      ],
      goals: ["Make browsing by task fast", "Show what a prompt produces before it’s copied", "Give authors credit and a reason to share", "Keep quality visible as the library grows"],
    },
    approach: [
      { title: "Looking at how prompts travel", text: "I looked at how people currently pass prompts around and where those formats fall short. The main gaps were context, an example of the output and any signal of quality." },
      { title: "Defining the prompt card", text: "I designed a prompt as a structured object: title, task, prompt text, variables to fill in and a sample result. Everything else in the product is built around that card." },
      { title: "Discovery and community screens", text: "I designed the home feed, task categories, search, prompt pages and author profiles. I kept the visual style quiet so the prompts themselves stay the focus." },
      { title: "Publishing the file", text: "I organised the screens and components into a clean, reusable file. I then released it publicly as a community design file for other designers to explore." },
    ],
    journey: { title: "Finding a prompt that works", steps: ["Browse by task", "Scan prompt cards", "View a sample result", "Fill in the variables", "Copy or save"], key: 2 },
    structure: {
      root: "PromptSpot",
      groups: [
        { name: "Discover", items: ["Home feed", "Task categories", "Search", "Trending"] },
        { name: "Prompt page", items: ["Prompt text", "Variables", "Sample result", "Comments"] },
        { name: "Create", items: ["New prompt", "Mark variables", "Attach a sample"] },
        { name: "Profile", items: ["My prompts", "Saved sets", "Followers"] },
      ],
    },
    decisions: [
      {
        title: "A sample result on every card",
        problem: "Reading a prompt rarely tells you whether it produces a good answer, so people copy it, try it and come back disappointed.",
        alt: "Text-only cards, with upvotes as the only signal of quality.",
        choice: "I made a sample result a required part of publishing, shown as a short preview on each card and in full on the prompt page.",
        why: "Seeing the output lets people judge a prompt quickly and pushes authors to share ones they’ve actually tried. Publishing takes a little longer, which also filters out low-effort posts.",
      },
      {
        title: "Variables instead of edit-and-paste",
        problem: "Shared prompts often contain placeholders like [topic] that users must find and replace by hand, and one is easily missed.",
        alt: "Plain prompt text with the brackets left for the user to edit.",
        choice: "I designed a fill-in field for each variable on the prompt page, so the copied prompt is already complete.",
        why: "It removes a common error and makes a prompt feel like a small tool rather than a snippet. Authors have to mark variables when publishing, so I made that a single highlight-and-tag action.",
      },
      {
        title: "Organise by task, not by AI model",
        problem: "Prompts could be grouped by the model they were written for, but most people start from what they need to get done.",
        alt: "Top-level navigation by AI model.",
        choice: "I made tasks the main way to browse, such as writing, coding, research or design, with the model shown as a small tag on each card.",
        why: "Task-first browsing matches how people arrive with a need. Model tags still allow filtering, without splitting the library into separate silos.",
      },
    ],
    features: [
      { icon: "search", title: "Task-based discovery", text: "Browse prompts by what you want to get done." },
      { icon: "star", title: "Sample results", text: "See what a prompt produces before you copy it." },
      { icon: "code", title: "Fill-in variables", text: "Complete each placeholder in a field and copy a ready prompt." },
      { icon: "book", title: "Saved sets", text: "Collect prompts into sets and share them with others." },
      { icon: "users", title: "Author profiles", text: "Follow prompt writers and see everything they’ve shared." },
    ],
    outcome: [
      "Discovery screens: home feed, task categories, search and trending",
      "A prompt page with variables, sample result and comments",
      "A publishing flow with variable tagging and sample upload",
      "Author profiles and saved sets",
      "A reusable component file, released publicly as a community design file",
    ],
    learned: [
      "In a community product, the shape of a single post decides the quality of the whole library.",
      "Asking authors for a little more effort can raise the quality for everyone who reads.",
    ],
  },

  "ai-resume-builder": {
    tagline: "Tailor your CV to each job without rewriting it from scratch",
    summary: "AI Resume Builder helps job seekers keep one master profile and turn it into a CV tailored to each job they apply for. The AI reads the job description, reorders and rewrites sections, and shows every change for approval. I designed the profile, tailoring and review experience for the web.",
    seo: {
      title: "AI Resume Builder: UX case study",
      description: "AI Resume Builder tailors a CV to each job description. How a freelance product designer kept users in charge of every AI edit, from profile to PDF.",
      keywords: ["AI resume builder design", "CV builder UX case study", "career tech product design", "AI writing tool UX", "freelance product designer AI", "job application app design"],
    },
    context: {
      problem: "Tailoring a CV for each application works, but it takes time, so most people send the same version everywhere. AI can rewrite a CV in seconds, yet it can also overstate experience or shift meaning in ways the applicant would never sign off. The builder had to save time while keeping the person responsible for every word.",
      audience: [
        { who: "Active job seekers", need: "Send a well-matched CV for each role without hours of editing." },
        { who: "Career changers", need: "Present existing experience in the language of a new field." },
        { who: "Students and graduates", need: "Turn limited experience into a clear, credible first CV." },
      ],
      goals: ["Build one master profile, once", "Tailor to a job in a few steps", "Make every AI change visible and reversible", "Export clean, readable CVs"],
    },
    approach: [
      { title: "Separating profile from CV", text: "I started by splitting the user’s full history from any single CV built from it. That model let tailoring change a CV without ever touching the source facts." },
      { title: "Mapping the tailoring flow", text: "I mapped the path from pasting a job description to downloading a finished CV. I focused on where the user needs to review and where the AI can act on its own." },
      { title: "Designing the review editor", text: "I designed an editor that shows the tailored CV with each AI change marked and the job’s key requirements alongside. I iterated until accepting or rejecting a change took one action." },
      { title: "Templates and export", text: "I designed a small set of clean templates that read well for recruiters and applicant tracking systems alike. The hand-off covered editor states, export options and an empty profile." },
    ],
    journey: { title: "From job post to tailored CV", steps: ["Paste the job description", "See matched requirements", "Review suggested changes", "Accept or edit", "Download the CV"], key: 2 },
    structure: {
      root: "AI Resume Builder",
      groups: [
        { name: "Profile", items: ["Experience", "Education", "Skills", "Projects"] },
        { name: "Tailor", items: ["Job description", "Requirement match", "Suggested changes"] },
        { name: "CVs", items: ["All versions", "Templates", "Export"] },
        { name: "Account", items: ["Settings", "Plan"] },
      ],
    },
    decisions: [
      {
        title: "Every AI edit is a suggestion",
        problem: "If the AI silently rewrites a CV, people can end up sending claims they never made, and they stop trusting the tool once they spot one.",
        alt: "Generate a finished tailored CV in one go and let users edit it afterwards.",
        choice: "I designed tailoring as a set of tracked suggestions, each marked in the CV with the original beside it, accepted or rejected one by one or all at once.",
        why: "A CV is a personal statement, so the applicant has to own it. Reviewing takes a little longer than a one-click result, but nothing goes out that the person hasn’t seen.",
      },
      {
        title: "Master profile as single source",
        problem: "When each CV is edited separately, details drift and people forget which version says what.",
        alt: "Independent CV documents, each duplicated from the last.",
        choice: "All facts live in one master profile; each tailored CV is a view of it with its own order and wording, and facts can only be changed in the profile.",
        why: "It keeps dates, titles and achievements consistent across every application. The cost is a second place to edit, so I added a quick jump from any CV line back to its source.",
      },
      {
        title: "Show the match, not a score",
        problem: "Match scores look precise but don’t tell people what to do next, and they encourage stuffing a CV with keywords.",
        alt: "A single match percentage at the top of the editor.",
        choice: "I listed the job’s key requirements next to the CV, each marked as covered, partly covered or missing, and linked to the lines that cover it.",
        why: "A checklist points to specific actions and keeps the focus on real fit. It’s less eye-catching than a score, but more useful.",
      },
    ],
    features: [
      { icon: "doc", title: "Master profile", text: "Enter your history once and build every CV from it." },
      { icon: "search", title: "Requirement matching", text: "See which of the job’s requirements are covered, and where." },
      { icon: "spark", title: "Tracked AI suggestions", text: "Review each AI rewrite next to the original before accepting it." },
      { icon: "layout", title: "Clean templates", text: "Simple layouts that read well for recruiters and screening software." },
      { icon: "upload", title: "Versioned exports", text: "Keep a named CV for each application and download it as a PDF." },
    ],
    outcome: [
      "A profile model that separates source facts from tailored CVs",
      "The tailoring flow from job description to suggested changes",
      "A review editor with tracked suggestions and a requirement checklist",
      "CV templates and an export flow with named versions",
      "Annotated screens and edge cases for the build team",
    ],
    learned: [
      "When AI writes on someone’s behalf, the review step is the product, not an extra.",
      "Replacing a score with a checklist made the screen less flashy and far more useful.",
    ],
  },

  "automated-feedback-system": {
    tagline: "Timely, specific feedback on every piece of work, checked by teachers",
    summary: "Automated Feedback System gives learners detailed AI feedback on their written work, linked to the course rubric and reviewed by their teacher. It’s for schools, course providers and teachers who can’t give every learner detailed comments as often as they’d like. I designed the teacher’s review tools and the learner’s feedback view.",
    seo: {
      title: "Automated Feedback System: UX case study",
      description: "An AI feedback system for learners’ work, built on teacher rubrics. How a freelance product designer kept teachers in charge while feedback arrives sooner.",
      keywords: ["edtech product design case study", "AI feedback tool UX", "AI for teachers design", "learning platform UX designer", "rubric-based assessment UX", "freelance product designer edtech"],
    },
    context: {
      problem: "Detailed feedback is one of the most useful things a learner can get, and one of the slowest things for a teacher to give across a whole class. AI can draft comments quickly, but generic or wrong feedback confuses learners and undermines the teacher. The system had to bring feedback sooner while keeping it accurate, specific and in the teacher’s voice.",
      audience: [
        { who: "Teachers and tutors", need: "Give detailed feedback to every learner without spending evenings on marking." },
        { who: "Learners", need: "Understand what to improve next, and how, while the work is still fresh." },
        { who: "Course coordinators", need: "Keep feedback consistent across classes and see where learners struggle." },
      ],
      goals: ["Base every comment on the course rubric", "Make teacher review quick and confident", "Give learners a clear next step", "Show patterns across a class"],
    },
    approach: [
      { title: "Starting from the rubric", text: "I mapped how rubrics are written and used, since they define what good work looks like for each task. The rubric became the backbone of every screen, for teachers and learners alike." },
      { title: "Designing the teacher’s review", text: "I worked out where teachers spend the most effort when marking and shaped the review tools around it. The aim was for checking AI drafts to be faster than writing comments from scratch." },
      { title: "Shaping the learner view", text: "I designed the feedback page learners see, with comments anchored to their work and a clear priority at the top. I wrote the interface copy in a supportive, specific tone." },
      { title: "Class insights and release", text: "I added a class overview showing which criteria learners find hardest. The hand-off included every review state, the rubric set-up screens and notes on how feedback is released." },
    ],
    journey: { title: "From submission to improvement", steps: ["Learner submits work", "AI drafts rubric feedback", "Teacher reviews by criterion", "Feedback is released", "Learner acts on next step"], key: 2 },
    structure: {
      root: "Automated Feedback System",
      groups: [
        { name: "Assignments", items: ["Task brief", "Rubric", "Submissions"] },
        { name: "Review", items: ["Draft feedback", "Review by criterion", "Release"] },
        { name: "Learner view", items: ["Next step", "Inline comments", "Rubric breakdown"] },
        { name: "Insights", items: ["Class overview", "Hardest criteria", "Learner progress"] },
      ],
    },
    decisions: [
      {
        title: "Every comment cites a criterion",
        problem: "Free-form AI comments can drift into general advice that doesn’t match what the teacher is assessing.",
        alt: "Open-ended AI feedback written as a paragraph per submission.",
        choice: "I designed feedback as short comments, each tied to one rubric criterion and anchored to a passage in the learner’s work.",
        why: "Tying comments to the rubric keeps them relevant and makes them quick to check. It limits the AI to what the course actually assesses, which is the point.",
      },
      {
        title: "Review by criterion across the class",
        problem: "Checking AI feedback learner by learner means rereading the same kinds of comments over and over.",
        alt: "A queue of submissions reviewed one at a time, as in traditional marking.",
        choice: "I added a review mode that groups the AI’s comments on one criterion across the whole class, so a teacher can approve or edit them together, with any single submission still available.",
        why: "Teachers judge a criterion more consistently when comparing many answers side by side. It loses the sense of each learner’s whole piece, so the single-submission view stays a click away from every comment.",
      },
      {
        title: "Lead with one next step",
        problem: "A long list of comments can feel like a wall of criticism, and learners don’t know where to start.",
        alt: "Show the full rubric breakdown with every comment first.",
        choice: "The learner’s page opens with the single most useful next step, then the inline comments, then the full rubric breakdown.",
        why: "One clear action is more likely to be taken than a long list. Everything else is still there for learners who want the detail.",
      },
    ],
    features: [
      { icon: "doc", title: "Rubric set-up", text: "Teachers define the criteria and levels that guide every AI comment." },
      { icon: "spark", title: "Drafted feedback", text: "The AI drafts comments for each criterion as soon as work is submitted." },
      { icon: "tasks", title: "Review by criterion", text: "Check and edit comments on one criterion across the whole class." },
      { icon: "cap", title: "Learner next step", text: "Each learner sees the most useful thing to work on first." },
      { icon: "chart", title: "Class insights", text: "See which criteria a class finds hardest and adjust the teaching." },
    ],
    outcome: [
      "Assignment and rubric set-up screens",
      "Teacher review by criterion and by submission",
      "A release flow with draft and released feedback states",
      "The learner feedback page with next step, inline comments and rubric breakdown",
      "A class insights view and an annotated hand-off",
    ],
    learned: [
      "The AI wrote the drafts; the design work was in making review quick enough that teachers would actually do it.",
      "Reordering the same feedback changed how it would feel to receive, without changing a word.",
    ],
  },

  "private-messaging-app": {
    tagline: "Private chats without sharing your number or being always on",
    summary: "Private Messaging App is a mobile messenger for people who want close conversations without handing out a phone number or showing when they’re online. It puts privacy controls in plain view and keeps notifications calm by default. I designed the iOS and Android app, from onboarding and contacts to chats and privacy settings.",
    seo: {
      title: "Private Messaging App: UX case study",
      description: "A private mobile messaging app with calm defaults. How a freelance product designer made privacy settings visible and easy to understand in every chat.",
      keywords: ["messaging app UX case study", "privacy-first app design", "chat app UI design", "mobile app designer for startups", "secure messaging UX", "freelance mobile product designer"],
    },
    context: {
      problem: "Most messaging apps tie identity to a phone number, show when you’re online and push every message as a notification. For people who value privacy, that means sharing more than they want and feeling always reachable. The app had to make strong privacy the default while still feeling as easy as the messengers people already use.",
      audience: [
        { who: "Privacy-minded people", need: "Talk freely without exposing a phone number or activity status." },
        { who: "Close friends and families", need: "Keep small, trusted groups calm and separate from busy group chats." },
        { who: "People who meet online", need: "Start a conversation with someone new without handing over personal details." },
      ],
      goals: ["Connect without sharing a phone number", "Make privacy settings visible in every chat", "Keep notifications calm by default", "Match the ease of familiar messengers"],
    },
    approach: [
      { title: "Auditing what gets shared", text: "I listed every piece of personal information a typical messenger exposes, from phone number to typing status. Each item became a question: is it needed, and who controls it?" },
      { title: "Designing identity and contacts", text: "I designed onboarding, usernames and invite links as the way people find each other. I made sure adding a contact stayed quick enough to feel familiar." },
      { title: "Chats and privacy controls", text: "I designed the chat list, conversations, groups and the privacy panel inside each chat. Every privacy label is written in plain words, with no security jargon." },
      { title: "Platform polish", text: "I adapted the screens to iOS and Android conventions for navigation and system dialogs. The hand-off covered message states, notification settings and the full mobile component set." },
    ],
    journey: { title: "Starting a private conversation", steps: ["Pick a username", "Share an invite link", "Accept the contact", "Set chat privacy", "Start talking"], key: 3 },
    structure: {
      root: "Private Messaging App",
      groups: [
        { name: "Chats", items: ["Chat list", "Conversation", "Groups", "Archived"] },
        { name: "Contacts", items: ["Username search", "Invite links", "Requests"] },
        { name: "Privacy", items: ["Presence and receipts", "Disappearing messages", "Blocked"] },
        { name: "Settings", items: ["Notifications", "Devices", "Account"] },
      ],
    },
    decisions: [
      {
        title: "Usernames instead of phone numbers",
        problem: "Phone-number identity exposes a personal detail to everyone you talk to and lets anyone with your number find you.",
        alt: "Phone-number sign-up with contacts imported from the address book.",
        choice: "I designed sign-up around a chosen username, with contacts added by username search or an invite link the user can revoke at any time.",
        why: "It keeps personal details private and puts people in control of who can reach them. It gives up the instant contact list of an address book import, so I made invite links quick to share from any app.",
      },
      {
        title: "Presence off by default, and mutual",
        problem: "Read receipts and online status create pressure to reply and reveal patterns of activity.",
        alt: "Presence on by default, with an option to turn it off in settings.",
        choice: "Read receipts, typing indicators and online status start switched off, and a person only sees someone else’s presence if they share their own.",
        why: "Defaults decide what most people experience, so privacy belongs in the default. Making it mutual keeps it fair and rules out one-sided watching.",
      },
      {
        title: "Disappearing timer in the chat header",
        problem: "When disappearing messages are buried in settings, people forget which chats are temporary or miss that a contact changed it.",
        alt: "A setting tucked inside each chat’s info screen.",
        choice: "I placed the disappearing-message timer as a small chip in the chat header, visible to both people, with a note in the conversation whenever it changes.",
        why: "Both people always know how long their messages will last. It takes a little header space, a small cost for something this important.",
      },
    ],
    features: [
      { icon: "users", title: "Username contacts", text: "Add people by username or invite link, never by phone number." },
      { icon: "lock", title: "Per-chat privacy", text: "Each chat shows and controls its own privacy settings." },
      { icon: "bell", title: "Calm notifications", text: "Quiet hours and summary notifications instead of constant pings." },
      { icon: "shield", title: "Mutual presence", text: "Online and read status are only shared when both people choose to." },
      { icon: "chat", title: "Private groups", text: "Invite-only groups with clear admin roles." },
    ],
    outcome: [
      "Onboarding with username sign-up and invite links",
      "Chat list, conversation and group screens for iOS and Android",
      "A per-chat privacy panel with disappearing message controls",
      "Notification settings with quiet hours and summaries",
      "Message state specs and a mobile component set for hand-off",
    ],
    learned: [
      "Privacy features only help if people understand them, so most of my effort went into labels and placement.",
      "Defaults are the strongest design decision in a consumer app, because most people never change them.",
    ],
  },

  "getleads": {
    tagline: "Find, qualify and share sales leads in one team workspace",
    summary: "GetLeads is a lead generation workspace where sales teams find prospects that fit their ideal customer, qualify them quickly and share lists without stepping on each other. I designed the search, triage and team list flows, then shared the design publicly as a community file.",
    seo: {
      title: "GetLeads: lead generation UX case study",
      description: "GetLeads: a lead generation workspace for sales teams. How a freelance product designer turned prospect search, triage and team lists into one clear flow.",
      keywords: ["lead generation tool design", "sales SaaS UX case study", "B2B prospecting app design", "sales workspace UI design", "freelance product designer SaaS", "lead management UX"],
    },
    context: {
      problem: "Prospecting is often split across a search tool, spreadsheets and a CRM, and lists go stale or get duplicated between reps. Searching with long filter sets takes time and still returns many poor-fit leads. The workspace had to make finding the right leads quicker and keep the whole team working from the same lists.",
      audience: [
        { who: "Sales development reps", need: "Build a list of good-fit prospects quickly and get on with outreach." },
        { who: "Sales managers", need: "See who is working which accounts and keep lists clean." },
        { who: "Founders doing sales", need: "Find early customers without setting up a heavy sales stack." },
      ],
      goals: ["Define the ideal customer once", "Qualify new leads quickly", "Avoid two reps contacting the same person", "Hand finished lists to outreach and CRM cleanly"],
    },
    approach: [
      { title: "Mapping the prospecting routine", text: "I mapped how a rep goes from a target market to a list ready for outreach, and where spreadsheets fill the gaps. Those gaps showed the product needed saved targeting, quick triage and shared ownership." },
      { title: "Defining the lead model", text: "I defined how companies, contacts, lists and owners relate, so the same person never appears as two leads. That structure shaped the search results and list views alike." },
      { title: "Designing search and triage", text: "I designed the customer profile builder, the results table and a focused triage queue. I worked through dense data, missing fields and very large result sets." },
      { title: "Workspace and community file", text: "I designed the team workspace with lists, owners and activity. I then organised the components and shared the design publicly as a community file." },
    ],
    journey: { title: "From target market to outreach list", steps: ["Define the ideal customer", "Review matched leads", "Triage keep or skip", "Claim and add to list", "Export to outreach"], key: 2 },
    structure: {
      root: "GetLeads",
      groups: [
        { name: "Find", items: ["Ideal customer profiles", "Search results", "Company view"] },
        { name: "Triage", items: ["New leads queue", "Saved for later", "Skipped"] },
        { name: "Lists", items: ["Team lists", "My leads", "Owners"] },
        { name: "Workspace", items: ["Members", "Activity", "Integrations"] },
      ],
    },
    decisions: [
      {
        title: "Saved customer profiles drive search",
        problem: "Reps rebuild the same long filter sets every time, and small differences between reps produce inconsistent lists.",
        alt: "A search page with every filter exposed and optional saved searches.",
        choice: "I made the ideal customer profile the starting point: the team defines it once by industry, company size, region and roles, and new matches flow in against it.",
        why: "It keeps targeting consistent across the team and removes repeated set-up. Ad hoc filters are still there for one-off searches, a layer down.",
      },
      {
        title: "A triage queue for new leads",
        problem: "Reviewing leads in a large table invites skimming, and good leads get lost among poor fits.",
        alt: "A sortable table with bulk actions only.",
        choice: "I designed a triage queue that shows one lead at a time with its key details, and keep, skip or later on keyboard shortcuts.",
        why: "One decision per lead keeps quality high and turns review into a quick routine. The table stays available for bulk work, so experienced users aren’t slowed down.",
      },
      {
        title: "Claiming leads to avoid collisions",
        problem: "Two reps contacting the same person looks careless and can cost the deal.",
        alt: "Rely on the CRM to flag duplicates after outreach has started.",
        choice: "I added lead claiming: once a rep adds a lead to a list, their name shows on it across the workspace, and others request a hand-over instead of reaching out.",
        why: "Catching overlap before outreach is far better than after. It adds a light step when adding leads, and in return managers get a clear view of who owns what.",
      },
    ],
    features: [
      { icon: "search", title: "Profile-based search", text: "Matching leads arrive based on a saved ideal customer profile." },
      { icon: "tasks", title: "Triage queue", text: "Keep, skip or save each new lead with keyboard shortcuts." },
      { icon: "users", title: "Lead claiming", text: "See who owns each lead and request a hand-over instead of doubling up." },
      { icon: "layout", title: "Shared lists", text: "Team lists with owners, notes and status in one view." },
      { icon: "upload", title: "Outreach export", text: "Send a finished list to outreach and CRM tools." },
    ],
    outcome: [
      "An ideal customer profile builder and search results screens",
      "A triage queue with keyboard actions, plus a table view for bulk work",
      "Team lists with lead claiming and hand-over requests",
      "Workspace, members and activity screens",
      "A reusable component set, shared publicly as a community design file",
    ],
    learned: [
      "In sales tools, the most valuable feature can be one that prevents a mistake rather than one that speeds up a task.",
      "Offering both a focused queue and a dense table let me serve careful reviewers and fast movers without forcing one style on everyone.",
    ],
  },

  "callconnect": {
    tagline: "Make, take and route business calls from the browser",
    summary: "CallConnect is a cloud calling system that lets teams make and receive business calls in the browser, route incoming calls and keep every conversation logged. It’s for support and sales teams who need a phone system without desk phones or complex set-up. I designed the dialler, call handling, routing and call history, and released the design as an open community file.",
    seo: {
      title: "CallConnect: cloud calling UX case study",
      description: "CallConnect: a cloud calling system for sales and support teams. How a freelance product designer made calling, routing and call history clear in one app.",
      keywords: ["VoIP app UI design", "cloud phone system UX", "call centre software design", "telephony SaaS case study", "freelance product designer SaaS", "dialler UI design"],
    },
    context: {
      problem: "Business phone systems are usually configured by one admin and used by everyone else, and both sides find them confusing. Agents need calls to be quick and never interrupted, while admins need to set up routing without a technical background. CallConnect had to serve both in one product.",
      audience: [
        { who: "Support and sales agents", need: "Handle calls quickly and keep notes without switching tools." },
        { who: "Team leads", need: "See who is available and how calls are moving through the team." },
        { who: "Workspace admins", need: "Set up numbers, hours and routing without technical help." },
      ],
      goals: ["Keep the live call in view wherever the agent is", "Capture notes and outcomes while the call is fresh", "Make routing rules readable by anyone", "Give every call a clear history"],
    },
    approach: [
      { title: "Mapping the call lifecycle", text: "I mapped every state a call passes through, from ringing and on hold to transferred, missed and logged. That state map became the basis for the call bar and the history." },
      { title: "Designing for agents first", text: "I designed the dialler, incoming call screen and in-call controls for speed and clarity under pressure. Every common action sits within easy reach on the call bar." },
      { title: "Routing and admin screens", text: "I designed the admin side for numbers, business hours, teams and routing rules. I wrote the routing screens to read as plain sentences rather than technical settings." },
      { title: "Releasing the file", text: "I organised the screens, call states and components into a clean file. I then released it as an open community design file." },
    ],
    journey: { title: "Handling an incoming call", steps: ["Call rings in browser", "See caller context", "Answer and talk", "Transfer or resolve", "Wrap up with notes"], key: 4 },
    structure: {
      root: "CallConnect",
      groups: [
        { name: "Calls", items: ["Dialler", "Call bar", "Incoming call", "Voicemail"] },
        { name: "History", items: ["Call log", "Call details", "Notes and outcomes"] },
        { name: "Team", items: ["Availability", "Live calls", "Queues"] },
        { name: "Admin", items: ["Numbers", "Business hours", "Routing rules", "Users"] },
      ],
    },
    decisions: [
      {
        title: "A call bar that never leaves",
        problem: "In many web phone tools, moving to another page minimises or hides the active call, and agents lose track of hold or mute.",
        alt: "A full-screen call view the agent has to leave to look anything up.",
        choice: "I designed a call bar docked to the top of the app on every page, holding the caller, timer, mute, hold, transfer and end.",
        why: "Agents often need to look up records mid-call, so the call has to follow them. It takes a strip of screen while a call is live and collapses when idle.",
      },
      {
        title: "Wrap-up before the next call",
        problem: "If the next call can ring straight away, notes and outcomes get skipped and the call history turns thin.",
        alt: "A separate notes page agents can fill in later.",
        choice: "When a call ends, the call bar becomes a short wrap-up panel for outcome, notes and follow-up, and the agent marks themselves ready when done.",
        why: "Capturing details while they’re fresh gives the team a usable history. It adds a short pause between calls, which team leads can tune in settings.",
      },
      {
        title: "Routing rules as plain sentences",
        problem: "Routing set-up is usually a maze of nested settings, and admins can’t easily tell what will happen to a call.",
        alt: "A node-based visual flow builder.",
        choice: "I designed routing as a list of readable rules, such as “During business hours, ring Sales; if no one answers, send to voicemail”, each built from simple dropdowns.",
        why: "Sentences can be read and checked by anyone on the team, not just the admin who wrote them. A visual builder offers more power, but the sentence form covers the common cases and stays readable.",
      },
    ],
    features: [
      { icon: "phone", title: "Browser dialler", text: "Make and receive calls in the browser, with no desk phone." },
      { icon: "voice", title: "Persistent call bar", text: "Mute, hold, transfer and end a call from any page." },
      { icon: "users", title: "Team availability", text: "See who is free, busy or wrapping up at a glance." },
      { icon: "gear", title: "Plain-language routing", text: "Set routing rules that read like sentences." },
      { icon: "doc", title: "Call history and notes", text: "Every call logged with its outcome, notes and follow-ups." },
    ],
    outcome: [
      "A call state map covering ringing, hold, transfer, missed and wrap-up",
      "Dialler, incoming call and persistent call bar designs",
      "Call history and call detail screens with notes and outcomes",
      "Admin screens for numbers, business hours and routing rules",
      "A component set with every call state, released as an open community design file",
    ],
    learned: [
      "Mapping every call state before drawing screens kept the design consistent once things got complicated.",
      "Admin screens deserve the same care as the main product, because a confusing set-up is felt by every caller.",
    ],
  },

  "cold-email-outreach": {
    tagline: "Plan, personalise and send cold email campaigns that reach the inbox",
    summary: "Cold Email Outreach Tool helps small sales teams and founders plan email sequences, personalise each message and keep their sending domain healthy. I designed the campaign builder, the recipient preview, the sending health checks and the replies view for the web app.",
    seo: {
      title: "Cold Email Outreach Tool: UX case study",
      description: "A cold email outreach tool for sales teams and founders. How a freelance product designer centred each campaign on deliverability and personalisation.",
      keywords: ["cold email tool design", "email outreach SaaS UX", "sales engagement product design", "email campaign builder UI", "freelance product designer SaaS", "B2B SaaS UX case study"],
    },
    context: {
      problem: "Cold email only works if messages reach the inbox and read as if they were written for one person. Many tools make it easy to send at volume and hard to see when a domain’s reputation is slipping or personalisation has broken. The tool had to make careful sending the easy path.",
      audience: [
        { who: "Founders doing outreach", need: "Reach potential customers without damaging their sending domain." },
        { who: "Sales development reps", need: "Run personalised sequences and spend their time on replies." },
        { who: "Agencies running campaigns", need: "Manage several senders and campaigns and report on what’s working." },
      ],
      goals: ["Make sending health visible before and during campaigns", "Catch broken personalisation before it’s sent", "Build multi-step sequences quickly", "Put replies at the centre of reporting"],
    },
    approach: [
      { title: "Mapping a campaign’s life", text: "I mapped the steps from connecting a mailbox to handling replies, and noted where campaigns usually go wrong. Most problems traced back to set-up and personalisation, not the writing itself." },
      { title: "Designing the sequence builder", text: "I designed a builder for multi-step sequences with delays, conditions and variants. Each step is a readable card, so a whole sequence fits in one view." },
      { title: "Health checks and previews", text: "I designed the sending health panel and a recipient-by-recipient preview. Both sit inside the launch flow so they can’t be skipped by accident." },
      { title: "Replies and reporting", text: "I designed a single replies inbox and a report built around responses. The hand-off covered every campaign state, from draft and paused to finished." },
    ],
    journey: { title: "From draft to replies", steps: ["Connect a mailbox", "Build the sequence", "Preview each recipient", "Pass health checks", "Launch and handle replies"], key: 2 },
    structure: {
      root: "Cold Email Outreach Tool",
      groups: [
        { name: "Campaigns", items: ["All campaigns", "Sequence builder", "Recipients"] },
        { name: "Sending", items: ["Mailboxes", "Domain health", "Schedules"] },
        { name: "Replies", items: ["Unified inbox", "Reply labels", "Paused contacts"] },
        { name: "Reports", items: ["Replies by step", "Bounces", "Unsubscribes"] },
      ],
    },
    decisions: [
      {
        title: "Health checks gate the launch",
        problem: "A new or misconfigured sending domain can land in spam folders, and people often find out only after a campaign has run.",
        alt: "A deliverability tips page and warnings shown in settings.",
        choice: "I put a sending health panel into the launch flow that checks domain authentication, mailbox warm-up and daily sending limits, and holds the launch until critical issues are fixed, with a clear fix for each.",
        why: "Problems are cheapest to fix before the first email goes out. Blocking a launch can frustrate someone in a hurry, so only critical issues block and the rest show as warnings.",
      },
      {
        title: "Preview every recipient, not one template",
        problem: "A template can look perfect while a missing first name or company field produces a broken email for some recipients.",
        alt: "A single template preview with fallback text for empty fields.",
        choice: "I designed a recipient-by-recipient preview that flags any email with missing or odd-looking fields, so it can be fixed or left out before launch.",
        why: "Broken personalisation is what makes cold email look automated. Reviewing flagged recipients takes a moment, and it protects the sender’s reputation.",
      },
      {
        title: "Report on replies, not opens",
        problem: "Open tracking has become unreliable and can make a campaign look better or worse than it is.",
        alt: "A dashboard led by open and click rates.",
        choice: "I built the reports around replies, positive replies and bounces by step, with opens moved to a secondary detail view.",
        why: "Replies are what the user actually wants, and they show which step and variant is working. Leading with them keeps attention on real conversations.",
      },
    ],
    features: [
      { icon: "mail", title: "Sequence builder", text: "Build multi-step sequences with delays, conditions and variants." },
      { icon: "shield", title: "Sending health", text: "Check domain set-up, warm-up and limits before every launch." },
      { icon: "search", title: "Recipient preview", text: "See each personalised email and catch missing fields before sending." },
      { icon: "chat", title: "Unified replies", text: "Handle replies from every mailbox in one inbox, with sequences paused automatically." },
      { icon: "chart", title: "Reply reports", text: "See which steps and variants start conversations." },
    ],
    outcome: [
      "A campaign set-up flow from mailbox connection to launch",
      "A sequence builder with step cards, delays, conditions and variants",
      "The sending health panel and a recipient preview with flagged issues",
      "A unified replies inbox and reply-led reports",
      "Campaign state specs and an annotated hand-off",
    ],
    learned: [
      "In outreach tools, protecting people from their own haste is a feature, as long as the guardrails explain themselves.",
      "Choosing which metric leads the dashboard shapes how people judge their own work.",
    ],
  },
};
