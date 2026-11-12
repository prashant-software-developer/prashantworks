import { slide, type BlogPost } from "../blog-shared";

export const plan2b: BlogPost[] = [
  {
    slug: "empty-states-are-onboarding",
    day: 9,
    plan: 2,
    date: "2026-12-13",
    track: "Founders",
    title: "Your empty states are your onboarding",
    standfirst: "The first screen a new user sees is almost always empty. Most products put a grey box there that says \"No data yet\". The good ones use that screen to teach: what goes here, one button to add the first thing, and an example of what full looks like.",
    heroAlt: "Isometric empty-state unit: a blank sheet beside a filled sheet, one accent block marking the first item",
    keywords: ["empty state design", "onboarding UX", "first-run experience", "zero data state", "product onboarding", "UX patterns", "blank slate design", "activation"],
    takeaways: [
      "The empty state is the moment a new user decides whether to continue; it deserves more design than the full state.",
      "Three rules: say what goes here in the user's words, give one button to add the first thing, and show a faded example of what full looks like.",
      "Celebrate the first item quietly, then get out of the way.",
    ],
    body: [
      { t: "p", text: "Product teams design the full state. The screenshot in the pitch deck shows a dashboard with months of data, a project with a dozen tasks, an inbox with activity. No new user ever sees that screen. The screen they see is the same one with nothing on it, and in most products it has been designed by nobody." },
      { t: "p", text: "\"No items yet.\" That is the entire onboarding for a surprising number of products, and it is the moment the user decides whether this thing is going to be worth the effort. Here are the three rules I design empty states by, and one extra for what happens after." },

      { t: "h2", text: "Rule 1: say what goes here, in the user's words" },
      { t: "p", text: "Not \"No projects\". Something like \"This is where your client work lives. Start with the one you are working on this week.\" One sentence that names what the space is for and connects it to a job the user already has. The sentence does the work a product tour tries to do, without interrupting anything, at the moment the user is actually looking." },

      { t: "h2", text: "Rule 2: one button to add the first thing" },
      { t: "p", text: "Not three options. One primary action, phrased as the first step: \"Add your first project\", \"Paste a URL\", \"Import from CSV\" if import is the realistic path. If there are two real ways to start, show one and make the other a text link. The empty state is not the place for a choice; it is the place for a start." },

      { t: "h2", text: "Rule 3: show what full looks like" },
      { t: "p", text: "A lightly faded example of the screen with real-looking content in it, behind or beside the empty message. Users understand a product by seeing it used, and the example answers the question \"what will I get if I do this\" before they have to commit. For AI products this is the strongest version of the rule: show one example output in the empty state and the user knows exactly what the product does." },

      { t: "h2", text: "Rule 4: celebrate the first item, quietly" },
      { t: "p", text: "When the first project, invoice or document appears, acknowledge it in a line and then get out of the way. No confetti, no modal, no \"great job\". A single quiet confirmation that the thing worked and a hint at the next step: \"Added. Most people add their team next.\" Then the product is a product." },

      { t: "table", head: ["Grey box", "Designed empty state"], rows: [
        ["\"No projects yet.\"", "\"This is where your client work lives. Start with this week's.\""],
        ["Three buttons", "One button: \"Add your first project\""],
        ["Blank", "A faded example of a full project list"],
        ["Nothing on success", "\"Added. Most people add their team next.\""],
      ] },

      { t: "callout", title: "The audit", text: "Open your product with a brand-new account and screenshot every empty screen. Each one is an onboarding step you have not designed yet." },

      { t: "h2", text: "Why this beats a product tour" },
      { t: "p", text: "A tour explains the product before the user has a reason to care, and most users close it; Userpilot's benchmark puts average onboarding-flow completion around 19%. An empty state explains one screen at the moment the user is on it, with the action they need and the result they will get. It is cheaper to build, impossible to skip, and it scales to every screen in the product instead of the five the tour covers." },
    ],
    faq: [
      { q: "What is an empty state in UX?", a: "The version of a screen a user sees when there is no data in it yet, such as a new account's project list. It is the first screen most new users see and functions as onboarding whether or not it was designed as such." },
      { q: "What should an empty state contain?", a: "One sentence saying what the space is for in the user's words, one primary button to add the first item, and a faded example of what the screen looks like when full." },
      { q: "Are empty states better than product tours?", a: "Usually. Tours are skipped by most users (around 19% completion in Userpilot's benchmark) and explain things before the user needs them. An empty state explains one screen at the moment the user is on it." },
    ],
    forFounders: "Open a new account on your product and send me the screenshots. The free teardown will design the three most important empty states on one page.",
    forLabs: "A task programme's empty state is the first task a new author writes. A worked example, one spec and a scored trial do the same job as the three rules above.",
    sources: [
      { title: "Userpilot, SaaS Onboarding Benchmarks (onboarding completion)", url: "https://userpilot.com/blog/saas-onboarding-benchmarks/" },
      { title: "Case studies on this site", url: "https://www.prashantworks.com/work" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "pricing-page-three-tiers-one-anchor",
    day: 10,
    plan: 2,
    date: "2026-12-14",
    track: "Founders",
    title: "Pricing page: three tiers, one anchor",
    standfirst: "How I lay out a pricing page so the middle tier wins without tricks: three tiers, the one you want sold visibly marked, monthly and yearly both shown, features written as outcomes, and the one question everybody has answered under the table.",
    heroAlt: "Isometric pricing plinths: three columns of different heights, the middle one with an accent marker",
    keywords: ["pricing page design", "SaaS pricing page", "pricing tiers", "pricing page best practices", "anchor pricing", "pricing UX", "conversion rate pricing", "startup pricing"],
    takeaways: [
      "Three tiers. More choices means more visitors leave without choosing.",
      "Mark the tier you want sold, show monthly and yearly prices together, and write features as outcomes rather than checkboxes.",
      "Answer \"what if I need more?\" in one line under the table; it is the question every visitor has.",
    ],
    body: [
      { t: "p", text: "A pricing page has one job: let a visitor who already wants the product pick a plan without having to think hard. Most pricing pages fail at it in one of two ways. Too many options, so the visitor postpones the decision. Or features listed as checkboxes nobody understands, so the visitor cannot tell which plan is theirs. Here is the layout I use, element by element." },

      { t: "h2", text: "Three tiers" },
      { t: "p", text: "Not two, which leaves no middle to recommend, and not five, which turns a purchase into a research project. Three tiers map onto the three questions a visitor is asking: is there a cheap way to try this, what do most people pick, and what does the serious version cost. Name them for who they are for, not for size: \"Solo\", \"Team\", \"Company\" beats \"Basic\", \"Pro\", \"Enterprise\"." },

      { t: "h2", text: "Mark the one you want sold" },
      { t: "p", text: "The middle tier is the anchor. Give it a visible mark, a border, a \"Most popular\" label, a slight lift, and nothing else on the page competes with it. Most visitors pick the marked option, partly because it is marked and partly because the marked option is usually the right one. That is not a trick; it is the product telling the truth about what most customers need." },

      { t: "h2", text: "Monthly and yearly, both visible" },
      { t: "p", text: "A toggle that hides one of them creates a surprise at checkout. Show the monthly price large and the yearly equivalent small beneath it, or the reverse if yearly is the default, with the saving stated in currency rather than percentage. Nobody should discover the real price on the payment screen." },

      { t: "h2", text: "Features as outcomes" },
      { t: "p", text: "\"Reports: ✓\" tells the visitor nothing. \"Unlimited reports, exported to PDF\" tells them what they get. \"API access: ✓\" versus \"Connect your own tools through the API\". Every row in the feature list should answer \"what can I do on this plan that I cannot do on the one below it\". If a row is the same on every plan, it is not a differentiator and it belongs in a sentence above the table, not in the table." },

      { t: "h2", text: "Answer \"what if I need more?\"" },
      { t: "p", text: "Under the table, one line: what happens when a Team plan customer hits the limit. Overage pricing, an upgrade path, a \"talk to us\". This is the question every visitor who is seriously considering the product has, and most pricing pages make them email to ask. Answer it on the page and the serious visitors stay." },

      { t: "table", head: ["Element", "Rule"], rows: [
        ["Tiers", "Three, named for who they are for"],
        ["Anchor", "The middle tier, visibly marked, nothing competing"],
        ["Price", "Monthly and yearly both visible, saving in currency"],
        ["Features", "Outcomes, only the rows that differ between tiers"],
        ["Under the table", "\"What if I need more?\" answered in one line"],
        ["Not on the page", "Countdown timers, fake scarcity, hidden fees"],
      ] },

      { t: "callout", title: "The test", text: "Show the page to someone for ten seconds and ask which plan they would pick and why. If they cannot answer, the page needs fewer things on it." },

      { t: "h2", text: "A note on the free tier" },
      { t: "p", text: "A free tier is a product decision, not a pricing-page one. If you have one, it belongs on the page as a fourth, visually smaller option, or as a line above the three tiers, not as an equal column. Its job is to let people try; the three tiers' job is to let people buy. Keeping them visually distinct keeps the decision simple." },
      { t: "gallery", items: [
        { src: slide("pricing-page-three-tiers-one-anchor", 2), alt: "Slide: three tiers, not five" },
        { src: slide("pricing-page-three-tiers-one-anchor", 3), alt: "Slide: mark the one you want sold" },
        { src: slide("pricing-page-three-tiers-one-anchor", 5), alt: "Slide: features as outcomes" },
        { src: slide("pricing-page-three-tiers-one-anchor", 6), alt: "Slide: answer what if I need more" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "How many pricing tiers should a SaaS have?", a: "Three. Two leaves no middle option to recommend; five or more turns the purchase into a research project and more visitors leave without choosing." },
      { q: "Which pricing tier should be highlighted?", a: "The one you want most customers on, usually the middle tier. Mark it visibly and make sure nothing else on the page competes with it." },
      { q: "Should a pricing page show monthly or yearly prices?", a: "Both, together. Hiding one behind a toggle creates a surprise at checkout. Show one large and the other beneath it, with the saving in currency." },
    ],
    forFounders: "Send your pricing page link and the free teardown will come back with the tier structure, the anchor, and the rewritten feature rows.",
    forLabs: "Pricing for task work follows the same principle: by complexity, in writing, with \"what if we need more\" answered before the pilot starts.",
    sources: [
      { title: "Services and pricing on this site, laid out this way", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "hard-but-fair-calibrating-task-difficulty",
    day: 11,
    plan: 2,
    date: "2026-12-15",
    track: "AI labs",
    title: "Hard but fair: how I calibrate task difficulty",
    standfirst: "Too easy teaches nothing. Too hard for the wrong reason teaches the wrong thing. The target is a task a strong engineer solves and a frontier model solves sometimes, and the only way to know you have hit it is to run real models and read why they failed.",
    heroAlt: "Isometric difficulty dial: two large dials on a panel, one pointer at hard, a row of five indicator lights",
    keywords: ["task difficulty calibration", "benchmark difficulty", "hard tasks for AI", "evaluation task design", "pass rate targets", "agentic benchmark design", "model capability measurement", "task authoring"],
    takeaways: [
      "The target difficulty: a strong engineer solves it; a frontier model solves it sometimes. Every model passing means too easy; no model passing means check the task before calling it hard.",
      "Hard for the right reason: the model misses a real engineering step. Hard for the wrong reason: a vague spec, a flaky environment, a trick.",
      "Fair difficulty levers: more interacting components, a second bug, a stricter output contract. Unfair levers: ambiguity, hidden requirements, gotchas.",
    ],
    body: [
      { t: "p", text: "Difficulty is the least discussed part of task authoring and the one that decides whether a benchmark is worth anything. A task every model passes is a unit test. A task no model passes is either a frontier or a bug, and the leaderboard cannot tell you which. Here is how I set difficulty and how I check that it landed where I meant." },

      { t: "h2", text: "The target" },
      { t: "p", text: "A task a strong engineer in the domain solves in a sitting, and a frontier model solves sometimes. \"Sometimes\" is the useful region: a pass rate that is neither zero nor one carries information about the model, and a pass rate that moves between model versions is what a benchmark exists to produce. If every model you run passes every time, raise the difficulty. If none passes ever, do not raise anything yet. Check the task." },

      { t: "h2", text: "Why 0% is a warning, not a badge" },
      { t: "p", text: "Anthropic's evals guide puts it plainly: a 0% pass rate across many attempts usually means a broken task rather than an impossible one. The guide's example, a benchmark score that moved from 42% to 95% after grading bugs and scaffold problems were fixed, shows how much of apparent difficulty is accident. Before a task is called hard, the failed trajectories have to be read, and the failure cause has to be a real engineering step the model missed, not a spec it could not parse or a container that ran out of memory." },

      { t: "h2", text: "Hard for the right reason, hard for the wrong reason" },
      { t: "table", head: ["Right reason (keep)", "Wrong reason (fix)"], rows: [
        ["The model misses a step a senior engineer would take", "The spec leaves two valid readings"],
        ["The bug is silent and needs reasoning about numerics", "The environment drifts or flakes"],
        ["Two components interact in a non-obvious way", "A requirement exists only in the author's head"],
        ["The output contract is strict and stated", "The test accepts only one implementation"],
        ["The task needs several tools used together", "A trick: a misleading comment, a decoy file"],
      ] },
      { t: "p", text: "The right-hand column makes a task harder and teaches the model nothing, because the model that fails it has not failed at engineering. Worse, a model that passes it has learned to read the author's mind, which is not a capability anyone wants to train." },

      { t: "h2", text: "The levers that keep it fair" },
      { t: "ul", items: [
        "**More interacting components.** The bug is in how two modules talk, not inside one of them.",
        "**A second bug.** Fixing the obvious one exposes the next; the task is done only when both are.",
        "**A stricter output contract.** An exact schema, a tolerance, a performance bound, all stated in the spec.",
        "**Larger scope.** The fix touches three files instead of one, with a test that checks them together.",
        "**Realistic noise.** A codebase with the usual cruft, not a toy, so finding the relevant part is part of the task.",
      ] },

      { t: "h2", text: "The process" },
      { t: "ol", items: [
        "Write the task and the reference solution. Run the reference ten times in a fresh container.",
        "Run two or three real models, several attempts each. Record pass rates.",
        "Read every failed trajectory. Group by cause. Fix anything in the wrong-reason column.",
        "If pass rates are all 100%, pull a fair lever and go back to step 1. If all 0%, look harder at step 3.",
        "Ship when the pass rate is in the informative region and every failure you read was a real step missed.",
      ] },

      { t: "callout", title: "Terminal-Bench 2.0 does this", text: "The benchmark verified every task with multiple runs before acceptance, precisely because a task nobody can solve measures nothing, and a task everyone solves measures nothing either." },

      { t: "h2", text: "What difficulty is for" },
      { t: "p", text: "A benchmark exists to separate models that will be built next year from the ones that exist now. That requires tasks in the band where today's models sometimes fail and tomorrow's will sometimes pass. Setting that band is a craft, and the tools are the ones above: run real models, read the runs, fix the wrong reasons, keep the right ones." },
    ],
    faq: [
      { q: "How hard should a benchmark task be?", a: "Hard enough that a frontier model solves it only sometimes, and never so hard that no model solves it without first checking that the task itself works. A strong engineer in the domain should be able to solve it in a sitting." },
      { q: "What makes a task hard for the wrong reason?", a: "Ambiguous specs, flaky environments, requirements that exist only in the author's head, tests that accept one implementation, and tricks such as misleading comments. These make tasks harder without measuring any engineering capability." },
      { q: "How do you make a task harder fairly?", a: "Add interacting components, a second bug that appears after the first is fixed, a stricter stated output contract, a larger scope across files, or realistic codebase noise. All of these raise difficulty through real engineering steps." },
    ],
    forFounders: "Feature complexity has the same two columns. Hard because the problem is hard is fine. Hard because the spec was vague is a cost you can delete.",
    forLabs: "Send one task and the free review will say which column its difficulty comes from, with the trajectory evidence.",
    sources: [
      { title: "Anthropic Engineering, Demystifying evals for AI agents, 9 Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "Terminal-Bench 2.0 paper (multi-run task verification), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "how-we-staff-a-task-programme-in-a-week",
    day: 12,
    plan: 2,
    date: "2026-12-16",
    track: "AI labs",
    title: "\"How fast can you staff it?\" One week. Here's how",
    standfirst: "Staffing a task programme in a week is not about hiring fast. It is about filtering fast. A scored trial task on the client's own rubric does most of the work before anyone is onboarded. The schedule, day by day.",
    heroAlt: "Isometric intake line: seven small figures on a conveyor passing through an inspection gate, the last one in accent blue",
    keywords: ["staffing AI data programme", "scaling annotation team", "task author onboarding", "AI training data team", "expert recruitment AI data", "programme ramp-up", "data labeling team setup", "managed data team"],
    takeaways: [
      "Day 1: a scored trial task on the client's rubric filters most applicants. Day 2: a one-page guideline and one recorded live session. Days 3–5: a small first batch with every author paired with a reviewer.",
      "Every day from day 3: pass rate per author, and only those who clear the bar continue.",
      "The speed comes from the filter, not the hiring. A trial on the real rubric removes most of the onboarding that would otherwise be wasted.",
    ],
    body: [
      { t: "p", text: "The second question labs ask, after \"can you do this\", is \"how fast\". The honest answer for a new domain is one week to a working team producing accepted tasks, and the reason it can be a week is that most of the time in a normal ramp-up is spent onboarding people who will not make it. Filter first, onboard the survivors, and the week is enough. Here is the schedule." },

      { t: "h2", text: "Day 1: the scored trial" },
      { t: "p", text: "Before anyone is briefed, every candidate completes a trial task built to the client's spec and scored against the client's rubric by tests. Not a generic quiz. The trial takes a few hours and most candidates do not pass, which is the point: it removes the people who would have consumed onboarding time and produced rejected tasks. The candidates come from a pool that already exists; day one is about the gate, not the search." },

      { t: "h2", text: "Day 2: the guideline and the session" },
      { t: "p", text: "The people who passed get two things. A one-page guideline: the spec, the end state, what is out of scope, one worked example that passed review, the pre-submission checklist. And one live session, an hour, recorded, where the guideline is walked through and the first questions are answered. One page and one hour, because longer guidelines are not read and longer sessions are not remembered." },

      { t: "h2", text: "Days 3 to 5: the first small batch" },
      { t: "p", text: "Each author writes a small number of tasks, and each author is paired with a reviewer who reads every item and sends written feedback the same day. The batch is deliberately small so feedback arrives before habits form. Questions from the batch go into the guideline that evening, so day four's tasks are written against a better page than day three's." },

      { t: "h2", text: "Every day: the pass rate per author" },
      { t: "p", text: "From day three, every author has a number: the share of their items that passed second review. Authors who clear the bar continue. Authors who do not get one round of targeted feedback and one more small batch. If the number does not move, they leave the programme, with thanks, before their work reaches the client. The team that exists on day six is smaller than the one that started on day one and produces work that is accepted." },

      { t: "table", head: ["Day", "What happens", "Output"], rows: [
        ["1", "Scored trial on the client's rubric", "The shortlist"],
        ["2", "One-page guideline, one recorded hour", "A briefed team"],
        ["3–5", "Small batch, every item reviewed, same-day feedback", "First accepted tasks; guideline v2"],
        ["Daily", "Pass rate per author", "A team that clears the bar"],
        ["6+", "Volume, same review gates", "Weekly report"],
      ] },

      { t: "callout", title: "Why it works", text: "A scored trial on the client's own rubric does in a few hours what a month of onboarding does badly: it finds out who can follow the guideline exactly. Everything after that is faster because the team is already the right team." },

      { t: "h2", text: "What the client does during the week" },
      { t: "p", text: "Two things. Approve the trial task on day zero, or send the one they consider a fair test. And answer the guideline questions that come out of days three to five within a day, because those answers become the rubric the volume runs on. Beyond that, the client sees the first batch and the first report at the end of the week, and decides." },
    ],
    faq: [
      { q: "How long does it take to staff an AI training data programme?", a: "One week to a team producing accepted tasks: a scored trial on day one, guideline and briefing on day two, a reviewed first batch on days three to five, and daily pass rates deciding who continues." },
      { q: "How do you vet task authors quickly?", a: "With a scored trial task built to the client's spec and graded by tests against the client's rubric, before any onboarding. Most candidates do not pass, which removes the wasted onboarding time." },
      { q: "What does a task-author guideline contain?", a: "One page: the spec, the end state, what is out of scope, one worked example that passed review, and the pre-submission checklist. It is updated every evening from the day's questions." },
    ],
    forFounders: "Hiring for a product team follows the same shape: a small paid trial on the real work beats a month of interviews, and a one-page brief beats a long onboarding document.",
    forLabs: "The week starts with the trial task. Send yours, or let the free review of one of your tasks show you what the trial would look like.",
    sources: [
      { title: "Own delivery practice, as run on every programme", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Start with a free 48-hour task review", topic: "data" },
  },

  {
    slug: "case-study-a-voice-agent-for-calls",
    day: 13,
    plan: 2,
    date: "2026-12-17",
    track: "Founders",
    title: "Case study: a voice AI agent for calls",
    standfirst: "A voice agent that takes calls is only as good as the screen a human sees after the call. What was said, what was promised, what happens next, and one click to correct the agent. I designed and built that screen. Here is how.",
    heroAlt: "Isometric call agent: a phone standing on a plate, wired to a transcript panel and an accent action block",
    keywords: ["voice AI agent", "AI phone agent", "voice agent UX", "conversational AI design", "AI calls product", "post-call screen", "voice AI case study", "human in the loop voice AI"],
    takeaways: [
      "The hard part of a voice agent is not the voice. It is the handoff: what a person sees after the call and what they have to do about it.",
      "The post-call screen has four parts: transcript, summary with what was promised, next actions, and one place to correct the agent.",
      "Corrections feed back into the agent's instructions, so the screen is also how the agent improves.",
    ],
    body: [
      { t: "p", text: "Voice agents are impressive in a demo. The voice is natural, the latency is low, the agent handles an interruption. What the demo never shows is the next morning, when a person has to find out what the agent said to forty callers and whether any of it needs fixing. That morning is the product. This case study is about designing for it." },

      { t: "h2", text: "The brief" },
      { t: "p", text: "A voice agent that answers inbound calls for a service business, handles routine requests, books appointments and takes messages, with a human team reviewing what it did. The client wanted the agent to take calls on its own. The team wanted to be able to trust it. Those two wants meet on one screen." },

      { t: "h2", text: "What the agent produces" },
      { t: "p", text: "For every call: a recording, a transcript, a structured summary (caller, reason, outcome), a list of commitments the agent made (an appointment time, a callback, a quote), and the actions it took (booked, messaged, escalated). That is a lot per call. The design problem was turning it into something a person processes in seconds." },

      { t: "h2", text: "Decision 1: lead with commitments" },
      { t: "p", text: "The thing a human most needs to know is what the agent promised on the company's behalf. So the post-call card leads with commitments: \"Booked Tuesday 10am. Promised a callback about pricing.\" Each commitment links to the exact moment in the recording. The summary and transcript are one click below. A reviewer scanning forty calls reads forty commitment lines, not forty transcripts." },

      { t: "h2", text: "Decision 2: next actions as buttons" },
      { t: "p", text: "Every commitment implies an action: confirm the booking, make the callback, send the quote. The card offers those as buttons with sensible defaults, so the reviewer's job is to confirm rather than compose. Where the agent already completed the action, the button shows done and links to the evidence. The reviewer's time goes to the exceptions." },

      { t: "h2", text: "Decision 3: one place to correct the agent" },
      { t: "p", text: "When the agent gets something wrong, misunderstands a request, promises something it should not, the reviewer needs to fix the outcome and prevent the repeat. Both happen on the card. \"Fix\" edits the commitment or action. \"Teach\" opens a one-line correction that is added to the agent's instructions, reviewed by an admin, and applied to future calls. The screen that catches mistakes is the screen that reduces them." },

      { t: "table", head: ["Card section", "Contents", "Reviewer action"], rows: [
        ["Commitments", "What the agent promised, linked to the recording", "Confirm or fix"],
        ["Actions", "What the agent did, with evidence", "Done, or do it"],
        ["Summary", "Caller, reason, outcome", "Read if needed"],
        ["Transcript", "Full text with timestamps", "Read if needed"],
        ["Teach", "One-line correction to the agent's instructions", "Submit for admin review"],
      ] },

      { t: "callout", title: "The rule that came out of it", text: "A voice agent is only as good as the screen after the call. Design that screen before you tune the voice." },

      { t: "h2", text: "What was delivered" },
      { t: "p", text: "Six screens: the call queue, the post-call card, the commitment and action detail, the teach flow, the admin review of corrections, and a daily summary. Designed and built, with the agent integration, the transcript pipeline and the correction loop. The client is not named; the call scenarios shown in the designs are realistic service-business calls, not real recordings." },
    ],
    faq: [
      { q: "What is the hardest part of building a voice AI agent?", a: "Not the voice. It is the handoff to a human after the call: showing what was said, what was promised and what happens next in a form a person can review in seconds, with a way to correct the agent." },
      { q: "What should a post-call review screen show?", a: "Commitments the agent made (linked to the recording) first, then actions taken with evidence, then summary and transcript one click away, and a single place to fix an outcome and teach the agent." },
      { q: "How does a voice agent improve from human review?", a: "Corrections made on the post-call screen become one-line additions to the agent's instructions, reviewed by an admin and applied to future calls, so the review screen doubles as the training loop." },
    ],
    forFounders: "Building an agent product? Send the screen your users see after the agent acts. The free teardown will show whether it leads with commitments or with output.",
    forLabs: "Evaluating voice or conversational agents has the same structure: grade the commitments and actions the agent produced, not the fluency of the transcript.",
    sources: [
      { title: "Case study on this site: voice AI agent for calls", url: "https://www.prashantworks.com/work/ai-calls" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "gdpval-and-the-shift-to-real-work-tasks",
    day: 14,
    plan: 2,
    date: "2026-12-18",
    track: "AI labs",
    title: "Benchmarks are moving to real work. GDPval shows how",
    standfirst: "OpenAI's GDPval has 1,320 tasks across 44 occupations, written by professionals averaging 14 years of experience and graded blind by their peers. Frontier models were rated as good as or better than experts on just under half. The gap is closing, which makes the tasks the scarce thing.",
    heroAlt: "Isometric real-work bench: a wide panel of raised tiles, stacks of documents of different depths, and a dial",
    keywords: ["GDPval", "real-world AI evaluation", "economic value benchmarks", "expert task writing", "occupational AI benchmark", "AI evaluation trends", "expert graders", "GDPval tasks"],
    takeaways: [
      "GDPval: 1,320 tasks across 44 occupations in 9 sectors, each based on a real work product, written by professionals averaging 14 years of experience, with about five rounds of review per task.",
      "Grading is blind pairwise comparison by expert graders from the same occupation: better, as good, or worse than the human deliverable.",
      "The implication for labs: tasks now need domain experts, multi-round review and expert graders. The pipeline is the product.",
    ],
    body: [
      { t: "p", text: "In September 2025 OpenAI released GDPval, and it is the clearest public signal of where evaluation is going. Not puzzles, not toy repositories, not multiple-choice questions with a known answer. Real work, written by people who do that work for a living, graded by their peers, with a deliverable at the end that could be handed to a client." },

      { t: "h2", text: "What GDPval is" },
      { t: "p", text: "1,320 tasks across 44 occupations in the nine sectors that contribute most to US GDP. Each task is based on a real work product: a legal brief, an engineering drawing, a financial model, a nursing care plan, a marketing campaign. The task writers are professionals in those occupations with an average of 14 years of experience, screened before writing. Each task went through roughly five rounds of review before it was accepted into the set." },

      { t: "h2", text: "How it is graded" },
      { t: "p", text: "Expert graders from the same occupation receive a model's deliverable and a human professional's deliverable for the same task, blind, and judge which is better, or whether they are equivalent. Pairwise, by people qualified to judge. The paper reports that expert graders agreed with each other on about 71% of comparisons, which is the number every rubric discussion on this site keeps coming back to: even experts disagree, so the grading process matters as much as the grader." },

      { t: "h2", text: "The headline result" },
      { t: "p", text: "The best frontier models were rated as good as or better than the human expert's deliverable on just under half the tasks. That number will be out of date quickly, and the direction is the point: the gap between model and professional on real work is closing. When models are close to experts, the thing that separates good evaluation from bad is not model access. It is the quality of the tasks and the graders." },

      { t: "h2", text: "What this means for anyone who builds tasks" },
      { t: "table", head: ["GDPval requirement", "What it takes to supply"], rows: [
        ["Tasks based on real work products", "Authors who do the work, with the artefacts to hand"],
        ["Writers with years of experience", "Vetting that checks experience and skill, not availability"],
        ["About five review rounds per task", "A review pipeline with second specialists and calibration"],
        ["Expert graders from the same occupation", "Graders vetted the same way as writers, with a rubric"],
        ["Blind pairwise comparison", "A harness that hides provenance and randomises order"],
      ] },
      { t: "p", text: "Every row is a pipeline, not a hire. The labs that get good real-work data will be the ones with the pipeline, and the vendors who can supply it will be the ones who already run one." },

      { t: "callout", title: "This is the pipeline I run", text: "Vetted domain authors, scored on the client's rubric before joining. Second-specialist review on every task. Calibration when graders diverge. Senior sign-off. The same structure GDPval describes, at programme scale." },

      { t: "h2", text: "Where it goes next" },
      { t: "p", text: "PaperBench did this for research reproduction. Terminal-Bench 2.0 did it for terminal work. GDPval did it for the economy. The pattern is the same each time: realistic tasks, expert authors, heavy review, graders who could do the work themselves. Expect every serious evaluation in 2027 to look like this, and expect the tasks, not the models, to be the hard part to source." },
    ],
    faq: [
      { q: "What is GDPval?", a: "An OpenAI evaluation released in September 2025 with 1,320 tasks across 44 occupations in nine high-GDP sectors, each based on a real work product, written by experienced professionals and graded blind by expert peers against a human deliverable." },
      { q: "How were GDPval tasks written and reviewed?", a: "By professionals averaging 14 years of experience in the occupation, screened beforehand, with each task going through about five rounds of review before acceptance." },
      { q: "How well do AI models do on GDPval?", a: "The best frontier models were rated as good as or better than the human expert's deliverable on just under half of tasks at release, with expert graders agreeing with each other about 71% of the time." },
    ],
    forFounders: "If your product's AI does professional work, evaluate it the GDPval way: real deliverables, judged blind by someone who does the job, against a human version.",
    forLabs: "Need real-work tasks in a technical domain? Send one existing task and the free review will show how it measures against the GDPval bar.",
    sources: [
      { title: "OpenAI, GDPval, 25 Sep 2025", url: "https://openai.com/index/gdpval" },
      { title: "GDPval paper, arXiv", url: "https://arxiv.org/html/2510.04374v1" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "run-it-ten-times-flaky-tests-in-benchmark-tasks",
    day: 15,
    plan: 2,
    date: "2026-12-19",
    track: "AI labs",
    title: "Run it ten times. Flaky tests ruin benchmark tasks",
    standfirst: "Google's testing team found almost 16% of its tests had some level of flakiness, and 84% of pass-to-fail transitions involved a flaky test. In production, a flaky test is annoying. In a benchmark, it grades luck. Before a task ships, the reference solution runs ten times, and it is ten for ten or it does not go.",
    heroAlt: "Isometric re-run rig: a row of ten indicator lights above a rail of ten cylinders, the last one in accent blue",
    keywords: ["flaky tests", "test flakiness", "benchmark reliability", "deterministic tests", "flaky tests Google", "reproducible evaluation", "test reliability AI benchmarks", "nondeterminism"],
    takeaways: [
      "Google found about 1.5% of test runs flaky, almost 16% of tests showing some flakiness, and 84% of pass-to-fail transitions involving a flaky test.",
      "Flakiness hides in timeouts, ordering, random seeds, network access and the clock. Fix: seed everything, freeze time, remove network, assert on state rather than timing.",
      "Ten runs of the reference solution in a fresh container before submission. Ten passes or the task does not ship.",
    ],
    body: [
      { t: "p", text: "Google's testing team published the numbers in 2016 and they have not stopped being relevant. About 1.5% of all test runs at Google reported a flaky result. Almost 16% of tests showed some level of flakiness. And 84% of the transitions from pass to fail in their continuous integration involved a flaky test rather than a real regression." },
      { t: "p", text: "That was a company with enormous engineering discipline, on production tests. A benchmark task is written by one person, run in a container, and used to compare models. If its tests are flaky, the benchmark is grading luck, and no amount of model improvement will show up cleanly in it." },

      { t: "h2", text: "Where flakiness hides" },
      { t: "ul", items: [
        "**Timeouts.** A test that asserts something happens within two seconds passes on the author's machine and fails on a loaded reviewer harness.",
        "**Ordering.** Dictionary iteration, set ordering, filesystem listing, parallel completion: any order that is not guaranteed will eventually change.",
        "**Random seeds.** A test that samples without a fixed seed passes most of the time. \"Most\" is the problem.",
        "**Network.** Anything that reaches outside the container depends on something outside the container.",
        "**The clock.** Dates, durations, \"today\", daylight saving, the end of the month.",
        "**Floating point.** Sums in different orders differ in the last bits; exact equality on floats flakes.",
      ] },

      { t: "h2", text: "Three fixes" },
      { t: "h2", text: "Fix 1: seed everything, freeze time, remove the network" },
      { t: "p", text: "Every random source gets a fixed seed in the test. Time is frozen with a library or an injected clock. The container has no network, so anything that needs one fails immediately and loudly at authoring rather than occasionally at review. These three remove most flakiness before it starts." },

      { t: "h2", text: "Fix 2: assert on state, not timing" },
      { t: "p", text: "Check that the file exists, not that it appeared within two seconds. Check that the queue is empty, not that it emptied before the other thread finished. Check the result against a tolerance derived from the numerics, not exact float equality. A test that asserts on the final state of the world is deterministic by construction; a test that asserts on when things happened is not." },

      { t: "h2", text: "Fix 3: ten runs before submission, scripted" },
      { t: "p", text: "The last step before a task ships: a script that builds a fresh container from the pinned image, runs the reference solution, runs the tests, and repeats ten times. Ten passes, or the task goes back. The script is not optional and it is not a manual loop; it is a command that prints a table. A task that passes nine of ten is a flaky task, and the one failure is the review that would have rejected it." },

      { t: "table", head: ["Flake source", "Fix"], rows: [
        ["Timeouts", "Assert on state; generous or no time bound"],
        ["Ordering", "Sort before comparing; never rely on iteration order"],
        ["Random seeds", "Fixed seed in every test"],
        ["Network", "None in the container"],
        ["Clock", "Frozen time; no \"today\" in tests"],
        ["Floating point", "Tolerance from the numerics, in a comment"],
        ["Everything else", "Ten runs in a fresh container, scripted"],
      ] },

      { t: "callout", title: "The rule", text: "Ten for ten, or it does not ship. A flaky test in production is annoying. A flaky test in a benchmark is a lie about the model." },

      { t: "h2", text: "Why benchmarks care more than production does" },
      { t: "p", text: "A production flake costs a re-run. A benchmark flake costs a data point that gets compared across models and model versions for the life of the benchmark. One flaky task in a set of a hundred adds noise to every leaderboard built on it, and nobody downstream can see which task it was. That is why Terminal-Bench 2.0 verified every task across multiple runs before acceptance, and why the ten-run script is the last thing that runs before I submit anything." },
      { t: "gallery", items: [
        { src: slide("run-it-ten-times-flaky-tests-in-benchmark-tasks", 2), alt: "Slide: 16% of tests are flaky" },
        { src: slide("run-it-ten-times-flaky-tests-in-benchmark-tasks", 4), alt: "Slide: seed everything" },
        { src: slide("run-it-ten-times-flaky-tests-in-benchmark-tasks", 5), alt: "Slide: assert on state, not timing" },
        { src: slide("run-it-ten-times-flaky-tests-in-benchmark-tasks", 6), alt: "Slide: ten runs before submission" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "How common are flaky tests?", a: "Google's testing team reported about 1.5% of test runs flaky, almost 16% of tests showing some flakiness, and 84% of pass-to-fail transitions involving a flaky test." },
      { q: "Why are flaky tests worse in benchmarks than in production?", a: "A production flake costs a re-run. A benchmark flake adds noise to every comparison across models built on that benchmark, and nobody downstream can identify which task caused it." },
      { q: "How do you remove flakiness from benchmark task tests?", a: "Fix every random seed, freeze time, remove network access from the container, assert on final state rather than timing, use numeric tolerances instead of exact float equality, and run the reference solution ten times in a fresh container before submission." },
    ],
    forFounders: "Your product's test suite has the same flakes. A failing build that \"just needs a re-run\" is hiding a real regression 16% of the time, by Google's numbers.",
    forLabs: "Send one task and the free review will run it ten times and tell you whether it would have passed the gate.",
    sources: [
      { title: "Google Testing Blog, Flaky Tests at Google and How We Mitigate Them, May 2016", url: "https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html" },
      { title: "Terminal-Bench 2.0 paper (multi-run verification), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "what-a-five-day-design-sprint-delivers",
    day: 16,
    plan: 2,
    date: "2026-12-20",
    track: "Founders",
    title: "What a $2,000 design sprint delivers, day by day",
    standfirst: "Five days from a brief to a clickable prototype and a one-page scope you can take to any developer. Not a mood board, not a deck of options: one flow, every state, tested by you on day four. Here is each day.",
    heroAlt: "Isometric sprint board: five columns of cards on a plate, the last column with an accent card and a flag",
    keywords: ["design sprint", "5-day design sprint", "product design sprint", "clickable prototype", "UX design freelance", "design sprint deliverables", "Figma prototype", "fixed-price design"],
    takeaways: [
      "Day 1: the one user job, written down and agreed. Day 2: flows on paper and the cuts decided. Day 3: screens in Figma. Day 4: clickable prototype, tested by you. Day 5: polish, a one-page scope, a build estimate.",
      "The output is a prototype any developer can build from and a scope any developer can quote from. You own both.",
      "$2,000, fixed. The free teardown comes first and is where the sprint's brief is written.",
    ],
    body: [
      { t: "p", text: "A design sprint is a week that ends with something you can click. Not a brand exploration, not three directions to choose between, not a slide deck about your users. One flow, designed to the last state, in a prototype you have already tested, with a scope document that any developer, including me, can turn into a quote. Here is what happens on each of the five days." },

      { t: "h2", text: "Day 1: the one user job" },
      { t: "p", text: "We write one sentence: who the user is and what they are trying to get done. Then the first result they should see, and what has to be true for them to get it. Everything in the sprint is tested against this sentence. If a screen does not help this person do this job, it is not in the sprint. Day one ends with the sentence agreed in writing and the free teardown's cuts confirmed." },

      { t: "h2", text: "Day 2: flows on paper, cuts decided" },
      { t: "p", text: "The flow is drawn as boxes before any pixels: every screen, every decision point, every error. This is where most of the cutting happens, because a flow on paper makes it obvious which steps are there for the product and which are there for the user. By the end of the day the flow is three to six screens and every one of them earns its place." },

      { t: "h2", text: "Day 3: screens in Figma" },
      { t: "p", text: "The flow becomes real screens, at real size, with real copy. Not lorem ipsum: the words a user will read, because the words are most of the design. Every state is drawn: empty, loading, error, success, the edge case where the data is missing. A screen with only a happy path is half a screen." },

      { t: "h2", text: "Day 4: clickable prototype, tested by you" },
      { t: "p", text: "The screens are linked into a prototype you can click through on your phone or laptop. You use it as if it were the product. You get stuck somewhere, or you notice the second step asks for something your users will not have, and I fix it that afternoon. Day four is the cheapest testing you will ever do, because the thing being tested costs nothing to change." },

      { t: "h2", text: "Day 5: polish, scope, estimate" },
      { t: "p", text: "The prototype gets its final pass. Then the one-page scope: the flow, the screens, the states, the data model implied by them, the integrations needed, and what is explicitly out. And a build estimate, which for a one-flow MVP is usually the $3,000 sprint. You can take the scope to any developer; it is written so that they can quote from it without a call." },

      { t: "table", head: ["Day", "Output", "Your part"], rows: [
        ["1", "The user-job sentence, agreed", "Agree it"],
        ["2", "The flow on paper, cuts decided", "Approve the cuts"],
        ["3", "Screens in Figma, every state", "Read the copy"],
        ["4", "Clickable prototype", "Use it, tell me where you got stuck"],
        ["5", "Polished prototype, one-page scope, estimate", "Decide what happens next"],
      ] },

      { t: "callout", title: "What you own at the end", text: "The Figma file, the prototype, the scope document. All yours, whether the next step is my MVP sprint, your own team, or a developer you have not met yet." },

      { t: "h2", text: "Who the sprint is for" },
      { t: "p", text: "Founders who know what they want to build and need it designed well enough to build or to raise on. Teams with an engineer and no designer. Anyone who has a feature idea and wants to know, for $2,000 and a week, what it would look like and cost before committing a quarter to it. It starts with the free teardown, which is where the day-one sentence usually gets written." },
    ],
    faq: [
      { q: "What does a design sprint deliver?", a: "A clickable prototype of one complete flow, with every state designed, tested by the client on day four, plus a one-page scope document and a build estimate any developer can quote from." },
      { q: "How much does a design sprint cost?", a: "$2,000, fixed, for five days. The scope is agreed in the free teardown beforehand so the price does not move." },
      { q: "What happens after a design sprint?", a: "You own the Figma file, the prototype and the scope. The next step can be a $3,000 MVP sprint with me, a build by your own team, or a quote from any developer using the scope document." },
    ],
    forFounders: "Send the idea or the half-built product. The free teardown comes back with the day-one sentence drafted, and the sprint can start the following Monday.",
    forLabs: "A programme's guideline is designed the same way: one page, every state (what to do when the spec is ambiguous, when a test fails, when the environment breaks), tested on a small batch before volume.",
    sources: [
      { title: "Services and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },
];
