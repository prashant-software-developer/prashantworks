import type { CaseContent } from "./types";

/**
 * In-house work: Prashant's employment at Ringover and Wispel. Shown separately from freelance work.
 * Written from the shipped screens and his resume. No internal data, metrics or research quotes.
 */
export const content: Record<string, CaseContent> = {
  ringover: {
    tagline: "Designing conversational AI that sales teams use on every call",
    summary:
      "At Ringover I work as an in-house product designer on Empower, a call intelligence platform for sales teams, and on the products around it: the mobile app, Simless and AIRO Coach. I take features from a fuzzy problem to shipped screens, across web, iOS, Android and browser extensions, and build many of them in code.",
    seo: {
      title: "Ringover: conversational AI product design",
      description:
        "How I design conversational AI for sales teams at Ringover: Ask Empower, Call Studio, Pitch Room, analytics and admin, from problem framing to shipped UI.",
      keywords: [
        "conversational AI product design",
        "AI assistant UX case study",
        "sales software UX design",
        "call intelligence dashboard design",
        "B2B SaaS product designer",
        "AI product designer case study",
      ],
    },
    context: {
      problem:
        "A sales call produces a lot: a recording, a transcript, an AI summary, flags, coaching signals and follow-up tasks. Reps and managers had the data but not the answers, and each answer lived on a different page. The work was to turn conversations into decisions people could act on in seconds, without making a busy product busier.",
      audience: [
        { who: "Sales reps", need: "Know what to do next after every call, without digging through a transcript." },
        { who: "Sales managers", need: "See who needs coaching and why, across the whole team, in one place." },
        { who: "Revenue leaders", need: "Trust the patterns behind the pipeline, not just the numbers." },
        { who: "Admins", need: "Give the right people the right licences and tools without filing a ticket." },
      ],
      goals: [
        "Make every conversation searchable, explainable and actionable",
        "Put AI inside the workflow, not in a separate tab",
        "Keep one consistent experience across web, mobile and extensions",
        "Ship fast without letting the design system drift",
      ],
    },
    approach: [
      { title: "Frame the problem", text: "Every feature starts with a one-page problem statement agreed with the product manager: who it is for, what they do today, and what good looks like. If we can’t write the sentence, we don’t open Figma." },
      { title: "Map the data, then the screen", text: "Conversation features live or die on data. I map what the system actually knows at each moment of a call before I draw a single layout, so the design never promises an insight we can’t produce." },
      { title: "Prototype in the real product", text: "I design in the shared component library and prototype with real call data patterns, including the messy cases: long calls, silent calls, mixed languages, missing CRM records." },
      { title: "Build, review, refine", text: "I build parts of the front-end myself, review every release against the design, and keep a list of what we learned for the next iteration. Shipping is the middle of the work, not the end." },
    ],
    journey: {
      title: "From a call to the next action",
      steps: ["Call happens", "Transcript and insights", "Ask a question", "Coach or follow up", "Pipeline moves"],
      key: 2,
    },
    structure: {
      root: "Empower",
      groups: [
        { name: "Work", items: ["Ask Empower", "Power dialer", "Logs"] },
        { name: "Understand", items: ["Call Studio", "Flags analytics", "Skills"] },
        { name: "Improve", items: ["Pitch Room", "Coaching", "Notetaker"] },
        { name: "Admin", items: ["Licences", "Integrations", "Settings"] },
      ],
    },
    decisions: [
      {
        title: "An assistant inside the product",
        problem: "Teams already had dashboards they didn’t open. Another report would not change behaviour.",
        alt: "A standalone AI chat page that answers general questions about the account.",
        choice: "Ask Empower sits inside the product, knows the live data and answers with something you can act on: a list, a chart, a draft, a filtered view.",
        why: "Answers you can act on beat answers you can read. Keeping the assistant in context also made its limits clear: it talks about your data, not the world.",
      },
      {
        title: "Behaviour, not just numbers",
        problem: "Call counts and talk time say who is busy, not who is good. Managers coached on gut feel.",
        alt: "A bigger KPI dashboard with more metrics per rep.",
        choice: "Skills and coaching analytics score behaviours drawn from conversations, and every score links back to the moments that produced it.",
        why: "A score you can’t open is a score nobody trusts. Linking to the evidence turned analytics into coaching material.",
      },
      {
        title: "Practice before the real call",
        problem: "Reps learned objection handling on live prospects, which is the most expensive place to learn.",
        alt: "A library of recorded best calls to watch.",
        choice: "Pitch Room: a simulated call with an AI persona, real-time coaching and objection support, so reps practise like it’s a real call.",
        why: "Watching teaches what good sounds like; practising teaches how to do it. The simulation reuses the same insight models as real calls, so feedback stays consistent.",
      },
      {
        title: "Admin that scales with the team",
        problem: "Licence and access changes were slow and error-prone for large teams, and admins couldn’t see what each licence unlocked.",
        alt: "A per-user settings page edited one person at a time.",
        choice: "A licence management view that shows allocation, access and feature availability together, with bulk actions and clear states.",
        why: "Admins think in teams and plans, not individual toggles. Designing for the bulk case made the single case simple too.",
      },
    ],
    features: [
      { icon: "agent", title: "Ask Empower", text: "A context-aware assistant that turns sales data into insights, automation and decisions through conversation." },
      { icon: "voice", title: "Call Studio", text: "Transcripts, AI insights, notes, tags and coaching signals around every call." },
      { icon: "chart", title: "Skills analytics", text: "Behavioural scores from conversations, each linked to the moments behind it." },
      { icon: "users", title: "Pitch Room", text: "AI persona simulations with real-time coaching and objection handling." },
      { icon: "phone", title: "Power dialer", text: "Dial several prospects at once, connect instantly and coach live." },
      { icon: "link", title: "Integrations hub", text: "Connect CRMs, calendars and communication tools and manage how data flows." },
    ],
    chapters: [
      {
        title: "Ask Empower",
        kicker: "An AI revenue assistant inside the product",
        icon: "agent",
        problem:
          "Sales data was scattered across calls, CRM records and reports. Getting an answer, such as which deals went quiet this week, meant exporting, filtering and guessing.",
        thinking: [
          "I started from the questions people actually ask on a Monday morning, not from what the model could do. Most fell into three shapes: find me a list, explain a pattern, draft the next step. Each shape got its own answer format.",
          "The hardest part was trust. An assistant that is confidently wrong once is ignored forever. So answers show their reasoning steps, cite the calls and records they came from, and say when the data isn’t there.",
          "Answers end in actions: launch a campaign from a generated prospect list, open the filtered view, save a report. The conversation is a faster way into the product, not a place to get stuck.",
          "Prompt suggestions on the empty state teach what the assistant is good at, which mattered more than any onboarding tour.",
        ],
        decisions: [
          {
            title: "Show the reasoning",
            problem: "Users couldn’t tell a good answer from a plausible one.",
            alt: "A clean answer with no working shown.",
            choice: "A collapsible reasoning trail and sources under every answer.",
            why: "It costs a little space and buys a lot of trust. Power users open it; everyone else knows it’s there.",
          },
        ],
        images: ["c717438967", "2965ee2ec3", "4c42fab2d3", "9407b11e74", "80fde30ec9", "58c63e47a1"],
      },
      {
        title: "Call Studio and coaching",
        kicker: "The workspace where conversations become intelligence",
        icon: "voice",
        problem:
          "After a call, reps and managers needed the transcript, the AI summary, their notes, tags and coaching signals, but each lived in a different place, so most of it was never read.",
        thinking: [
          "I treated the call as the unit of work and brought everything about it into one studio: transcript, AI-generated insights, notes and tags, coaching signals, and pre- and post-call analysis.",
          "The layout follows the order people think in: what happened (summary), what matters (insights and flags), what to do (actions), and the evidence (transcript) last but always one click away.",
          "Managers and reps open the same call for different reasons, so the studio keeps one layout and changes the emphasis: coaching signals for managers, next steps for reps.",
        ],
        bullets: ["Transcripts", "AI-generated insights", "Notes and tags", "Coaching signals", "Pre- and post-call analysis"],
        images: ["98cce517ef", "21b4c918fe", "a9e1d1fc57"],
      },
      {
        title: "Skills and coaching analytics",
        kicker: "Evaluating performance through behaviour, not just numbers",
        icon: "chart",
        problem:
          "Classic sales metrics tell you volume. Managers wanted to know which skills each rep needed to work on, and to prove it with real moments from calls.",
        thinking: [
          "I designed the analytics around skills drawn from conversations, then built every chart so a manager can drill from team to rep to the exact call moments behind a score.",
          "Comparisons are framed as coaching opportunities, not rankings. The default view shows where a rep improved and where to focus next.",
          "Charts stay deliberately simple. If a manager needs a legend to read it, it doesn’t belong on the first screen.",
        ],
        images: ["748733035a", "9aab49f16f", "cdf36113ab", "6908b73265", "acffe91d7c"],
      },
      {
        title: "Pitch Room",
        kicker: "AI-powered sales practice",
        icon: "users",
        problem: "Reps practised on real prospects. Mistakes on live calls are costly and hard to learn from.",
        thinking: [
          "Pitch Room is a simulation where a rep talks to an AI persona built for a scenario, with real-time coaching, objection handling support and contextual suggestions.",
          "I kept the call screen close to the real call screen, so practice builds the same muscle memory. Coaching appears at the edges, never on top of the conversation.",
          "The goal was simple: help reps practise like it’s a real call, and improve instantly.",
        ],
        bullets: ["Persona-based simulation", "Real-time AI coaching", "Objection handling support", "Contextual suggestions"],
        images: ["edcba38d37"],
      },
      {
        title: "Power dialer and Notetaker",
        kicker: "Outbound at speed, notes without typing",
        icon: "phone",
        problem: "Outbound reps lose time between calls, and notes written after a call miss the details that matter.",
        thinking: [
          "Empower Reach dials several prospects at once, connects reps instantly and gives live AI coaching on every call. The design challenge was speed without chaos: one clear current call, a calm queue, and a single obvious next action.",
          "The Notetaker captures and summarises key call moments automatically and shapes them into notes that follow sales frameworks, so post-call work takes seconds.",
        ],
        images: ["3d9d18d252", "f54fc0e553"],
      },
      {
        title: "Logs, licences, flags and integrations",
        kicker: "The unglamorous screens that make a product usable at scale",
        icon: "gear",
        problem:
          "The logs page was cluttered and hard to scan; licence management was slow for big teams; recurring call signals were invisible; and connecting tools was a support ticket.",
        thinking: [
          "Logs: I rebuilt the page around scanning. Clear columns, strong filters and saved views turned a cluttered list into a clear, scalable data experience for calls, meetings and interactions.",
          "Licences: allocation, user access and feature availability now sit in one view with bulk actions, balancing control, clarity and scale for teams of every size.",
          "Flags analytics: signals such as ‘decision maker not confirmed’, ‘proposal sent’ or ‘follow-up scheduled’ roll up from single calls into patterns across the team.",
          "Integrations: one hub to discover integrations, connect tools like CRMs and calendars, and manage data flow, so setup no longer needs support.",
        ],
        images: ["e5ca6794e7", "95c6d5e3ee", "9889ee8f77", "21e1533cb2", "e501b9e167", "7b202b454a"],
      },
      {
        title: "Mobile, Simless and AIRO Coach",
        kicker: "One experience across every surface",
        icon: "home",
        problem: "The same rep moves between desktop, phone and browser in a day. Each surface had drifted into its own patterns.",
        thinking: [
          "I led UX for onboarding, call logs, campaign dialers and post-call analytics on iOS and Android, and kept them in step with the web through a shared component library.",
          "Simless is an eSIM add-on that gives a mobile line without a physical SIM, logging, transcribing and summarising calls and SMS. The design job was to make a telecom product feel as simple as an app.",
          "AIRO Coach brings the same coaching language to an AI voice agent, so insights read the same wherever they appear.",
        ],
        images: ["259cef3128"],
      },
    ],
    outcome: [
      "Ask Empower, Call Studio, Pitch Room and the AI power dialer designed and shipped",
      "Skills, coaching and flags analytics built around evidence from real calls",
      "Logs, licence management, settings and an integrations hub rebuilt for scale",
      "Mobile onboarding, call logs, dialers and post-call analytics for iOS and Android",
      "A shared component library that keeps web, mobile and extensions consistent",
    ],
    learned: [
      "AI features earn trust through boring things: sources, empty states and honest ‘I don’t know’ answers.",
      "In a product this size, the design system is the strategy. Every shortcut shows up three releases later.",
      "The best analytics screen is the one that ends in an action.",
    ],
  },

  wispel: {
    tagline: "Building a sales engagement platform with the founders, from first sketch to production",
    summary:
      "At Wispel I was an early engineer and designer working directly with the founders on a sales engagement platform. I shaped the product through research and rapid prototypes, designed the interface and marketing visuals, and built much of it: real-time calling, messaging and email on the front-end, and the services behind it.",
    seo: {
      title: "Wispel: sales engagement platform",
      description:
        "How I designed and built a sales engagement platform as an early engineer: real-time calling, messaging and email, a design system and a Chrome extension.",
      keywords: [
        "sales engagement platform design",
        "product designer and developer",
        "real-time calling app UX",
        "design system case study",
        "Chrome extension UX design",
        "startup product engineer portfolio",
      ],
    },
    context: {
      problem:
        "Sales teams were juggling a dialler, an inbox, a CRM and a browser full of tabs. The founders wanted one place to call, message and email prospects, connected to the tools teams already used. As an early team, every screen had to be designed and built by the same few people.",
      audience: [
        { who: "Sales reps", need: "Reach prospects by call, SMS or email without switching tools." },
        { who: "Team leads", need: "See activity across the team and keep the CRM up to date automatically." },
        { who: "Founders", need: "Learn fast what to build next, with real users and quick prototypes." },
      ],
      goals: [
        "One workspace for calls, messages and email",
        "Automatic sync with the CRM and calendar",
        "A design system the small team could build with quickly",
        "Prototypes fast enough to settle feature debates",
      ],
    },
    approach: [
      { title: "Research with the founders", text: "I ran user and market research with the founders and turned what we heard into short problem statements. That list decided the roadmap, not the loudest idea in the room." },
      { title: "Prototype to decide", text: "When we disagreed, I built a quick Next.js prototype instead of arguing in documents. Seeing it work usually settled the question in a day." },
      { title: "Design the system", text: "I designed the product interface and a design system with the components we reused everywhere: call states, inbox rows, composer, contact cards." },
      { title: "Build it end to end", text: "I built the front-end in React and Redux on the Vonage SDK, and services in Node.js, Express and MongoDB on AWS, integrating Freshsales, GoHighLevel and Google APIs." },
    ],
    journey: {
      title: "From prospect to logged conversation",
      steps: ["Open contact", "Call, SMS or email", "Live call controls", "Notes and outcome", "Synced to CRM"],
      key: 2,
    },
    structure: {
      root: "Wispel",
      groups: [
        { name: "Inbox", items: ["Calls", "SMS", "Email"] },
        { name: "Contacts", items: ["Profiles", "Activity", "Tasks"] },
        { name: "Calling", items: ["Dialler", "Call states", "Recordings"] },
        { name: "Settings", items: ["Integrations", "Numbers", "Team"] },
      ],
    },
    decisions: [
      {
        title: "One inbox for every channel",
        problem: "Calls, SMS and email each had their own list, so a single conversation with a prospect was split three ways.",
        alt: "Separate tabs per channel, mirroring the tools teams already used.",
        choice: "A single inbox ordered by person, with every channel in one thread.",
        why: "Reps think in people, not channels. One thread made context obvious and cut the switching.",
      },
      {
        title: "Call state you can’t miss",
        problem: "Real-time calls have many states: ringing, connected, on hold, muted, transferring. Getting them wrong is costly mid-call.",
        alt: "A small status label in the corner of the screen.",
        choice: "A persistent call bar with large, distinct states and the two most-used controls always in the same place.",
        why: "During a call, attention is on the person, not the screen. The interface had to be readable at a glance.",
      },
      {
        title: "Meet reps in the browser",
        problem: "Reps spent their day in the CRM and on prospects’ websites, not in our app.",
        alt: "Ask them to keep the web app open in a second window.",
        choice: "A Chrome extension that brings calling and messaging to whatever page they’re on.",
        why: "Adoption follows convenience. Going to where the work already happens beat asking people to change habits.",
      },
    ],
    features: [
      { icon: "phone", title: "Real-time calling", text: "Browser calling on the Vonage SDK with clear call states and controls." },
      { icon: "chat", title: "Unified inbox", text: "Calls, SMS and email with each prospect in one thread." },
      { icon: "link", title: "CRM sync", text: "Activity flows to Freshsales and GoHighLevel automatically." },
      { icon: "layout", title: "Design system", text: "Shared components that let a small team ship fast and consistently." },
      { icon: "code", title: "Chrome extension", text: "Calling and messaging on any page reps already use." },
    ],
    system: [
      { name: "Interface", items: ["React", "Redux", "Next.js prototypes", "Chrome extension"] },
      { name: "Real-time", items: ["Vonage SDK", "Call and SMS events"] },
      { name: "Services", items: ["Node.js", "Express", "MongoDB"] },
      { name: "Cloud & integrations", items: ["AWS", "Freshsales", "GoHighLevel", "Google APIs"] },
    ],
    chapters: [
      {
        title: "The platform",
        kicker: "Calling, messaging and email in one workspace",
        icon: "phone",
        problem: "The core product had to make real-time communication feel simple while staying in sync with external CRMs.",
        thinking: [
          "I designed the call, inbox and contact screens together, because a call always starts from a person and ends in a log. Treating them as one flow kept the states consistent.",
          "Building the front-end myself meant designs were tested against real SDK events early, which caught edge cases like dropped calls and delayed SMS receipts before they reached users.",
        ],
      },
      {
        title: "Design system",
        kicker: "The components that let a small team move fast",
        icon: "layout",
        problem: "With a few people designing and building, every inconsistency multiplied.",
        thinking: [
          "I set up tokens and components for the patterns we used most: call bars, inbox rows, composer, contact cards, empty states and toasts.",
          "Components were designed with their states up front (loading, error, empty, disabled), which is where most of the build time goes.",
        ],
      },
      {
        title: "Chrome extension and marketing",
        kicker: "Taking the product to where reps already work",
        icon: "megaphone",
        problem: "Reps lived in their CRM and in prospects’ websites, and the product needed visuals to win them over.",
        thinking: [
          "The extension brings calling and messaging into any page with a compact panel that mirrors the web app’s states.",
          "I also designed the marketing visuals and social ads, so the story the product told matched what people saw when they signed up.",
        ],
      },
      {
        title: "Accioibis learning platform",
        kicker: "An AI-powered IELTS and TOEFL learning product",
        icon: "cap",
        problem: "Test takers needed structure: a plan, practice and a clear view of progress.",
        thinking: [
          "I designed personal learning paths, mock tests and performance analytics that show exactly what to work on next.",
          "Motivation was a design problem as much as content: progress is visible on every screen, and each session ends with one clear next task.",
        ],
        images: ["d70b058239"],
      },
    ],
    outcome: [
      "Product vision shaped with the founders through research and rapid prototypes",
      "Product interface, design system and marketing visuals designed",
      "Real-time calling, messaging and email built in React and Redux on the Vonage SDK",
      "Node.js, Express and MongoDB services on AWS integrating Freshsales, GoHighLevel and Google APIs",
      "A Chrome extension and an AI-powered IELTS and TOEFL learning platform designed",
    ],
    learned: [
      "In an early team, a working prototype ends more debates than any document.",
      "Designing the states first (loading, error, empty) is where real-time products are won or lost.",
    ],
  },
};
