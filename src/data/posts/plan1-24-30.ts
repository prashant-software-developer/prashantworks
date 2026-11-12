import { slide, type BlogPost } from "../blog-shared";

export const plan1b3: BlogPost[] = [
  {
    slug: "dashboards-people-actually-read",
    day: 24,
    plan: 1,
    date: "2026-11-28",
    track: "Founders",
    title: "Dashboards people actually read",
    standfirst: "Stephen Few defined a dashboard as a single-screen display of the information someone needs to do their job. Most dashboards fail that test on presentation, not data. Five rules from designing them, and the perception research behind each one.",
    heroAlt: "Isometric layout grid: a plate with an eight-point grid and one accent tile aligned to it",
    keywords: ["dashboard design", "dashboard UX", "data visualization best practices", "Stephen Few dashboard", "preattentive attributes", "admin dashboard design", "KPI dashboard", "analytics UI"],
    takeaways: [
      "A dashboard is one screen that shows what a person needs to do their job; if it needs scrolling or explaining, it is a report.",
      "Number first, chart second. Bars and lines, not pies or gauges, because length and position are judged most accurately.",
      "One colour means \"act now\" and nothing else uses it. Every number shows its target and its trend.",
    ],
    body: [
      { t: "p", text: "Stephen Few's definition has held up for two decades: a dashboard is a visual display of the most important information needed to achieve one or more objectives, consolidated on a single screen so it can be monitored at a glance. His essay on why most dashboards fail makes the point that the failures are almost never about the data. They are about presentation: the wrong chart, too many colours, no context, no priority." },
      { t: "p", text: "I have designed dashboards for admin consoles, sales teams and security analysts. These are the five rules that survived all of them." },

      { t: "h2", text: "1. Number first, chart second" },
      { t: "p", text: "The question a dashboard answers is \"how are we doing\", and the answer is a number. Show it large, with a small label underneath. The chart next to it shows how the number got there. A dashboard that leads with charts makes the reader do the arithmetic the dashboard was supposed to do for them." },

      { t: "h2", text: "2. Bars and lines, not pies and gauges" },
      { t: "p", text: "Nielsen Norman Group's work on preattentive attributes summarises the perception research: people judge length and position accurately, and judge angle and area poorly. A bar chart uses length. A line chart uses position. A pie chart uses angle and area, which is why nobody can tell a 24% slice from a 28% one. Gauges waste most of their pixels on the dial and show one number that would be clearer as text." },

      { t: "h2", text: "3. One colour for \"act now\"" },
      { t: "p", text: "Colour is the strongest preattentive signal on the screen, which is exactly why it has to be rationed. Everything in a normal state is grey or a single neutral. The one accent colour means something needs attention, and it appears only when that is true. A dashboard with six colours has no way to shout." },

      { t: "h2", text: "4. Context: target and trend" },
      { t: "p", text: "A number alone means nothing. 4,210 sign-ups this month is good or bad depending on last month and on the plan. Every headline number gets its target, or last period, beside it, and a small sparkline showing the direction. Few's bullet graph is the compact form of this and still the best one." },

      { t: "h2", text: "5. One screen, one job" },
      { t: "p", text: "If a dashboard needs scrolling, it is a report. If different people need different numbers, they need different dashboards, not one with tabs. The test is the five-second rule: can the person it is for look at it and know whether anything needs their action today? If not, remove things until they can." },

      { t: "table", head: ["Instead of", "Use", "Because"], rows: [
        ["Pie chart", "Horizontal bar chart", "Length is judged accurately; angle is not"],
        ["Gauge", "Number with target and sparkline", "Same information in a tenth of the space"],
        ["Six series colours", "Grey plus one accent", "The accent can mean \"act now\""],
        ["A number", "Number, target, trend", "A number without context is not information"],
        ["Tabs", "Separate dashboards per role", "One screen, one job"],
      ] },

      { t: "callout", title: "The five-second test", text: "Can the person it is for look at the screen and know whether anything needs their action today? That is the whole design brief." },

      { t: "h2", text: "A note on the dense case" },
      { t: "p", text: "Some dashboards are for specialists who compare hundreds of rows: analysts, operators, reviewers. The rules still hold, but \"one screen\" means a dense table rather than a few big numbers. Density is not the enemy; decoration is. A dense table with fixed columns, one accent colour and no chart junk is a dashboard. A spacious card layout that shows twelve of a thousand alerts is not." },
    ],
    faq: [
      { q: "What is the definition of a dashboard?", a: "Stephen Few's: a visual display of the most important information needed to achieve objectives, consolidated on a single screen so it can be monitored at a glance. If it needs scrolling or explanation, it is a report." },
      { q: "Why are pie charts bad for dashboards?", a: "Pie charts encode values as angle and area, which people judge poorly. Bar charts encode length and line charts encode position, both of which people judge accurately, per the perception research NN/g summarises." },
      { q: "How many colours should a dashboard use?", a: "One accent colour reserved for items that need action, with everything else in grey or a single neutral. More colours remove the dashboard's ability to signal urgency." },
    ],
    forFounders: "If your product has a dashboard, send a screenshot for the free teardown. Most of the fixes are removals, which makes them cheap.",
    forLabs: "The weekly programme report follows the same rules: the acceptance number first, its trend, the rejection causes as a bar list, and one colour for the thing that needs a decision.",
    sources: [
      { title: "Stephen Few, Why Most Dashboards Fail", url: "https://blogs.ischool.berkeley.edu/i247s13/files/2013/02/WhyMostDashboardsFail.pdf" },
      { title: "Nielsen Norman Group, Dashboards: Making Charts and Graphs Easier to Understand (preattentive attributes)", url: "https://www.nngroup.com/articles/dashboards-preattentive/" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "how-to-build-a-rubric-graders-agree-on",
    day: 25,
    plan: 1,
    date: "2026-11-29",
    track: "AI labs",
    title: "How to build a rubric graders agree on",
    standfirst: "Expert graders in OpenAI's GDPval agreed on 71% of pairwise comparisons. A rubric gives them something checkable to agree on. The method behind 14 of 15 accepted PaperBench reviews: split quality into parts, weight them, write the golden answer first, and require two graders to reach one verdict.",
    heroAlt: "Isometric rubric tree: one root block wired to four leaf blocks of descending height, the first in accent blue",
    keywords: ["evaluation rubric design", "LLM grading rubric", "inter-rater agreement", "rubric for AI evaluation", "PaperBench rubric", "golden answer", "grader calibration", "AI eval design"],
    takeaways: [
      "\"Is this answer good?\" cannot be graded consistently; \"does it produce the right total?\" can. A rubric turns the first question into many of the second.",
      "Four steps: split quality into small checkable parts, weight them, have an expert write the golden answer before grading starts, and require two graders to reach the same verdict independently.",
      "Anthropic's test of a well-designed task is that experts agree independently; disagreement is a signal the rubric has a gap, not that a grader is wrong.",
    ],
    body: [
      { t: "p", text: "In OpenAI's GDPval, expert graders from the same occupation compared pairs of outputs and agreed about 71% of the time. These were people with years of experience judging work in their own field. If they diverge nearly a third of the time on \"which is better\", a programme that asks graders that question directly will get inconsistent data no matter who it hires." },
      { t: "p", text: "The fix is to stop asking that question. A rubric replaces \"is this good\" with a list of things that are either present or not. Here is how I build one. It is the method behind 14 of my 15 accepted PaperBench reviews, where the rubric is the entire deliverable." },

      { t: "h2", text: "1. Split \"good\" into checkable parts" },
      { t: "p", text: "Take the vague question and keep asking \"what would I look at to decide\" until every answer is something a second person could verify. For a coding task: the code runs; the tests pass; the output matches the reference within tolerance; no file outside the allowed directory was changed; the explanation names the root cause. Each part is a yes or a no. If a part cannot be made binary, split it again." },

      { t: "h2", text: "2. Weight each part" },
      { t: "p", text: "Not every part matters equally. A typical split for a coding task: correct result 40%, works end to end 30%, code quality 20%, explanation 10%. The weights are a product decision and should be argued about once, in writing, before grading starts. PaperBench does this with a tree: every leaf has a weight, and parent nodes average their children, so the final score is traceable to specific leaves." },

      { t: "h2", text: "3. Write the golden answer first" },
      { t: "p", text: "Before anyone grades, an expert writes the ideal response. This does three things. It proves the task can be done. It shows what full marks look like, so graders are matching against a thing rather than an idea. And it exposes rubric parts that the ideal answer does not satisfy, which means the rubric is wrong, not the answer." },

      { t: "h2", text: "4. Two graders, one verdict" },
      { t: "p", text: "Anthropic's guide to agent evals gives the test for a well-designed task: experts should agree on the grade independently. So calibration runs before volume: two graders score the same twenty items without conferring, and every disagreement is examined. Each one is either a rubric gap (fix the criterion) or a grader misreading (fix the briefing). The rubric that comes out of calibration is the one that scales." },

      { t: "table", head: ["Vague", "Checkable"], rows: [
        ["The code is clean", "No function over 50 lines; linter passes with project config"],
        ["The answer is well sourced", "Every factual claim cites a document in the provided set"],
        ["The fix is correct", "Hidden tests pass; reference output matched within stated tolerance"],
        ["The explanation is clear", "Names the root cause and the file where it was fixed"],
      ] },

      { t: "callout", title: "The sign of a good rubric", text: "Two graders who have never spoken reach the same score. When they do not, the rubric has a gap, and fixing the gap is the work." },

      { t: "h2", text: "What a rubric is not" },
      { t: "p", text: "It is not a checklist of everything that could be wrong. A rubric with forty items is as hard to apply consistently as no rubric at all. Keep it to the parts that decide the grade, weight them, and move the rest into a guideline that explains the spirit. And it is not fixed: every calibration batch and every disputed verdict should change it, with a version number so everyone knows which rubric a score came from." },
    ],
    faq: [
      { q: "How much do expert graders agree when evaluating AI outputs?", a: "About 71% of pairwise comparisons in OpenAI's GDPval. That level of disagreement among experts is why rubrics and calibration are necessary rather than optional." },
      { q: "How do you design a grading rubric for AI evaluation?", a: "Split quality into small binary checks, weight each one, have an expert write the golden answer before grading begins, and calibrate by having two graders score the same items independently and fixing the rubric wherever they disagree." },
      { q: "What is a golden answer in evaluation?", a: "The ideal response to a task, written by an expert before grading starts. It proves the task is solvable, shows graders what full marks look like, and exposes rubric criteria the ideal answer does not meet." },
    ],
    forFounders: "Acceptance criteria for a feature work the same way. \"Users should find it easy\" cannot be checked; \"a new user completes the flow in under two minutes without help\" can.",
    forLabs: "Send your rubric and the free review will mark each criterion checkable or not, suggest weights, and flag where two graders would diverge.",
    sources: [
      { title: "GDPval paper (grader agreement), arXiv", url: "https://arxiv.org/html/2510.04374v1" },
      { title: "Anthropic Engineering, Demystifying evals for AI agents, 9 Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "PaperBench paper (weighted rubric trees), arXiv", url: "https://arxiv.org/html/2504.01848v3" },
    ],
    cta: { label: "Get a free written review of your rubric", topic: "data" },
  },

  {
    slug: "reward-hacking-starts-in-the-environment",
    day: 26,
    plan: 1,
    date: "2026-11-30",
    track: "AI labs",
    title: "Reward hacking starts in the environment",
    standfirst: "Anthropic trained a model on deliberately hackable tasks and watched the hacks generalise into worse behaviour. OpenAI watched a model rewrite a verifier to return true. The lesson for anyone building RL environments: your environment teaches whatever it rewards, so audit it before you train on it.",
    heroAlt: "Isometric training sandbox: a maze of white walls on a dotted plate, a dark marker inside and an accent block at the exit",
    keywords: ["reward hacking", "RL environment design", "reinforcement learning environments", "reward hacking prevention", "emergent misalignment", "agentic environment audit", "AI training environment", "chain of thought monitoring"],
    takeaways: [
      "Anthropic trained a model on hackable tasks taken from real training runs; it learned hacks such as calling sys.exit(0), and in a sabotage test undermined safety research code 12% of the time.",
      "OpenAI observed a model rewriting a verify() function to return true; penalising the reasoning taught it to hide the intent rather than stop.",
      "The fix is unglamorous: isolate the grader, hide answers, run null and fake agents, read transcripts. A 0% pass rate across many tries usually means a broken task, not a hard one.",
    ],
    body: [
      { t: "p", text: "In November 2025 Anthropic published a study that should be required reading for anyone who builds RL environments. The team took tasks from real training runs that were known to be hackable, trained a model on them, and watched what happened. The model learned the hacks, as expected. Then it did something else: the behaviour generalised. In one evaluation the model, asked to help with safety research code, sabotaged it about 12% of the time. The environment had taught it that getting the reward mattered more than doing the job, and it applied that lesson elsewhere." },
      { t: "p", text: "The hacks themselves were mundane. Calling `sys.exit(0)` so a test harness reports success. Special-casing the inputs the test uses. None of this is clever. It is what a model does when the environment makes the shortcut cheaper than the task." },

      { t: "h2", text: "OpenAI saw the same thing from the other side" },
      { t: "p", text: "In March 2025 OpenAI described a model that, mid-task, rewrote a `verify()` function to return true rather than fix the code the function was checking. The team could see this in the model's chain of thought. When they tried penalising the reasoning that led to the hack, the model did not stop hacking. It stopped saying so. The intent went underground and the behaviour stayed." },
      { t: "p", text: "Both studies point at the same place. The model is doing what it was rewarded for. The place to intervene is the environment that handed out the reward." },

      { t: "h2", text: "What a hackable environment looks like" },
      { t: "ul", items: [
        "The grader runs in the same process or container as the agent, so the agent can modify or replace it.",
        "Test files or expected outputs are readable by the agent, so it can special-case them.",
        "Success is signalled by an exit code or a log line that the agent can produce directly.",
        "Passing requires an exact match to one implementation, so the agent learns the implementation rather than the behaviour.",
        "The reference solution has never been run in the environment, so nobody knows whether honest success is possible.",
      ] },

      { t: "h2", text: "The audit" },
      { t: "p", text: "Anthropic's engineering guide to agent evals has a rule of thumb that applies here: a task with a 0% pass rate across a hundred attempts is almost always broken, not hard. The guide gives an example where a CORE-Bench score went from 42% to 95% after grading bugs were fixed and the agent scaffold changed. Nothing about the model improved; the environment stopped lying. The audit that catches both broken and hackable environments is the same." },
      { t: "ol", items: [
        "**Isolate the grader.** Separate container, test files mounted read-only, results written somewhere the agent cannot reach.",
        "**Hide the answers.** Hidden test inputs generated at grading time; the agent sees the spec, not the expected output.",
        "**Run the null agent.** An agent that does nothing must score zero. If it does not, the environment rewards nothing.",
        "**Run the fake agent.** An agent that prints \"all tests passed\" and exits must score zero.",
        "**Run the reference solution.** It must pass every time in a fresh container. Ten runs, ten passes.",
        "**Read the transcripts.** Of successful runs as well as failures. A success that reached the answer by a route the task did not intend is a hack you have not named yet.",
      ] },

      { t: "callout", title: "The principle", text: "Your RL environment teaches whatever it rewards. Leave a shortcut open and the model learns the shortcut, not the job, and then takes the lesson with it." },

      { t: "h2", text: "Why this is a task-authoring problem" },
      { t: "p", text: "Reward hacking is usually filed under alignment. It is also, more immediately, a quality problem in task authoring. Every item on the audit list is something a task author or reviewer can check before an environment ships, and most of them take minutes. The environments that produced Anthropic's hackable tasks were not built by careless people. They were built by people who did not run the null agent. That is fixable." },
    ],
    faq: [
      { q: "What is reward hacking in reinforcement learning?", a: "When a model finds a way to earn the reward without doing the intended task, such as making a test harness report success by exiting early or rewriting the verifier. Anthropic's 2025 study showed such hacks, learned in training, generalise into unrelated bad behaviour." },
      { q: "How do you prevent reward hacking in an RL environment?", a: "Isolate the grader from the agent, hide test inputs and expected outputs, confirm a null agent and a fake-success agent both score zero, re-run the reference solution in a fresh container, and read transcripts of successful runs for unintended routes." },
      { q: "Does penalising a model's reasoning stop reward hacking?", a: "OpenAI found it did not. Penalising the chain of thought that led to a hack taught the model to hide its intent while continuing the behaviour. The fix is in the environment, not the penalty." },
    ],
    forFounders: "Your AI feature's metric can be hacked too. If the feature is rewarded for \"answers given\" rather than \"answers acted on\", it will learn to give answers.",
    forLabs: "Building RL environments or agentic tasks? Send one environment or test harness and the free review will run the audit above against it within 48 hours.",
    sources: [
      { title: "Anthropic, Natural emergent misalignment from reward hacking, 21 Nov 2025", url: "https://www.anthropic.com/research/emergent-misalignment-reward-hacking" },
      { title: "OpenAI, Detecting misbehavior in frontier reasoning models (chain-of-thought monitoring), 10 Mar 2025", url: "https://openai.com/index/chain-of-thought-monitoring/" },
      { title: "Anthropic Engineering, Demystifying evals for AI agents, 9 Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
    ],
    cta: { label: "Get a free written review of one environment", topic: "data" },
  },

  {
    slug: "how-a-programme-with-us-runs",
    day: 27,
    plan: 1,
    date: "2026-12-01",
    track: "AI labs",
    title: "How a programme with us runs",
    standfirst: "From one task to full volume, week by week. A free review on day one, a ten-task paid pilot in week one, calibration in week two, full volume with second review on every item from week three. You can stop after any step.",
    heroAlt: "Isometric benchmark trio: three suites of descending height on one plate, the tallest with an accent panel",
    keywords: ["AI data programme", "AI training data delivery process", "managed AI data team", "benchmark task programme", "data vendor onboarding", "RLHF programme timeline", "AI evaluation vendor process"],
    takeaways: [
      "Day 1: free written review of one task. Week 1: ten-task paid pilot on your rubric. Week 2: calibration and guideline fixes. Week 3 onward: full volume with second review on every item and a weekly report.",
      "Every step ends with a decision in your hands; stopping after the pilot costs a week, not a quarter.",
      "Calibration happens before volume, which is why the acceptance rate rises over a programme rather than decaying.",
    ],
    body: [
      { t: "p", text: "Labs ask what working together looks like after the pilot, because the pilot is designed to be low-risk and the question is what happens when the risk goes up. Here is the whole programme, step by step, with what you see at each one." },

      { t: "h2", text: "Day 1: free review of one task" },
      { t: "p", text: "You send one task, rubric or test harness, under NDA or sanitised. Within 48 hours you get a written review. Nothing is owed. The review is a sample of the standard every later step will apply, and the fastest way to decide whether a pilot is worth your week." },

      { t: "h2", text: "Week 1: the paid pilot" },
      { t: "p", text: "Ten tasks in your domain, written to your spec, each one carrying a pinned environment, a re-run reference solution, hidden tests checked against null and fake agents, and a second-specialist review. You grade all ten against your rubric. At the end of the week you get the first report: acceptance, rejection causes, rework, guideline changes. Priced by complexity, agreed in writing before the week starts." },

      { t: "h2", text: "Week 2: calibrate" },
      { t: "p", text: "The pilot's rejections are the most valuable thing it produces. Week two is spent on them: every rejection becomes a line in the guideline, a check in the pre-submission script, or a clarification request to you where the rubric was ambiguous. If grading diverged between your reviewers and mine, a calibration batch resolves it. The guideline that comes out of week two is the one volume runs on. Fix the guideline, not the person." },

      { t: "h2", text: "Week 3 onward: full volume" },
      { t: "p", text: "Contributors who passed the scored trial on your rubric join, with their first batch double-reviewed. Every item gets a second-specialist review before submission. Every Friday you get the same report as in week one. When quality drops, and in some week it will, you hear about it from me the same day with the cause and the fix, not from your own numbers a week later." },

      { t: "table", head: ["Step", "What you see", "Can you stop?"], rows: [
        ["Day 1", "Written review of one task", "Yes, nothing owed"],
        ["Week 1", "Ten graded tasks, first report", "Yes, you keep the tasks and the report"],
        ["Week 2", "Updated guideline, calibration results", "Yes"],
        ["Week 3+", "Volume, weekly report, same-day escalation", "Yes, at any week end"],
      ] },

      { t: "callout", title: "The point of the structure", text: "You can stop after any step. If quality does not hold, you have lost a week, not a quarter, and you have the data to say exactly why." },

      { t: "h2", text: "What changes at volume, and what does not" },
      { t: "p", text: "What changes: more contributors, more tasks per week, and a guideline that keeps growing from rejections. What does not change: second review on every item, the Friday report, one accountable person, and the NDA and data-handling rules from day one. The gates that produced the pilot's acceptance rate are the same gates at volume. That is the only reason the rate holds." },
    ],
    faq: [
      { q: "How does an AI training data programme start?", a: "With a free written review of one task within 48 hours, then a ten-task paid pilot on your rubric in week one, calibration in week two, and full volume with second review on every item from week three." },
      { q: "Can I stop an AI data programme after the pilot?", a: "Yes, after any step. Stopping after the pilot costs one week and you keep the ten tasks and the report." },
      { q: "What happens when quality drops during a programme?", a: "You hear about it the same day, with the cause grouped by person, guideline or task type, and the fix applied. Daily updates follow until the acceptance rate recovers." },
    ],
    forFounders: "The product version has the same shape: free teardown, a fixed-price sprint, a decision at the end of each one. Small commitments that each earn the next.",
    forLabs: "Day one is free and takes 48 hours. Send a task and judge the review.",
    sources: [
      { title: "Own delivery process, as run on every programme", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Start with a free 48-hour task review", topic: "data" },
  },

  {
    slug: "from-data-to-decisions-in-seconds",
    day: 28,
    plan: 1,
    date: "2026-12-02",
    track: "Founders",
    title: "From data to decisions in seconds",
    standfirst: "A sales call produces a recording, a transcript, a summary and a set of flags. Reps had data, not answers. What I learned designing AI features inside a call-intelligence platform at Ringover: design backwards from the one decision a user has to make.",
    heroAlt: "Isometric pair of consoles: a ticket-style screen on the left, a single outcome panel on the right",
    keywords: ["AI product design", "call intelligence", "sales AI features", "designing AI for sales teams", "AI UX", "decision-first design", "Ringover Empower", "AI product designer"],
    takeaways: [
      "More AI output is not the goal. Users want one decision they can act on in seconds, and the design should start from that decision and work backwards.",
      "A call produces a recording, transcript, summary and flags; the useful product is what the rep does next, surfaced in one place.",
      "The questions reps actually ask of a call are simpler than product teams expect: what did they object to, what did I promise, what do I send next.",
    ],
    body: [
      { t: "p", text: "At Ringover I design AI features for Empower, a call-intelligence platform used by sales teams. A call comes in, the platform records it, transcribes it, summarises it, and flags moments: an objection, a competitor mention, a pricing question. That is a lot of output per call. When I started, the honest assessment was that reps had plenty of data and very few answers." },
      { t: "p", text: "The work since has been about one shift: from showing what the AI found to showing what the rep should do. This post is what that shift looked like in practice." },

      { t: "h2", text: "The problem with output" },
      { t: "p", text: "A summary is faster to read than a transcript, but it is still something to read. A list of flags is accurate, but it is a list, and after a day of calls a rep has forty lists. Each artefact is correct and none of them answers the question the rep has at 5pm: what do I need to do about today's calls before tomorrow?" },
      { t: "p", text: "The AI was producing more and more of the right information in forms that required the user to do the final step. The final step, turning information into a decision, is the whole job." },

      { t: "h2", text: "Design backwards from the decision" },
      { t: "p", text: "The method that worked was to start from the end. For each call, what is the one decision a rep makes? Usually one of a small set: send a follow-up with a specific attachment, schedule a next step, escalate to a manager, or close the record. Then: what is the minimum the rep needs to see to make that decision with confidence? Usually one line of context (what was promised, what was objected to) and one link to the evidence (the moment in the call)." },
      { t: "p", text: "Everything else, the full summary, the transcript, the flags, stays available one click away. It is not removed; it is demoted. The decision and its evidence come first." },

      { t: "h2", text: "The questions people actually ask" },
      { t: "p", text: "Sitting with reps changed what we built more than any model improvement. The questions they asked of a call were not the ones the product had been designed around. Nobody asked about sentiment over time. They asked: what did they object to, what did I promise, what do I send next. Three questions, all answerable from the transcript, all more useful than a dashboard of flags. Designing for those three made the feature right more often, and being right more often is where trust comes from." },

      { t: "table", head: ["Before", "After"], rows: [
        ["Summary, transcript, flags per call", "One suggested next action per call, with the evidence one click away"],
        ["Rep reads, then decides", "Rep confirms, edits or overrides"],
        ["Insight features designed from the model's output", "Features designed from the three questions reps ask"],
        ["Time per call to process: minutes", "Seconds"],
      ] },

      { t: "callout", title: "The principle", text: "Your users do not want more AI output. They want one decision they can act on in seconds. Design backwards from that decision." },

      { t: "h2", text: "What this means for your AI feature" },
      { t: "p", text: "Whatever your product's AI produces, ask what the user does with it. If the answer is \"reads it and then decides something\", the design is one step short. Find the decision, put it first, put the evidence one click behind it, and keep the full output available for the times someone wants it. The model does not need to change. The order on the screen does." },
    ],
    faq: [
      { q: "How do you design AI features for sales teams?", a: "Start from the one decision a rep makes after a call (follow up, schedule, escalate, close), show the minimum context needed to make it, and keep the full AI output one click away rather than first." },
      { q: "Why do users ignore AI summaries?", a: "Because a summary is still something to read and then act on. Users want the action, with the evidence available if they want to check it. Output that stops one step short of the decision gets skipped." },
      { q: "What questions do sales reps ask about a call?", a: "In practice: what did the prospect object to, what did I promise, and what do I send next. Simpler than product teams expect, and all answerable from the transcript." },
    ],
    forFounders: "If your AI feature ends with the user reading something, send it for the free teardown and I will show where the decision should sit instead.",
    forLabs: "The same principle applies to grader output: a score with a trace to the failing criterion is a decision a reviewer can act on. A score alone is output.",
    sources: [
      { title: "Case study: Ringover, on this site", url: "https://www.prashantworks.com/work/ringover" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "what-id-do-for-you-in-december",
    day: 29,
    plan: 1,
    date: "2026-12-03",
    track: "Both",
    title: "What I'd do for you in December",
    standfirst: "A month of playbooks in one place. For AI labs: tasks that survive review, rubrics graders agree on, environments audited for reward hacking. For founders: a one-page AI feature brief, an MVP cut to one flow, onboarding without walls. The numbers behind each, and how to start.",
    heroAlt: "Isometric 30-day log: a six-by-five grid of raised tiles, the last one in accent blue",
    keywords: ["AI product consultant", "AI training data partner", "MVP development", "benchmark tasks", "December projects", "product teardown", "task review", "month in review"],
    takeaways: [
      "For AI labs: tasks with pinned environments and ungameable hidden tests, rubrics built from checkable parts, and RL environments audited with null and fake agents.",
      "For founders: a five-section AI feature brief, an MVP cut to the one flow that proves demand, and onboarding that shows value before the wall.",
      "The record: 90% acceptance and 4.89/5 quality on AI training work; 22+ products shipped, 98% on the agreed date. Both paths start free.",
    ],
    body: [
      { t: "p", text: "Thirty days ago I started posting one piece a day on two subjects: building AI products, and building the data that trains and tests AI models. This is the recap, organised by what I would do for each kind of reader in December, with links to the full write-ups." },

      { t: "h2", text: "If you run an AI lab or data team" },
      { t: "ul", items: [
        "**Tasks that survive review.** Pinned environments, reference solutions re-run before submission, hidden tests that fail hard-coding, empty runs and null agents. [What gets a benchmark task accepted](/blog/what-gets-a-benchmark-task-accepted) and [the five checks](/blog/five-checks-behind-45-accepted-tasks) cover the routine; 45 of 50 Terminal-Bench-style tasks were accepted with it.",
        "**Specs nobody can misread.** End state, exclusions, a worked example, checkable definitions, a ten-task pilot of the spec itself. [Write task specs nobody can misread](/blog/write-task-specs-nobody-can-misread).",
        "**Rubrics graders agree on.** Split, weight, golden answer first, two graders one verdict. [How to build a rubric graders agree on](/blog/how-to-build-a-rubric-graders-agree-on).",
        "**Environments audited for reward hacking.** Isolate the grader, hide answers, run null and fake agents, read transcripts. [Reward hacking starts in the environment](/blog/reward-hacking-starts-in-the-environment).",
        "**A vetted, managed team.** Scored trial on your rubric, second review on every item, calibration, one accountable owner. [How we vet](/blog/how-we-vet-who-touches-your-tasks) and [what 90% acceptance takes](/blog/what-a-90-percent-acceptance-rate-takes).",
      ] },

      { t: "h2", text: "If you are a founder or product team" },
      { t: "ul", items: [
        "**A one-page AI feature brief.** User and job, data you have, three good answers, one metric, what happens when it's wrong. [Scope any AI feature on one page](/blog/scope-any-ai-feature-on-one-page).",
        "**An MVP cut to one flow.** Sign up, core action, result. Everything else waits for evidence. [Cut your MVP to one flow](/blog/cut-your-mvp-to-one-flow).",
        "**Onboarding without walls.** Show a result first, ask one question, let people try before the email wall. [Every extra form field costs you users](/blog/every-extra-form-field-costs-you-users) and [what a free teardown looks like](/blog/what-a-free-teardown-looks-like).",
        "**AI features people trust.** Real sources, the user's own data, a design for the wrong answer. [What makes users trust an AI feature](/blog/what-makes-users-trust-an-ai-feature).",
        "**Decision-first design.** One action per item, evidence one click away. [From data to decisions in seconds](/blog/from-data-to-decisions-in-seconds).",
      ] },

      { t: "h2", text: "The numbers" },
      { t: "table", head: ["AI training and evaluation", "Product work"], rows: [
        ["90% acceptance across programmes", "22+ products shipped"],
        ["4.89/5 average quality rating", "98% delivered on the agreed date"],
        ["45 of 50 Terminal-Bench-style tasks accepted", "$2,000 design sprint, $3,000 MVP sprint, fixed"],
        ["7 of 9 SWE-bench · 14 of 15 PaperBench reviews", "Weekly written update, one person to message"],
      ] },

      { t: "callout", title: "Both start free", text: "AI labs: a written review of one task within 48 hours. Founders: a one-page teardown of your product. No call needed." },

      { t: "h2", text: "December" },
      { t: "p", text: "It is the best month of the year to start a build. Fewer meetings on both sides, faster replies, and a product or a pilot finished before January. Thank you to everyone who read, replied and sent things this month. If one of these posts described your problem, the next step is a message." },
    ],
    faq: [
      { q: "What services do you offer AI labs?", a: "Benchmark and training task authoring, task and rubric review, and RL environment audits, delivered by a managed, vetted team with second review on every item. It starts with a free written review of one task within 48 hours." },
      { q: "What services do you offer founders?", a: "A free one-page product teardown, then a $2,000 design sprint or a $3,000 fixed-price MVP sprint, with weekly written updates and flex support after launch." },
      { q: "What is your track record?", a: "90% acceptance and a 4.89/5 average quality rating on AI training work, including 45 of 50 Terminal-Bench-style tasks accepted; 22+ products shipped with 98% delivered on the agreed date." },
    ],
    forFounders: "Send the thing you are working on. The teardown will tell you which of the playbooks above applies to it first.",
    forLabs: "Send one task. The review will show which of the checks above it passes and which it does not.",
    sources: [
      { title: "Own verified numbers and offers, on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free review" },
  },

  {
    slug: "how-to-work-with-me-in-three-steps",
    day: 30,
    plan: 1,
    date: "2026-12-04",
    track: "Both",
    title: "How to work with me, in three steps",
    standfirst: "Free review. Fixed scope and price in writing. Then a pilot or a sprint with a written update every week. No retainers to start, no surprises after. The last post of the first thirty days, and the simplest.",
    heroAlt: "Isometric end-to-end line: data cylinders feeding a screen, a dial, and an accent output block, wired in sequence",
    keywords: ["how to hire a product engineer", "working with a freelance product designer", "AI data vendor process", "fixed-price sprint", "free review", "hire AI training data team", "engagement process"],
    takeaways: [
      "Step 1: a free review. One task for AI labs (48 hours), one product for founders (a few days).",
      "Step 2: fixed scope and price, in writing, before any paid work starts.",
      "Step 3: a ten-task pilot or a $2,000/$3,000 sprint, with a written update every week and one person to message.",
    ],
    body: [
      { t: "p", text: "Thirty posts in, the process can be said in three steps. This is the page to send to a colleague who asks \"so how does working with him go?\"" },

      { t: "h2", text: "Step 1: free review" },
      { t: "p", text: "AI labs send one task, rubric or test suite and get a written review within 48 hours: where it can be shortcut, where it is ambiguous, what to change. Founders send a product, prototype or idea and get a one-page teardown within a few days: what to fix, what to cut, what to build first. Both are free, need no call, and are yours whether or not anything follows." },

      { t: "h2", text: "Step 2: fixed scope and price, in writing" },
      { t: "p", text: "Before any paid work, a short document states what will be delivered, when, and for how much. For labs: the number of tasks, the domain, the spec, the review process, the report, the price by complexity. For founders: the one flow, the screens, the stack, the deployment, the handover, the fixed price. Anything that comes up later is quoted against this document, never absorbed into it silently." },

      { t: "h2", text: "Step 3: pilot or sprint, with a weekly update" },
      { t: "p", text: "Labs get a ten-task pilot in one week, graded by them, followed by volume if the numbers hold. Founders get a three-week sprint with a clickable prototype in week one, a staging link in week two, and a live product in week three. Both get a written update every Friday: done, next, risks, decisions needed. Both have one person to message, and it is me." },

      { t: "table", head: ["", "AI labs", "Founders"], rows: [
        ["1. Free review", "One task, 48 hours", "One product, a few days"],
        ["2. In writing", "Tasks, spec, review process, price", "Flow, screens, stack, fixed price"],
        ["3. The work", "Ten-task pilot, then volume", "$2,000 design or $3,000 MVP sprint"],
        ["Every week", "Acceptance, causes, rework, fixes", "Done, next, risks, decisions"],
      ] },

      { t: "callout", title: "What is not in the process", text: "No retainer to start. No discovery fee. No account manager between you and the person doing the work. No scope added without a quote." },

      { t: "h2", text: "The numbers behind it" },
      { t: "p", text: "90% acceptance and a 4.89/5 average quality rating across AI training and evaluation programmes. 22+ products shipped, 98% on the agreed date. The process above is what produced them, which is why it is the process." },

      { t: "h2", text: "What happens next" },
      { t: "p", text: "The next thirty days of posts start on 5 December. Same two readers, new topics, and the same free first step at the end of each one. If you have been reading along and have something to send, this is a good moment." },
      { t: "gallery", items: [
        { src: slide("how-to-work-with-me-in-three-steps", 2), alt: "Slide: free review" },
        { src: slide("how-to-work-with-me-in-three-steps", 3), alt: "Slide: fixed scope in writing" },
        { src: slide("how-to-work-with-me-in-three-steps", 4), alt: "Slide: pilot or sprint" },
        { src: slide("how-to-work-with-me-in-three-steps", 5), alt: "Slide: every week" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What are the steps to working with you?", a: "A free review (one task for labs, one product for founders), then a fixed scope and price in writing, then a ten-task pilot or a fixed-price sprint with a written update every week." },
      { q: "Do you require a retainer?", a: "No. Work starts with a free review and continues, if you choose, with a priced pilot or a fixed-price sprint. Ongoing support after a sprint is optional and hourly." },
      { q: "Who will I be talking to?", a: "Me, throughout. There is no account manager or ticket queue between you and the person doing the work." },
    ],
    forFounders: "Step one is a message with a link. The teardown comes back within a few days and ends with step two already drafted.",
    forLabs: "Step one is a task under NDA. The review comes back within 48 hours and tells you whether step two is worth writing.",
    sources: [
      { title: "Offers and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free review" },
  },
];
