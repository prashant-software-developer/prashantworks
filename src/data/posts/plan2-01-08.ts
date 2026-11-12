import { slide, type BlogPost } from "../blog-shared";

export const plan2a: BlogPost[] = [
  {
    slug: "december-fewer-posts-more-work",
    day: 1,
    plan: 2,
    date: "2026-12-05",
    track: "Both",
    title: "December: fewer meetings, more shipped",
    standfirst: "December is the best month of the year to start a build. Fewer meetings on both sides, faster replies, and a product or a pilot finished before January. What is open this month for founders and AI labs, and how both start free.",
    heroAlt: "Isometric December desk: a calendar plate, a screen, a dial and an accent panel",
    keywords: ["December projects", "hire product engineer December", "MVP before January", "AI data pilot", "year-end product build", "freelance product engineer", "AI training data partner"],
    takeaways: [
      "Two queues are open for December: a $3,000 fixed-price MVP sprint for founders and a ten-task pilot for AI labs.",
      "Both begin with a free step: a one-page teardown or a 48-hour written task review.",
      "December works because the calendar empties: replies arrive in hours, and a three-week sprint started in the first week is live before the year ends.",
    ],
    body: [
      { t: "p", text: "Every year the same thing happens in December. Meetings get cancelled, inboxes go quiet, and the people who are still working get more done in three weeks than they did in the previous six. It is the best month to start a build, and this post is what is open for it." },

      { t: "h2", text: "For founders" },
      { t: "table", head: ["Offer", "What you get", "Price", "Time"], rows: [
        ["Free teardown", "One page: what to fix, what to cut, what to build first, with a scope and price", "Free", "A few days"],
        ["Design sprint", "Clickable prototype of the core flow and a one-page scope any developer can quote from", "$2,000 fixed", "5 days"],
        ["MVP sprint", "One flow designed, built, deployed and handed over, with 30 days of support", "$3,000 fixed", "3 weeks"],
      ] },
      { t: "p", text: "An MVP sprint started in the first week of December is live before the year ends. The January version of you has a product with real users instead of a plan." },

      { t: "h2", text: "For AI labs and data teams" },
      { t: "table", head: ["Offer", "What you get", "Price", "Time"], rows: [
        ["Free task review", "Written review of one task, rubric or test suite: shortcuts, ambiguities, missing tests", "Free", "48 hours"],
        ["Ten-task pilot", "Ten tasks on your rubric, graded by you, with a written report", "By complexity", "1 week"],
        ["Managed delivery", "Volume with second review on every item and a Friday report", "By complexity", "Ongoing"],
      ] },
      { t: "p", text: "A pilot that starts in December has its calibration done before the January volume planning happens, which is when most programmes are scoped." },

      { t: "h2", text: "Why December, specifically" },
      { t: "ul", items: [
        "**Replies in hours.** With fewer meetings on both sides, decisions that take a week in March take a day.",
        "**Full attention.** December projects are the only ones on the desk, and it shows in the work.",
        "**A clean start to the year.** A product live or a pilot graded before 1 January changes what the January plan is about.",
      ] },

      { t: "callout", title: "Both start free", text: "Founders: send a product, prototype or idea and get a one-page teardown. AI labs: send one task and get a written review in 48 hours. No call needed." },

      { t: "h2", text: "What the next thirty days of posts cover" },
      { t: "p", text: "The same two readers, thirty new topics. For labs: hidden-test patterns that cannot be gamed, reading trajectories instead of pass rates, difficulty calibration, flaky tests, rubric trees, grader agreement, cost per accepted task, a year in review of agent benchmarks. For founders: a year-end product audit, the first five minutes, empty states, pricing pages, a design sprint day by day, accessibility fixes that lift conversion, AI feature cost control. Every post has a sourced number and a free next step, and every one has a full write-up here." },
      { t: "gallery", items: [
        { src: slide("december-fewer-posts-more-work", 2), alt: "Slide: founders, MVP sprint" },
        { src: slide("december-fewer-posts-more-work", 4), alt: "Slide: AI labs, task review" },
        { src: slide("december-fewer-posts-more-work", 5), alt: "Slide: AI labs, ten-task pilot" },
        { src: slide("december-fewer-posts-more-work", 6), alt: "Slide: why December" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "Is December a good time to build an MVP?", a: "Yes. Fewer meetings and faster replies mean a three-week sprint started in the first week of December is live before January, with the founder's full attention available for decisions." },
      { q: "What is open for AI labs in December?", a: "A free written review of one task within 48 hours, then a ten-task pilot on your rubric in one week, then managed delivery at volume if the numbers hold." },
      { q: "What is open for founders in December?", a: "A free one-page teardown, then a $2,000 design sprint or a $3,000 fixed-price MVP sprint, with a written update every week." },
    ],
    forFounders: "Send the thing you want live before January. The teardown comes back within days and ends with a scope and a fixed price.",
    forLabs: "Send one task now and the review is back before the week is out, in time to plan a pilot for mid-December.",
    sources: [
      { title: "Offers and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free review" },
  },

  {
    slug: "year-end-product-audit-five-things-to-cut",
    day: 2,
    plan: 2,
    date: "2026-12-06",
    track: "Founders",
    title: "Year-end product audit: five things to cut before January",
    standfirst: "Pendo's data says 80% of features are rarely or never used. December, when usage is quiet and the roadmap is being written, is when to find out which of yours they are. Five cuts to make before you plan a single new feature.",
    heroAlt: "Isometric audit bench: five blocks on a tray, two of them lit in accent blue for removal",
    keywords: ["product audit", "feature audit", "year-end product review", "feature bloat", "product roadmap planning", "feature adoption", "SaaS product management", "cut features"],
    takeaways: [
      "80% of features in the average software product are rarely or never used (Pendo). Most products are carrying maintenance cost with no return.",
      "Five cuts: features with no usage in 90 days, settings nobody changes, onboarding steps before first value, dashboard tiles no one clicks, and the pricing tier nobody picks.",
      "Audit before you plan. A roadmap written on top of unused features inherits their cost.",
    ],
    body: [
      { t: "p", text: "Pendo's feature adoption research found that 80% of features in the average software product are rarely or never used. The number is old enough to be familiar and still true enough to be uncomfortable. Every one of those features has a cost: code that has to keep working, screens that have to keep making sense, a settings page that keeps getting longer." },
      { t: "p", text: "December is the right time to do something about it. Usage is quiet, so the data is easy to read, and the 2027 roadmap is being written, so there is a reason to clear the ground first. Five cuts, each with how to find the candidates." },

      { t: "h2", text: "Cut 1: features with no usage in 90 days" },
      { t: "p", text: "Open your analytics and sort features by last-90-day usage. The bottom of the list is the audit. For each one, ask whether a single paying customer would notice its removal. If the answer is no, remove it, or hide it behind a flag and see whether anyone asks. Opinions about which features matter are reliably wrong; usage is not." },

      { t: "h2", text: "Cut 2: settings nobody changes" },
      { t: "p", text: "Every setting is a decision the product declined to make. Check how many users have changed each one from its default. A setting changed by fewer than 2% of users is a default with a UI attached. Pick the better value, make it the only value, and delete the control. The settings page gets shorter and the product gets more opinionated, which is what users mean when they say it feels simpler." },

      { t: "h2", text: "Cut 3: onboarding steps before first value" },
      { t: "p", text: "Count the screens between sign-up and the first moment the product does something useful for the user. Each one loses people. The audit question is whether each step is needed to deliver the first result or merely convenient to collect early. Tours, surveys, setup wizards and \"tell us about yourself\" screens almost always belong after the first result, not before it." },

      { t: "h2", text: "Cut 4: dashboard tiles no one clicks" },
      { t: "p", text: "Dashboards accrete. Every quarter someone adds a tile, and nobody removes one. Click data on each tile tells you which numbers people act on. A tile that is looked at but never clicked may be fine; a tile nobody looks at is a place to put something they would. The dashboard should fit on one screen and answer one question: does anything need my action today?" },

      { t: "h2", text: "Cut 5: the pricing tier nobody picks" },
      { t: "p", text: "Look at the distribution of plans. If a tier has a small single-digit share of customers, it is not a product decision, it is a comparison anchor, and it may not be doing that job either. Three tiers is enough for almost every product. Fold the orphan tier into its neighbour, grandfather existing customers, and watch the conversion on the remaining three." },

      { t: "table", head: ["Cut", "Where to look", "Decision rule"], rows: [
        ["Unused features", "Feature usage, last 90 days", "Would a paying customer notice?"],
        ["Unchanged settings", "Share of users changing each default", "Under 2% changed → pick one value"],
        ["Onboarding steps", "Screens before first result", "Needed for the result, or merely early?"],
        ["Dashboard tiles", "Click data per tile", "Never clicked → replace or remove"],
        ["Pricing tiers", "Plan distribution", "Single-digit share → fold into neighbour"],
      ] },

      { t: "callout", title: "The order matters", text: "Audit first, then plan. A roadmap written on top of unused features inherits all of their cost and most of their confusion." },

      { t: "h2", text: "What the audit usually finds" },
      { t: "p", text: "In my experience of doing this on products I inherit, the audit removes between a fifth and a third of the surface area and almost nobody notices, except the engineers, who get a faster codebase, and new users, who get a product that is easier to understand. The features that remain are the ones that were always doing the work. Plan on top of those." },
    ],
    faq: [
      { q: "What percentage of software features are actually used?", a: "Pendo's feature adoption report found 80% of features in the average software product are rarely or never used." },
      { q: "How do you audit a product for unused features?", a: "Sort features by usage over the last 90 days, check how many users change each setting from its default, count onboarding screens before first value, read click data per dashboard tile, and look at the distribution of customers across pricing tiers." },
      { q: "When should you do a product audit?", a: "Before writing the next roadmap. December suits most companies: usage is quiet, the data is easy to read, and the 2027 plan has not been written on top of the old surface area yet." },
    ],
    forFounders: "Send your product and the free teardown will do the first pass of this audit for you: what to cut, what to keep, what to build first on the cleared ground.",
    forLabs: "Task sets need the same audit. Tasks that every model passes, tasks nobody can solve, and tasks that measure the same thing twice are the unused features of a benchmark.",
    sources: [
      { title: "Pendo, The 2019 Feature Adoption Report", url: "https://www.pendo.io/resources/the-2019-feature-adoption-report/" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "hidden-test-patterns-that-cannot-be-gamed",
    day: 3,
    plan: 2,
    date: "2026-12-07",
    track: "AI labs",
    title: "Five hidden-test patterns that can't be gamed",
    standfirst: "Berkeley's checklist for trustworthy agent benchmarks says to isolate the grader, zero the null agent and lock the test files. That is the harness. This is the other half: how to write the tests themselves so a determined model cannot pass them without doing the task.",
    heroAlt: "Isometric test vault: a dark sealed block with a dial and five small slots on top",
    keywords: ["hidden tests", "benchmark test design", "ungameable tests", "agentic benchmark", "test contamination", "coding benchmark tests", "Berkeley trustworthy benchmarks", "evaluation harness"],
    takeaways: [
      "A visible test is a hint; a hidden test is a measurement. If the agent can read the expected output, it will match it.",
      "Five patterns: hidden inputs generated at grading time, final-state checks instead of transcript checks, property tests that must hold for any input, a second valid solution that must pass, and a grader that runs outside the agent's reach.",
      "The tests are the product. A task with a good spec and weak tests measures nothing.",
    ],
    body: [
      { t: "p", text: "In April 2026 Berkeley's RDI group published a checklist for trustworthy agentic benchmarks after finding harness exploits that let an agent score 100% without solving a single task. The checklist covers the harness: isolate the grader, run the null agent, lock the test files, check that success cannot be signalled directly. Every task programme should run it." },
      { t: "p", text: "The harness is necessary and not sufficient. A perfectly isolated grader running a weak test still passes a shortcut. These are the five patterns I use for the tests themselves, in the order I apply them." },

      { t: "h2", text: "1. Hidden inputs, generated at grading time" },
      { t: "p", text: "The agent sees the specification and the sample data. The grader runs on inputs it generates or mounts at grading time, drawn from the same distribution but never present in the task directory. Special-casing the sample becomes useless because the sample is not what is graded. For data tasks this means a different file; for code tasks, a different set of arguments; for agentic tasks, a different starting state." },

      { t: "h2", text: "2. Final state, not transcript" },
      { t: "p", text: "Grade what is true at the end: the files on disk, the rows in the table, the output of running the program. Never grade the agent's own account of what it did, and never grade a log line it could have printed. The model that writes \"All tests passed\" to stdout should score exactly the same as the model that writes nothing." },

      { t: "h2", text: "3. Property tests" },
      { t: "p", text: "Instead of asserting one expected output, assert a property that must hold for any input: the function is idempotent, the total is preserved, the sort is stable, the parser round-trips. Then run it on a few hundred random inputs. A property test catches the solution that works on the three cases the author thought of and nothing else, which is the most common shape of a wrong answer." },

      { t: "h2", text: "4. A second valid solution must pass" },
      { t: "p", text: "Before a task ships, write a second correct solution that takes a different approach, and confirm the tests pass it. SWE-bench Verified filtered out tasks whose tests only accepted one implementation; those tests graded the path instead of the outcome and failed correct answers. If a second solution fails your tests, the tests are over-specific and the task will be rejected at review or, worse, accepted and then wrong." },

      { t: "h2", text: "5. The grader runs out of reach" },
      { t: "p", text: "This one is from the Berkeley list, and it belongs here because test patterns are worthless without it. The grader runs in a separate container, the test files are mounted read-only after the agent's turn ends, and the result is written somewhere the agent cannot touch. The agent's environment should contain nothing that, if modified, changes the score." },

      { t: "table", head: ["Pattern", "Defeats"], rows: [
        ["Hidden inputs at grading time", "Special-casing the sample"],
        ["Final-state checks", "Printing success, lying in the summary"],
        ["Property tests", "Solutions that fit three cases"],
        ["Second valid solution passes", "Over-specific tests that fail correct answers"],
        ["Grader out of reach", "Editing or replacing the tests"],
      ] },

      { t: "callout", title: "Before any task ships", text: "Null agent scores zero. Fake-success agent scores zero. Reference solution passes ten times in a fresh container. Second solution passes. Then it goes." },

      { t: "h2", text: "Why this is worth the time" },
      { t: "p", text: "A task takes hours to write. The tests take a fraction of that and decide whether the hours measured anything. Terminal-Bench 2.0 accepted about 39% of submitted tasks after roughly three reviewer-hours each; most of what was rejected failed on exactly the problems these patterns prevent. Writing the tests this way is how a task clears review the first time." },
      { t: "gallery", items: [
        { src: slide("hidden-test-patterns-that-cannot-be-gamed", 2), alt: "Slide: hidden inputs" },
        { src: slide("hidden-test-patterns-that-cannot-be-gamed", 3), alt: "Slide: final state, not transcript" },
        { src: slide("hidden-test-patterns-that-cannot-be-gamed", 4), alt: "Slide: property tests" },
        { src: slide("hidden-test-patterns-that-cannot-be-gamed", 6), alt: "Slide: grader out of reach" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What is a hidden test in a coding benchmark?", a: "A test the agent cannot see or modify, run on inputs generated or mounted at grading time, checking the final state of the environment rather than anything the agent printed or claimed." },
      { q: "How do you stop an AI agent from gaming benchmark tests?", a: "Generate inputs at grading time, check final state not transcripts, use property tests across many inputs, confirm a second valid solution passes, and run the grader in a separate container with read-only test files." },
      { q: "What is a property test?", a: "A test that asserts a property which must hold for any input, such as idempotence or a preserved total, and runs it over many random inputs rather than checking one expected output." },
    ],
    forFounders: "Your AI feature's evaluation has the same weakness: if the test set is the demo set, the feature will look good in the demo. Hold out real inputs the team has never seen.",
    forLabs: "Send one task with its tests and the free review will apply all five patterns and tell you which the task fails.",
    sources: [
      { title: "Berkeley RDI, Trustworthy agentic benchmarks (checklist), Apr 2026", url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/" },
      { title: "OpenAI, Introducing SWE-bench Verified (over-specific tests)", url: "https://openai.com/index/introducing-swe-bench-verified/" },
      { title: "Terminal-Bench 2.0 paper (task acceptance), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "read-the-trajectory-not-the-pass-rate",
    day: 4,
    plan: 2,
    date: "2026-12-08",
    track: "AI labs",
    title: "Read the trajectory, not the pass rate",
    standfirst: "A pass rate tells you how often a model solves a task. A trajectory tells you why it did not. I read every failed run before a task ships, because the failure cause decides the fix, and three runs failing the same way is a task bug, not a hard task.",
    heroAlt: "Isometric trace reader: a rail of run sheets passing under a reading head with a lit lens",
    keywords: ["agent trajectory analysis", "benchmark task debugging", "pass rate", "AI evaluation transcripts", "task validation", "agentic benchmarks", "reading agent runs", "eval failure analysis"],
    takeaways: [
      "Anthropic's evals guide: a 0% pass rate across many attempts is almost always a broken task, not a hard one. Only reading the runs tells you which.",
      "Four failure causes need four different fixes: misread spec (tighten the instruction), missed hidden input (task is fine), fixed the sample only (strengthen tests), tool error (fix the environment).",
      "Three runs failing the same way is a task bug. Three runs failing different ways is a hard task.",
    ],
    body: [
      { t: "p", text: "The number everyone reports for a task is its pass rate: run a model ten times, count the successes. It is a useful number and it answers one question only, how often. The question that decides whether the task is any good is why, and the only place that answer lives is in the trajectories, the step-by-step record of what the agent did." },
      { t: "p", text: "I read every failed run before a task ships. Not a sample. All of them. Here is what I am looking for and what each finding changes." },

      { t: "h2", text: "The rule of thumb from Anthropic's guide" },
      { t: "p", text: "Anthropic's engineering guide on agent evals makes a point that experienced task authors learn the hard way: a task with a 0% pass rate across many attempts is almost always broken rather than hard. The guide's example is a CORE-Bench score that went from 42% to 95% after grading bugs were fixed and the scaffold changed. The models did not improve; the task stopped lying. A pass rate cannot tell the difference between hard and broken. A trajectory can." },

      { t: "h2", text: "Four causes, four fixes" },
      { t: "table", head: ["What the trajectory shows", "Diagnosis", "Fix"], rows: [
        ["Agent solves a different problem from the one intended", "Misread spec", "Tighten the instruction; add the missing constraint"],
        ["Agent solves the sample and stops", "Hidden input missed", "Task is fine; this is the capability being measured"],
        ["Agent special-cases the visible test inputs", "Weak tests", "Hidden inputs at grading time; property tests"],
        ["Agent gives up after a tool or environment error", "Environment bug", "Fix the container, pin the dependency, raise the limit"],
      ] },
      { t: "p", text: "Each row is a different task edit, and some rows mean no edit at all. A pass rate of 30% could be any mix of the four. Reading the runs tells you the mix." },

      { t: "h2", text: "Group by cause across runs" },
      { t: "p", text: "The useful unit is not a single failed run but the set of them. Group failures by cause. Three runs failing the same way, on the same step, for the same reason, is a task bug: something in the spec, the tests or the environment is pushing every attempt into the same hole. Three runs failing three different ways is a hard task: the model is reaching different points and running out of capability at each. The first needs fixing. The second is what a benchmark is for." },

      { t: "h2", text: "Read the successes too" },
      { t: "p", text: "A passing run can be a failure in disguise. If the agent reached the answer by a route the task did not intend, by finding the expected output in a cache, by guessing a value that happened to match, by exploiting a harness detail, the pass is a hack you have not named yet. One in every few successful trajectories deserves the same reading as the failures." },

      { t: "callout", title: "What reviewers do", text: "Benchmark reviewers read trajectories. Arriving at review with the failures already grouped and the task already fixed is most of the difference between a 39% acceptance rate and a 90% one." },

      { t: "h2", text: "How long this takes" },
      { t: "p", text: "Ten runs on a task take an hour to read properly. That hour is cheaper than the three reviewer-hours a rejected task costs, and far cheaper than a broken task that ships and spends months in a benchmark measuring nothing. It is also the most educational hour in task authoring: the trajectories show you how models actually read your instructions, which is never quite how you meant them." },
    ],
    faq: [
      { q: "What is an agent trajectory?", a: "The step-by-step record of what an agent did on a task: the commands it ran, the files it read and changed, its reasoning, and where it stopped. It is the only record that explains why a run failed." },
      { q: "Does a 0% pass rate mean a task is too hard?", a: "Usually not. Anthropic's evals guide notes a 0% rate across many attempts is almost always a broken task. Reading the trajectories shows whether the failures share one cause (a task bug) or vary (a hard task)." },
      { q: "How do you tell a hard task from a broken one?", a: "Group failed runs by cause. Many runs failing the same way at the same step points to a spec, test or environment bug. Runs failing in different ways at different points indicate the model is running out of capability, which is what a benchmark measures." },
    ],
    forFounders: "Your AI feature's logs are its trajectories. Reading the ones where users abandoned mid-flow tells you what the metric cannot: where the feature lost them and why.",
    forLabs: "Send one task and its runs. The free review reads them, groups the failures, and tells you which rows of the table above apply.",
    sources: [
      { title: "Anthropic Engineering, Demystifying evals for AI agents, 9 Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "Terminal-Bench 2.0 paper (acceptance rate), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "the-first-five-minutes-of-your-product",
    day: 5,
    plan: 2,
    date: "2026-12-09",
    track: "Founders",
    title: "The first five minutes decide your product",
    standfirst: "Userpilot's benchmark across 547 SaaS companies puts average activation at 37.5% and average time to first value at a day and a half. Top-quartile products deliver first value in under five minutes. The gap between those numbers is the onboarding you have and the one you could have.",
    heroAlt: "Isometric stopwatch on a plate, the hand pointing at the five-minute mark, three bars rising beside it",
    keywords: ["SaaS activation rate", "time to value", "onboarding benchmarks", "user activation", "product onboarding design", "Userpilot benchmark", "first-run experience", "aha moment"],
    takeaways: [
      "Average SaaS activation is 37.5%; AI and ML products average 54.8% (Userpilot, 547 companies).",
      "Average time to first value is about 1.5 days. Top-quartile products get there in under five minutes.",
      "The shortest path from sign-up to one real result is the product. Build that path first and move everything else after it.",
    ],
    body: [
      { t: "p", text: "Userpilot's onboarding benchmark report analysed 547 SaaS companies. Three of its numbers describe the problem and the opportunity in one line each. Average activation rate, the share of sign-ups who reach the first moment of value: 37.5%. Average time to that first value: about a day and a half. Time to value for top-quartile products: under five minutes." },
      { t: "p", text: "A day and a half versus five minutes is not a difference of model quality or feature count. It is a difference of what the product asks a new user to do before it does anything for them." },

      { t: "h2", text: "What happens in a day and a half" },
      { t: "p", text: "The user signs up, meets a product tour, answers a survey, is walked through a setup wizard, is asked to invite teammates, is asked to connect an integration, and is finally shown an empty workspace with a message that says \"create your first project\". Somewhere in that sequence they close the tab, intending to come back. Most do not. The 37.5% who activate are the ones who had enough patience or enough need to push through." },

      { t: "h2", text: "What happens in five minutes" },
      { t: "p", text: "The user signs up, or does not yet, and is shown the product doing its thing on an example or on something they pasted in. One real result, produced by the product, visible on the first screen. Then, and only then, the product asks for the things it needs to do it again: an account, a connection, a teammate. The order is reversed. Value, then setup." },

      { t: "h2", text: "AI products have an advantage here" },
      { t: "p", text: "Userpilot's report breaks activation out by category, and AI and ML products average 54.8%, well above the overall figure. The likely reason is that an AI product's output is the product, and output can be shown immediately. A draft, an answer, a summary, a classification: paste something in and the result appears. Products in this category that still front-load a setup wizard are giving away their biggest structural advantage." },

      { t: "h2", text: "How to find your five-minute path" },
      { t: "ol", items: [
        "**Name the first result.** The one thing a user sees that makes them think \"this works\". For an invoicing tool, a sent invoice. For an AI writer, a draft they would send.",
        "**Count the screens to it.** From landing page to that result, today. Each screen is a place people leave.",
        "**Move everything that is not required.** Tours, surveys, team invites, integrations, preferences: all after the first result.",
        "**Pre-fill what you can.** Example data, sensible defaults, inference from the email domain, so the first result needs almost no input.",
        "**Measure time to first result,** not time in onboarding. The second rewards longer tours.",
      ] },

      { t: "table", head: ["", "Average", "Top quartile"], rows: [
        ["Activation rate", "37.5%", "Higher; AI/ML category averages 54.8%"],
        ["Time to first value", "About 1.5 days", "Under 5 minutes"],
        ["Onboarding completion", "19.2%", "Irrelevant if value comes first"],
      ] },

      { t: "callout", title: "The question", text: "What is the shortest path from sign-up to one real result in your product? Build that path first. Everything else is a feature request from someone who has already seen it work." },

      { t: "h2", text: "A note on onboarding completion" },
      { t: "p", text: "Userpilot's data puts average onboarding-flow completion at 19.2%. Four in five users do not finish the tour. That is not a reason to make the tour better. It is a reason to stop depending on it: if first value is on the first screen, the tour becomes optional, and optional things are allowed to have a 19% completion rate." },
    ],
    faq: [
      { q: "What is a good activation rate for SaaS?", a: "Userpilot's benchmark across 547 companies puts the average at 37.5%, with AI and ML products averaging 54.8%. Top-quartile products are well above both." },
      { q: "What is time to value and what is a good benchmark?", a: "The time from sign-up to the first moment a user gets a real result. The average is about 1.5 days; top-quartile products deliver it in under five minutes." },
      { q: "How do you reduce time to value in a product?", a: "Identify the first result, count the screens to it, move tours, surveys, invites and setup after it, pre-fill with examples and defaults, and measure time to first result rather than onboarding completion." },
    ],
    forFounders: "Send your onboarding and the free teardown will count the screens to first value and show which ones can move.",
    forLabs: "The first five minutes of a task programme matter too: a contributor who gets a clear spec, one worked example and a scored trial on day one produces usable work in week one.",
    sources: [
      { title: "Userpilot, SaaS Onboarding Benchmarks (547 companies)", url: "https://userpilot.com/blog/saas-onboarding-benchmarks/" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "case-study-oversight-of-employee-ai-use",
    day: 6,
    plan: 2,
    date: "2026-12-10",
    track: "Founders",
    title: "Case study: oversight of employee AI use",
    standfirst: "Shadow AI is the new shadow IT. A company's staff used dozens of AI tools and nobody knew what data went into them. I designed a governance console that shows which tools are in use, what leaves the building, and one place to set policy. The hard part was making oversight feel like help, not surveillance.",
    heroAlt: "Isometric oversight console: a wide screen, a dark policy block with an accent panel, and a dial unit",
    keywords: ["AI governance console", "shadow AI", "AI usage monitoring", "enterprise AI policy", "AI governance product design", "AI compliance dashboard", "product design case study", "AI oversight UX"],
    takeaways: [
      "The product shows three things: which AI tools staff use, what data goes into them, and one place to set and enforce policy.",
      "The central design decision was to make policy feel like help: default-allow with visibility, clear reasons for every block, and a request path for staff.",
      "Twenty screens on a full design system, built around a dense inventory table and a single policy editor.",
    ],
    body: [
      { t: "p", text: "A decade ago IT departments discovered that staff were running their work through unapproved cloud tools, and \"shadow IT\" became a category. The same thing is happening with AI, faster. People paste customer records into chatbots, upload contracts to summarisers, and connect browser extensions to their email, because the tools are useful and the company has not said what is allowed." },
      { t: "p", text: "The client for this project, who is not named, had exactly that situation: dozens of AI tools in use across the company, no inventory, and a security team that could only guess at what data had left. I designed the console that gave them an answer. This is the design, with the decisions behind it." },

      { t: "h2", text: "The problem, precisely" },
      { t: "p", text: "Three questions nobody could answer. Which AI tools are staff using? What data is going into them? What should we do about it? The first two are discovery; the third is policy. Most products in this space do one of them well and bolt the others on. The brief was a console where the three were the same screen." },

      { t: "h2", text: "Decision 1: an inventory, not an alert feed" },
      { t: "p", text: "The obvious design is a security-style alert stream: every risky paste becomes an event. We rejected it. An alert feed makes the security team the bottleneck and makes staff into suspects. Instead the home screen is an inventory: every AI tool detected, who uses it, how often, what categories of data have gone to it, and its policy status. Dense table, fixed columns, sortable, with one accent colour for tools that need a decision. Discovery first, then judgement." },

      { t: "h2", text: "Decision 2: policy as help, not surveillance" },
      { t: "p", text: "This was the hard part. A console that blocks tools silently teaches staff to hide them. So three rules shaped the policy editor. Every block comes with a reason the employee can read and an approved alternative where one exists. There is a request path: a staff member can ask for a tool to be allowed, and the request lands in the same inventory with context. And the default for a newly detected tool is visible-but-allowed, with the data categories flagged, rather than blocked, so the company sees what people need before deciding." },

      { t: "h2", text: "Decision 3: one place to set policy" },
      { t: "p", text: "Policies are written once, per data category rather than per tool: customer records may not leave the company; internal documents may go to approved tools; public information may go anywhere. Tools inherit the policy from the data they are seen receiving. That keeps the policy page to a single screen and means a new tool is governed the moment it is detected, without anyone writing a new rule." },

      { t: "table", head: ["Screen group", "What it does"], rows: [
        ["Inventory", "Every tool, users, frequency, data categories, status, one accent for \"needs decision\""],
        ["Tool detail", "Who, when, what data, request history, the policy that applies and why"],
        ["Policy editor", "Rules by data category; tools inherit; plain-language reasons shown to staff"],
        ["Requests", "Staff requests with context, approve or decline with a reason"],
        ["Reports", "What left the building, by category and month; what changed after a policy"],
      ] },

      { t: "callout", title: "The three rules, in one line each", text: "Inventory before alerts. Every block has a reason and an alternative. Policy is written per data category, once." },

      { t: "h2", text: "What was delivered" },
      { t: "p", text: "Twenty screens, a design system covering the dense table, status chips, policy cards and the request flow, in light and dark themes, with the data model documented so engineering could build the inventory from the detection pipeline directly. The product is in build and the client is not named. The scenarios in the designs are realistic categories of tools and data, not the client's real inventory." },
    ],
    faq: [
      { q: "What is shadow AI?", a: "The use of AI tools by employees without the company's knowledge or approval, in the same way shadow IT described unapproved cloud tools. The risk is confidential data entering tools nobody has vetted." },
      { q: "What does an AI governance console do?", a: "Shows which AI tools staff are using, what categories of data go into them, and provides one place to set policy by data category, with reasons and a request path visible to staff." },
      { q: "How do you design AI oversight that employees accept?", a: "Start with an inventory rather than an alert feed, give every block a reason and an approved alternative, default new tools to visible-but-allowed, and provide a request path so staff can ask instead of hide." },
    ],
    forFounders: "If your product sits anywhere near monitoring, compliance or governance, the design question is the same: how does it feel to the person being governed? Send it for the free teardown.",
    forLabs: "The inventory-first principle applies to task programmes: before writing rules about what authors may do, see what they are doing and why. The guideline that comes out is shorter and followed.",
    sources: [
      { title: "Case study on this site: AI governance console", url: "https://www.prashantworks.com/work/ai-governance-console" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "what-verified-means-in-swe-bench-verified",
    day: 7,
    plan: 2,
    date: "2026-12-11",
    track: "AI labs",
    title: "What \"verified\" means in SWE-bench Verified",
    standfirst: "OpenAI's screen of the original SWE-bench removed 68% of the samples it checked. The three reasons they failed, under-specified issues, over-specific tests and broken environments, are a checklist for anyone writing repository tasks. Here it is, with the rule I use for each.",
    heroAlt: "Isometric verification sieve: a perforated tray on legs, small discs passing through, an accent block collecting the rest",
    keywords: ["SWE-bench Verified", "repository tasks", "software engineering benchmark", "task verification", "benchmark quality", "coding agent evaluation", "SWE-bench task authoring", "underspecified issues"],
    takeaways: [
      "93 developers screened 1,699 SWE-bench samples; 68% were filtered out of what became SWE-bench Verified.",
      "Three failure types: issue text too vague to fix from, tests that only accept one implementation, and environments where even the gold patch did not run cleanly.",
      "The rule before a repository task ships: a senior engineer could fix it from the issue alone, the tests accept any correct fix, and the gold patch passes in a fresh container.",
    ],
    body: [
      { t: "p", text: "SWE-bench became the standard way to measure coding agents on real repository work: here is a GitHub issue, here is the repository, produce a patch that makes the hidden tests pass. It was also, in its original form, partly broken. Not in a way that was obvious from the leaderboard, which is the point of this post." },
      { t: "p", text: "OpenAI's response was to screen it. Ninety-three software developers reviewed 1,699 samples, and 68% of those were filtered out. What remained became SWE-bench Verified. The reasons for filtering are the most useful public document on what makes a repository task fair, so here they are, each with the authoring rule it implies." },

      { t: "h2", text: "Failure 1: under-specified issues" },
      { t: "p", text: "Many issue descriptions did not contain enough information for a correct fix to be written. The expected behaviour was implied, the failing case was not stated, or the issue described a symptom whose cause was somewhere else entirely. A model that failed these was not failing at engineering; it was failing to guess what the author meant. Those samples measured ambiguity, not capability." },
      { t: "p", text: "**The rule:** before the task ships, give the issue text alone to a senior engineer who has not seen the gold patch. If they cannot say what a correct fix must do, the issue text is not finished." },

      { t: "h2", text: "Failure 2: over-specific tests" },
      { t: "p", text: "Some test suites would pass only the exact gold patch. A correct fix written differently, a different function name, a different but equivalent control flow, a fix one level up the call stack, failed. These tests graded the path, not the behaviour, and a model that solved the problem could still score zero." },
      { t: "p", text: "**The rule:** write a second correct fix that takes a different approach, and confirm the tests pass it. If they do not, the tests are checking an implementation rather than an outcome, and they must change." },

      { t: "h2", text: "Failure 3: environment problems" },
      { t: "p", text: "In some samples the tests did not run cleanly even with the gold patch applied: a dependency had moved, a build step was missing, a test depended on the network or on a timezone. The task was unsolvable regardless of the model, and nothing on the leaderboard said so." },
      { t: "p", text: "**The rule:** the gold patch passes in a fresh container, from the pinned image, ten times. Not once on the author's machine. If it does not, the environment is the bug." },

      { t: "table", head: ["Failure", "What it measured", "Rule"], rows: [
        ["Under-specified issue", "The model's guess at the author's intent", "A senior engineer can fix it from the issue alone"],
        ["Over-specific tests", "Whether the fix matched the gold patch", "A second, different correct fix passes"],
        ["Broken environment", "Nothing", "Gold patch passes ten times in a fresh container"],
      ] },

      { t: "callout", title: "My own numbers on this", text: "7 of my 9 SWE-bench instances were accepted. The two that were not failed on over-specific tests, which is why the second-fix check is now the first thing I run." },

      { t: "h2", text: "Why 68% is not a scandal" },
      { t: "p", text: "A filter that removes most of what it checks sounds alarming, and it is actually the normal rate for any benchmark that has not been through human verification. Terminal-Bench 2.0 accepted about 39% of submissions with reviewers in the loop from the start. The difference between a 32% survival rate and a 90% acceptance rate is not talent. It is running these three checks before review instead of letting review run them for you." },
    ],
    faq: [
      { q: "What is SWE-bench Verified?", a: "A human-validated subset of the SWE-bench coding benchmark. OpenAI had 93 developers screen 1,699 samples and filtered out 68%, keeping only tasks with clear issue text, fair tests and working environments." },
      { q: "Why were SWE-bench samples filtered out?", a: "Three main reasons: issue descriptions too vague to write a correct fix from, tests that only accepted the exact gold patch, and environments where tests did not run cleanly even with the correct fix applied." },
      { q: "How do you check a repository task is fair before submitting it?", a: "Have a senior engineer fix it from the issue text alone, write a second correct fix with a different approach and confirm the tests pass it, and run the gold patch ten times in a fresh container from the pinned image." },
    ],
    forFounders: "A product spec has the same three failures: too vague to build from, acceptance tests that only pass one design, and an environment nobody has run it in. The one-page brief is the fix.",
    forLabs: "Writing repository tasks? Send one and the free review runs all three checks and tells you which it would have failed at screening.",
    sources: [
      { title: "OpenAI, Introducing SWE-bench Verified, Aug 2024", url: "https://openai.com/index/introducing-swe-bench-verified/" },
      { title: "Terminal-Bench 2.0 paper (acceptance rate), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "seven-ways-a-task-environment-drifts",
    day: 8,
    plan: 2,
    date: "2026-12-12",
    track: "AI labs",
    title: "Seven ways a task environment drifts",
    standfirst: "A task that passed in October fails in December and nobody changed the task. Everything around it changed. Seven things that move between submission and review, and the pin for each one. Re-run the reference solution the day you submit.",
    heroAlt: "Isometric drift gauge: a stack of three container modules with an accent lid, a rising bar chart and a dial",
    keywords: ["environment drift", "reproducible benchmarks", "Docker pinning", "benchmark task environment", "pinned dependencies", "reproducibility AI evaluation", "task environment setup", "Terminal-Bench environments"],
    takeaways: [
      "Seven sources of drift: image tag, package versions, data URLs, clock and locale, deprecated APIs, resource limits, and tests tightened after the solution was written.",
      "Pin the image digest, lock every package, copy data into the image, set TZ and LANG, fix memory and timeouts, avoid external APIs, and re-run the reference solution the day you submit.",
      "Terminal-Bench 2.0 verified each task across multiple runs in pinned environments for exactly this reason: a task that cannot be reproduced measures nothing.",
    ],
    body: [
      { t: "p", text: "\"It passed on my machine\" has a benchmark cousin: \"it passed in October\". The task is unchanged, the reference solution is unchanged, the tests are unchanged, and the task fails at review. Something in the environment moved. Here are the seven things that move, in rough order of how often I see them, with the pin that stops each." },

      { t: "h2", text: "1. The base image tag moved" },
      { t: "p", text: "`python:3.12` on Tuesday is not `python:3.12` on Friday. Tags are pointers; the image behind them is rebuilt with new system packages, a new patch release, a new default. **Pin:** reference the image by digest (`@sha256:…`), never by tag, and record the digest in the task's README." },

      { t: "h2", text: "2. A package minor version bumped" },
      { t: "p", text: "A `pip install pandas` that resolved to 2.2 in October resolves to 2.3 in December, and a deprecation became an error. **Pin:** a lock file with every package and every transitive dependency at an exact version, installed with `--no-deps` from the lock. Not `>=`. Not `~=`. Exact." },

      { t: "h2", text: "3. A dataset URL changed" },
      { t: "p", text: "The task downloads a CSV at build time; the host moved it, rate-limited it, or updated it with one more column. **Pin:** copy data into the image at authoring time. No downloads at build or run time. If the data is too large, store it with the task and mount it, with its checksum recorded." },

      { t: "h2", text: "4. The clock and the locale" },
      { t: "p", text: "A test that computes \"days until the end of the quarter\" passes until the quarter changes. A sort that depends on locale collation passes until the image's default locale changes. **Pin:** set `TZ` and `LANG` explicitly in the image, and freeze time in tests that depend on it." },

      { t: "h2", text: "5. A model or external API deprecated" },
      { t: "p", text: "A task that calls an external service inherits that service's release schedule. **Pin:** avoid external APIs inside the task entirely. If the task is about calling one, mock it with recorded responses stored in the image." },

      { t: "h2", text: "6. Disk, memory and time limits" },
      { t: "p", text: "The reference solution used 3.5 GB on the author's machine; the review harness allows 2 GB. A test that takes 40 seconds locally hits a 30-second timeout in CI. **Pin:** state the limits in the task, run the reference solution under exactly those limits, and leave headroom." },

      { t: "h2", text: "7. A test tightened after the solution was written" },
      { t: "p", text: "The author improves the tests on day three and does not re-run the reference solution from day one. **Pin:** the reference solution runs against the final tests, in a fresh container, as the last step before submission. Every time the tests change, this step runs again." },

      { t: "table", head: ["Drift", "Pin"], rows: [
        ["Image tag", "Digest, recorded in README"],
        ["Package versions", "Exact lock file, `--no-deps`"],
        ["Data URL", "Data copied into the image, checksum recorded"],
        ["Clock and locale", "`TZ`, `LANG` set; time frozen in tests"],
        ["External APIs", "None, or recorded mocks"],
        ["Limits", "Stated in the task; reference run under them"],
        ["Tests tightened", "Reference re-run on final tests in a fresh container"],
      ] },

      { t: "callout", title: "The day-of-submission rule", text: "Fresh container from the pinned digest, reference solution, ten runs, ten passes. Then submit. If anything changes after, run it again." },

      { t: "h2", text: "Why the benchmarks insist on this" },
      { t: "p", text: "Terminal-Bench 2.0's paper describes verifying every task across multiple runs in its pinned environment before acceptance, because a task that cannot be reproduced cannot be used to compare models. Drift is not a nuisance; it is a correctness bug in the measurement. The pins above take an hour per task to put in place. The review they prevent takes three." },
      { t: "gallery", items: [
        { src: slide("seven-ways-a-task-environment-drifts", 2), alt: "Slide: image tag moved" },
        { src: slide("seven-ways-a-task-environment-drifts", 3), alt: "Slide: package version bumped" },
        { src: slide("seven-ways-a-task-environment-drifts", 4), alt: "Slide: data URL changed" },
        { src: slide("seven-ways-a-task-environment-drifts", 7), alt: "Slide: re-run before you submit" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "Why does a benchmark task that passed earlier fail later?", a: "Environment drift: the base image tag was rebuilt, a package resolved to a newer version, a dataset URL changed, the clock or locale moved, an external API changed, resource limits differ at review, or the tests were tightened after the reference solution was last run." },
      { q: "How do you pin a Docker environment for a benchmark task?", a: "Reference the base image by digest rather than tag, install packages from an exact lock file, copy data into the image, set TZ and LANG, state and test under resource limits, and avoid external APIs or mock them with recorded responses." },
      { q: "When should you re-run a task's reference solution?", a: "In a fresh container from the pinned image, on the day of submission, and again every time the tests change. Ten runs, ten passes." },
    ],
    forFounders: "Your product has drift too: the API you integrated, the model version you call, the library you pinned loosely. A lock file and a staging re-run before each release are the same discipline.",
    forLabs: "Send one task with its Dockerfile and the free review will check it against all seven and tell you which will drift first.",
    sources: [
      { title: "Terminal-Bench 2.0 paper (verification in pinned environments), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },
];
