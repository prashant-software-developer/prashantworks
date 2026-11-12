import { slide, type BlogPost } from "../blog-shared";

export const plan2d: BlogPost[] = [
  {
    slug: "when-the-client-changes-the-rubric-midway",
    day: 24,
    plan: 2,
    date: "2026-12-28",
    track: "AI labs",
    title: "The client changed the rubric halfway. Now what?",
    standfirst: "It happens on every programme, and it is not the problem. Unlogged changes are. A versioned change log, a same-day re-brief, a re-check of work in progress, and one written decision about delivered work keep a rubric change from becoming a dispute.",
    heroAlt: "Isometric change log: two stacks of sheets side by side, the second with an accent top sheet, a small slider between them",
    keywords: ["rubric change management", "guideline versioning", "AI data programme management", "scope change data labeling", "rubric version control", "annotation guideline updates", "vendor dispute prevention", "programme operations"],
    takeaways: [
      "Four steps the day a rubric changes: log it with a version and date, re-brief every author with examples, re-check work in progress against the new version, and agree in writing what happens to delivered work and who pays.",
      "Every score and every rejection carries the rubric version it was graded under; without that, nothing is comparable.",
      "A change nobody logged becomes a dispute nobody can settle.",
    ],
    body: [
      { t: "p", text: "The rubric will change. The client's reviewers will discover a case the rubric did not cover, or the model's behaviour will shift and a criterion that mattered stops mattering, or someone senior will read a batch and decide \"good\" means something slightly different. On every programme I have run, the rubric at week six is not the rubric at week one. That is healthy. The question is only whether the change is handled or absorbed." },

      { t: "h2", text: "Step 1: log it, versioned, the same day" },
      { t: "p", text: "The guideline carries a version number and a change log at the top. A change, however small, becomes a new version: v3 to v4, with the date, the reason, the exact wording before and after, and who asked for it. From then on every item submitted, every score, and every rejection records the version it was written or graded under. Without that, a rejection under v4 of an item written under v3 looks like an author error, and it is not." },

      { t: "h2", text: "Step 2: re-brief everyone, with examples" },
      { t: "p", text: "The same day, every author on the programme gets the change, with two or three real items showing what passed under v3 and would not under v4, and why. A rule stated abstractly is read differently by each author; a rule shown on examples is read the same way. If the change is large, a short recorded session replaces the message. Nobody writes a task against the new rubric until they have seen it on an example." },

      { t: "h2", text: "Step 3: re-check work in progress" },
      { t: "p", text: "Items written under v3 and not yet submitted are re-checked against v4 before they go, by their authors and then by second review. This is the step that keeps the next batch's acceptance rate from dipping, and it is cheap because the items are already open. The pre-submission checklist gets the new criterion the same afternoon." },

      { t: "h2", text: "Step 4: decide delivered work, in writing" },
      { t: "p", text: "Items already delivered and accepted under v3 are the awkward part. Three options: leave them as accepted, re-work them to v4 at the client's cost, or re-work them at mine if the change corrects something the guideline should have said all along. Which one applies is a conversation, and it ends in one email that states the decision, the number of items, and who pays. That email is what makes week twelve's invoice uncontroversial." },

      { t: "table", head: ["Step", "Same day", "Artefact"], rows: [
        ["Log", "Version, date, reason, before and after wording", "Change log at the top of the guideline"],
        ["Re-brief", "Every author, with real examples", "Message or short recording"],
        ["Re-check WIP", "Authors, then second review", "Updated pre-submission checklist"],
        ["Delivered work", "One decision: leave, rework at client's cost, or at mine", "One email"],
      ] },

      { t: "callout", title: "Why the version matters more than anything", text: "A score without a rubric version is not comparable to any other score. The moment the rubric changes, every number on the programme needs to know which rubric it belongs to." },

      { t: "h2", text: "What I ask the client to do" },
      { t: "p", text: "Send changes through one person, in writing, rather than as reviewer comments on individual items. Reviewer comments are where changes are discovered, and they are a fine place to start the conversation, but a change that lives only in a comment thread has not been made. It is logged when it is in the guideline with a version number, and that is when authors start following it." },
      { t: "gallery", items: [
        { src: slide("when-the-client-changes-the-rubric-midway", 2), alt: "Slide: log it, versioned" },
        { src: slide("when-the-client-changes-the-rubric-midway", 3), alt: "Slide: re-brief the same day" },
        { src: slide("when-the-client-changes-the-rubric-midway", 4), alt: "Slide: re-check work in progress" },
        { src: slide("when-the-client-changes-the-rubric-midway", 5), alt: "Slide: decide delivered work in writing" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What should happen when a grading rubric changes mid-programme?", a: "Log the change as a new version with date and reason, re-brief every author with real examples the same day, re-check work in progress against the new version before submission, and agree in writing what happens to work already delivered and who pays for any rework." },
      { q: "Why version a rubric or guideline?", a: "Because every score and rejection is only comparable to others graded under the same version. A rejection under a new rule of an item written under the old one is not an author error, and the version is what shows that." },
      { q: "Who pays for rework after a rubric change?", a: "It depends on whether the change adds a new requirement (usually the client) or corrects something the guideline should always have said (usually the vendor). Either way, the decision is written down in one message with the item count." },
    ],
    forFounders: "Scope changes on a product sprint follow the same four steps: written down, shown on the prototype, applied to work in progress, and quoted. The quote is the equivalent of step four.",
    forLabs: "Want the guideline template with the change log built in? Send one task for the free review and ask for it in the note.",
    sources: [
      { title: "Own delivery practice, as run on every programme", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "price-per-accepted-task-not-per-task",
    day: 25,
    plan: 2,
    date: "2026-12-29",
    track: "AI labs",
    title: "Price per accepted task, not per task",
    standfirst: "A cheap task that gets rejected costs you twice: the fee and the reviewer-hours spent rejecting it. Terminal-Bench 2.0 accepted 39% of submissions at roughly three reviewer-hours each. The number to compare vendors on is cost per accepted task, and the arithmetic is short.",
    heroAlt: "Isometric cost meter: a dial, a descending bar chart, three stacked coins and a dark cylinder with an accent cap",
    keywords: ["cost per accepted task", "AI training data pricing", "data vendor pricing comparison", "task acceptance rate cost", "benchmark task cost", "procurement AI data", "vendor rate comparison", "quality cost arithmetic"],
    takeaways: [
      "Cost per accepted task = (fee × tasks submitted + review hours × hourly cost) ÷ tasks accepted.",
      "At 40% acceptance a $100 task costs $250 per accepted task before review time. At 90% acceptance a $150 task costs $167.",
      "Every rejected task also burns your reviewers' hours; Terminal-Bench 2.0 spent about three per task. The cheaper rate is usually the more expensive vendor.",
    ],
    body: [
      { t: "p", text: "\"Your per-task rate is higher than the other vendor's.\" Probably true, and it is the wrong number to compare. A per-task rate is the price of a submission. What a lab needs is accepted tasks, and the price of those depends on the acceptance rate and on what rejections cost to find. This post does the arithmetic, with public numbers where they exist." },

      { t: "h2", text: "The public baseline" },
      { t: "p", text: "Terminal-Bench 2.0's paper reports that the benchmark accepted 89 of 229 submitted tasks, about 39%, after a review process that took roughly three reviewer-hours per task. Those are numbers from a well-run benchmark with motivated contributors. A vendor without pre-submission gates will often do worse. A rejected task still consumed its three reviewer-hours; that is the cost that never appears on the vendor's invoice." },

      { t: "h2", text: "The formula" },
      { t: "callout", title: "Cost per accepted task", text: "(fee per task × tasks submitted + reviewer hours per task × tasks submitted × reviewer hourly cost) ÷ tasks accepted" },
      { t: "p", text: "Fee and reviewer hours are per submission because every submission costs both, accepted or not. The denominator is what you actually get." },

      { t: "h2", text: "Before review time" },
      { t: "table", head: ["Vendor", "Fee per task", "Acceptance", "Cost per accepted task"], rows: [
        ["A", "$100", "40%", "$250"],
        ["B", "$150", "90%", "$167"],
      ] },
      { t: "p", text: "Vendor B's rate is 50% higher and its accepted tasks are a third cheaper. That is before counting anyone's review time." },

      { t: "h2", text: "With review time" },
      { t: "p", text: "Add three reviewer-hours per submission at a conservative $80 an hour for an expert reviewer. Each submission now carries $240 of review cost on top of its fee." },
      { t: "table", head: ["Vendor", "Per submission (fee + review)", "Acceptance", "Cost per accepted task"], rows: [
        ["A", "$100 + $240 = $340", "40%", "$850"],
        ["B", "$150 + $240 = $390", "90%", "$433"],
      ] },
      { t: "p", text: "The gap doubles. Vendor A's accepted tasks cost almost twice Vendor B's, and that is with identical review effort per submission. In practice a vendor with pre-submission gates also produces submissions that are faster to review, which widens it further." },

      { t: "h2", text: "What the arithmetic is really measuring" },
      { t: "p", text: "The acceptance rate is a proxy for whether the vendor runs the checks reviewers run, before the reviewers do. Reference solution re-run in a fresh container. Hidden tests against null and fake agents. A second valid solution passing. A second specialist reading the spec. Each one costs the vendor time and each one moves work from your reviewers' queue to the vendor's. A higher rate pays for that, and the arithmetic says it pays for itself at any acceptance gap wider than a few points." },

      { t: "h2", text: "What to ask a vendor" },
      { t: "ul", items: [
        "What was your acceptance rate on your last three programmes, and will you show the reports?",
        "How many reviewer-hours per submission should we budget on your work?",
        "Which pre-submission checks do you run, and can we see the script?",
        "Will you run a ten-task pilot so we can measure both numbers on our own rubric?",
      ] },
      { t: "p", text: "The last question is the one that settles it. Ten tasks, your rubric, your reviewers' hours logged. The cost per accepted task falls out of the pilot, and it is the only number worth putting next to a rate card." },
    ],
    faq: [
      { q: "How do you compare AI data vendors on price?", a: "By cost per accepted task, not fee per task: (fee plus your review cost) per submission, divided by the acceptance rate. A $100 task at 40% acceptance costs $250 per accepted task; a $150 task at 90% costs $167, before review time." },
      { q: "What is a typical acceptance rate for benchmark tasks?", a: "Terminal-Bench 2.0 accepted about 39% of submissions (89 of 229) with roughly three reviewer-hours per task. Vendors with pre-submission checks can sustain around 90%." },
      { q: "Why do rejected tasks cost more than their fee?", a: "Because every submission consumes reviewer time whether or not it is accepted. At three expert reviewer-hours per task, a rejected submission costs the lab hundreds of dollars in review before any fee is counted." },
    ],
    forFounders: "The same arithmetic applies to hiring: a cheap hourly rate with half the work redone costs more than a fixed price that ships once.",
    forLabs: "Send your numbers, fee, acceptance rate, review hours, and I will show the cost per accepted task on your programme. The free task review comes with it.",
    sources: [
      { title: "Terminal-Bench 2.0 paper (acceptance and reviewer hours), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "mobile-first-or-web-first-how-i-decide",
    day: 26,
    plan: 2,
    date: "2026-12-30",
    track: "Founders",
    title: "Mobile first or web first? How I decide",
    standfirst: "Not by trend. Three questions decide it: where the user is when they need the product, how long each session lasts, and who pays. For most MVPs the answer is a responsive web app first, with native when the phone's sensors or offline use matter.",
    heroAlt: "Isometric two devices: a phone standing beside a laptop screen, one accent panel on each",
    keywords: ["mobile first vs web first", "MVP platform choice", "native app vs web app", "responsive web app MVP", "product strategy platform", "should I build a mobile app", "startup platform decision", "PWA vs native"],
    takeaways: [
      "Three questions: where is the user when they need it (desk: web; anywhere else: mobile), how long is a session (short and frequent: mobile; long: web), and who pays (buyers and admins live on web).",
      "Most MVPs: a responsive web app first. Native when the phone's camera, location, notifications or offline use are the product.",
      "Not sure? Responsive web, then watch where sessions actually happen.",
    ],
    body: [
      { t: "p", text: "\"Should we build the app or the web version first?\" comes up in most teardowns, and the founder usually already has an answer based on what they use most or what investors mentioned last. Neither is a reason. Here are the three questions that are, and how they resolve for the common cases." },

      { t: "h2", text: "Question 1: where is the user when they need it?" },
      { t: "p", text: "At a desk, with a keyboard, doing their job: web. Anywhere else, standing up, in a vehicle, in a shop, on site, in bed: mobile. The product should be on the device the user already has in their hand at the moment of need. A field-service tool is mobile because the technician is in a basement. An analytics tool is web because the analyst is at a desk with two monitors. Most products are clearer than they first seem once this question is asked precisely." },

      { t: "h2", text: "Question 2: how long is a session?" },
      { t: "p", text: "Short and frequent, a few seconds many times a day, checking, logging, replying: mobile, because the phone is always there and the cost of opening it is nothing. Long and deliberate, writing, configuring, analysing, building: web, because the screen and keyboard are what make a long session productive. A product with both kinds of session usually has two user types, which leads to the third question." },

      { t: "h2", text: "Question 3: who pays?" },
      { t: "p", text: "The person who buys, configures and administers the product almost always does it on web. Billing, team management, settings, reports, integrations: desk work. If the paying user and the daily user are different people, the paying user's flow is web and it comes first, because without it there is no revenue to justify the mobile build. A consumer product where the user pays for themselves is the exception, and there question one usually decides." },

      { t: "table", head: ["Signal", "Web first", "Mobile first"], rows: [
        ["Where", "At a desk", "Anywhere else"],
        ["Session", "Long, deliberate", "Short, frequent"],
        ["Who pays", "An admin or buyer configures it", "The daily user pays for themselves"],
        ["Needs", "Keyboard, large screen, multiple windows", "Camera, location, notifications, offline"],
      ] },

      { t: "h2", text: "Why most MVPs are a responsive web app" },
      { t: "p", text: "A responsive web app works on both devices, ships from one codebase, needs no app-store review, updates instantly, and can be opened from a link, which matters enormously for a product nobody has heard of yet. It covers every row of the web column and most of the mobile column. The cases where it does not are specific: the product is the camera, the location, the push notification or the offline mode. Those are native from day one. Everything else is a web app that can become native once demand is proven and the phone-specific needs are known." },

      { t: "callout", title: "When you are not sure", text: "Build the responsive web app, add it to the home screen, and watch where sessions happen for a month. The usage data answers the question better than the roadmap meeting did." },

      { t: "h2", text: "The mistake to avoid" },
      { t: "p", text: "Building both at once. Two codebases, two designs, two sets of bugs, for a product that has not yet proven anyone wants it on one. If the answer to the three questions is mixed, pick the side that pays, build that, and let the other side's first version be the responsive view of the same app. That is the MVP cut applied to platforms." },
    ],
    faq: [
      { q: "Should a startup build a mobile app or a web app first?", a: "Decide by where the user is when they need it, how long a session lasts, and who pays. Most MVPs should start as a responsive web app; native comes first only when the camera, location, notifications or offline use are the product." },
      { q: "When does a product need a native mobile app?", a: "When the phone's hardware is the product: camera-based capture, location tracking, push-driven workflows, or reliable offline use. Otherwise a responsive web app added to the home screen covers most needs." },
      { q: "Is it a mistake to build mobile and web at the same time?", a: "Usually. Two codebases double the cost and bugs for a product that has not proven demand on one. Pick the side that pays, build it, and let the other be the responsive view of the same app." },
    ],
    forFounders: "Send the product and the three questions get answered in the free teardown, with the platform recommendation and what it changes about the scope.",
    forLabs: "Environment choice for tasks has the same structure: pick the one platform the task is really about, pin it, and do not build the task for two at once.",
    sources: [
      { title: "Own product practice; case studies on this site", url: "https://www.prashantworks.com/work" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "2026-in-agent-benchmarks-what-changed",
    day: 27,
    plan: 2,
    date: "2026-12-31",
    track: "AI labs",
    title: "2026 in agent benchmarks: what changed",
    standfirst: "Verified task sets, harness exploits found and fixed, real-work tasks written by professionals, and the end of the pass rate as proof. A short year in review for anyone who writes, reviews or buys evaluation tasks, with the four changes that will still matter in 2027.",
    heroAlt: "Isometric year rail: a timeline with twelve ticks, four milestone blocks of rising height, the last in accent blue with a flag",
    keywords: ["agent benchmarks 2026", "AI evaluation year in review", "Terminal-Bench 2.0", "trustworthy benchmarks", "GDPval", "benchmark harness exploits", "AI evaluation trends 2027", "agentic evaluation"],
    takeaways: [
      "Terminal-Bench 2.0 showed the filter: 89 of 229 submitted tasks kept, after roughly three reviewer-hours each.",
      "Berkeley RDI showed harness exploits scoring 100% with zero tasks solved, and published the checklist that stops them.",
      "GDPval set the bar for who writes tasks: professionals with years of experience, multiple review rounds, expert graders. Pass rates stopped being proof; trajectories and graders are.",
    ],
    body: [
      { t: "p", text: "A year ago the question about an agent benchmark was \"what did the model score\". Today the first question is \"can the score be trusted\", and 2026 is the year that question got real answers. Four changes, each with the public work behind it, and what each one means for the people who write tasks for a living." },

      { t: "h2", text: "1. Task sets got verified" },
      { t: "p", text: "Terminal-Bench 2.0's paper, published in January, documented what a serious filter looks like: 229 tasks submitted, 89 accepted, roughly three reviewer-hours per task, every accepted task verified across multiple runs in a pinned environment. The 39% acceptance rate was not a scandal; it was the first time a benchmark published the number. SWE-bench Verified had shown the same thing from the other direction, filtering 68% of what it screened. The lesson settled: a task set that has not been through human verification is mostly noise, and everyone now knows it." },

      { t: "h2", text: "2. Harness exploits were found and named" },
      { t: "p", text: "In April, Berkeley's RDI group published work showing that an agent could score 100% on well-known benchmarks without solving a single task, by exploiting the harness: reading expected outputs, signalling success directly, modifying the grader. They published a checklist: isolate the grader, run the null agent, lock the test files, check that success cannot be faked. Every task programme that did not already run those checks started to, and task authoring acquired a security mindset it had lacked." },

      { t: "h2", text: "3. Real-work tasks set the bar for authors" },
      { t: "p", text: "GDPval, from late 2025, became the reference point through 2026 for what a task should be: based on a real work product, written by someone with years of experience doing that work, reviewed about five times, graded blind by expert peers against a human deliverable. PaperBench had done the same for research reproduction with its 8,316-leaf rubric trees. The effect on the market was visible: generalist annotation pools shrank, specialist teams grew, and \"who wrote this task\" became a question clients ask." },

      { t: "h2", text: "4. Pass rates stopped being proof" },
      { t: "p", text: "Anthropic's engineering guide in January said what experienced authors knew: a 0% pass rate is usually a broken task, and a score moves dramatically when grading bugs are fixed. Judge's Verdict put a number on human grader agreement, around kappa 0.80, and held model judges to it. By year end the serious conversation about a benchmark result was about trajectories, grader agreement and harness integrity, with the pass rate as the output of those rather than evidence on its own." },

      { t: "table", head: ["Change", "Source", "What it means for task authors"], rows: [
        ["Verified task sets", "Terminal-Bench 2.0, SWE-bench Verified", "Run the reviewer's checks before the reviewer does"],
        ["Harness exploits named", "Berkeley RDI checklist", "Isolate the grader, null agent, locked tests, every task"],
        ["Real-work bar", "GDPval, PaperBench", "Domain experts, multi-round review, expert graders"],
        ["Pass rate demoted", "Anthropic evals guide, Judge's Verdict", "Read trajectories, measure grader agreement"],
      ] },

      { t: "callout", title: "The one-line version", text: "Tasks got harder to write in 2026. That was the point. A task that survives verification, resists harness exploits, resembles real work and has graders who agree is worth more than a hundred that do not." },

      { t: "h2", text: "What to expect in 2027" },
      { t: "p", text: "More of the same, further along. Verification will be expected rather than notable. Checklists like Berkeley's will be built into harnesses by default. Real-work evaluations will spread to more domains, and the scarce resource will be qualified authors and graders, not compute. For anyone who writes or buys tasks, the practical consequence is that the pre-submission routine, reference re-run, hidden tests, null agent, second solution, trajectories read, is no longer a differentiator. It is the entry requirement." },
    ],
    faq: [
      { q: "What changed in AI agent benchmarks in 2026?", a: "Four things: task sets were verified by humans (Terminal-Bench 2.0 kept 89 of 229 submissions), harness exploits were documented and a checklist published (Berkeley RDI), real-work tasks by professionals became the bar (GDPval, PaperBench), and pass rates were demoted in favour of trajectories and grader agreement." },
      { q: "What is a harness exploit in AI benchmarks?", a: "A way for an agent to score on a benchmark without solving tasks, such as reading expected outputs, signalling success directly, or modifying the grader. Berkeley RDI showed such exploits reaching 100% and published checks to prevent them." },
      { q: "What will matter in AI evaluation in 2027?", a: "Verification as standard, exploit checks built into harnesses, real-work evaluations across more domains, and qualified task authors and graders as the scarce resource." },
    ],
    forFounders: "If your product claims a benchmark score, expect customers in 2027 to ask how it was verified. The same four questions apply to your own evaluation.",
    forLabs: "Want your 2027 task programme to start at the entry requirement? Send one task and the free review applies all four changes to it.",
    sources: [
      { title: "Terminal-Bench 2.0 paper, Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
      { title: "Berkeley RDI, Trustworthy agentic benchmarks, Apr 2026", url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/" },
      { title: "OpenAI, GDPval, Sep 2025", url: "https://openai.com/index/gdpval" },
      { title: "Anthropic Engineering, Demystifying evals for AI agents, Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "Judge's Verdict, Oct 2025, arXiv", url: "https://arxiv.org/html/2510.09738v1" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "keeping-ai-feature-costs-sane",
    day: 28,
    plan: 2,
    date: "2027-01-01",
    track: "Founders",
    title: "Keeping AI feature costs sane in 2027",
    standfirst: "a16z's analysis found LLM inference cost for equivalent performance falling about tenfold a year: GPT-3 cost $60 per million tokens in 2021; equivalent capability cost cents by late 2024. Your AI feature's bill still grows if the feature is designed wrong. Five habits that keep it below the hosting bill.",
    heroAlt: "Isometric token valve: a tank feeding a pipe with a dial, a small unit and a descending bar chart",
    keywords: ["AI feature cost", "LLM inference cost", "LLMflation", "AI product unit economics", "token cost optimisation", "prompt caching", "AI cost control", "AI feature pricing"],
    takeaways: [
      "For equivalent performance, LLM inference cost has fallen roughly 10x per year (a16z). The model is not where the bill comes from.",
      "The bill grows when the feature sends the whole document every time, retries silently, or runs on every keystroke.",
      "Five habits: cache repeated prompts, send only the context the job needs, route with a small model and answer with a large one, cap retries, set a per-user budget. Measure cost per completed job, not per token.",
    ],
    body: [
      { t: "p", text: "New year, same question from every founder planning an AI feature: what will it cost to run? The honest answer has two parts. The model is cheaper than you think, and the feature can still be more expensive than you can afford, depending entirely on how it is built." },

      { t: "h2", text: "The model is getting cheaper fast" },
      { t: "p", text: "In November 2024, a16z published an analysis they called LLMflation: for a fixed level of capability, the cost of LLM inference has been falling by roughly ten times a year. Their anchor: GPT-3 launched in 2021 at about $60 per million tokens; by late 2024, models matching its performance cost around $0.06 per million. A thousandfold drop in three years. Whatever your feature costs to run today, the same capability will cost a fraction of that by the time you have real scale." },

      { t: "h2", text: "So why do AI bills surprise people?" },
      { t: "p", text: "Because the bill is not the model price. It is the model price multiplied by how many tokens the feature sends, how many times, for how many users. Three design mistakes account for most surprises." },
      { t: "ul", items: [
        "**Sending everything, every time.** The whole document, the whole chat history, the whole knowledge base, on each request, when the job needed one paragraph.",
        "**Retrying silently.** A failed call retried three times, with the full context each time, and nobody counting.",
        "**Running on every keystroke.** Autocomplete-style features that call the model on each character instead of on a pause or a submit.",
      ] },

      { t: "h2", text: "Five habits that keep it sane" },
      { t: "ol", items: [
        "**Cache repeated prompts.** The system prompt, the product's instructions and the shared context are the same for every user. Most providers cache them at a steep discount; use it.",
        "**Send only the context the job needs.** Retrieve the relevant passage, not the document. Summarise the history, do not replay it. Context is the main cost lever.",
        "**Route small, answer large.** A small, cheap model decides what kind of request this is and whether a model is needed at all. The large model answers only the requests that need it.",
        "**Cap retries and time them.** One retry, with backoff, and a log line. A feature that retries without a cap will find a way to spend the month's budget in an afternoon.",
        "**Set a per-user budget.** A ceiling on tokens per user per day, with a graceful message when it is hit. Abuse and bugs both stop at the ceiling.",
      ] },

      { t: "h2", text: "Measure the right number" },
      { t: "p", text: "Cost per token is the provider's number. Cost per completed job, a draft written, a document summarised, a question answered, is yours. It is the number your pricing has to cover and the number that tells you whether habit two is working. Put it on the dashboard next to the feature's usage, and watch it fall as the model prices fall and the context gets tighter." },

      { t: "table", head: ["Habit", "Typical saving", "Effort"], rows: [
        ["Prompt caching", "Large on the fixed part of every call", "An afternoon"],
        ["Context trimming", "The biggest lever; often the majority of tokens", "Ongoing design discipline"],
        ["Small-model routing", "Large models used only where needed", "A day"],
        ["Retry cap", "Prevents the worst months", "An hour"],
        ["Per-user budget", "Prevents abuse and runaway bugs", "An hour"],
      ] },

      { t: "callout", title: "What this looks like in practice", text: "Most MVPs I build run their AI feature for less than their hosting bill. Not because the model is free, but because the feature sends what the job needs and nothing more. The design decides the cost, not the model." },

      { t: "h2", text: "A note on model choice" },
      { t: "p", text: "The temptation is to pick the cheapest model. The better move is to pick the model that gets the job right on the first call, because a wrong answer that the user retries, or that you retry, costs more than a right one from a more expensive model. Price per million tokens is a distraction; price per correct completed job is the metric, and the tenfold-a-year trend means it is falling for every model on the list." },
    ],
    faq: [
      { q: "How fast are LLM costs falling?", a: "a16z's LLMflation analysis found inference cost for a fixed level of capability falling about tenfold per year. GPT-3 cost around $60 per million tokens in 2021; equivalent capability cost about $0.06 per million by late 2024." },
      { q: "Why is my AI feature expensive to run?", a: "Usually design, not model price: sending the whole document or history on every call, retrying failed calls without a cap, or calling the model on every keystroke. Trimming context is the biggest single saving." },
      { q: "How do you control the cost of an AI feature?", a: "Cache the fixed part of prompts, send only the context the job needs, route requests with a small model and answer with a large one only when needed, cap retries, set a per-user budget, and measure cost per completed job rather than per token." },
    ],
    forFounders: "Planning an AI feature for 2027? Send the plan and the free teardown will include a cost sketch: tokens per job, the habits that apply, and what the feature should cost per user.",
    forLabs: "Cost per completed job is the same idea as cost per accepted task: the unit that matters is the one you can use, not the one the invoice counts.",
    sources: [
      { title: "a16z, LLMflation: LLM inference cost is going down fast, 12 Nov 2024", url: "https://a16z.com/llmflation-llm-inference-cost/" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "january-pilot-ten-tasks-in-week-one",
    day: 29,
    plan: 2,
    date: "2027-01-02",
    track: "AI labs",
    title: "January pilot: ten tasks in week one",
    standfirst: "Start the year with a graded pilot on your rubric. A free written review of one task first, then ten tasks in one week, pre-checked before submission, with a report of acceptance, rejection causes and fixes. Priced by complexity, agreed in writing, no lock-in.",
    heroAlt: "Isometric pilot bay: a tray of ten tiles, nine raised and one in accent blue, with status lights and a label plate",
    keywords: ["AI data pilot January", "benchmark task pilot", "AI training data trial", "ten-task pilot", "start AI data programme", "AI evaluation vendor pilot", "RLHF data pilot", "new year AI data"],
    takeaways: [
      "Step 1: send one task for a free written review within 48 hours. Step 2: ten tasks in one week on your rubric, pre-checked before submission. Step 3: a report and your decision.",
      "What you get: tasks, reference solutions, hidden tests, pass/fail runs on real models, and a written report. Priced by complexity, agreed before day one.",
      "Scale only if the numbers hold. No retainer, no minimum beyond the ten, no lock-in.",
    ],
    body: [
      { t: "p", text: "January is when task programmes get planned and when the plans are made on the strength of rate cards. A pilot in the first two weeks of the year changes what the plan is based on: ten tasks graded by your own reviewers, with the acceptance rate and the review hours measured on your rubric. This post is the whole January pilot, so the decision to run one is easy to make." },

      { t: "h2", text: "Step 1: the free review" },
      { t: "p", text: "Send one task, rubric or test harness, under NDA or sanitised. Within 48 hours you get a written review: where an agent could shortcut it, where the spec admits two readings, which hidden-test patterns it is missing, whether the environment will drift. Nothing is owed, and the review is yours to apply to your own tasks whether or not the pilot follows." },

      { t: "h2", text: "Step 2: ten tasks in one week" },
      { t: "p", text: "Ten tasks in your domain, to your spec, on your rubric. Each one ships with what a task needs to clear review: a pinned environment by digest, a reference solution re-run ten times in a fresh container, hidden inputs generated at grading time, a null agent and a fake-success agent both scoring zero, a second valid solution passing, and a second specialist's review of the spec and tests. Each task is also run against real models, with the trajectories read and the failures grouped, so you get pass rates with reasons, not just numbers." },

      { t: "h2", text: "What you receive" },
      { t: "table", head: ["Deliverable", "For each task"], rows: [
        ["Task", "Instruction, environment, data, pinned by digest"],
        ["Reference solution", "Verified ten for ten in a fresh container"],
        ["Hidden tests", "Final-state, property-based, grader out of reach"],
        ["Model runs", "Pass rates on real models, trajectories read, failures grouped"],
        ["Review notes", "Second specialist's checks, with what was changed"],
        ["Report (end of week)", "Acceptance, rejection causes, rework, guideline changes"],
      ] },

      { t: "h2", text: "Step 3: your decision" },
      { t: "p", text: "You grade all ten against your rubric. If the numbers hold, we scale with the same gates and the same Friday report. If they are close, one more batch of ten with the guideline fixes applied. If they do not hold, you keep the ten tasks, the report and the review, and you have spent a week. The point of a pilot is that the decision is yours and the evidence is specific." },

      { t: "h2", text: "What it costs" },
      { t: "p", text: "Priced by task complexity, a repository task with a multi-file fix costs more than a single-script data task, and agreed in writing before day one. There is no retainer, no minimum beyond the ten tasks, and nothing that continues unless you choose it. The cost-per-accepted-task arithmetic from an earlier post falls straight out of the pilot's numbers." },

      { t: "callout", title: "The January advantage", text: "A pilot that starts in the first week of January is graded before the quarter's volume is planned. The plan then rests on your reviewers' numbers rather than on a deck." },

      { t: "h2", text: "Domains" },
      { t: "p", text: "Terminal and repository tasks, data engineering and analytics tasks, numerical and ML code, research reproduction rubrics, agentic environments, red-team tasks with realistic traps. If your domain is adjacent to these, the free review is where to find out whether the pilot would work; it will say so plainly if the fit is wrong." },
      { t: "gallery", items: [
        { src: slide("january-pilot-ten-tasks-in-week-one", 2), alt: "Slide: step 1, free review" },
        { src: slide("january-pilot-ten-tasks-in-week-one", 3), alt: "Slide: step 2, ten tasks in one week" },
        { src: slide("january-pilot-ten-tasks-in-week-one", 4), alt: "Slide: what you get" },
        { src: slide("january-pilot-ten-tasks-in-week-one", 6), alt: "Slide: after the pilot" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What is included in a ten-task pilot?", a: "Ten tasks to your spec on your rubric, each with a pinned environment, a verified reference solution, hidden tests, runs on real models with trajectories read, and second-specialist review, plus an end-of-week report of acceptance, rejection causes and fixes." },
      { q: "How much does an AI data pilot cost?", a: "It is priced by task complexity and agreed in writing before the week starts. There is no retainer, no minimum beyond the ten tasks and no lock-in afterward." },
      { q: "What happens after the pilot?", a: "You grade the ten tasks and decide: scale with the same review gates, run one more batch with the guideline fixes, or stop and keep the tasks, the report and the review." },
    ],
    forFounders: "The product equivalent is live too: a free teardown now, and a sprint that is finished before the end of January.",
    forLabs: "Send one task this week. The review is back in 48 hours and the pilot can start the Monday after.",
    sources: [
      { title: "Offer details on this site", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Start with a free 48-hour task review", topic: "data" },
  },

  {
    slug: "how-to-start-with-me-in-2027",
    day: 30,
    plan: 2,
    date: "2027-01-03",
    track: "Both",
    title: "How to start with me in 2027",
    standfirst: "Two doors, both free to open. Founders send a product and get a one-page teardown. AI labs send a task and get a written review in 48 hours. Then a fixed-price sprint or a ten-task pilot, only if the free step earns it. The last post of sixty, and the simplest.",
    heroAlt: "Isometric start gate: two doorframes on a plate, the second with an accent door, a rail with a single card passing through",
    keywords: ["work with a product engineer", "hire AI training data team", "free product teardown", "free task review", "fixed-price MVP", "AI data pilot", "2027 product plans", "how to start"],
    takeaways: [
      "Founders: send your product, prototype or idea. One-page teardown in a few days. Then a $2,000 design sprint or a $3,000 MVP sprint if you want one.",
      "AI labs: send one task, rubric or test suite. Written review within 48 hours. Then a ten-task pilot on your rubric if the review earns it.",
      "No call needed for either. Everything in writing. You can stop after any step.",
    ],
    body: [
      { t: "p", text: "Sixty posts, sixty write-ups, two readers. This is the last one of the series and it is the one to bookmark, because it is only the practical part: how to start, what happens next, and what you need to send." },

      { t: "h2", text: "Door one: founders and product teams" },
      { t: "ol", items: [
        "**Send the thing.** A link, a prototype, a deck, a paragraph. Say who it is for in one sentence and name the one thing you are unsure about.",
        "**Get a one-page teardown within a few days.** What to fix, what to cut, what to build first, and a scope with a fixed price at the bottom. Free, yours to keep.",
        "**If you want it built:** a $2,000 design sprint (five days, clickable prototype, scope any developer can quote from) or a $3,000 MVP sprint (three weeks, one flow live on your domain, 30 days of support). Scope in writing, update every Friday.",
      ] },

      { t: "h2", text: "Door two: AI labs and data teams" },
      { t: "ol", items: [
        "**Send one task, rubric or test suite.** Under NDA, or a sanitised sample.",
        "**Get a written review within 48 hours.** Shortcuts, ambiguities, missing tests, drift risks, and what to change. Free, yours to apply.",
        "**If you want more:** a ten-task pilot on your rubric in one week, pre-checked before submission, graded by you, with a report. Then volume with the same gates and a Friday report, only if the numbers hold.",
      ] },

      { t: "table", head: ["", "Founders", "AI labs"], rows: [
        ["Send", "Product, prototype or idea", "One task, rubric or test suite"],
        ["Free step", "One-page teardown, a few days", "Written review, 48 hours"],
        ["Paid step", "$2,000 design or $3,000 MVP sprint", "Ten-task pilot, priced by complexity"],
        ["Then", "Flex support, in-house, or another sprint", "Managed delivery with weekly reports"],
        ["Stop after", "Any step", "Any step"],
      ] },

      { t: "callout", title: "What both doors have in common", text: "No call needed. Scope and price in writing before any paid work. A written update every week. One person to message. You judge the free step before paying for anything." },

      { t: "h2", text: "What the sixty posts were for" },
      { t: "p", text: "Every one of them is a specific, sourced answer to a question a founder or a lab actually asks, and each ends with the same free first step. If you read one that described your problem, the fastest route is to send the thing it was about. The write-ups stay here, searchable, with their sources, for whenever the question comes up." },

      { t: "h2", text: "The numbers, one last time" },
      { t: "p", text: "AI training and evaluation: 90% acceptance, 4.89/5 average quality, 45 of 50 Terminal-Bench-style tasks accepted, 7 of 9 SWE-bench instances, 14 of 15 PaperBench reviews. Product work: 22+ products shipped, 98% on the agreed date. The process in this post is what produced them." },

      { t: "h2", text: "Happy new year" },
      { t: "p", text: "Thank you for reading, whichever door you came through. The booking page is at prashantworks.com/book, the email is on the contact page, and either one reaches me directly. Send the thing you are working on. That is the whole first step." },
    ],
    faq: [
      { q: "How do I start working with you?", a: "Founders send a product, prototype or idea and get a free one-page teardown. AI labs send one task and get a free written review within 48 hours. Either can be followed by a fixed-price sprint or a ten-task pilot, and you can stop after any step." },
      { q: "Do I need to book a call?", a: "No. Both free steps work by email or the booking form. Scope, price and weekly updates are all in writing." },
      { q: "What does it cost?", a: "The first step is free. A design sprint is $2,000 and an MVP sprint $3,000, both fixed. A ten-task pilot is priced by complexity and agreed in writing before it starts." },
    ],
    forFounders: "Send the thing. A teardown comes back within days and ends with a scope, a price and a start date.",
    forLabs: "Send one task. A review comes back within 48 hours and tells you whether a pilot is worth your week.",
    sources: [
      { title: "Services and pricing on this site", url: "https://www.prashantworks.com/services" },
      { title: "AI training and evaluation on this site", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free review" },
  },
];
