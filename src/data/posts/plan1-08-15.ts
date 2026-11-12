import { slide, type BlogPost } from "../blog-shared";

export const plan1b1: BlogPost[] = [
  {
    slug: "ten-questions-to-ask-an-ai-data-vendor",
    day: 8,
    plan: 1,
    date: "2026-11-12",
    track: "AI labs",
    title: "Ten questions to ask any AI data vendor before you sign",
    standfirst: "Most vendor calls cover price and capacity. The questions that predict whether the data will be usable are about vetting, review, disagreement and what happens to a rejected item. Here are the ten I would want answered, with the public benchmarks that set the bar.",
    heroAlt: "Isometric review line: a conveyor of task sheets passing under two inspection gates, a signed stack at the end",
    keywords: ["AI data vendor", "AI training data vendor questions", "data labeling vendor evaluation", "RLHF data partner", "benchmark task vendor", "expert data annotation", "AI data procurement"],
    takeaways: [
      "Ask who does the work and how they were vetted. GDPval required years of experience, an interview and a background check for every task writer.",
      "Insist on a paid pilot graded on your own rubric before any volume commitment. DeepMind's published data practices say the same.",
      "The three questions vendors rarely get asked, and should: how disagreements are resolved, how AI-written submissions are caught, and what a rejected item turns into.",
    ],
    body: [
      { t: "p", text: "Buying AI training data is a procurement problem dressed as a technical one. The spreadsheet compares price per item and turnaround. The thing that decides whether the data is usable is everything the spreadsheet leaves out: who wrote it, who checked it, and what the vendor does on the day a batch comes back wrong." },
      { t: "p", text: "These are the ten questions I would ask any vendor, including me. For each one there is a reason it matters and, where one exists, a public standard you can hold the answer against." },

      { t: "h2", text: "1. Who exactly does the work, and how were they vetted?" },
      { t: "p", text: "\"Experts\" is a word, not a process. Ask for the vetting steps. When OpenAI built GDPval, its task writers averaged 14 years of experience and passed an interview and a background check before writing a single task. Tasks then went through multiple rounds of review before they counted. A vendor that cannot describe its own filter in that much detail does not have one." },

      { t: "h2", text: "2. Will you run a paid pilot first, graded on my rubric?" },
      { t: "p", text: "Google DeepMind's data enrichment practices list a pilot before launch as a basic step. A pilot on your rubric, graded by you, is the only honest sample of the vendor's work. If the answer is no, or the pilot is graded by the vendor, keep looking." },

      { t: "h2", text: "3. Who reviews each item, and how many reviewers see it?" },
      { t: "p", text: "Ask whether review is a sample or every item, and whether the reviewer is a second specialist or a generalist checker. The right answer depends on the task, but \"we spot-check 10%\" on expert work usually means 90% of items reach you unreviewed." },

      { t: "h2", text: "4. What happens when two reviewers disagree?" },
      { t: "p", text: "They will. In GDPval, expert graders agreed on about 71% of pairwise comparisons. The vendor needs a calibration process: who adjudicates, how the rubric gets updated, and how the fix reaches the rest of the team the same day. A vendor without an answer here will send you inconsistent data and call it variance." },

      { t: "h2", text: "5. How do you catch AI-written submissions?" },
      { t: "p", text: "Contractors on major training programmes have been dismissed for using AI to do the work. Ask what the vendor does about it: tooling, spot interviews, re-derivation checks, or a plain policy with teeth. The answer tells you how much of the \"expert\" data was written by an expert." },

      { t: "h2", text: "6. How do you check that tests cannot be gamed?" },
      { t: "p", text: "For coding and agentic tasks, the tests are the product. Ask whether every task is run against a null agent, an empty submission and a hard-coded answer before it ships. Ask whether the grader runs outside the agent's reach. If the vendor has not heard of these checks, your tasks will be solved by shortcuts." },

      { t: "h2", text: "7. What do you report weekly?" },
      { t: "p", text: "A weekly report should carry acceptance rate, rejection causes grouped by type, rework counts and the guideline changes made because of them. If the weekly report is a count of items delivered, you are buying volume, not quality." },

      { t: "h2", text: "8. Who is my single point of contact?" },
      { t: "p", text: "One name. Someone who can answer a quality question the same day without a ticket queue. Programmes go wrong in week three, and what matters then is how fast a human with authority picks up." },

      { t: "h2", text: "9. Where does my data live?" },
      { t: "p", text: "Ask whether the vendor can work inside your tools and repositories, whether an NDA comes before any task is shared, and whether your programme will ever be named in the vendor's marketing. The answer to the last one should be never." },

      { t: "h2", text: "10. What do you do with a rejected item?" },
      { t: "p", text: "This is the question that separates vendors. A rejection is either a cost or a lesson. The good answer: it is fixed, the cause is logged, the guideline is updated, and the pre-check that would have caught it is added. The weak answer: it is redone." },

      { t: "callout", title: "How I answer these", text: "Scored trial task on the client's rubric before anyone joins; second-specialist review on every item; calibration on every batch; same-day escalation to me; NDA first; clients never named; every rejection becomes a guideline fix. All ten, on a call or in writing, before any commitment." },

      { t: "h2", text: "Use the list as a scorecard" },
      { t: "p", text: "Put the ten questions in a column and score each vendor's answer from zero to two. A vendor that scores well on vetting and review and badly on disagreement and rejections will produce good first batches that decay. A vendor that scores well on the last four questions is set up to get better each week, which is the only kind of vendor worth a long contract." },
    ],
    faq: [
      { q: "What is the most important question to ask an AI data vendor?", a: "Whether they will run a paid pilot graded on your own rubric before any volume commitment. It is the only honest sample of their work, and both DeepMind's published data practices and common sense recommend it." },
      { q: "How much do expert graders disagree on AI training data?", a: "In OpenAI's GDPval, expert graders agreed on about 71% of pairwise comparisons. That is why a vendor needs a calibration process rather than a promise that experts will agree." },
      { q: "Should AI training data vendors review every item or a sample?", a: "For expert-level tasks, every item. Sampling 10% means 90% of what you receive was never checked by a second specialist, and errors in expert data are expensive to find downstream." },
    ],
    forFounders: "The same ten questions work for any outsourced technical work: who does it, who checks it, what happens when it is wrong, and what you get each week. If your current partner cannot answer them, that is the scope problem, not the code.",
    forLabs: "Send me the vendor questionnaire you already use and I will answer it in writing, then review one of your tasks free so you can judge the work before the answers.",
    sources: [
      { title: "GDPval paper (vetting and grader agreement details), arXiv", url: "https://arxiv.org/html/2510.04374v1" },
      { title: "Google DeepMind: best practices for data enrichment", url: "https://deepmind.google/discover/blog/best-practices-for-data-enrichment/" },
      { title: "404 Media: contractors dismissed for using AI on training work", url: "https://www.404media.co/people-training-openais-ai-fired-for-using-ai-to-train-the-ai/" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "scope-any-ai-feature-on-one-page",
    day: 9,
    plan: 1,
    date: "2026-11-13",
    track: "Founders",
    title: "Scope any AI feature on one page",
    standfirst: "RAND's study of why AI projects fail puts a misunderstood problem at the top of the list. Before I build an AI feature I write one page with five sections. It takes an afternoon and it removes the most common way these projects die.",
    heroAlt: "Isometric drafting board with a single sheet divided into five sections and one accent block",
    keywords: ["AI feature scope", "AI product requirements", "how to scope an AI feature", "AI PRD template", "AI project failure causes", "RAND AI failure study", "AI product design"],
    takeaways: [
      "RAND's interviews with 65 data scientists and engineers found the leading cause of AI project failure was stakeholders misunderstanding or miscommunicating the problem.",
      "A one-page brief with five sections (user and job, data you have, three good answers, one metric, what happens when it is wrong) forces that misunderstanding into the open before any code.",
      "The three example answers become your first tests. The wrong-answer section becomes your UI.",
    ],
    body: [
      { t: "p", text: "In 2024 RAND interviewed 65 experienced data scientists and engineers about AI projects that failed. The first cause on their list was not the model, the data or the team. It was that the people commissioning the project misunderstood or miscommunicated the problem the AI was supposed to solve." },
      { t: "p", text: "I have watched that happen from the inside. The fix I use is not a longer requirements document. It is a shorter one: a single page, five sections, written before anyone opens an editor. Here is the page and why each section is there." },

      { t: "h2", text: "1. The user and their job" },
      { t: "p", text: "One person, one job. Not \"users\" and not \"the team\". A sales rep who has to write a follow-up email after every call. A support lead who has to decide which of forty tickets to escalate. If you cannot name the person and the job in one sentence, the feature is a technology looking for a reason." },

      { t: "h2", text: "2. The data you actually have" },
      { t: "p", text: "Not the data you wish you had or plan to collect. What is in the database today, how clean it is, and whether the user is allowed to see it. Most AI feature ideas quietly assume a data source that does not exist yet. Writing this section is where that assumption gets caught, and it is far cheaper to catch it here than in week four." },

      { t: "h2", text: "3. Three example good answers" },
      { t: "p", text: "Write three concrete outputs the feature should produce, for three real inputs. Not descriptions of outputs, the outputs themselves. This section does two things. It makes the stakeholder commit to what good looks like, which surfaces disagreement immediately. And it becomes the first three test cases, so the engineer building the feature has something to check against from day one." },

      { t: "h2", text: "4. One metric" },
      { t: "p", text: "Usage, accuracy or time saved. Pick one. A feature with three success metrics has none, because any outcome can be called a win. If the metric is time saved, say how it will be measured and what the current number is. If nobody knows the current number, that is the first task." },

      { t: "h2", text: "5. What happens when it is wrong" },
      { t: "p", text: "This is the section nobody writes and everybody needs. The model will be wrong some of the time. What does the user see? Can they check the source? Is there a fallback? Does a person approve before anything changes? The answers decide the interface more than the model does, and they decide whether users trust the feature after the first bad answer." },

      { t: "callout", title: "The page in one line each", text: "Who and what job. What data exists. Three real good answers. One number. What the user sees when it's wrong." },

      { t: "h2", text: "Why one page works" },
      { t: "p", text: "A long requirements document hides disagreement in its length; everybody reads the parts they care about and assumes the rest. One page has nowhere to hide. If the founder and the engineer read it and picture the same thing, the project has cleared RAND's first cause of failure. If they do not, you have found out on an afternoon instead of a quarter." },
      { t: "p", text: "I write this page at the start of every AI feature I scope, including the ones I build inside a call-intelligence platform at Ringover. The features that shipped well all had a clear answer to section five. The ones that struggled were the ones where \"when it's wrong\" was answered with \"it won't be\"." },
      { t: "gallery", items: [
        { src: slide("scope-any-ai-feature-on-one-page", 2), alt: "Slide: the user and their job" },
        { src: slide("scope-any-ai-feature-on-one-page", 3), alt: "Slide: the data you actually have" },
        { src: slide("scope-any-ai-feature-on-one-page", 4), alt: "Slide: three good answers" },
        { src: slide("scope-any-ai-feature-on-one-page", 6), alt: "Slide: when it's wrong" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What is the most common reason AI projects fail?", a: "According to RAND's 2024 study of 65 practitioners, the leading cause is that stakeholders misunderstood or miscommunicated the problem the AI was meant to solve, ahead of data quality, infrastructure and model choice." },
      { q: "What should an AI feature brief include?", a: "Five things on one page: the single user and their job, the data that actually exists today, three concrete example good answers, one success metric, and what the user sees when the model is wrong." },
      { q: "How long should scoping an AI feature take?", a: "An afternoon for the one-page brief. The point is not depth; it is making the founder and the engineer picture the same feature before any code is written." },
    ],
    forFounders: "Send me the feature you are planning, in whatever shape it is in. The free teardown will come back as this one-page brief filled in, with the gaps marked.",
    forLabs: "Section three of the brief, three concrete good answers, is the same discipline as writing a golden answer before you write a rubric. Tasks and features both fail when \"good\" is left to be discovered later.",
    sources: [
      { title: "RAND, The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed (RRA2680-1), 13 Aug 2024", url: "https://www.rand.org/pubs/research_reports/RRA2680-1.html" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "cut-your-mvp-to-one-flow",
    day: 10,
    plan: 1,
    date: "2026-11-14",
    track: "Founders",
    title: "Cut your MVP to one flow",
    standfirst: "CB Insights found 43% of VC-backed startups that shut down since 2023 cited poor product-market fit. Pendo found 80% of features are rarely or never used. The two numbers point to the same cut: build the one flow that proves people want this, and nothing else.",
    heroAlt: "Isometric step unit: four rising steps with a flag on the top one",
    keywords: ["MVP scope", "minimum viable product", "how to scope an MVP", "product-market fit", "startup failure reasons", "feature adoption", "MVP development", "fixed-price MVP"],
    takeaways: [
      "43% of VC-backed startups that shut down since 2023 named poor product-market fit as a cause (CB Insights, March 2026).",
      "80% of features in the average software product are rarely or never used (Pendo).",
      "An MVP is one flow: sign up, do the core action, see the result. Everything else waits until that flow proves demand.",
    ],
    body: [
      { t: "p", text: "Two numbers from two unrelated studies describe the same mistake. CB Insights analysed VC-backed startups that shut down since 2023 and found that 43% cited poor product-market fit. Pendo analysed feature usage across its customers' products and found that 80% of features are rarely or never used." },
      { t: "p", text: "Put them together: most products that fail did not fail for lack of features. They built plenty. They built the wrong ones, or they built so many that nobody could tell which one mattered. The cut I make on every MVP sprint comes straight from this." },

      { t: "h2", text: "What \"one flow\" means" },
      { t: "p", text: "A flow is the shortest path from a new user to the result your product promises. Sign up, do the core action, see the result. For an invoicing tool: create an invoice, send it, see it paid. For an AI research assistant: paste a question, get a sourced answer, save it. Three or four screens, no settings, no dashboard, no integrations." },
      { t: "p", text: "If people complete that flow and come back, you have evidence. If they do not, no amount of additional features would have saved it, and you have saved the months you would have spent building them." },

      { t: "h2", text: "What gets cut, and why it is fine" },
      { t: "ul", items: [
        "**Settings and preferences.** Defaults are a product decision. Make them well and nobody asks for the settings page.",
        "**A dashboard.** You do not have enough data for one yet, and users do not need it to get the core result.",
        "**Integrations.** Each one is a week. Build the one that the core flow cannot work without, if any, and no others.",
        "**Team features, roles, permissions.** The first users are individuals. Teams come after demand is proven.",
        "**A second user type.** Two-sided products need one side working first. Pick the side that pays.",
      ] },

      { t: "h2", text: "Y Combinator says the same thing" },
      { t: "p", text: "Michael Seibel's advice to startup school founders is to launch quickly and build the simplest version that lets you learn from real users, rather than the fullest version you can imagine. The reasoning is the same as the numbers above: the thing you learn from the first flow changes what you build next, so anything built before that learning is a guess." },

      { t: "h2", text: "How I run it" },
      { t: "p", text: "My MVP sprint is fixed at $3,000 and three weeks, and the reason I can fix both is that the scope is one flow. Week one is design: the flow on paper, then clickable, with the cuts agreed in writing. Week two is the build. Week three is edge cases, deployment and handover. New scope gets quoted separately rather than squeezed in, because squeezing it in is how the one flow becomes four and the deadline becomes a quarter." },
      { t: "callout", title: "The test for any feature request", text: "Can a new user get the promised result without it? If yes, it waits. If no, it is part of the flow and it is in scope." },

      { t: "h2", text: "What happens after the flow works" },
      { t: "p", text: "The feature requests that arrive after launch are different from the ones you imagined before it. They come from people who used the thing and hit a wall. That list is worth more than the one you wrote on day one, and it is the list the next sprint is built from." },
    ],
    faq: [
      { q: "What percentage of startups fail due to poor product-market fit?", a: "CB Insights' analysis of VC-backed startups that shut down since 2023, published in March 2026, found 43% cited poor product-market fit as a reason." },
      { q: "How many software features actually get used?", a: "Pendo's feature adoption research found that 80% of features in the average software product are rarely or never used." },
      { q: "What should an MVP include?", a: "One complete flow: a new user signs up, performs the core action, and sees the promised result. Settings, dashboards, integrations and team features wait until that flow proves demand." },
    ],
    forFounders: "Send me your feature list or your prototype and the free teardown will mark which items are the flow and which are waiting. Most founders are surprised by how short the first column is.",
    forLabs: "The same discipline applies to benchmark tasks: a task that tests one clear capability is accepted; a task that tests five at once is rejected as ambiguous. Cut to the one thing you are measuring.",
    sources: [
      { title: "CB Insights, The Top Reasons Startups Fail, 5 Mar 2026", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
      { title: "Pendo, The 2019 Feature Adoption Report", url: "https://www.pendo.io/resources/the-2019-feature-adoption-report/" },
      { title: "Y Combinator Startup School recap: Michael Seibel on building product", url: "https://www.ycombinator.com/blog/startup-school-week-2-recap-michael-seibel-adora-cheung-and-ilya-volodarsky" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "write-task-specs-nobody-can-misread",
    day: 11,
    plan: 1,
    date: "2026-11-15",
    track: "AI labs",
    title: "Write task specs nobody can misread",
    standfirst: "When OpenAI built SWE-bench Verified, 93 developers screened 1,699 samples and filtered out 68%, many for under-specified problem statements or unfair tests. A vague spec is the cheapest bug to fix and the most expensive one to ship. Five rules for writing specs that authors and models read the same way.",
    heroAlt: "Isometric drafting board with a single column of text and one accent marker",
    keywords: ["benchmark task specification", "task authoring guidelines", "SWE-bench Verified", "underspecified tasks", "AI evaluation task design", "task spec template", "coding benchmark tasks"],
    takeaways: [
      "OpenAI's SWE-bench Verified screen removed 68% of the samples it checked; under-specified problem statements and over-specific tests were leading reasons.",
      "A spec states the end state, lists what is out of scope, gives one worked example, defines \"correct\" in terms a test can check, and is piloted on ten tasks before scale.",
      "Ambiguity is cheap to fix in the spec and expensive to fix after fifty tasks have been written against it.",
    ],
    body: [
      { t: "p", text: "SWE-bench Verified exists because the original benchmark had problems that were not the model's fault. OpenAI had 93 software developers screen 1,699 samples. After screening, 68% were filtered out. The two most common reasons were problem statements that did not say enough for a correct fix to be written, and tests so specific that a correct fix written another way would fail." },
      { t: "p", text: "Both are spec failures, and both are cheap to prevent. Here are the five rules I use when writing the specification for a task programme, whether the tasks are for a lab's benchmark or for a training set." },

      { t: "h2", text: "1. State the end state" },
      { t: "p", text: "Say what must be true when the task is done, in terms of files, outputs and behaviour. \"Fix the date bug\" is a direction. \"After the change, `parse_date('2026-02-30')` raises `ValueError` and the existing test suite passes\" is an end state. Authors can write to the second; models can be graded on it." },

      { t: "h2", text: "2. List what is out of scope" },
      { t: "p", text: "Authors fill silence with guesses. If the spec does not say whether tasks may use the network, whether a second valid solution should pass, or whether the agent may read the test files, each author decides for themselves and you get five different conventions in one batch. Write the exclusions down, even the obvious ones." },

      { t: "h2", text: "3. Give one worked example" },
      { t: "p", text: "A full task that passed review, with a note on why. The example answers a hundred questions the spec never thought to ask: how long the instruction should be, how the tests are laid out, how the reference solution is documented. One good example does more than three pages of rules." },

      { t: "h2", text: "4. Define \"correct\" in terms a test can check" },
      { t: "p", text: "If a requirement cannot be checked by a test or a rubric criterion, it is not a requirement, it is a hope. \"The code should be clean\" is a hope. \"No function longer than 50 lines; `ruff` passes with the project config\" can be checked. Over-specific tests are the opposite failure: they check one implementation instead of the behaviour. The rule is to check the outcome, never the path." },

      { t: "h2", text: "5. Pilot the spec on ten tasks" },
      { t: "p", text: "The first ten tasks written against a spec surface most of its ambiguities. Read them side by side, note where authors diverged, and fix the spec before anyone writes task eleven. This is the step most programmes skip, and it is why batch three has the same problems as batch one." },

      { t: "callout", title: "The cost curve", text: "An ambiguity found in the spec costs one edit. Found after ten tasks, it costs ten rewrites. Found at review after fifty tasks, it costs the batch and the reviewer-hours spent rejecting it." },

      { t: "h2", text: "What this looks like in a real spec" },
      { t: "table", head: ["Section", "What it contains", "Length"], rows: [
        ["End state", "What must be true when the task is complete", "3–6 lines"],
        ["Out of scope", "Explicit exclusions, including the obvious ones", "A list"],
        ["Worked example", "One accepted task with a note on why it passed", "One task"],
        ["Definition of correct", "Checks a test or rubric can run; outcome, not path", "A list"],
        ["Pilot", "Ten tasks, read side by side, spec revised", "One week"],
      ] },
      { t: "p", text: "The spec that comes out of this is usually shorter than the one it replaces, and the acceptance rate on the next batch is usually the proof." },
      { t: "gallery", items: [
        { src: slide("write-task-specs-nobody-can-misread", 2), alt: "Slide: state the end state" },
        { src: slide("write-task-specs-nobody-can-misread", 3), alt: "Slide: list what's out of scope" },
        { src: slide("write-task-specs-nobody-can-misread", 5), alt: "Slide: define correct in tests" },
        { src: slide("write-task-specs-nobody-can-misread", 6), alt: "Slide: pilot the spec" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "Why were so many SWE-bench samples filtered out of SWE-bench Verified?", a: "OpenAI's screen of 1,699 samples by 93 developers filtered out 68%. Leading reasons were under-specified problem statements, tests that would fail a correct fix written differently, and environment problems." },
      { q: "What makes a benchmark task under-specified?", a: "The problem statement does not contain enough information for a competent engineer to write a correct fix without guessing: missing end state, unstated constraints, or requirements that no test can check." },
      { q: "How do you test a task specification before scaling?", a: "Pilot it on ten tasks, read them side by side, note where authors made different choices, and revise the spec before more tasks are written." },
    ],
    forFounders: "A feature brief has the same failure mode as a task spec. If two engineers read it and build different things, the brief was the bug. The one-page scope from the previous post is the fix.",
    forLabs: "Send me your task spec or guideline and I will return a written review within 48 hours: where authors will diverge, what cannot be tested as written, and what to add before the next batch.",
    sources: [
      { title: "OpenAI, Introducing SWE-bench Verified, Aug 2024", url: "https://openai.com/index/introducing-swe-bench-verified/" },
    ],
    cta: { label: "Get a free written review of your spec", topic: "data" },
  },

  {
    slug: "what-makes-users-trust-an-ai-feature",
    day: 12,
    plan: 1,
    date: "2026-11-16",
    track: "Founders",
    title: "What makes users trust an AI feature",
    standfirst: "Stack Overflow's 2025 survey found 46% of developers distrust the accuracy of AI output, and the top frustration is answers that are almost right. Trust in AI features is designed, not earned by the model alone. Four decisions that build it, from research and from shipping one.",
    heroAlt: "Isometric assistant node: a dark core with a lit accent panel and two wires to source documents",
    keywords: ["AI feature trust", "AI UX design", "human-AI interaction guidelines", "AI product design", "trust in AI", "Stack Overflow developer survey 2025", "citations and trust", "Microsoft HAX guidelines"],
    takeaways: [
      "46% of developers in Stack Overflow's 2025 survey distrust the accuracy of AI tools; 66% name \"almost right\" answers as the top frustration.",
      "Citations raise trust even when they are wrong, which makes real, checkable sources a responsibility rather than a feature (AAAI 2025).",
      "Design for the wrong answer first: sources, a fallback and a human check. Microsoft's HAX guidelines give \"when wrong\" its own phase.",
    ],
    body: [
      { t: "p", text: "The 2025 Stack Overflow developer survey has a number that should be on the wall of every team adding AI to a product: 46% of developers say they distrust the accuracy of AI output, up sharply from the year before. Asked about frustrations, 66% picked answers that are \"almost right\". Not wrong. Almost right, which is worse, because it has to be checked and cannot be dismissed." },
      { t: "p", text: "Developers are the most AI-exposed users there are. Where they go, everyone else follows. So the design question for an AI feature is not \"how good is the model\" but \"what does the user need in order to act on an answer they cannot fully trust\". Four decisions, in order of how much they matter." },

      { t: "h2", text: "1. Show sources, and make them real" },
      { t: "p", text: "A study presented at AAAI 2025 tested how citations affect trust in AI answers. Citations raised trust even when they were random. When participants checked the citations and found them irrelevant, trust fell below where it started. The lesson cuts both ways: sources are the strongest trust signal you can add, and fake or loose sources are the fastest way to lose a user for good. Link to the exact passage, record or row the answer came from, and make it one click to verify." },

      { t: "h2", text: "2. Ground answers in the user's own data" },
      { t: "p", text: "A generic answer gets ignored, because the user knows it was not written for them. An answer that references their own records, calls, documents or numbers gets read, because it could only have come from their data. This is the single biggest difference between the AI features people use and the ones they switch off after a week." },

      { t: "h2", text: "3. Design for when it is wrong" },
      { t: "p", text: "Microsoft's Human-AI Experience guidelines give an entire phase to \"when wrong\": make it clear why the system did what it did, support efficient correction, and let the user dismiss or override. In practice this means three things on screen: the source (so the user can check), a fallback (so a bad answer does not block the task), and a human step before anything irreversible happens. A feature with all three survives its first wrong answer. A feature with none of them does not." },

      { t: "h2", text: "4. Build for the questions people actually ask" },
      { t: "p", text: "At Ringover I design AI features inside a call-intelligence platform used by sales teams. The questions reps ask of a call are simpler than product teams expect: what did they object to, what did I promise, what do I send next. Nobody asks for a sentiment trajectory. Designing for the real questions makes the feature right more often, which is the only lasting source of trust." },

      { t: "callout", title: "The sentence to design for", text: "\"I'm not sure, here is where that came from.\" Users forgive an AI that says this. They do not forgive one that is confidently almost right." },

      { t: "h2", text: "A checklist for your next AI feature" },
      { t: "ol", items: [
        "Every answer links to its source, and the link lands on the exact passage.",
        "Answers use the user's own data by default, not general knowledge.",
        "There is a visible fallback when confidence is low or the source is missing.",
        "Nothing irreversible happens without a person approving it.",
        "The feature is built for the three questions users ask most, found by asking them.",
      ] },
      { t: "p", text: "None of these require a better model. All of them require deciding, before the build, that the user's ability to check the answer is part of the product." },
    ],
    faq: [
      { q: "How many developers trust AI output?", a: "In Stack Overflow's 2025 developer survey, 46% said they distrust the accuracy of AI tools, and 66% named \"almost right\" answers as their top frustration." },
      { q: "Do citations make people trust AI answers more?", a: "Yes, and that is the problem. An AAAI 2025 study found citations raised trust even when they were random, and trust fell when people checked and found them irrelevant. Sources must be real and verifiable." },
      { q: "How do you design an AI feature for wrong answers?", a: "Show the source so the user can check, offer a fallback so a bad answer does not block the task, and keep a human approval step before anything irreversible. Microsoft's HAX guidelines cover this as a distinct design phase." },
    ],
    forFounders: "If your AI feature produces answers, send it for the free teardown and I will check it against the five-item list above and tell you where trust leaks.",
    forLabs: "Graders have the same trust problem as users. A score with no trace is a verdict nobody can check. Rubrics that show which criterion failed and why get adopted; opaque ones get argued with.",
    sources: [
      { title: "Stack Overflow 2025 Developer Survey, reported by TechRepublic", url: "https://www.techrepublic.com/article/news-developer-trust-in-ai-declines/" },
      { title: "Ding et al., Citations and Trust in LLM Generated Responses, AAAI 2025", url: "https://arxiv.org/abs/2501.01303v1" },
      { title: "Microsoft HAX Toolkit, Guidelines for Human-AI Interaction", url: "https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "try-us-on-ten-tasks-before-you-commit",
    day: 13,
    plan: 1,
    date: "2026-11-17",
    track: "AI labs",
    title: "Try us on ten tasks before you commit",
    standfirst: "Google DeepMind's published data practices say to run a pilot before launching a data programme. So do we. Ten tasks on your rubric in one week, graded by you, with a written report. You scale only if the numbers hold.",
    heroAlt: "Isometric pilot-to-scale unit: one module on the left, six identical modules on the right, connected by a rail",
    keywords: ["AI data pilot", "AI training data pilot programme", "benchmark task pilot", "hire AI data vendor", "RLHF data vendor trial", "expert data pilot", "AI evaluation vendor"],
    takeaways: [
      "DeepMind's data enrichment best practices recommend piloting a task with a small batch before launching at volume.",
      "A pilot is ten tasks on your rubric in one week, graded by you, with a report of acceptance, rework and the guideline changes made.",
      "The pilot is priced by complexity and ends with a decision in your hands: scale, adjust or stop.",
    ],
    body: [
      { t: "p", text: "Nobody hires an engineer without a trial task. Yet data programmes are regularly started at volume, on the strength of a deck and a rate card, and the first real sample of the vendor's work arrives as batch one with a thousand items in it." },
      { t: "p", text: "Google DeepMind's best practices for data enrichment include piloting a task before launch: run a small batch, check that the instructions produce the data you expected, fix what did not work, then scale. That is the model I run, and this post is exactly what the pilot looks like so you can judge it before booking one." },

      { t: "h2", text: "Day 1: free review of one task" },
      { t: "p", text: "Before the pilot, send one task, rubric or test suite. Under NDA, or a sanitised sample if you prefer. Within 48 hours you get a written review: where an agent could shortcut it, where the spec is ambiguous, what the tests miss. This costs nothing and it tells you what level of review the pilot will apply to your work." },

      { t: "h2", text: "Week 1: ten tasks on your rubric" },
      { t: "p", text: "Ten tasks in your domain, written to your spec and graded against your rubric. Each task carries what a task needs to pass review: a pinned environment, a reference solution re-run before submission, hidden tests that fail hard-coding and empty runs, and a second-specialist review before it reaches you. You grade every one. Not a sample, every one, because the point is to see the floor as well as the ceiling." },

      { t: "h2", text: "End of week 1: the report" },
      { t: "p", text: "A written report with acceptance rate, every rejection grouped by cause, rework count, and the changes made to the guideline because of them. This is the same report you would get weekly at volume, so you are also judging the reporting, not only the tasks." },

      { t: "h2", text: "Then: your decision" },
      { t: "table", head: ["Outcome", "What happens"], rows: [
        ["Quality holds", "Scale to volume with the same review gates, priced by complexity, weekly reports"],
        ["Quality is close", "One more batch of ten with the guideline fixes applied, before any volume"],
        ["Quality does not hold", "You have lost a week, not a quarter, and you keep the ten tasks and the report"],
      ] },

      { t: "callout", title: "What a pilot costs", text: "Priced by task complexity and agreed in writing before day one. There is no retainer, no minimum beyond the ten tasks, and no lock-in after." },

      { t: "h2", text: "Why I offer it this way" },
      { t: "p", text: "A pilot is as useful to me as to you. Ten tasks tell me whether your rubric is clear enough to scale, whether your domain needs a specialist I have not yet lined up, and whether the two of us agree on what \"accepted\" means. Programmes that skip the pilot find all of that out in week three, which is where most of the industry's quality problems live." },
      { t: "p", text: "You can stop after any step. That is the whole point." },
    ],
    faq: [
      { q: "What is a pilot in AI training data procurement?", a: "A small batch of tasks, typically ten, written to the client's spec and graded on the client's rubric before any volume commitment. DeepMind's published data practices recommend it before launching a data programme." },
      { q: "How long does an AI data pilot take?", a: "One week for ten tasks, after a free 48-hour review of one task. The pilot ends with a written report and a scale, adjust or stop decision." },
      { q: "Who grades the pilot tasks?", a: "You do. Every task, against your own rubric. A pilot graded by the vendor is not a pilot." },
    ],
    forFounders: "The equivalent for product work is the free teardown followed by a fixed-price design sprint. Small, graded by you, before anything larger.",
    forLabs: "Start with the free review. Send one task and judge the review before deciding whether the pilot is worth a week.",
    sources: [
      { title: "Google DeepMind: best practices for data enrichment", url: "https://deepmind.google/discover/blog/best-practices-for-data-enrichment/" },
    ],
    cta: { label: "Start with a free 48-hour task review", topic: "data" },
  },

  {
    slug: "every-extra-form-field-costs-you-users",
    day: 14,
    plan: 1,
    date: "2026-11-18",
    track: "Founders",
    title: "Every extra form field costs you users",
    standfirst: "Baymard Institute's checkout research puts the average US checkout at 14.88 form fields, when 7 to 8 would do, and finds forced account creation behind 18% of abandoned carts. Your sign-up form is a checkout. Here is how to cut it.",
    heroAlt: "Isometric before-and-after unit: a long form on the left, a short one on the right",
    keywords: ["form design", "sign-up conversion", "checkout abandonment", "Baymard checkout usability", "onboarding friction", "form fields conversion rate", "UX form best practices"],
    takeaways: [
      "The average US checkout shows 14.88 form fields; Baymard's research says a checkout can work with 7–8.",
      "18% of US shoppers who abandoned a cart in the last quarter did so because the site wanted them to create an account.",
      "Every field is a question, and each one asks the user to justify the product's curiosity. Ask only for what you need to deliver the first result.",
    ],
    body: [
      { t: "p", text: "Baymard Institute has spent years testing checkout flows with real shoppers. Two of their findings apply to every product with a sign-up form, not only shops. The average US checkout displays 14.88 form fields, and Baymard's benchmark says a checkout can function with 7 to 8. And in their survey of reasons for abandoning a cart, 18% of shoppers said it was because the site wanted them to create an account." },
      { t: "p", text: "A sign-up form is a checkout. The user is paying with time and personal data, and the product is asking for the payment before showing the goods. Every field is a reason to leave." },

      { t: "h2", text: "Why fields cost more than they look" },
      { t: "p", text: "A field is not a text box, it is a question, and each question carries three costs. The user has to understand it, has to have the answer to hand, and has to decide whether the product deserves it. \"Company size\" fails the third test for most people: it is for your sales team, not for them. \"Phone number\" fails all three. Fields that exist to help the product rather than the user are the ones that get the form abandoned." },

      { t: "h2", text: "The cut, field by field" },
      { t: "table", head: ["Field", "Keep?", "Why"], rows: [
        ["Email", "Yes", "The product needs a way to reach the user; nothing else is required at this stage"],
        ["Password", "Later", "A magic link or OAuth button gets the user in without one"],
        ["Name", "Later", "Ask once they are inside, or infer from email, or do not ask"],
        ["Company, role, team size", "No", "Sales qualification questions belong after value, not before it"],
        ["Phone", "No", "Unless the product sends SMS, this is a reason to leave"],
        ["\"How did you hear about us\"", "No", "Attribution is your problem, not the user's"],
      ] },

      { t: "h2", text: "What to do instead of asking" },
      { t: "ul", items: [
        "**Show the result before the form.** One worked example above the fold tells the user what they are signing up for. Then the email field is a fair trade.",
        "**Let people try before the wall.** A single use without an account, then the sign-up, converts better than the wall first. The user has already seen value.",
        "**Infer what you can.** Company from the email domain, timezone from the browser, name later from the user's own profile edits.",
        "**Ask the sales questions after the first success.** A user who has just got a result will answer three questions. A user staring at a blank form will not.",
      ] },

      { t: "callout", title: "The question to ask of every field", text: "If this field were empty, could we still deliver the first result? If yes, delete it from sign-up and ask later, or never." },

      { t: "h2", text: "A note on account creation" },
      { t: "p", text: "Baymard's 18% figure is about forced account creation specifically. The fix is not to remove accounts; it is to make them a consequence of use rather than a precondition. Guest checkout in commerce, and in software a single email field that creates the account silently and lets the user set anything else later. The user never feels the wall because there is none." },
    ],
    faq: [
      { q: "How many form fields does the average checkout have?", a: "Baymard Institute's research puts the average US checkout at 14.88 form fields, while its benchmark finds a checkout can function with 7 to 8." },
      { q: "How much does forced account creation hurt conversion?", a: "In Baymard's survey of US shoppers who abandoned a cart, 18% named being asked to create an account as the reason." },
      { q: "What fields should a sign-up form have?", a: "Email, and little else. Password can be replaced by a magic link or OAuth; name can be asked later; sales qualification questions belong after the user has seen value." },
    ],
    forFounders: "Send me your sign-up or onboarding flow and the free teardown will come back with the field-by-field cut and what to show before the form.",
    forLabs: "Task instructions have the same problem: every unnecessary constraint is a field the author has to fill. Specs that ask only for what the test checks get followed more accurately.",
    sources: [
      { title: "Baymard Institute, Cart Abandonment Rate Statistics (updated 22 Sep 2025)", url: "https://baymard.com/lists/cart-abandonment-rate" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "managed-team-or-open-marketplace",
    day: 15,
    plan: 1,
    date: "2026-11-19",
    track: "AI labs",
    title: "Managed team or open marketplace?",
    standfirst: "The AI data industry is moving from large pools of generalist annotators to small, vetted groups of specialists. The reason is accountability: when expert graders agree only 71% of the time, somebody has to own calibration. Here is the case for a managed team, with the evidence.",
    heroAlt: "Isometric system: one accent node connected to three white nodes, replacing a single large block",
    keywords: ["managed AI data team", "data annotation marketplace", "expert data annotation", "AI training data vendor comparison", "RLHF data quality", "specialist annotators", "AI data accountability"],
    takeaways: [
      "The market is shifting to specialists: xAI reportedly cut 500 generalist annotators while planning to grow specialist tutors tenfold; Scale cited an industry move toward expert data work.",
      "Experts disagree too. GDPval's expert graders agreed on about 71% of pairwise comparisons, so calibration has to be someone's job.",
      "A marketplace gives you access to people. A managed team gives you one owner for vetting, review, calibration and rework.",
    ],
    body: [
      { t: "p", text: "\"Why a managed team instead of a big marketplace?\" is a fair question, and the honest answer starts with what the marketplaces themselves are doing." },
      { t: "p", text: "In September 2025, xAI reportedly laid off around 500 workers from its generalist data annotation team and said it would grow its specialist tutor team tenfold. A month later Scale AI, cutting contractors, pointed to an industry shift toward higher-skill, expert data work. The large general pool is being replaced by small specialist groups across the industry, because the data frontier labs need now cannot be produced by generalists at any volume." },

      { t: "h2", text: "Experts disagree too" },
      { t: "p", text: "Specialists solve the knowledge problem and introduce a different one. In OpenAI's GDPval, expert graders from the same occupations agreed on about 71% of pairwise comparisons. Nearly a third of the time, two qualified people looked at the same pair of outputs and reached different verdicts." },
      { t: "p", text: "That is not a flaw in the experts. It is what happens when \"better\" is not fully defined. The fix is calibration: a rubric that turns judgement into checkable parts, a golden answer written first, a batch where everyone grades the same items, and someone whose job is to resolve the differences and update the guideline. On a marketplace, that job belongs to nobody." },

      { t: "h2", text: "Someone has to check for AI-written work" },
      { t: "p", text: "In September 2026, 404 Media reported that contractors working on OpenAI training data had been dismissed for using AI to do the work. The incentive is obvious: per-item pay, expert-level tasks, a model that can produce a plausible answer in seconds. On a marketplace the check is a policy. On a managed team it is a person who knows each contributor's work well enough to notice when it changes." },

      { t: "h2", text: "What \"managed\" means in practice" },
      { t: "table", head: ["Job", "Marketplace", "Managed team"], rows: [
        ["Vetting", "Platform-level tests, often generic", "Scored trial on your rubric before anyone joins"],
        ["Review", "Optional, usually sampled", "Second specialist on every item"],
        ["Disagreement", "Majority vote or none", "Calibration batch, adjudication, guideline update"],
        ["AI-written work", "Policy", "A person who knows each contributor's output"],
        ["Rework", "Re-queued", "Fixed, cause logged, pre-check added"],
        ["Contact", "A ticket queue", "One accountable person"],
      ] },

      { t: "callout", title: "The short version", text: "A marketplace gives you access to people. A managed team gives you accountability for the output. When expert graders agree on 71% of comparisons, you need the second thing." },

      { t: "h2", text: "When a marketplace is the right call" },
      { t: "p", text: "Fairness demands the other side. For high-volume, low-ambiguity labelling where the rubric is a lookup and the risk of a wrong item is low, a marketplace is cheaper and the lack of calibration costs little. The managed model earns its price when tasks need judgement, when the rubric is still being learned, and when a wrong item is expensive to find later. Benchmark tasks, expert evaluations and RL environments are all in the second category." },
      { t: "p", text: "The way to find out which you need is a pilot: ten tasks, your rubric, graded by you. If the marketplace result holds, use it. If it does not, you have the comparison." },
    ],
    faq: [
      { q: "Why are AI companies moving away from generalist data annotators?", a: "Frontier labs need expert-level data. xAI reportedly cut around 500 generalist annotators in September 2025 while growing specialist tutors, and Scale AI cited an industry shift toward higher-skill expert data work." },
      { q: "How often do expert graders agree on AI outputs?", a: "In OpenAI's GDPval, expert graders agreed on roughly 71% of pairwise comparisons, which is why calibration and adjudication have to be someone's explicit job." },
      { q: "What does a managed AI data team do that a marketplace does not?", a: "Owns vetting on your rubric, second-specialist review of every item, calibration when graders disagree, checks for AI-written submissions, and rework with a logged cause. One accountable person instead of a queue." },
    ],
    forFounders: "The same trade-off applies to hiring a freelancer marketplace versus one accountable builder. Access to people is not the scarce thing. Someone who owns the outcome is.",
    forLabs: "Test the claim on ten tasks. Send one task first for the free review and judge the depth of the feedback before deciding.",
    sources: [
      { title: "TechCrunch, xAI reportedly lays off 500 workers from data annotation team, 13 Sep 2025", url: "https://techcrunch.com/2025/09/13/xai-reportedly-lays-off-500-workers-from-data-annotation-team" },
      { title: "Business Insider via AOL, Scale AI cuts more contractors, 16 Oct 2025", url: "https://www.aol.com/articles/scale-ai-cuts-more-contractors-200944549.html" },
      { title: "GDPval paper (grader agreement), arXiv", url: "https://arxiv.org/html/2510.04374v1" },
      { title: "404 Media, contractors dismissed for using AI to train the AI, 22 Sep 2026", url: "https://www.404media.co/people-training-openais-ai-fired-for-using-ai-to-train-the-ai/" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },
];
