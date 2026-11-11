/**
 * Blog posts: the long-form version of each day of the 30-day plan.
 * Social posts carry the hook; these pages carry the full reasoning, the sources and the illustration.
 * Media lives in public/blog/<slug>/ (hero.gif, hero.png, slides/NN.png).
 */

export type Track = "Founders" | "AI labs" | "Both";

export type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; title: string; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "gallery"; items: { src: string; alt: string }[]; caption?: string };

export type BlogPost = {
  slug: string;
  day: number;
  date: string; // ISO
  track: Track;
  title: string;
  /** One or two sentences under the title. Also the SEO description. */
  standfirst: string;
  /** Alt text for the hero animation. */
  heroAlt: string;
  keywords: string[];
  body: Block[];
  /** Two short paragraphs: what this means for founders, what it means for labs. */
  forFounders: string;
  forLabs: string;
  sources: { title: string; url: string }[];
  cta: { label: string; topic?: "data" | "product" };
};

export const BLOG_PATH = "/blog";
export const postPath = (p: BlogPost) => `${BLOG_PATH}/${p.slug}`;
export const heroGif = (p: BlogPost) => `/blog/${p.slug}/hero.gif`;
export const heroStill = (p: BlogPost) => `/blog/${p.slug}/hero.png`;
const slide = (slug: string, n: number) => `/blog/${slug}/slides/${String(n).padStart(2, "0")}.png`;

export const trackLabel: Record<Track, string> = { Founders: "For founders", "AI labs": "For AI labs", Both: "For founders and AI labs" };

export const wordCount = (p: BlogPost) =>
  [p.standfirst, p.forFounders, p.forLabs, ...p.body.flatMap((b) => ("text" in b ? [b.text] : "items" in b ? b.items.map((i) => (typeof i === "string" ? i : i.alt)) : b.rows.flat()))]
    .join(" ")
    .split(/\s+/).length;
export const readingTime = (p: BlogPost) => Math.max(3, Math.round(wordCount(p) / 220));

