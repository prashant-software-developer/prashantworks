import { slide, type BlogPost } from "../blog-shared";

export const plan1b2: BlogPost[] = [
  {
    slug: "where-your-data-goes-when-you-hire-us",
    day: 16,
    plan: 1,
    date: "2026-11-20",
    track: "AI labs",
    title: "Where your data goes when you hire us",
    standfirst: "The security questions AI labs ask before sharing a task, answered in full. NDA before anything is shared, work inside your tools when you prefer, no AI tools on your tasks without approval, and your programme never named in public.",
    heroAlt: "Isometric scanner unit: sheets passing through a sealed gate, three stamped copies on the far side",
    keywords: ["AI data vendor security", "NDA AI training data", "data confidentiality AI vendor", "benchmark task confidentiality", "AI data partner policy", "vendor data handling"],
    takeaways: [
      "An NDA is signed before any task, rubric or output is shared; a sanitised sample is fine if you would rather not share the real thing yet.",
      "Work happens inside your platform and repositories when you prefer, so nothing leaves your environment.",
      "Clients and programmes are never named in public, no AI tools touch your tasks without written approval, and one person is accountable for all of it.",
    ],
    body: [
      { t: "p", text: "Before an AI lab shares a task with an outside author, someone in that lab has to answer a security question. Where will the task go? Who will see it? Will it end up in a portfolio? Will it be pasted into a chatbot? This post answers those questions for working with me, in enough detail to forward to whoever has to approve it." },

      { t: "h2", text: "1. NDA first" },
      { t: "p", text: "A non-disclosure agreement is signed before I see any task, rubric, test suite or output. Your paper or mine. If legal review takes time, send a sanitised sample in the meantime: a task with the domain-specific parts replaced. The free 48-hour review works on either." },

      { t: "h2", text: "2. Your platform, when you prefer" },
      { t: "p", text: "Work can happen entirely inside your tools: your task platform, your repositories, your containers, your review queue. Nothing needs to be exported to my machine for the work to be done. If you would rather I work locally, the tasks live in an encrypted volume and are deleted when the programme ends, with written confirmation." },

      { t: "h2", text: "3. Never named in public" },
      { t: "p", text: "Clients and programmes do not appear in my case studies, posts, profiles or proposals. The numbers I publish (acceptance rate, quality rating, tasks accepted on public benchmarks) are aggregate and carry no client name. If a prospective client asks for a reference, I ask you first, and no is a complete answer." },

      { t: "h2", text: "4. No AI tools on your tasks without approval" },
      { t: "p", text: "Some programmes forbid AI assistance on task authoring; some require it; most are somewhere in between. Whatever your policy is, it is followed, and if you have not stated one the default is none. This matters more than it used to: contractors on major training programmes have been dismissed for using AI to produce work that was supposed to be human. The policy is in writing and anyone who works on your tasks signs it." },

      { t: "h2", text: "5. Vetted people only" },
      { t: "p", text: "Anyone who touches your tasks has passed a scored trial on your rubric, signed the same NDA, and has their first batch double-reviewed. You know who is on the programme by name, and nobody is added without telling you." },

      { t: "h2", text: "6. One accountable owner" },
      { t: "p", text: "Every question above has the same answer to \"who is responsible\": me. Not a platform, not a trust-and-safety team, not a queue. If something goes wrong, you have a name and a same-day reply." },

      { t: "callout", title: "In one line each", text: "NDA? First. Your platform? Preferred. Named in public? Never. AI on your tasks? Only with your written yes. Who's accountable? Me." },

      { t: "h2", text: "What I ask of you" },
      { t: "p", text: "Two things make this work from your side. Tell me the data-handling policy for the programme, even if it is a paragraph, so there is no guessing. And tell me who on your side can answer a question about it, so a policy question does not sit for a week while tasks wait." },
      { t: "gallery", items: [
        { src: slide("where-your-data-goes-when-you-hire-us", 2), alt: "Slide: NDA first" },
        { src: slide("where-your-data-goes-when-you-hire-us", 3), alt: "Slide: your platform" },
        { src: slide("where-your-data-goes-when-you-hire-us", 4), alt: "Slide: never named" },
        { src: slide("where-your-data-goes-when-you-hire-us", 6), alt: "Slide: one owner" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "Do you sign an NDA before reviewing a task?", a: "Yes, before any task, rubric, test suite or output is shared. A sanitised sample can be reviewed while legal review is in progress." },
      { q: "Will my programme be mentioned in your portfolio?", a: "No. Clients and programmes are never named in public. Published numbers are aggregate and carry no client identification." },
      { q: "Do you use AI tools on client tasks?", a: "Only with written approval under the client's stated policy. If no policy is stated, the default is none, and everyone working on the programme signs that policy." },
    ],
    forFounders: "Your product idea gets the same treatment: nothing from a teardown or a sprint appears publicly without your written yes, and case studies are anonymised unless you want your name on them.",
    forLabs: "If your security questionnaire has questions this post does not answer, send it. I will answer in writing, then review one task free under NDA.",
    sources: [
      { title: "Own policy, as applied on every programme", url: "https://www.prashantworks.com/ai-training" },
      { title: "404 Media, contractors dismissed for using AI on training work, 22 Sep 2026", url: "https://www.404media.co/people-training-openais-ai-fired-for-using-ai-to-train-the-ai/" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "what-3000-dollars-buys-you",
    day: 17,
    plan: 1,
    date: "2026-11-21",
    track: "Founders",
    title: "What $3,000 buys you. Exactly.",
    standfirst: "A fixed-price MVP sprint: design, prototype, frontend, backend, deployment, AI integration and thirty days of support. Also what it does not include, and why the price is fixed in the first place.",
    heroAlt: "Isometric build stack: five layers stacked on a plate, the middle one in accent blue",
    keywords: ["fixed-price MVP", "MVP development cost", "how much does an MVP cost", "MVP sprint", "startup MVP pricing", "freelance product engineer", "build an MVP in 3 weeks"],
    takeaways: [
      "$3,000 covers one complete flow: product design and clickable prototype, frontend, backend, cloud deployment, AI integration, and 30 days of support after launch.",
      "Features not agreed in the written scope are quoted separately and never added silently; that is what keeps the price fixed.",
      "The sprint takes three weeks, with a written update every Friday and one person to message.",
    ],
    body: [
      { t: "p", text: "Founders ask two questions about the MVP sprint. What exactly is in it, and why is the price fixed when every agency quotes a range? Both deserve a precise answer, so here it is." },

      { t: "h2", text: "What is included" },
      { t: "table", head: ["Item", "What you get", "When"], rows: [
        ["Product design", "The core flow on paper, then screens in Figma, then a clickable prototype you test before any code", "Week 1"],
        ["Frontend", "The flow built as a responsive web app, every state designed, not only the happy path", "Week 2"],
        ["Backend", "Auth, database, API, file storage: whatever the flow needs, nothing it does not", "Week 2"],
        ["AI integration", "If the product has an AI feature, it is built with sources, fallbacks and cost controls", "Week 2–3"],
        ["Deployment", "Live on your cloud account, with a domain, monitoring and a handover document", "Week 3"],
        ["30 days of support", "Bugs fixed, questions answered, small adjustments made after launch", "After"],
      ] },

      { t: "h2", text: "What is not included" },
      { t: "p", text: "Features that were not in the agreed scope. This is not a loophole; it is the mechanism that makes a fixed price possible. When a new idea comes up mid-sprint, and one always does, it gets written down and quoted. If it is small and the schedule allows, the quote is often zero. If it is a second flow, it is a second sprint. What never happens is a feature being added silently and the deadline slipping to absorb it." },
      { t: "ul", items: [
        "Native mobile apps. The sprint builds a responsive web app; native comes later if the product needs the phone's sensors or offline use.",
        "Third-party integrations beyond the one the core flow requires.",
        "Content, copywriting and marketing pages beyond the product itself.",
        "Ongoing hosting costs, which are on your cloud account from day one so you own everything.",
      ] },

      { t: "h2", text: "Why the price is fixed" },
      { t: "p", text: "Hourly billing puts the risk on the founder: every ambiguity, every rework, every slow afternoon is on your invoice. A range estimate is the same thing with a lower number at the front. A fixed price moves the risk to me, and the only way I can carry it is by fixing the scope first. One flow, written down, agreed before day one. Scope creep is how projects die, and a fixed price is a structural defence against it." },
      { t: "p", text: "The record behind the price: 22+ products shipped, 98% delivered on the agreed date. The dates hold because the scope does." },

      { t: "callout", title: "Before the sprint", text: "A free one-page teardown of your product or idea. It is where the scope gets written, so by the time you decide on the sprint you already know what it contains." },

      { t: "h2", text: "What you own at the end" },
      { t: "p", text: "Everything. The repository, the design files, the cloud account, the documentation. There is no retainer required to keep the product running and no dependency on me after the 30 days unless you want one. Flex support after launch is available at an hourly rate for teams that do, and plenty of founders take the product in-house instead. Both are fine." },
    ],
    faq: [
      { q: "How much does an MVP cost?", a: "My MVP sprint is $3,000, fixed, for one complete product flow: design, prototype, frontend, backend, deployment, AI integration and 30 days of support. Agency quotes for comparable scope usually run far higher because they bill a team." },
      { q: "Why is the MVP price fixed rather than hourly?", a: "Hourly billing puts the risk of ambiguity and rework on the founder. A fixed price moves it to the builder, which only works when scope is fixed first: one flow, agreed in writing, with new ideas quoted rather than added silently." },
      { q: "What is not included in a $3,000 MVP sprint?", a: "Features outside the agreed scope, native mobile apps, integrations beyond the one the flow needs, marketing content, and hosting costs, which sit on your own cloud account so you own everything." },
    ],
    forFounders: "If you want to know what your product would cost, send it for the free teardown. The teardown ends with a scope and a fixed price, so the answer is specific, not a range.",
    forLabs: "Fixed scope is the same principle as a pilot: ten tasks, agreed in writing, priced by complexity, with anything beyond it quoted separately.",
    sources: [
      { title: "Services and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "how-we-vet-who-touches-your-tasks",
    day: 18,
    plan: 1,
    date: "2026-11-22",
    track: "AI labs",
    title: "How we vet who touches your tasks",
    standfirst: "Every contributor on a programme passes a scored trial task on the client's own rubric before joining, and their first batch gets a second review. OpenAI vetted GDPval's task writers with interviews, background checks and quizzes. This is the same idea, applied to each programme.",
    heroAlt: "Isometric intake hopper: a funnel narrowing from a wide top to a single accent outlet",
    keywords: ["contributor vetting", "AI data annotator qualification", "expert vetting AI training data", "task author screening", "data quality process", "RLHF contributor onboarding", "GDPval vetting"],
    takeaways: [
      "Every contributor completes a scored trial task on the client's rubric; tests and the rubric decide, not opinions.",
      "Only passes join, and their first batch is double-reviewed by a second specialist.",
      "GDPval's task writers passed an interview, background check and quizzes, and averaged 14 years of experience; vetting is a process, not a word.",
    ],
    body: [
      { t: "p", text: "The weakest point in any data programme is the moment a new person starts writing tasks for it. They know the domain, but not your rubric; they are capable, but you have not seen their work. Most programmes handle that moment with a résumé check and hope. Here is how I handle it." },

      { t: "h2", text: "1. A real trial task on your rubric" },
      { t: "p", text: "Not a generic coding quiz. A task from your programme, or one built to its spec, scored against your rubric. The question the trial answers is narrow: can this person follow your guideline exactly? Domain skill is necessary and insufficient. Plenty of strong engineers write tasks that fail review because they wrote the task they wanted to write rather than the one the spec asked for." },

      { t: "h2", text: "2. Tests decide" },
      { t: "p", text: "The trial is scored by unit tests and the rubric, with the same hidden-test checks a real task gets: does the reference solution pass in a fresh container, do the tests fail an empty submission and a hard-coded answer, is the spec followed to the letter. Opinions about whether someone \"seems strong\" do not enter it. This keeps the bar the same for everyone and makes it defensible when someone does not pass." },

      { t: "h2", text: "3. Only passes join" },
      { t: "p", text: "Most applicants do not pass. That is the point. A small group of people who clear the bar produces better data than a large pool with a strong average, because quality in this work is set by the weakest item in the batch, not the mean. Fewer, stronger people also means each contributor's work is known well enough to notice when it changes." },

      { t: "h2", text: "4. First batch, double-checked" },
      { t: "p", text: "Passing the trial earns a place, not trust. A new contributor's first batch is reviewed in full by a second specialist, with feedback on every item. The pass rate on that batch decides whether they continue. Someone who passed the trial but cannot hold the standard at volume leaves the programme in week one, before their work reaches you." },

      { t: "h2", text: "The public benchmark for vetting" },
      { t: "p", text: "OpenAI's GDPval is the best-documented example of expert vetting in a public evaluation. Task writers averaged 14 years of experience in their occupation, and were screened with an interview, a background check and quizzes before writing tasks that then went through about five rounds of review. That is a lab-scale version of the same principle: the filter is a process with steps, each of which removes people, and what survives is small." },

      { t: "callout", title: "The track record this produces", text: "90% acceptance across programmes and a 4.89/5 average quality rating. Not because the people are unusual, but because the ones who are not a fit leave before their work reaches a client." },

      { t: "h2", text: "What you can ask for" },
      { t: "p", text: "The names of everyone on your programme, their trial scores, and their first-batch pass rates. You can also set the trial yourself: send the task you consider a fair test and it becomes the gate. Many clients do, and it is the fastest way to align on what \"good\" means before volume." },
      { t: "gallery", items: [
        { src: slide("how-we-vet-who-touches-your-tasks", 2), alt: "Slide: a real trial task" },
        { src: slide("how-we-vet-who-touches-your-tasks", 3), alt: "Slide: tests decide" },
        { src: slide("how-we-vet-who-touches-your-tasks", 4), alt: "Slide: only passes join" },
        { src: slide("how-we-vet-who-touches-your-tasks", 5), alt: "Slide: first batch double-checked" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "How are AI training data contributors vetted?", a: "With a scored trial task on the client's own rubric, graded by tests rather than opinion. Only passes join, and their first batch is fully reviewed by a second specialist before their work reaches the client." },
      { q: "How did OpenAI vet GDPval task writers?", a: "Task writers averaged 14 years of experience and were screened with an interview, background check and quizzes. Each task then went through roughly five rounds of review." },
      { q: "Can a client set the vetting trial themselves?", a: "Yes. Send the task you consider a fair test of your rubric and it becomes the gate for everyone on your programme." },
    ],
    forFounders: "The equivalent question for any builder you hire is: can I see a small piece of work on my brief before I commit? The free teardown is that piece.",
    forLabs: "Send one task and the free review will show you the standard the trial applies. If you want to set the trial, send that instead.",
    sources: [
      { title: "GDPval paper (expert vetting), arXiv", url: "https://arxiv.org/html/2510.04374v1" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "what-a-90-percent-acceptance-rate-takes",
    day: 19,
    plan: 1,
    date: "2026-11-23",
    track: "AI labs",
    title: "What a 90% acceptance rate actually takes",
    standfirst: "Four gates, every item, every batch. A scored trial on the client's rubric, a second specialist on every item, calibration when grading drifts, and sign-off that turns each rejection into a guideline fix. Not talent. A system.",
    heroAlt: "Isometric delivery line: four stations rising in height along a rail, the last one in accent blue",
    keywords: ["AI data quality process", "task acceptance rate", "quality gates AI training data", "benchmark task review process", "data vendor quality system", "RLHF data QA", "calibration graders"],
    takeaways: [
      "Gate 1: a scored trial on the client's rubric. Gate 2: second-specialist review of every item. Gate 3: calibration when grading drifts. Gate 4: sign-off that converts each rejection into a guideline change.",
      "Expert graders in GDPval agreed about 71% of the time; the calibration gate exists because disagreement is normal, not exceptional.",
      "The result across programmes is 90% acceptance and a 4.89/5 average quality rating, driven by the gates rather than by individual brilliance.",
    ],
    body: [
      { t: "p", text: "Across the AI training and evaluation programmes I have run, 90% of submitted work has been accepted, with an average quality rating of 4.89 out of 5. People sometimes read that as a claim about the contributors. It is a claim about the routine. Here it is, gate by gate." },

      { t: "h2", text: "Gate 1: a scored trial on the client's rubric" },
      { t: "p", text: "Nobody joins a programme on a résumé. They complete a task from the programme, scored by its tests and rubric, and only passes join. The previous post covers this in detail. Its contribution to the acceptance rate is simple: the people who would produce the rejected items mostly never start." },

      { t: "h2", text: "Gate 2: a second specialist reviews every item" },
      { t: "p", text: "Not a sample. Every item is reviewed by a second person with the domain skill to find real errors, before it is submitted. The review follows the same checklist the client's reviewers use: reference solution re-run in a fresh container, hidden tests run against an empty and a hard-coded submission, spec compared line by line to the task. Most items that would have been rejected are caught here, and fixed before the client ever sees them." },

      { t: "h2", text: "Gate 3: calibration when grading drifts" },
      { t: "p", text: "Even expert graders disagree. In OpenAI's GDPval, experts agreed on about 71% of pairwise comparisons. So on every programme a calibration batch runs when the data suggests drift: several reviewers grade the same items, the disagreements are adjudicated, and the rubric or guideline is updated and re-briefed the same day. Without this gate, two careful reviewers slowly diverge, and the client's reviewers see inconsistency they cannot trace." },

      { t: "h2", text: "Gate 4: sign-off, and the rejection loop" },
      { t: "p", text: "Final sign-off is where the items that still get rejected by the client are turned into something useful. Each rejection is logged with its cause, the guideline gains a line that would have prevented it, and the pre-submission checklist gains a check. The same mistake does not come back in week six. This is the gate that makes the acceptance rate rise over a programme rather than decay." },

      { t: "table", head: ["Gate", "Catches", "Cost if skipped"], rows: [
        ["Scored trial", "People who cannot follow the rubric", "Rejections from the first batch onward"],
        ["Second review", "Spec drift, weak tests, broken environments", "The client's reviewers become your QA"],
        ["Calibration", "Graders diverging", "Inconsistent batches, disputed verdicts"],
        ["Sign-off loop", "Repeat mistakes", "The same rejection every week"],
      ] },

      { t: "callout", title: "The numbers that come out", text: "90% acceptance. 4.89/5 average quality. 45 of 50 Terminal-Bench-style tasks accepted. 7 of 9 SWE-bench instances. 14 of 15 PaperBench reviews. All aggregate, no client named." },

      { t: "h2", text: "What the system costs" },
      { t: "p", text: "Second review on every item is the expensive gate, and it is the reason a per-task rate from a managed team is higher than a marketplace's. The arithmetic is covered in a later post: at a 40% acceptance rate, a cheap task costs more than twice its price per accepted task, before counting the client's reviewer hours spent rejecting it. The gates are what you are paying for, and the acceptance rate is what they return." },
    ],
    faq: [
      { q: "What is a good acceptance rate for AI training tasks?", a: "Public benchmarks give a baseline: Terminal-Bench 2.0 accepted about 39% of submitted tasks. A managed process with a second-specialist review on every item can sustain around 90%, which is the rate across my programmes." },
      { q: "What are the four quality gates for AI training data?", a: "A scored trial on the client's rubric before anyone joins; second-specialist review of every item; a calibration batch when grading drifts; and sign-off that turns each rejection into a guideline and checklist change." },
      { q: "Why do you need calibration if your reviewers are experts?", a: "Because experts disagree. In OpenAI's GDPval, expert graders agreed on about 71% of pairwise comparisons. Calibration catches the drift before the client's reviewers do." },
    ],
    forFounders: "The product equivalent of a quality gate is a written update every week and a working build every few days, so problems are found in days rather than at handover.",
    forLabs: "Want the gates on your programme? Start with the free review of one task; it applies Gate 2 to your work so you can see what it catches.",
    sources: [
      { title: "GDPval paper (grader agreement), arXiv", url: "https://arxiv.org/html/2510.04374v1" },
      { title: "Terminal-Bench 2.0 paper (task acceptance), Jan 2026", url: "https://arxiv.org/pdf/2601.11868" },
      { title: "Own verified numbers, aggregated across programmes", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "the-bug-that-doesnt-crash",
    day: 20,
    plan: 1,
    date: "2026-11-24",
    track: "AI labs",
    title: "The bug that doesn't crash",
    standfirst: "The hardest bugs to test for produce no error. The code runs, the output looks right, and the numbers are quietly off. A quantised kernel that returns slightly wrong values is the classic case. This is the depth benchmark tasks need to reach, and how to write tests that reach it.",
    heroAlt: "Isometric chip on a plate with pins, one cell of the grid lit in accent blue",
    keywords: ["silent bugs", "numeric bugs testing", "int8 quantization bugs", "benchmark task difficulty", "hard coding tasks", "testing numerical code", "AI coding benchmark", "tolerance tests"],
    takeaways: [
      "The most valuable benchmark tasks target bugs that do not crash: the code runs, nothing warns, and the result is slightly wrong.",
      "Quantised (int8) kernels are the canonical example: a scale factor off by one, an overflow in accumulation, or a rounding mode produces plausible numbers that are wrong.",
      "Tests for these bugs compare against a reference within a justified tolerance, probe the edges, and check a statistic across many inputs, not one sample.",
    ],
    body: [
      { t: "p", text: "A crash is a gift. It tells you where, it tells you when, and it stops the wrong answer from going anywhere. The bugs that cost real money are the ones that do none of that. The code runs to completion, the output has the right shape and a plausible range, and somewhere in it a number is off by a little. Nobody notices until something downstream behaves strangely weeks later." },
      { t: "p", text: "These are the bugs I write benchmark tasks around, because they are where models, and plenty of engineers, slip. This post is about the pattern, with no client task content in it." },

      { t: "h2", text: "The canonical case: a quantised kernel" },
      { t: "p", text: "Quantisation stores numbers in fewer bits, int8 instead of float32, to make models smaller and faster. The arithmetic needs a scale factor and sometimes a zero point to map between the two ranges. Get the scale slightly wrong, accumulate in a type that overflows, or round in the wrong direction, and the kernel still runs. It returns numbers that are near the right ones. On a single test input the difference might be within noise. Across a model it degrades accuracy by a few points and nobody can say why." },
      { t: "p", text: "A task built on this pattern is hard for the right reasons. The model has to understand what the code is supposed to compute, construct inputs that expose the drift, and reason about numerics rather than pattern-match a stack trace. There is no error message to search for." },

      { t: "h2", text: "Other bugs in the same family" },
      { t: "ul", items: [
        "**Off-by-one in a window or a boundary.** The loop runs, one element is dropped or doubled, aggregates shift slightly.",
        "**Timezone and daylight-saving handling.** Dates parse, totals are right eleven months a year.",
        "**Floating-point accumulation order.** Parallel sums differ from serial ones; a test with a tight equality check flakes, a loose one hides the bug.",
        "**Unit mismatches.** Milliseconds in, seconds assumed. Everything runs; everything is a thousand times off in one branch.",
        "**Random seed not propagated.** Results are reproducible on the author's machine and nowhere else.",
      ] },

      { t: "h2", text: "How to test for a bug that does not crash" },
      { t: "ol", items: [
        "**Compare against a reference, not against expected output.** A slow, obviously correct implementation computes the truth; the test checks the fast path against it.",
        "**Use a justified tolerance.** Not `1e-9` because it is small, and not `0.1` because the test passes. The tolerance is derived from the numerics and written in a comment.",
        "**Probe the edges.** Maximum and minimum representable values, zero, negative zero, lengths of one and of a power of two, inputs that force rounding.",
        "**Check a statistic across many inputs.** Mean absolute error across a thousand random inputs catches drift that one sample hides.",
        "**Make the hidden tests different from the visible ones.** If the agent can see the inputs the test uses, it can special-case them.",
      ] },

      { t: "callout", title: "The question that decides the task", text: "Could an agent pass this test by making the output look right, without making it be right? If yes, the test is checking shape, not correctness, and the task will be solved by a shortcut." },

      { t: "h2", text: "Why this matters for benchmarks" },
      { t: "p", text: "A benchmark full of crash-and-fix tasks measures whether a model can read a stack trace. A benchmark with silent-bug tasks measures whether it can reason about what code is for. The second is the capability labs are paying to measure, and it is the kind of task that gets accepted at review because it cannot be gamed by pattern matching." },
    ],
    faq: [
      { q: "What is a silent bug?", a: "A defect that produces no error or crash. The code runs to completion and returns plausible output that is wrong, often by a small amount, such as a quantised kernel with a slightly incorrect scale factor." },
      { q: "How do you write tests for numerical bugs?", a: "Compare the implementation against a slow reference within a tolerance derived from the numerics, probe boundary values, check an error statistic across many random inputs, and keep the hidden test inputs different from the visible ones." },
      { q: "Why are silent-bug tasks good benchmark tasks?", a: "They cannot be solved by searching an error message. The model has to understand what the code should compute and construct inputs that expose the drift, which is the capability labs want to measure." },
    ],
    forFounders: "Your AI feature can have silent bugs too: an answer that looks right and cites the wrong record. Design so the user can check the source, and the silent bug becomes visible.",
    forLabs: "If your task set is mostly crash-and-fix, send one task and I will show in the free review how to deepen it into a silent-bug task with tests that hold.",
    sources: [
      { title: "Generic pattern from own authoring and review work; no client task content", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "why-i-send-a-written-update-every-week",
    day: 21,
    plan: 1,
    date: "2026-11-25",
    track: "Founders",
    title: "Why I send a written update every week",
    standfirst: "Clutch surveyed 500 small businesses and found 81% rate clear, consistent communication as a key factor in choosing a partner. Outsourced projects rarely fail on code. They fail on silence. A weekly written update fixes most of it.",
    heroAlt: "Isometric weekly routine unit: seven small blocks in a row, one raised and lit",
    keywords: ["client communication", "freelance project updates", "outsourced development communication", "weekly status report", "working with a freelance developer", "project transparency", "Clutch small business survey"],
    takeaways: [
      "81% of small businesses in Clutch's 2025 survey rate clear, consistent communication as a key factor when choosing a partner.",
      "The rhythm: scope and price in writing, a working build every few days, a written update every week, one person to message.",
      "A weekly update has four parts: done, next, risks, decisions needed. Good news or not, it goes out on Friday.",
    ],
    body: [
      { t: "p", text: "Clutch surveyed 500 small businesses in 2025 about what they look for in a partner. 81% rated clear, consistent communication as a key factor. Not price, not portfolio: whether they would know what was happening." },
      { t: "p", text: "That matches what I see from the other side. When a founder tells me about a previous project that went wrong, the story is rarely about bad code. It is about three weeks without a reply, a deadline that moved without warning, a build that was \"almost ready\" for a month. Silence, not bugs." },

      { t: "h2", text: "The rhythm" },
      { t: "table", head: ["What", "When", "Why"], rows: [
        ["Scope and price in writing", "Before day one", "There is nothing to argue about later"],
        ["A working build you can click", "Every few days", "Problems are found in days, not at handover"],
        ["A written update", "Every Friday", "You never have to ask how it is going"],
        ["One person to message", "Always", "No account manager relaying questions to an engineer"],
      ] },

      { t: "h2", text: "What the Friday update contains" },
      { t: "ol", items: [
        "**Done.** What shipped this week, with a link to the build where it can be seen.",
        "**Next.** What will ship next week, so you can object before it is built.",
        "**Risks.** Anything that could move the date, named early, with what I am doing about it.",
        "**Decisions needed.** Questions only you can answer, each with my recommendation so a one-word reply is enough.",
      ] },
      { t: "p", text: "The update goes out whether the week was good or not. A bad week reported on Friday is a plan. A bad week discovered at the deadline is a crisis. The difference is the update." },

      { t: "callout", title: "The rule", text: "You should never have to ask how the project is going. If you do, I have already failed at the part that matters most to 81% of clients." },

      { t: "h2", text: "Why a build every few days matters as much" },
      { t: "p", text: "A written update describes progress. A build proves it. When you can click through the flow on Wednesday, you notice on Wednesday that the second step asks for something your users will not have, and it costs an hour to fix. The same discovery at handover costs a week. Frequent builds are not a courtesy; they are the cheapest QA a project can have, because you are the one person who knows what the product is for." },

      { t: "h2", text: "What I ask in return" },
      { t: "p", text: "Reply to the decisions-needed section within a couple of days. A sprint has three Fridays, and a decision that sits for a week takes a third of the schedule with it. If you are travelling, say so, and I will make the call and tell you what I chose." },
    ],
    faq: [
      { q: "How important is communication when hiring a development partner?", a: "Very. In Clutch's 2025 survey of 500 small businesses, 81% rated clear, consistent communication as a key factor in choosing a partner." },
      { q: "What should a weekly project update include?", a: "Four things: what was done (with a link to the build), what is next, risks that could move the date, and decisions needed from the client, each with a recommendation." },
      { q: "How often should a client see a working build?", a: "Every few days. A clickable build surfaces problems while they cost an hour to fix rather than a week at handover." },
    ],
    forFounders: "If you are mid-project with someone else and have not had an update in two weeks, that is the signal, not the code. The free teardown can also look at a half-built product and tell you where it stands.",
    forLabs: "Programmes get the same Friday report: acceptance rate, rejection causes, rework, guideline changes. Same four sections, same rule that you never have to ask.",
    sources: [
      { title: "Clutch, Small Business Growth Survey 2025, 17 Mar 2025", url: "https://clutch.co/resources/small-business-growth-2025" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "two-free-offers-two-ways-to-start",
    day: 22,
    plan: 1,
    date: "2026-11-26",
    track: "Both",
    title: "Two free offers, two ways to start",
    standfirst: "Booking December projects now. AI labs: send one task and get a written review in 48 hours, then a ten-task pilot. Founders: send your product and get a one-page teardown, then a fixed-price sprint. Both start free and both are explained here step by step.",
    heroAlt: "Isometric core unit with two input hoppers feeding one central block",
    keywords: ["free product teardown", "free AI task review", "hire product engineer", "AI training data partner", "MVP sprint", "December projects", "how to start working with a freelancer"],
    takeaways: [
      "AI labs: a free written review of one task, rubric or test suite within 48 hours, then an optional ten-task paid pilot on your rubric.",
      "Founders: a free one-page teardown of your product or idea, then an optional fixed-price design sprint ($2,000) or MVP sprint ($3,000).",
      "Neither free step needs a call, and you can stop after either.",
    ],
    body: [
      { t: "p", text: "Three weeks of posts have covered how I work. This one is the short, practical version: exactly how to start, for each kind of reader, with nothing left to guess. December projects are being booked now." },

      { t: "h2", text: "If you run an AI lab or data team" },
      { t: "ol", items: [
        "**Send one task, rubric or test suite.** Under NDA, or a sanitised sample if you would rather. Email or the booking form, no call required.",
        "**Within 48 hours, a written review.** Where an agent could shortcut it, where the spec is ambiguous, what the tests miss, what to change. Yours to keep whether or not we go further.",
        "**Then, if useful, a pilot.** Ten tasks on your rubric in one week, graded by you, with a written report. Priced by complexity, agreed in writing first.",
        "**Then your decision.** Scale with the same review gates, or stop. No retainer, no lock-in.",
      ] },

      { t: "h2", text: "If you are a founder or product team" },
      { t: "ol", items: [
        "**Send your product, prototype or one-page idea.** A link, a deck, a paragraph. Whatever shape it is in.",
        "**Within a few days, a one-page teardown.** What to fix, what to cut, what I would build first, with a scope and a fixed price at the bottom.",
        "**Then, if useful, a sprint.** $2,000 for a design sprint (clickable prototype plus a scope any developer can quote from) or $3,000 for an MVP sprint (one flow designed, built and deployed). Scope in writing, weekly updates.",
        "**Then your decision.** Keep the product in-house, take flex support by the hour, or run a second sprint. All three are fine.",
      ] },

      { t: "table", head: ["", "AI labs", "Founders"], rows: [
        ["Free step", "Written review of one task, 48 hours", "One-page teardown, a few days"],
        ["Paid step", "Ten-task pilot, one week, your rubric", "$2,000 design or $3,000 MVP sprint"],
        ["Then", "Managed delivery, weekly report", "Flex support or in-house"],
        ["Can stop after", "Any step", "Any step"],
      ] },

      { t: "callout", title: "Why both start free", text: "A review or a teardown is a sample of the work. You should judge it before paying for more of it, and I would rather be judged on work than on a call." },

      { t: "h2", text: "What to include when you write" },
      { t: "p", text: "For a task review: the task as your authors see it, the tests, the reference solution if there is one, and your rubric or guideline. For a teardown: the link or files, who the product is for in one sentence, and the one thing you are unsure about. That last item is usually where the teardown starts." },
    ],
    faq: [
      { q: "How do I start working with you as an AI lab?", a: "Send one task, rubric or test suite under NDA. You get a written review within 48 hours, free. If it is useful, the next step is a ten-task pilot on your rubric." },
      { q: "How do I start working with you as a founder?", a: "Send your product, prototype or idea in any form. You get a one-page teardown within a few days, free, ending with a scope and a fixed price for a sprint if you want one." },
      { q: "Do I need to book a call first?", a: "No. Both free steps work by email or the booking form. A call is available if you prefer, but the written review or teardown is the real first step." },
    ],
    forFounders: "Send the thing you are working on today. December is a good month to build: fewer meetings, faster replies, and a product live before January.",
    forLabs: "The 48-hour review is the fastest way to see the standard. Send one task and judge the feedback before thinking about a pilot.",
    sources: [
      { title: "Offers and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free review" },
  },

  {
    slug: "what-a-free-teardown-looks-like",
    day: 23,
    plan: 1,
    date: "2026-11-27",
    track: "Founders",
    title: "What a free teardown looks like",
    standfirst: "A real-format example on a made-up AI app: five onboarding questions, a sign-up wall and no sign of what you get. Three fixes, one page, with the activation benchmark that explains why they matter. This is what lands in your inbox.",
    heroAlt: "Isometric onboarding unit: five steps collapsing into one accent step",
    keywords: ["product teardown", "onboarding teardown", "UX audit example", "activation rate benchmark", "SaaS onboarding", "free product review", "AI app onboarding"],
    takeaways: [
      "A teardown is one page: what to fix, what to cut, what to build first, with a scope and price at the end.",
      "The example app asks five questions behind a sign-up wall before showing anything; the three fixes are show a result first, ask one question not five, and let people try before the email wall.",
      "Lenny's Newsletter survey puts average SaaS activation around 36%; showing value before sign-up is the most common lever to move it.",
    ],
    body: [
      { t: "p", text: "People ask what they would get from a free teardown before sending anything, which is fair. So here is one, in its real format, on an app I made up so nothing in it is confidential. Call it Draftly: an AI tool that writes a first draft of a cold email from a LinkedIn profile URL." },

      { t: "h2", text: "Before" },
      { t: "p", text: "The landing page has a headline, a screenshot and a \"Get started\" button. The button opens a sign-up form: email, password, name, company, role. After sign-up, an onboarding flow asks five questions: industry, target persona, tone, email length, and how the user heard about Draftly. Only then does the product show the box where a URL can be pasted. Nowhere along that path has the user seen a single draft email." },
      { t: "p", text: "Seven screens between arriving and seeing what the product does. Every one of them is a place to leave." },

      { t: "h2", text: "Fix 1: show a result first" },
      { t: "p", text: "Put one worked example above the fold: a real-looking profile on the left, the draft email Draftly wrote on the right. Users decide in seconds whether the output is good enough to want, and the example answers that before anything is asked of them. This is the single highest-leverage change for an AI product, because the output is the product." },

      { t: "h2", text: "Fix 2: one question, not five" },
      { t: "p", text: "Of the five onboarding questions, one affects the first draft: the target persona. Tone and length can be defaults the user adjusts after seeing a draft. Industry can be inferred from the profile pasted. \"How did you hear about us\" is for Draftly, not the user, and belongs in a later email. One question, then the product." },

      { t: "h2", text: "Fix 3: let people try before the wall" },
      { t: "p", text: "Let a visitor paste one URL and get one draft without an account. Ask for the email to save the draft or write a second one. The user who has just read a draft written for their prospect will give an email. The user staring at a password field has not seen a reason to." },

      { t: "h2", text: "After, and the number behind it" },
      { t: "p", text: "Lenny's Newsletter surveyed SaaS companies on activation and found an average around 36%, with wide variation by category. The most common way products move that number is by shortening the distance between arrival and the first moment of value. Draftly's fixes cut the path from seven screens to two: see an example, paste a URL. Everything else moves to after the first draft, where a user who has seen value will answer." },

      { t: "callout", title: "The last section of every teardown", text: "What I would build first, as a scope with a fixed price. For Draftly: the try-before-sign-up flow with one example and one question, a design sprint at $2,000 or built end to end in an MVP sprint at $3,000." },

      { t: "h2", text: "What to send for yours" },
      { t: "p", text: "A link, a prototype or a one-page idea. Say who it is for in one sentence and name the one thing you are unsure about. The teardown comes back within a few days, in this format, and it is yours whether or not we work together." },
      { t: "gallery", items: [
        { src: slide("what-a-free-teardown-looks-like", 2), alt: "Slide: before" },
        { src: slide("what-a-free-teardown-looks-like", 3), alt: "Slide: show a result first" },
        { src: slide("what-a-free-teardown-looks-like", 4), alt: "Slide: one question, not five" },
        { src: slide("what-a-free-teardown-looks-like", 5), alt: "Slide: try before sign-up" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What is included in a product teardown?", a: "One page: what to fix, what to cut, what to build first, and a scope with a fixed price for the first build. It is written from your product, prototype or idea and is yours to keep." },
      { q: "What is a good activation rate for SaaS?", a: "Lenny's Newsletter's survey puts the average around 36%, varying widely by category. The usual lever to improve it is shortening the path from arrival to the first moment of value." },
      { q: "Should an AI product show results before sign-up?", a: "Yes. The output is the product, so one worked example above the fold, and ideally one free use before the email wall, lets users decide they want it before they are asked for anything." },
    ],
    forFounders: "Send your onboarding. The teardown will come back in this format, with your three fixes instead of Draftly's.",
    forLabs: "The task-review equivalent is the same shape: what fails, what to cut, what to change first, in writing within 48 hours.",
    sources: [
      { title: "Lenny's Newsletter, What is a good activation rate", url: "https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },
];