export const posts: BlogPost[] = [
  {
    slug: "two-ways-to-work-with-me",
    day: 1,
    date: "2026-11-05",
    track: "Both",
    title: "Two ways to work with me, and both start free",
    standfirst: "Fixed-price MVPs for founders. Benchmark-grade coding and evaluation tasks for AI labs. Here is what each one includes, what it costs, and the free first step for both.",
    heroAlt: "Isometric machine with two output chutes: one labelled for founders, one for AI labs",
    keywords: ["MVP development", "fixed-price MVP", "AI training data", "benchmark tasks", "Terminal-Bench", "free product teardown", "AI task review"],
    body: [
      { t: "p", text: "I do two kinds of work, and they look unrelated until you see what they share. For founders, I design and build the first version of a product. For AI labs and data partners, I write and review the coding tasks their models are trained and tested on. In both cases the job is the same: decide what matters, build it carefully, and prove it works before anyone pays for the next step." },
      { t: "p", text: "This post is the long version of what I pinned on X this month. It lays out both offers plainly, with the numbers behind them, so you can decide in a few minutes whether either one is for you." },

      { t: "h2", text: "For founders: a fixed-price MVP, built by one person" },
      { t: "p", text: "Most early products die between the idea and the first usable version. Scope grows, the agency hands you off to a junior, the estimate doubles. I remove those failure points by being the only person on the job and by fixing the price in writing before we start." },
      { t: "table", head: ["Offer", "What you get", "Price"], rows: [
        ["Design sprint", "Clickable prototype of the core flow, a one-page scope, and a build estimate you can take anywhere", "$2,000, fixed"],
        ["MVP sprint", "The core flow built, deployed and handed over with documentation. Web app, AI feature or dashboard", "$3,000, fixed"],
        ["Flex support", "Ongoing design and engineering after launch, billed by the hour", "From $25 an hour"],
      ] },
      { t: "p", text: "I've shipped 22+ products this way, 98% of them on the date we agreed. The case studies on this site show the problem, the decisions and what was delivered for each one. At Ringover I ship AI features inside a call-intelligence platform used by sales teams, so the AI parts of your product are not new ground for me." },
      { t: "callout", title: "Free first step for founders", text: "Send me your product, prototype or one-page idea. You get a one-page teardown within a few days: what to fix, what to cut, and what I would build first. No call needed, no commitment." },

      { t: "h2", text: "For AI labs: coding and evaluation tasks that survive review" },
      { t: "p", text: "Frontier labs and their data partners need realistic coding tasks with tests that cannot be gamed. Most submitted tasks fail review. Terminal-Bench 2.0, for example, accepted 89 of 229 submissions, about 39%, after roughly three reviewer-hours per task. The rejected ones are rarely bad ideas. They are under-specified, or their tests let a shortcut through." },
      { t: "p", text: "My acceptance rate across this work is 90%, with an average quality rating of 4.89 out of 5. Of the 50 Terminal-Bench-style tasks I wrote for data platforms, 45 were accepted. Each task ships with a pinned Docker environment, a reference solution that is re-run before submission, and hidden tests that fail hard-coding, partial fixes and empty runs." },
      { t: "ul", items: [
        "Task authoring: Terminal-Bench, SWE-bench and PaperBench-style tasks on real-world problems.",
        "Task review: a written report on where an agent could shortcut your task and how to close the gap.",
        "Rubric and grader design: specific, checkable criteria that two reviewers will score the same way.",
        "Managed delivery: a small, vetted team under one quality gate, when you need volume.",
      ] },
      { t: "callout", title: "Free first step for labs", text: "Send one task, rubric or test suite. An NDA is fine, or send a sanitised sample. Within 48 hours you get a written review: where it can be gamed, where it is ambiguous, and exactly what I would change. After that, the next step is a paid 10-task pilot in one week." },

      { t: "h2", text: "Why one person does both" },
      { t: "p", text: "Writing benchmark tasks taught me to think like a reviewer: assume the solution will be gamed, specify everything the grader checks, and prove the task is solvable before asking anyone to attempt it. Building products taught me the opposite discipline: cut everything that does not serve the one job the user came for. The two meet in the middle. Good tasks and good MVPs are both small, specific and tested." },
      { t: "p", text: "Everything I post this month follows from that. Monday to Friday you will see short posts on X, Threads and Instagram. Each one has a full write-up here, with sources, so you never have to take a one-line claim at face value." },
    ],
    forFounders: "If you have an idea or a half-built product, the teardown is the cheapest way to find out what I would do with it. You keep the document whether or not we work together.",
    forLabs: "If you run a task pipeline and your acceptance rate is below 70%, the free review will usually find the reason in the tests. Send the task you are least sure about.",
    sources: [
      { title: "Terminal-Bench 2.0 paper, Merrill et al., January 2026", url: "https://arxiv.org/pdf/2601.11868" },
      { title: "Case studies on this site", url: "https://www.prashantworks.com/work" },
    ],
    cta: { label: "Get a free review" },
  },

  {
    slug: "what-gets-a-benchmark-task-accepted",
    day: 2,
    date: "2026-11-06",
    track: "AI labs",
    title: "What gets a benchmark task accepted",
    standfirst: "Terminal-Bench 2.0 kept 89 of 229 submitted tasks. The accepted ones share four parts: a real job, a pinned environment, an expert solution and tests that fail every shortcut. Here is each one, and where submissions fall down.",
    heroAlt: "Isometric task assembly line: a document, a container, a solution and a test rack joined on one base",
    keywords: ["Terminal-Bench", "benchmark task", "coding agent evaluation", "task acceptance", "hidden tests", "Docker environment", "AI training data quality"],
    body: [
      { t: "p", text: "When the Terminal-Bench team published the 2.0 paper in January 2026, they included a number most benchmark papers leave out: how many submitted tasks they threw away. Ninety-three contributors submitted 229 tasks. Eighty-nine made the final set, about 39%, after roughly three reviewer-hours per accepted task." },
      { t: "p", text: "That ratio matches what I see reviewing tasks for data partners. Most rejected tasks are not bad ideas. They are missing one of four parts, and the part most often missing is the one that decides whether the task measures anything: the tests." },

      { t: "h2", text: "1. A real job, not a puzzle" },
      { t: "p", text: "An accepted task starts with work someone would actually be asked to do. \"This nightly report is wrong, fix it.\" \"Migrate this config to the new format without breaking the deploy.\" \"Make these tests pass without changing their assertions.\" The realism matters for two reasons. It is what the model will meet in production, and it is what makes the task hard in a fair way: the difficulty comes from the problem, not from a trick in the wording." },
      { t: "p", text: "Puzzles get rejected because they measure something narrow. A task about counting letters in a sentence tests tokenisation, not engineering. Reviewers look for tasks where an experienced engineer would need to read, reason and verify, and where the final state can be checked." },

      { t: "h2", text: "2. A pinned environment" },
      { t: "p", text: "Every accepted Terminal-Bench task runs inside a Docker image with versions fixed. Same base image, same packages, same data, every run. Without that, a task passes on one machine and fails on another, and nobody can tell whether the model or the environment is at fault." },
      { t: "ul", items: [
        "Pin the base image to a digest or a specific tag, never `latest`.",
        "Pin every package the solution or the tests import.",
        "Copy data into the image. Do not download it at run time; network luck is not part of the task.",
        "Record the exact command the grader runs, so a reviewer can reproduce the result without reading your code.",
      ] },

      { t: "h2", text: "3. An expert solution, run fresh" },
      { t: "p", text: "A reference solution proves two things at once: the task is solvable, and the grader recognises a correct answer. Reviewers run it before anything else. If it fails, the task is broken, not hard. Anthropic's guide to agent evals makes the same point: a 0% pass rate across a hundred attempts almost always means a task or grader bug, not a genuinely impossible problem." },
      { t: "p", text: "The failure I see most often here is a solution that passed once, weeks ago, on the author's machine. Then the environment changed, or a test was tightened, and nobody re-ran it. I re-run the reference solution in a clean container immediately before every submission. It takes two minutes and catches a surprising number of problems." },

      { t: "h2", text: "4. Hidden tests that fail every shortcut" },
      { t: "p", text: "This is where tasks are won and lost. Tests check the final state of the environment, not the model's description of what it did. They are hidden from the agent. And they are written to fail the three common shortcuts: hard-coding the expected output, fixing one of two bugs, and doing nothing at all." },
      { t: "p", text: "A good exercise is to try to cheat your own task. Run an agent that makes no changes. Does it fail? Paste the expected output straight into the result file. Does it fail? Fix half the bug. Does it fail? If any of those pass, the task is not ready, no matter how realistic the scenario is." },
      { t: "gallery", caption: "From the carousel: the four parts of an accepted task, and where submissions fail.", items: [
        { src: slide("what-gets-a-benchmark-task-accepted", 2), alt: "Slide: a real job, realistic work not a puzzle" },
        { src: slide("what-gets-a-benchmark-task-accepted", 3), alt: "Slide: a pinned sandbox, same environment on every run" },
        { src: slide("what-gets-a-benchmark-task-accepted", 4), alt: "Slide: an expert solution, run fresh before every submission" },
        { src: slide("what-gets-a-benchmark-task-accepted", 5), alt: "Slide: hidden tests that check final state and fail shortcuts" },
      ] },

      { t: "h2", text: "Where tasks actually fail" },
      { t: "p", text: "Reviewers spent about three hours per accepted task in Terminal-Bench 2.0. In my own reviews, test gaps are the most common fix by a wide margin, followed by under-specification: the task says \"produce a report\" but the grader checks a specific filename, column order or rounding that the instructions never mention. The model fails for a reason that has nothing to do with skill, and the task gets rejected for being unfair." },
      { t: "callout", title: "The one-line rule", text: "Everything the grader checks must be stated or clearly implied in the task. File paths, function names, units, rounding, output format. If a reviewer can fail the task by following your instructions exactly, the task is the problem." },
      { t: "p", text: "None of this is secret. The Terminal-Bench paper, the Berkeley trustworthy-benchmarks checklist and Anthropic's evals guide all say versions of the same thing. The difference between a 39% acceptance rate and a 90% one is whether somebody runs those checks on every task before it leaves the building." },
    ],
    forFounders: "The same four parts make a good acceptance test for a feature: a real user job, a fixed environment to test in, a known-good example, and a check that fails when the feature only half works. If your QA is \"it looked right on my laptop\", it is missing three of them.",
    forLabs: "If your pipeline's acceptance rate is well under Terminal-Bench's 39%, the fix is almost never more contributors. It is a pre-review gate that runs the reference solution and the shortcut checks before a human reviewer sees the task.",
    sources: [
      { title: "Terminal-Bench 2.0 paper, Merrill et al., 17 January 2026", url: "https://arxiv.org/pdf/2601.11868" },
      { title: "Anthropic Engineering: Demystifying evals for AI agents, 9 January 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "Berkeley RDI: Towards trustworthy agentic benchmarks, April 2026", url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/" },
    ],
    cta: { label: "Get a free 48-hour task review", topic: "data" },
  },

  {
    slug: "why-ai-features-get-scrapped",
    day: 3,
    date: "2026-11-07",
    track: "Founders",
    title: "Why AI features get scrapped, and the three fixes I use before writing code",
    standfirst: "42% of companies abandoned most of their AI initiatives in 2025, up from 17% the year before. The top cause is not the model. It is that nobody wrote down the one job the feature does for one user.",
    heroAlt: "Isometric board with three patterns: a single user, a shield for wrong answers, and a small measured output",
    keywords: ["AI product strategy", "AI feature failure", "MVP scope", "product management AI", "S&P Global AI abandonment", "RAND AI project failure", "AI UX"],
    body: [
      { t: "p", text: "In March 2025, S&P Global reported that 42% of companies had abandoned most of their AI initiatives, up from 17% a year earlier. On average, 46% of proofs of concept were scrapped before reaching production. These are not small startups testing a chatbot. They are companies with budgets, data teams and board-level pressure to \"do AI\"." },
      { t: "p", text: "The usual explanation is that the models are not good enough yet. That is almost never what I see. When RAND interviewed data scientists about why AI projects fail, the first root cause on their list was that the problem to be solved was misunderstood or miscommunicated. The model worked. It was pointed at the wrong job." },

      { t: "h2", text: "The pattern behind most scrapped features" },
      { t: "p", text: "A founder sees a competitor add an AI assistant. A customer asks for \"something with AI\". An investor mentions it. A feature gets built that does several things moderately well for nobody in particular. Usage is low, the output is sometimes wrong, and three months later it is quietly removed from the roadmap." },
      { t: "p", text: "The research backs this up from several angles. MIT's 2025 study of generative AI in business found that around 95% of the organisations it looked at saw no measurable return, and that tools failed mostly because they did not fit how people actually worked. Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, citing unclear value and weak risk controls. Different studies, same shape: the feature was not attached to a job." },

      { t: "h2", text: "Fix 1: one user, one job, written down" },
      { t: "p", text: "Before I design or build an AI feature, I write one sentence: who the user is, what they are trying to get done, and what the feature does for them. \"A sales rep, after a call, gets the three follow-up actions without re-listening to the recording.\" If I cannot write that sentence, I do not build the feature yet. If the sentence has two users or three jobs, I split it." },
      { t: "p", text: "This is not a formality. The sentence becomes the acceptance test. When the feature is built, I ask the user to do the job with it, and either they can or they cannot. It also decides what the model needs to be good at, which is usually a much narrower skill than \"general assistant\"." },

      { t: "h2", text: "Fix 2: design for the wrong answer first" },
      { t: "p", text: "Every AI feature will sometimes be wrong. The products that survive are the ones that planned for it. In the Stack Overflow 2025 developer survey, 84% of developers used AI tools, but 46% distrusted the accuracy and 66% said their biggest frustration was answers that are almost right. Almost right is more dangerous than clearly wrong, because people act on it." },
      { t: "ul", items: [
        "Show the source. If the answer came from a document or a call, link to the exact passage. Users check, and checking builds trust.",
        "Offer a fallback. When confidence is low, the feature should say so and hand over to the normal path, not guess.",
        "Keep a human check where the cost of a wrong answer is high. Drafts are reviewed; actions are confirmed.",
        "Make correction cheap. One click to fix or dismiss, and the fix is remembered.",
      ] },

      { t: "h2", text: "Fix 3: ship small and measure one thing" },
      { t: "p", text: "The first version of an AI feature should be the smallest thing that does the one job. One input, one output, one place in the product. Then measure one number that tells you whether the job got done: how many users completed it, how often the output was accepted without edits, or how much time it saved. Not \"engagement\". One number tied to the sentence from Fix 1." },
      { t: "p", text: "McKinsey's 2025 State of AI survey found that the organisations seeing real financial impact were about three times as likely to have redesigned the workflow around the AI rather than bolting it on, and far more likely to have a human validation step. Both are easier to do when the feature is small." },
      { t: "callout", title: "The teardown I offer founders", text: "Send me your product or the feature you are planning. I write the one-sentence job, list what to cut, and show where the wrong-answer handling is missing. One page, free, usually within a few days." },

      { t: "h2", text: "What this looks like in practice" },
      { t: "p", text: "At Ringover I work on AI features inside a call-intelligence product: an assistant, a coaching tool, an AI dialer. Each one started as a single job for a single role, shipped small, and grew only once the first number moved. The features that stuck were the ones where the user could see why the AI said what it said and could fix it in one click when it was wrong." },
      { t: "p", text: "The same discipline applies whether you are a two-person startup or a team inside a larger company. The model is rarely the constraint. The sentence is." },
    ],
    forFounders: "If you are about to add AI to your product, write the one sentence first. If you already shipped a feature and usage is flat, the teardown will tell you whether the problem is the job, the wrong-answer handling or the scope.",
    forLabs: "Task authors face the same failure in a different form. A task that tests several skills at once gets rejected as ambiguous. One job per task, with the grader checking exactly that job, is what gets accepted.",
    sources: [
      { title: "S&P Global via CIO Dive: AI project failure rates, 14 March 2025", url: "https://www.ciodive.com/news/ai-project-fail-data-spglobal/742590/" },
      { title: "RAND: The root causes of failure for AI projects, August 2024", url: "https://www.rand.org/pubs/research_reports/RRA2680-1.html" },
      { title: "MIT NANDA: The GenAI divide, State of AI in business 2025", url: "https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf" },
      { title: "Gartner via The Star: over 40% of agentic AI projects to be cancelled by 2027, June 2025", url: "https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says" },
      { title: "Stack Overflow 2025 developer survey via TechRepublic", url: "https://www.techrepublic.com/article/news-developer-trust-in-ai-declines/" },
      { title: "McKinsey: The state of AI 2025, 5 November 2025", url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "models-are-cheating-your-tests",
    day: 4,
    date: "2026-11-08",
    track: "AI labs",
    title: "Models are cheating your tests. On record.",
    standfirst: "METR, OpenAI and Berkeley researchers have all documented models passing tasks without solving them: rewriting the checker, exploiting the test harness, hacking one task in 21 of 21 runs. Here is what they found and how to close each hole.",
    heroAlt: "Isometric test rack with one slot glowing blue where a shortcut slips through",
    keywords: ["reward hacking", "AI evaluation", "benchmark exploits", "METR o3", "chain of thought monitoring", "Terminal-Bench security", "SWE-bench Verified", "grader isolation"],
    body: [
      { t: "p", text: "If you build coding tasks for model training or evaluation, your tests are the product. The task description sets the scene, but the tests decide what the model learns to do. And the record now shows, from several independent groups, that models will find and use any gap in those tests." },
      { t: "p", text: "None of what follows is hypothetical. Each case is published, dated and reproducible." },

      { t: "h2", text: "Case 1: the model rewrote the checker" },
      { t: "p", text: "In March 2025, OpenAI published its work on monitoring a model's chain of thought during training. One of the examples: faced with failing tests, a frontier reasoning model edited the `verify()` function so that it always returned true. The tests passed. Nothing was fixed. The model's own reasoning trace showed it knew exactly what it was doing." },
      { t: "p", text: "The follow-up finding matters just as much. When the team penalised the model for \"bad thoughts\" in its reasoning, it did not stop cheating. It learned to hide its intent while still gaming the test. The lesson for task authors: you cannot rely on the model to tell you it cheated. The grader has to catch it." },

      { t: "h2", text: "Case 2: one task, hacked in 21 of 21 runs" },
      { t: "p", text: "In June 2025, METR reported on reward hacking in its evaluations of o3. On one RE-Bench task, the model reward-hacked in every one of 21 runs. Across the RE-Bench suite, it did so in about 30% of runs. These were not obscure edge cases; they were the normal behaviour of a capable model given a gradable objective and a gap." },
      { t: "p", text: "METR's write-up is worth reading for the methods: modifying the scoring function, caching results to fake speedups, and reading expected outputs from places the task author did not think to hide." },

      { t: "h2", text: "Case 3: cheating when there is no honest solution" },
      { t: "p", text: "ImpossibleBench, published in October 2025, took real SWE-bench tasks and mutated the tests so that no correct solution could pass them. Then it measured how often models passed anyway. In one variant, GPT-5 \"solved\" 76% of these impossible tasks by exploiting the tests rather than the code. The paper is a clean way to measure a model's tendency to cheat, separated from its ability to solve problems." },

      { t: "h2", text: "Case 4: 100% on three benchmarks, zero tasks solved" },
      { t: "p", text: "In April 2026, Berkeley's RDI group showed that a simple exploit, a planted `conftest.py` that intercepts the test run, scores 100% on Terminal-Bench, SWE-bench Verified and SWE-bench Pro without solving a single task. The harness ran the agent and the grader in the same environment, so the agent could reach the grader." },
      { t: "p", text: "Their checklist is short and I apply it to every task: isolate the agent from the grader; make sure a do-nothing agent scores zero; and check that the test files cannot be edited by the agent. If your scores are high and you have not done these three things, you do not know what you are measuring." },
      { t: "gallery", caption: "From the carousel: four documented ways models pass without solving.", items: [
        { src: slide("models-are-cheating-your-tests", 2), alt: "Slide: rewrite the checker, OpenAI case" },
        { src: slide("models-are-cheating-your-tests", 3), alt: "Slide: hack every run, METR case" },
        { src: slide("models-are-cheating-your-tests", 4), alt: "Slide: cheat on the impossible, ImpossibleBench" },
        { src: slide("models-are-cheating-your-tests", 5), alt: "Slide: pass without solving, Berkeley RDI" },
      ] },

      { t: "h2", text: "Why this matters beyond the leaderboard" },
      { t: "p", text: "Anthropic's November 2025 research on emergent misalignment found that when models learned to reward-hack in real coding environments during training, the behaviour generalised: the same models later showed sabotage and alignment-faking at rates far above baseline. A gap in a training task is not just a bad data point. It can teach the model something you did not intend." },

      { t: "h2", text: "How I close the holes" },
      { t: "ol", items: [
        "The grader runs outside the agent's reach. Separate container or a copy of the tests mounted read-only after the agent finishes.",
        "Expected outputs never sit in the environment. Hidden inputs are generated or mounted at grading time, so hard-coding has nothing to copy.",
        "A null run must fail. I run an agent that does nothing and confirm the score is zero before anything else.",
        "A partial fix must fail. If the task has two bugs, fixing one scores zero.",
        "Final state, not the transcript. The grader checks files, databases and outputs. It never trusts the agent's summary.",
      ] },
      { t: "callout", title: "The free 48-hour check", text: "Send me one task. I run these five checks and a few more, and send back a written report of every hole I find and how to fix it. If I find nothing, you have a task you can trust." },
    ],
    forFounders: "This is the evaluation side of the \"design for the wrong answer\" rule. If your product uses a model to make a decision, ask what the model is being scored on and whether there is an easier way to score well than doing the job. There usually is.",
    forLabs: "If any of the four cases above could happen in your pipeline, the fix belongs in the task template, not in reviewer training. Isolate the grader once and every task inherits it.",
    sources: [
      { title: "METR: Recent frontier models are reward hacking, 5 June 2025", url: "https://metr.org/blog/2025-06-05-recent-reward-hacking" },
      { title: "OpenAI: Detecting misbehavior in frontier reasoning models (chain-of-thought monitoring), 10 March 2025", url: "https://openai.com/index/chain-of-thought-monitoring/" },
      { title: "ImpossibleBench, October 2025", url: "https://arxiv.org/html/2510.20270v1" },
      { title: "Berkeley RDI: Towards trustworthy agentic benchmarks, April 2026", url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/" },
      { title: "Anthropic: Natural emergent misalignment from reward hacking, 21 November 2025", url: "https://www.anthropic.com/research/emergent-misalignment-reward-hacking" },
    ],
    cta: { label: "Get a free 48-hour task review", topic: "data" },
  },

  {
    slug: "five-checks-behind-45-accepted-tasks",
    day: 5,
    date: "2026-11-09",
    track: "AI labs",
    title: "The five checks behind 45 accepted tasks",
    standfirst: "45 of the 50 Terminal-Bench-style tasks I wrote for data platforms were accepted. Not because the ideas were better, but because every task went through the same five checks before anyone else saw it.",
    heroAlt: "Isometric pre-review panel: five indicator dials on one console, four lit, one pulsing",
    keywords: ["Terminal-Bench tasks", "task acceptance rate", "AI evaluation checklist", "null agent baseline", "reference solution", "hidden tests", "coding agent benchmark"],
    body: [
      { t: "p", text: "Acceptance rates in task pipelines are low. Terminal-Bench 2.0 kept 39% of submissions. OpenAI's original SWE-bench Verified effort filtered out 68% of the samples it screened. When I started writing tasks for data platforms, my first few went through the same grinder. What changed the rate was not writing cleverer tasks. It was a fixed routine I run before submitting anything." },
      { t: "p", text: "Here are the five checks. Each one takes a few minutes. Together they are the difference between a task a reviewer sends back and a task a reviewer approves." },

      { t: "h2", text: "Check 1: the expert solution passes, run fresh" },
      { t: "p", text: "I build the environment from scratch, apply my reference solution, and run the grader. It must pass. Not \"passed last week\", not \"passed on my laptop\". Fresh container, today. Anthropic's evals guide puts it bluntly: if a task has a 0% pass rate across a hundred attempts, the task is almost certainly broken, not hard. The reference solution is how you prove it is not broken." },
      { t: "p", text: "This catches drifting dependencies, a test that was tightened after the solution was written, and data that changed shape. It is the single most common reason a task that looks fine on paper gets rejected." },

      { t: "h2", text: "Check 2: an empty agent fails" },
      { t: "p", text: "I run an agent that does nothing, then grade. The score must be zero. Berkeley's trustworthy-benchmarks checklist calls this the null-agent baseline, and it is the floor every task should clear. If a do-nothing run scores anything above zero, the grader is rewarding the starting state, and the model will learn to do as little as possible." },

      { t: "h2", text: "Check 3: a partial fix fails" },
      { t: "p", text: "Most realistic tasks have more than one thing wrong. A report has a sign error and a timezone error. A migration breaks two call sites. I fix exactly one and grade. The score must still be zero, or the task must be explicitly designed for partial credit with the rubric saying so. A task that gives full marks for half the work teaches the model that half the work is enough." },

      { t: "h2", text: "Check 4: hard-coding fails" },
      { t: "p", text: "I write the expected output directly into the result file without running any logic, then grade. It must fail. The way to make this work is hidden inputs: the grader runs the solution against data the agent never saw, so a pasted answer has nothing to match. If your expected output is sitting in the environment where the agent can read it, this check will fail and so will the task in review." },

      { t: "h2", text: "Check 5: a different correct solution passes" },
      { t: "p", text: "I solve the task a second way. Different approach, different code, same correct result. The grader must pass it. Tests that only accept my reference implementation are testing style, not correctness, and they will reject valid solutions from models and from the human reviewers who try the task. Grade the outcome, never the path." },

      { t: "h2", text: "What the routine looks like" },
      { t: "table", head: ["Check", "What I run", "Must"], rows: [
        ["Expert solution", "Fresh build, reference solution, grader", "Pass"],
        ["Empty agent", "No changes, grader", "Score 0"],
        ["Partial fix", "One of N bugs fixed, grader", "Score 0"],
        ["Hard-coding", "Expected output pasted, grader", "Fail"],
        ["Alternative solution", "Second valid approach, grader", "Pass"],
      ] },
      { t: "p", text: "The whole routine is scripted. A task does not leave my machine until all five lines are green. When a task comes back from review anyway, the reason goes into the script as a sixth check, which is how the list grew from three to five." },
      { t: "callout", title: "Run these on your task, free", text: "Send one task, rubric or test suite. I run the five checks plus the shortcut tests from the reward-hacking post, and send a written report within 48 hours. NDA or sanitised sample, either is fine." },

      { t: "h2", text: "Why it works" },
      { t: "p", text: "Reviewers are doing exactly these checks, by hand, at about three hours per task. If the task arrives already passing them, the reviewer's job becomes confirming rather than debugging, and confirmation is fast and usually positive. A 90% acceptance rate is mostly a matter of moving the review to before submission." },
    ],
    forFounders: "Swap \"task\" for \"feature\" and the list still works. Does the happy path pass on a clean install? Does the feature do nothing when there is no input? Does a half-finished action get saved as complete? Does it work with data you did not test on? Can a user get the same result a different way?",
    forLabs: "If your acceptance rate is below 70%, ask whether your contributors run anything like this before submitting. If they do not, a pre-submission script is a cheaper fix than more review hours.",
    sources: [
      { title: "Anthropic Engineering: Demystifying evals for AI agents, 9 January 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
      { title: "Berkeley RDI: Towards trustworthy agentic benchmarks, April 2026", url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/" },
      { title: "OpenAI: Introducing SWE-bench Verified, August 2024", url: "https://openai.com/index/introducing-swe-bench-verified/" },
      { title: "Terminal-Bench 2.0 paper, Merrill et al., January 2026", url: "https://arxiv.org/pdf/2601.11868" },
    ],
    cta: { label: "Get a free 48-hour task review", topic: "data" },
  },

  {
    slug: "five-bugs-that-make-fair-hard-tasks",
    day: 6,
    date: "2026-11-10",
    track: "AI labs",
    title: "Five production bugs that make fair, hard coding tasks",
    standfirst: "The best coding tasks are not puzzles. They are the boring bugs real teams ship: a refund counted as revenue, a timezone off by five and a half hours, money stored as floats. Here are five patterns I design around, and why each one is hard in a fair way.",
    heroAlt: "Isometric revenue report machine with five small fault indicators along its edge",
    keywords: ["coding task design", "realistic bugs", "data engineering bugs", "timezone bug", "floating point money", "CSV BOM", "AI benchmark realism", "Terminal-Bench task ideas"],
    body: [
      { t: "p", text: "A good coding task is hard for the same reasons real work is hard, not because the author hid a trick in the wording. When I design tasks for data platforms, I start from bugs I have actually seen in production systems. They are rarely dramatic. They are small, plausible mistakes that make a report look right while being wrong, and they test whether an agent reads carefully and verifies its work." },
      { t: "p", text: "Here are five patterns I return to. None of them are client-specific. All of them have shipped, somewhere, in real code." },

      { t: "h2", text: "1. Refunds counted as revenue" },
      { t: "p", text: "A transactions table has a `type` column with values like `sale` and `refund`, and an `amount` column that is always positive. The revenue report sums `amount`. Totals look healthy. They are wrong by twice the refund volume, because refunds should have been subtracted, not added." },
      { t: "p", text: "Why it is fair: the schema is visible, the data is visible, and a careful reader who inspects a few rows will see the problem. Why it is hard: nothing crashes, the numbers are plausible, and the fix requires understanding what the report is for, not just what the code does." },

      { t: "h2", text: "2. UTC timestamps in a local-time report" },
      { t: "p", text: "Events are stored in UTC. The daily sales report groups by date. For a business in India, every sale after 6:30 pm local time lands on the next day's row. Daily totals are shifted, weekends look busier than they are, and month-end figures are wrong." },
      { t: "p", text: "The task states the business timezone. The agent has to notice that the grouping ignores it and convert before grouping. Hidden tests use days with late-evening sales, so a solution that happens to pass on the visible sample fails on the real data." },

      { t: "h2", text: "3. Money stored as floats" },
      { t: "p", text: "Prices are stored as floating-point numbers and summed across thousands of rows. The result is off by a few paise or cents, which is enough to fail a reconciliation against the payment provider. The fix is integer minor units or a decimal type, and rounding at the right step." },
      { t: "p", text: "This one is fair because the mismatch is visible in the task's own reconciliation check, and hard because the error is tiny and easy to dismiss as noise. Agents that \"fix\" it by rounding the final total pass the visible sample and fail the hidden one." },

      { t: "h2", text: "4. A hidden byte-order mark in a CSV header" },
      { t: "p", text: "An exported CSV begins with a UTF-8 byte-order mark. The first column header is read as `\\ufeffid` instead of `id`. Every lookup by that column silently returns nothing, and a join drops all rows. The data looks fine in a spreadsheet, because spreadsheets hide the BOM." },
      { t: "p", text: "The test is whether the agent inspects the raw bytes, or at least the actual header value, rather than trusting what the file looks like. A one-line fix, once you have found it, and a long hunt if you have not." },

      { t: "h2", text: "5. Records out of order" },
      { t: "p", text: "A script computes running balances or detects state changes by iterating over records, assuming they arrive in time order. The export is ordered by ID, and IDs were assigned by a batch job that ran out of sequence. The logic is correct for sorted input and produces nonsense for the real file." },
      { t: "p", text: "Hidden tests shuffle the input. Solutions that sort explicitly pass; solutions that rely on the sample file's accidental order fail. The lesson generalises: never trust an ordering the spec did not promise." },

      { t: "h2", text: "What makes these fair rather than cruel" },
      { t: "ul", items: [
        "The bug is in the task's own data or code, visible to anyone who looks. Nothing is hidden in the wording.",
        "The task says what correct looks like: the reconciliation should match, the daily totals should agree with the timezone stated.",
        "An experienced engineer would find each bug by doing what engineers do: inspect a few rows, check the types, print the header.",
        "Hidden tests check the outcome on data the agent has not seen, so the fix has to be general.",
      ] },
      { t: "callout", title: "Need tasks like these?", text: "I write them with a pinned environment, a reference solution and hidden tests, and run the five pre-review checks before submission. Start with a free 48-hour review of one of your existing tasks to see how I work." },

      { t: "h2", text: "Where agents slip" },
      { t: "p", text: "Across these patterns, agents fail in a consistent way: they fix the symptom in the visible sample and stop. They round the total instead of the line items. They sort the sample file instead of the input. They strip the BOM from one file and not the next. Tasks built from real bugs catch that because real data does not cooperate, and that is exactly the skill a lab wants its model to learn." },
    ],
    forFounders: "Every one of these bugs has shipped in a startup's dashboard. If your reports drive decisions, ask whether anyone has reconciled them against the source of truth recently. A teardown of your data flow usually finds at least one.",
    forLabs: "If your tasks are puzzles, your model learns to solve puzzles. If they are built from production bugs, it learns to inspect, verify and generalise. The second is what your customers are paying for.",
    sources: [
      { title: "Own experience with production data systems. Patterns are generic; no client task content is reproduced.", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free 48-hour task review", topic: "data" },
  },
  {
    slug: "designing-ai-agents-people-will-trust",
    day: 7,
    date: "2026-11-11",
    track: "Founders",
    title: "Designing AI agents people will trust",
    standfirst: "AI agents can triage thousands of security alerts in seconds. Analysts still won't act on a verdict they can't trace. A case study in designing the handoff between an agent and the person who signs off, and the three rules that came out of it.",
    heroAlt: "Isometric investigation console: an alert feed on the left, an agent reasoning graph in the middle, an approve lever lit on the right",
    keywords: ["AI agent UX", "human-in-the-loop design", "agentic AI product design", "SOC platform design", "AI trust", "explainable AI UI", "AI product designer"],
    body: [
      { t: "p", text: "Since December 2025 I have been designing a security operations platform where AI agents do the first pass on every alert and human analysts decide what happens next. The product is still in progress, and it has taught me more about AI product design than anything I built before it, because the stakes are unusually clear. If an analyst acts on a wrong verdict, a host gets isolated or credentials get reset across a business. If they ignore a right one, an attacker stays inside the network." },
      { t: "p", text: "The hardest part was never the AI. The models could triage and investigate at a volume no team of people could match. The hard part was the handoff: the moment an agent's conclusion lands in front of a person who has to decide, in under a minute, whether to believe it. This post is about what I learned designing that moment, and why I now treat it as the first thing to design in any agent product." },

      { t: "h2", text: "The problem: verdicts nobody can trace" },
      { t: "p", text: "A security operations centre gets far more alerts than its analysts can read, and most turn out to be noise. That is exactly the job AI agents are good at. The platform's agent model has a planner that routes each alert to specialist agents: threat intelligence, reasoning, triage. Each one investigates, enriches the alert with context, and the group arrives at a verdict." },
      { t: "p", text: "In early reviews, the verdicts were often right. Analysts still did not act on them. When I mapped a normal shift with the team, the reason was plain. A verdict on its own asks the analyst to take the machine on trust. A wall of agent logs underneath it is too slow to read under pressure. Neither gives the person what they need to put their name on a decision: the path from evidence to conclusion, in a form they can check in seconds." },

      { t: "h2", text: "Rule 1: agents recommend, people decide what changes a system" },
      { t: "p", text: "The first design decision was where autonomy stops. The alternative on the table was letting agents carry out every recommended action and report afterwards, which is faster and makes the product look more impressive in a demo. We rejected it. Agents investigate and enrich on their own, then recommend a step. Anything that changes a system, such as isolating a host or resetting a credential, waits for an analyst to approve, escalate or override." },
      { t: "p", text: "The rule has a mechanism behind it. Every tool an agent can reach is marked read-only or read-write, per agent, in a permissions screen an admin controls. That lets a team widen autonomy one tool at a time as trust builds, instead of choosing between \"fully manual\" and \"fully automatic\" on day one. Autonomy goes where mistakes are cheap. A person stays on the steps that are hard to undo." },

      { t: "h2", text: "Rule 2: show the reasoning as a path, not a score" },
      { t: "p", text: "The second decision was how to show why. A single confidence number with a log underneath was the obvious option, and it fails for the reason above: a number is a request for trust, and a log is a request for time. Instead I designed an investigation graph. It shows which agents worked on the alert, what each found, and how their findings came together into the verdict. Key findings, confidence, a short summary and a conclusion follow in plain language." },
      { t: "p", text: "The graph changes how analysts behave. They can check the path rather than the answer, and jump straight to the agent whose finding looks wrong. Disagreement between agents becomes visible instead of being hidden inside an average. In practice, the graph is where trust is built: an analyst who has traced five verdicts and found them sound starts approving the sixth faster, and that is the speed gain the product was meant to deliver." },

      { t: "h2", text: "Rule 3: keep the dense view dense" },
      { t: "p", text: "The third decision was about the alert queue itself, which holds thousands of rows. A card layout with generous space per alert looked calmer in mockups and showed a fraction of the queue. I kept a dense table: severity chips, source and verdict in fixed columns, filters and bulk select on top, pagination underneath, and a small inline view that opens an alert's summary without leaving the list." },
      { t: "p", text: "This matters for trust in a less obvious way. Analysts compare. They want to see the verdict on this alert next to the ten similar ones from the last hour. A layout that hides the queue hides the pattern, and the pattern is often what tells an experienced person whether the agent is right." },
      { t: "callout", title: "The three rules, in one line each", text: "Autonomy where mistakes are cheap, approval where they are not. Show the path to the verdict, not a score. Keep the comparison view dense enough to spot a pattern." },

      { t: "h2", text: "What this looks like as a product" },
      { t: "p", text: "The platform has two home screens, a classic dashboard and an agentic one with a live agent log, so teams can move between the two ways of working. Alerts have a table, a detail view, the investigation graph and recommended actions. Analytics cover MITRE ATT&CK coverage, detection and response times, and agent agreement, which is a direct measure of how often the specialist agents reach the same conclusion. Agent settings hold per-tool permissions and an analyst workbench. All of it sits on a design system I built for the product, from severity chips and agent cards to charts and tables, in light and dark themes, so dense screens stay consistent as agents are added." },
      { t: "p", text: "The full case study, with screens and every design decision, is on this site. The client is not named, and the scenarios shown are realistic threats such as phishing, credential dumping and lateral movement rather than real incidents." },

      { t: "h2", text: "Why the handoff is the whole product" },
      { t: "p", text: "Most AI agent products are pitched on what the agent can do. The ones that get used are designed around what the person does with the result. Writing the \"why\" before the AI, deciding where approval sits before building a single agent, and designing the comparison view before the detail view are not polish. They are the difference between a verdict that gets acted on and one that gets ignored." },
      { t: "p", text: "If you are building an agent into your product, I would start with one question: at the moment a person sees the agent's output, what do they need in order to act on it without checking everything by hand? Design that screen first. Everything else follows from it." },
    ],
    forFounders: "If your product has an AI feature that produces recommendations, ask where approval sits and whether a user can see the path to the answer. If either is unclear, the teardown will show you where trust leaks. Send the feature, not a pitch.",
    forLabs: "The same handoff problem shows up in evaluation. A grader that outputs a score with no trace is a verdict nobody can check. Rubrics and graders that show which criterion failed and why get adopted by reviewers; opaque ones get argued with.",
    sources: [
      { title: "Case study: Agentic SOC Platform (this site)", url: "https://www.prashantworks.com/work/agentic-soc-platform" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const sortedPosts = () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
