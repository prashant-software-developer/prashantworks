import { slide, type BlogPost } from "../blog-shared";

export const plan2c: BlogPost[] = [
  {
    slug: "do-your-graders-agree-measuring-rater-reliability",
    day: 17,
    plan: 2,
    date: "2026-12-21",
    track: "AI labs",
    title: "Do your graders agree? Measure it",
    standfirst: "A 2025 study measured how much human graders agree with each other on answer accuracy: Cohen's kappa of about 0.80 across 1,994 items. That is the bar for any grader, human or model. Below it, you are not measuring the task. You are measuring the grader.",
    heroAlt: "Isometric agreement scale: a balance beam on a pillar with two pans, three small figures on each, an accent pivot",
    keywords: ["inter-rater reliability", "Cohen's kappa", "grader agreement", "LLM as judge", "evaluation reliability", "rater calibration", "annotation agreement", "Judge's Verdict"],
    takeaways: [
      "Human graders agree with each other at about kappa 0.80 on answer accuracy (1,994 items, three graders each, in the Judge's Verdict study). That is the reference bar.",
      "Measure agreement on a calibration batch before anyone grades for real. Disagreement is a rubric gap, not a bad grader.",
      "Model judges are held to the same kappa. Some pass; many do not. Measure before you trust either.",
    ],
    body: [
      { t: "p", text: "Two reviewers score the same task differently. Which one is right? The honest answer is usually neither: the rubric was not clear enough for two careful people to reach the same verdict, and until that is fixed, every score the programme produces carries the grader's identity inside it." },
      { t: "p", text: "The fix is to measure agreement, and the good news is that there is now a public number to measure against." },

      { t: "h2", text: "The reference number" },
      { t: "p", text: "A study published in October 2025, Judge's Verdict, set out to evaluate LLM judges and in doing so measured how well humans agree with each other. Across 1,994 items, each scored by three human graders for answer accuracy, the human-to-human agreement came out at a Cohen's kappa of about 0.80. Kappa corrects for chance agreement, so 0.80 is strong: well above what random scoring produces and about what careful people with a decent rubric achieve." },
      { t: "p", text: "That number is the bar. A grader, human or model, whose agreement with the human consensus is well below 0.80 is adding noise. A grading team whose members agree with each other well below 0.80 has a rubric problem." },

      { t: "h2", text: "How to measure it on your programme" },
      { t: "ol", items: [
        "**Pick a calibration batch.** Twenty to thirty items that span the range: easy, hard, ambiguous, borderline.",
        "**Everyone grades them independently.** No discussion, no shared notes, no looking at each other's scores.",
        "**Compute agreement.** Cohen's kappa for two graders, Fleiss' kappa or Krippendorff's alpha for more. A spreadsheet is enough.",
        "**Read every disagreement.** Each one is either a rubric gap or a misreading. Fix the criterion or re-brief the grader.",
        "**Repeat on the next batch.** Agreement drifts as tasks change and as graders develop habits.",
      ] },

      { t: "h2", text: "Disagreement is information" },
      { t: "p", text: "The reflex when two graders diverge is to decide who was right. The useful move is to ask why the rubric let them diverge. \"Is the explanation clear\" will split graders every time. \"Does the explanation name the root cause and the file where it was fixed\" will not. Every disagreement in the calibration batch is a sentence in the rubric that needs rewriting, and a rubric that has been through three calibration rounds is one that scales." },

      { t: "h2", text: "Model judges get the same test" },
      { t: "p", text: "The point of the Judge's Verdict study was to evaluate LLM judges, and its method is the one to copy: compute the model's agreement with the human consensus on the same items, and compare it with the human-to-human figure. A model judge at or near human kappa can grade at scale. One well below it cannot, however confident its outputs look. The study found a range: some judges reached the human tier; many did not. Which tier yours is in is an empirical question with a cheap answer." },

      { t: "table", head: ["Agreement (kappa)", "What it means", "What to do"], rows: [
        ["Above 0.80", "Graders are measuring the task", "Scale; re-measure each batch"],
        ["0.60 – 0.80", "Rubric has gaps on borderline items", "Read disagreements; fix criteria; re-run"],
        ["Below 0.60", "Scores reflect the grader more than the work", "Stop grading; rebuild the rubric; calibrate again"],
      ] },

      { t: "callout", title: "The question to ask any grading pipeline", text: "What is your graders' kappa on the last calibration batch? If nobody knows, the scores are not yet measurements." },

      { t: "h2", text: "Why this is cheap and skipped" },
      { t: "p", text: "A calibration batch costs each grader an hour and the programme a spreadsheet. It is skipped because programmes are in a hurry to produce volume, and because disagreement feels like a people problem rather than a measurement one. Measured once, it changes how everyone talks about scores: not \"the reviewer was harsh\" but \"criterion four splits us, let's fix it\". That shift is worth more than the hour." },
      { t: "gallery", items: [
        { src: slide("do-your-graders-agree-measuring-rater-reliability", 2), alt: "Slide: the human bar, kappa 0.80" },
        { src: slide("do-your-graders-agree-measuring-rater-reliability", 3), alt: "Slide: calibration batch first" },
        { src: slide("do-your-graders-agree-measuring-rater-reliability", 4), alt: "Slide: disagreement is a rubric gap" },
        { src: slide("do-your-graders-agree-measuring-rater-reliability", 6), alt: "Slide: model judges too" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "What is a good inter-rater agreement for AI evaluation?", a: "The Judge's Verdict study measured human-to-human agreement on answer accuracy at a Cohen's kappa of about 0.80 across 1,994 items. That is a reasonable bar for both human grading teams and LLM judges." },
      { q: "How do you measure grader agreement?", a: "Have every grader score the same calibration batch of 20–30 items independently, compute Cohen's kappa (two graders) or Fleiss' kappa or Krippendorff's alpha (more), then read every disagreement and fix the rubric criterion that caused it." },
      { q: "Can an LLM judge replace human graders?", a: "Only if its agreement with the human consensus is at or near the human-to-human level, around kappa 0.80. The Judge's Verdict study found some model judges reached that tier and many did not, so it has to be measured per judge and per task type." },
    ],
    forFounders: "User research has the same problem: two interviewers coding the same transcript differently. Agree the codes on three transcripts before coding thirty.",
    forLabs: "Send your rubric and a few graded items. The free review will flag the criteria most likely to split graders and suggest the rewrite.",
    sources: [
      { title: "Judge's Verdict (human inter-rater agreement and LLM judge evaluation), Oct 2025, arXiv", url: "https://arxiv.org/html/2510.09738v1" },
    ],
    cta: { label: "Get a free written review of your rubric", topic: "data" },
  },

  {
    slug: "quality-drops-in-week-three-what-we-do-same-day",
    day: 18,
    plan: 2,
    date: "2026-12-22",
    track: "AI labs",
    title: "Quality drops in week three. Here's what happens the same day",
    standfirst: "Every programme hits it. Acceptance was fine for two weeks and then a batch comes back with twice the rejections. The difference between vendors is whether the client hears about it from them, the same day, with the cause and the fix, or finds it in the numbers a week later.",
    heroAlt: "Isometric quality alarm: a bar chart with two short bars pulsing, a large accent beacon beside it",
    keywords: ["data quality drop", "AI training data quality management", "programme quality control", "rejection analysis", "vendor escalation", "quality incident response", "annotation quality", "managed data delivery"],
    takeaways: [
      "The same-day routine: pull every rejected item from the batch, group by cause (person, guideline, task type), apply the matching fix, tell the client before they see it in the numbers.",
      "Person: re-calibrate on gold tasks or remove. Guideline: fix and re-brief everyone that day. Task type: tighten the spec or the tests.",
      "Daily updates until acceptance recovers, then back to weekly. Every rejection becomes a line in the guideline and a check in the pre-submission script.",
    ],
    body: [
      { t: "p", text: "\"What happens when quality drops mid-programme?\" is the question a careful buyer asks, and the honest first half of the answer is: it will. Around week three, when the first contributors have settled into habits, the task mix has shifted, and the guideline has not caught up, a batch comes back with more rejections than the two before it. Every programme I have run has had a version of this week. What distinguishes programmes is the second half of the answer." },

      { t: "h2", text: "Hour one: pull every rejection" },
      { t: "p", text: "Not a sample, every rejected item from the batch, with the reviewer's note. Laid out in one table: item, author, task type, rejection reason. The pattern is usually visible within an hour, and it is almost always one of three." },

      { t: "h2", text: "Cause 1: a person" },
      { t: "p", text: "One author accounts for most of the rejections. They passed the trial, their first batch was fine, and something has drifted: speed over care, a misreading that became a habit, a new task type they are weaker on. The fix is specific to the person: re-calibrate them on gold tasks with known answers, coach one to one on the exact rejections, and if the next small batch does not recover, take them off the programme. The rest of the team is not re-briefed for one person's drift." },

      { t: "h2", text: "Cause 2: the guideline" },
      { t: "p", text: "Rejections are spread across authors and share a reason: the reviewer is applying a rule the guideline never stated, or stated ambiguously. This is the most common cause and the most fixable. The guideline is corrected that afternoon, every author is re-briefed with the exact rejections as examples, and work in progress is re-checked against the new line before submission. The client is asked to confirm the rule if the guideline's reading was defensible." },

      { t: "h2", text: "Cause 3: a task type" },
      { t: "p", text: "A new kind of task entered the mix and the spec or the tests for it are weaker than for the rest. The rejections cluster by type, not by author. The fix is upstream: tighten that type's spec, strengthen its hidden tests, add a worked example, and run the next batch of that type small until it clears." },

      { t: "table", head: ["Pattern in the rejections", "Cause", "Same-day fix"], rows: [
        ["One author, many reasons", "Person", "Gold-task re-calibration, coaching, or removal"],
        ["Many authors, one reason", "Guideline", "Fix, re-brief with examples, re-check WIP"],
        ["One task type, many authors", "Task type", "Tighten spec and tests, small batch until clear"],
      ] },

      { t: "h2", text: "Same day: tell the client" },
      { t: "p", text: "Before the client sees it in their own numbers, they get a message: what dropped, by how much, the cause, what changed, and when the next batch will show whether it worked. Then daily updates until the acceptance rate is back where it was, and then the normal Friday rhythm. A quality drop reported by the vendor with a fix is a normal week. The same drop discovered by the client is a vendor review." },

      { t: "callout", title: "The loop that stops repeats", text: "Every rejection from the bad week becomes a line in the guideline and a check in the pre-submission script. Week six does not get to have week three's problem." },

      { t: "h2", text: "What the client sees in the report" },
      { t: "p", text: "The weekly report's rejection section for that week shows the dip, the cause grouping, the fix applied and the recovery curve on the following batches. It is the most useful report a programme produces, because it shows the system working rather than the numbers being good. Clients who have seen one of these tend to stay, because the question they were really asking was not \"will quality drop\" but \"what will you do when it does\"." },
    ],
    faq: [
      { q: "Why does data quality drop a few weeks into a programme?", a: "Usually one of three causes: an individual author has drifted into bad habits, the guideline does not state a rule reviewers are applying, or a new task type has entered the mix with a weaker spec or tests." },
      { q: "What should a vendor do when quality drops?", a: "The same day: pull every rejected item, group by author, reason and task type, apply the fix that matches the cause, and tell the client before they see it in their numbers, then update daily until the acceptance rate recovers." },
      { q: "How do you stop the same quality problem recurring?", a: "Every rejection becomes a line in the guideline and a check in the pre-submission script, so the specific mistake is caught before submission on all future batches." },
    ],
    forFounders: "A product sprint has the same moment: the week something slips. The weekly update exists so you hear it from me with a plan, not from the deadline.",
    forLabs: "Want to see the report format before committing? The free task review comes with a sample of the weekly report attached.",
    sources: [
      { title: "Own delivery practice, as run on every programme", url: "https://www.prashantworks.com/ai-training" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },

  {
    slug: "turning-a-paper-into-a-rubric-tree",
    day: 19,
    plan: 2,
    date: "2026-12-23",
    track: "AI labs",
    title: "Turning a research paper into a rubric tree",
    standfirst: "PaperBench graded the reproduction of 20 ICML papers with 8,316 weighted leaf criteria, each one of three types, signed off by the papers' authors. I have written and reviewed rubrics like these; 14 of 15 of my PaperBench reviews were accepted. The skill is deciding what counts and how much.",
    heroAlt: "Isometric rubric tree: a root block wired to three branches, each wired to three leaves, one leaf in accent blue",
    keywords: ["PaperBench", "rubric tree", "research reproduction evaluation", "hierarchical rubric", "weighted rubric", "paper reproduction benchmark", "ML research evaluation", "rubric design"],
    takeaways: [
      "PaperBench: 20 ICML 2024 papers, 8,316 leaf criteria in weighted trees, with leaves of three types (code developed, execution ran, result matched) and author sign-off on every rubric.",
      "A rubric tree turns \"did they reproduce the paper\" into thousands of pass/fail checks whose weighted average is the score, traceable to specific leaves.",
      "The best agents scored 21–26% at release; the rubric, not the agents, is what made that number meaningful.",
    ],
    body: [
      { t: "p", text: "\"Did the agent reproduce this paper?\" is not a question a grader can answer consistently. A paper has dozens of claims, several experiments, a method with many steps, and a results table with numbers that may or may not come out the same. PaperBench, published in April 2025, is the most thorough public answer to how you turn that question into something gradable, and it is the model I use when a client needs research-grade rubrics." },

      { t: "h2", text: "What PaperBench built" },
      { t: "p", text: "Twenty papers from ICML 2024, chosen to span machine learning subfields. For each one, a rubric tree: the root is \"the paper is reproduced\", the branches are its major contributions, and the leaves, 8,316 of them across the twenty papers, are individual checkable requirements. Every node has a weight, parents average their children, and the root score is the reproduction score. Each tree took weeks to build and was signed off by the paper's original authors." },

      { t: "h2", text: "Three types of leaf" },
      { t: "table", head: ["Leaf type", "What it checks", "Example"], rows: [
        ["Code development", "The implementation exists and is correct", "The attention variant from Section 3.2 is implemented with the stated masking"],
        ["Execution", "The code runs and produces output", "The training script runs to completion on the small config"],
        ["Result match", "The number comes out as the paper says", "Accuracy on the held-out set is within 1 point of Table 2"],
      ] },
      { t: "p", text: "The three types matter because they separate three different failures. An agent can write correct code that does not run, or run code that produces the wrong number, or get the number by a route that is not the paper's. A single \"reproduced: yes/no\" hides all of that. The tree shows exactly where the attempt stopped." },

      { t: "h2", text: "How the weights work" },
      { t: "p", text: "Each node's weight reflects how much of the contribution it carries, as judged by the rubric author and confirmed by the paper's authors. A core experiment weighs more than an ablation; the main result weighs more than a supplementary figure. The score at the root is the weighted average down the tree, which means a reviewer can trace any score to the leaves that produced it and argue about a specific weight rather than about the whole grade." },

      { t: "h2", text: "Grading at scale" },
      { t: "p", text: "Grading 8,316 leaves by hand per submission is not practical, so PaperBench also built SimpleJudge, an LLM-based grader, and measured it against human grading on a subset. The best configuration reached an F1 of 0.83 against human judgements. That is the same move as the previous post: hold the model judge to the human bar, measure, and use it only where it clears." },

      { t: "h2", text: "What the agents scored" },
      { t: "p", text: "At release the best agent reached a reproduction score in the low-to-mid twenties of percent; the paper reports a range of 21 to 26 depending on the configuration. The human baseline, ML PhDs given the same time, was higher. The number is less important than the fact that it is a number anyone can decompose: which leaves failed, of which type, in which part of the paper." },

      { t: "callout", title: "My part in this", text: "I have written and reviewed rubric trees of this kind. 14 of my 15 PaperBench reviews were accepted. The hard part is never the format. It is deciding what counts as a leaf, what it weighs, and what evidence satisfies it." },

      { t: "h2", text: "Building one for your own evaluation" },
      { t: "ol", items: [
        "Start from the claims. Every claim in the abstract and results is a branch.",
        "Under each branch, write leaves of the three types until nothing is left to check.",
        "Make each leaf binary and state the evidence that satisfies it.",
        "Weight by importance to the contribution, argue it once in writing, then freeze it.",
        "Get the author, or a domain expert who was not the rubric writer, to sign off.",
        "Grade a few submissions by hand before trusting any model judge on the tree.",
      ] },
    ],
    faq: [
      { q: "What is PaperBench?", a: "An OpenAI benchmark from April 2025 that evaluates whether AI agents can reproduce 20 ICML 2024 papers from scratch, graded with hierarchical rubrics totalling 8,316 weighted leaf criteria, each signed off by the papers' authors." },
      { q: "What is a rubric tree?", a: "A hierarchical rubric where the root is the overall question, branches are major components, and leaves are individual binary checks with weights. Parents average their children, so the final score is traceable to specific leaves." },
      { q: "How well do AI agents reproduce research papers?", a: "At PaperBench's release the best agent scored roughly 21–26% on the weighted reproduction rubric, below the human PhD baseline given the same time." },
    ],
    forFounders: "Acceptance criteria for a complex feature benefit from the same shape: a short tree of checkable items with weights, rather than one \"does it work\" question.",
    forLabs: "Need rubrics for research reproduction, agentic tasks or expert evaluations? Send one existing rubric and the free review will turn its vaguest criterion into leaves.",
    sources: [
      { title: "PaperBench paper, 7 Apr 2025, arXiv", url: "https://arxiv.org/html/2504.01848v3" },
    ],
    cta: { label: "Get a free written review of your rubric", topic: "data" },
  },

  {
    slug: "accessibility-fixes-that-also-lift-conversion",
    day: 20,
    plan: 2,
    date: "2026-12-24",
    track: "Founders",
    title: "94.8% of home pages fail accessibility. The fixes also lift conversion",
    standfirst: "WebAIM's 2025 scan of a million home pages found 94.8% with detectable accessibility failures, averaging 51 errors per page. The three most common, low-contrast text, missing alt text and unlabelled form fields, are also three of the most common reasons a visitor does not convert.",
    heroAlt: "Isometric contrast check: two sheets side by side, one with faint lines and one with dark lines and an accent button",
    keywords: ["web accessibility", "WebAIM Million 2025", "accessibility and conversion", "WCAG contrast", "alt text", "form labels", "accessible forms", "inclusive design conversion"],
    takeaways: [
      "WebAIM Million 2025: 94.8% of home pages had WCAG 2 failures, averaging 51 errors per page.",
      "Top three failures: low-contrast text on 79.1% of pages, missing alternative text on 55.5%, missing form labels on 48.2%.",
      "Each of the three also hurts conversion for every visitor. Fix contrast, label every field, describe every meaningful image.",
    ],
    body: [
      { t: "p", text: "Every year WebAIM runs an automated accessibility scan across the home pages of the top million websites. The 2025 results: 94.8% of pages had detectable WCAG 2 failures, with an average of 51 errors per page. The number has barely moved in years, which says less about difficulty than about priority." },
      { t: "p", text: "The case for fixing it is usually made on ethics and law, and both are sound. This post makes a third case, because the three most common failures in WebAIM's data are also three of the most common reasons any visitor, with or without a disability, fails to do what the page wanted them to do." },

      { t: "h2", text: "1. Low-contrast text (79.1% of pages)" },
      { t: "p", text: "Light grey text on white. Placeholder text used as labels. A muted palette that looked refined in the design file. WebAIM found low-contrast text on nearly four in five home pages, making it the most common failure by a wide margin. For a user with low vision it is unreadable. For everyone else it is slower to read, on a phone in daylight it is invisible, and a button whose label cannot be read does not get pressed." },
      { t: "p", text: "**Fix:** body text at a contrast ratio of at least 4.5:1 against its background, large text at 3:1. Check it with a contrast tool, in the design file and again in the browser. Grey text is a style choice; unreadable grey text is a conversion leak." },

      { t: "h2", text: "2. Missing alternative text (55.5% of pages)" },
      { t: "p", text: "Images with no alt attribute, or an alt that says \"image\". For a screen-reader user the image does not exist. For a search engine the image carries no meaning. For a visitor on a slow connection waiting for a hero image to load, there is no text to tell them what they are waiting for. Product screenshots, feature illustrations and the chart on the pricing page all lose their value when they fail to load or cannot be read." },
      { t: "p", text: "**Fix:** every meaningful image gets an alt that says what it shows and why it is there. Decorative images get an empty alt so they are skipped. The writing discipline this imposes, saying in a sentence what the image is for, tends to improve the images." },

      { t: "h2", text: "3. Missing form labels (48.2% of pages)" },
      { t: "p", text: "A field with placeholder text and no label. The placeholder disappears when the user starts typing, so they no longer know what the field was for. A screen reader announces \"edit text\" with no hint. Autofill cannot match the field. Nearly half of home pages have at least one such field, and sign-up and contact forms are where they live." },
      { t: "p", text: "**Fix:** a visible label for every field, associated with it in the markup, and placeholders used only for examples of format. Properly labelled forms get completed more often by everyone, because the user never loses track of what they are filling in, and because the browser can help." },

      { t: "table", head: ["Failure", "Pages affected", "Who it blocks", "Conversion effect"], rows: [
        ["Low-contrast text", "79.1%", "Low vision, everyone outdoors", "Unread copy, unpressed buttons"],
        ["Missing alt text", "55.5%", "Screen-reader users, slow connections, search", "Images that carry no meaning"],
        ["Missing form labels", "48.2%", "Screen-reader users, autofill, anyone who looks away", "Abandoned forms"],
      ] },

      { t: "callout", title: "The argument in one line", text: "Accessibility failures are usability failures that some people cannot work around. Fixing them helps the people who cannot, and converts the people who could but would not have bothered." },

      { t: "h2", text: "Where to start" },
      { t: "p", text: "Run an automated checker on your home page and your sign-up form. It will find the three failures above in minutes. Fix contrast first, because it is a design-token change that fixes the whole site at once. Then labels on the forms that matter. Then alt text on the images that carry meaning. An afternoon's work, on most sites, and the conversion effect shows up in the forms." },
    ],
    faq: [
      { q: "What percentage of websites fail accessibility?", a: "WebAIM's 2025 scan of the top one million home pages found 94.8% with detectable WCAG 2 failures, averaging 51 errors per page." },
      { q: "What are the most common web accessibility errors?", a: "In WebAIM Million 2025: low-contrast text (79.1% of pages), missing alternative text on images (55.5%), and missing form input labels (48.2%)." },
      { q: "Does accessibility improve conversion?", a: "The most common accessibility failures, unreadable text, meaningless images and unlabelled form fields, are also usability failures for every visitor. Fixing them makes copy readable, images meaningful and forms easier to complete for everyone." },
    ],
    forFounders: "Send your home page and sign-up form. The free teardown will include the contrast, label and alt-text fixes alongside the product ones.",
    forLabs: "Task instructions have an accessibility equivalent: a spec that depends on colour in a screenshot, or on an image with no description, is a spec some authors and all models will misread.",
    sources: [
      { title: "WebAIM, The WebAIM Million 2025", url: "https://webaim.org/projects/million/2025" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "fifty-days-of-posting-what-worked",
    day: 21,
    plan: 2,
    date: "2026-12-25",
    track: "Both",
    title: "50 days of daily posting. What worked",
    standfirst: "One post a day since 5 November, each with a full write-up here. The honest results: what got replies, what got clicks, what fell flat, and what I would change for the next fifty.",
    heroAlt: "Isometric posting ledger: a ten-by-five grid of raised tiles, the last one in accent blue",
    keywords: ["daily posting results", "content marketing for freelancers", "build in public", "posting every day", "content strategy review", "LinkedIn X Threads posting", "blog and social strategy", "founder content"],
    takeaways: [
      "What worked: a specific number with a source, one free concrete first step, and an illustration people recognised before reading the name.",
      "What did not: the same hook on every platform, and a carousel on the same day as a long thread.",
      "The blog changed the economics: a post is a hook, the write-up is the asset, and the asset keeps working after the post scrolls away.",
    ],
    body: [
      { t: "p", text: "Fifty days ago I committed to one post a day, on two subjects, for two readers, with a full write-up behind each one on this site. Today is day fifty-one. This is the honest accounting, written for anyone considering the same thing, with the caveat that fifty days is enough to see patterns and not enough to prove them." },

      { t: "h2", text: "What worked" },
      { t: "h2", text: "A sourced number" },
      { t: "p", text: "Posts built around a specific figure with a source, 68% of SWE-bench samples filtered, 37.5% average activation, 94.8% of home pages failing accessibility, got more replies and more clicks to the write-up than anything built on an opinion alone. The number does two things: it gives the reader something to disagree with, which produces replies, and it gives them something to check, which produces clicks. An opinion gives them neither." },

      { t: "h2", text: "One free, concrete first step" },
      { t: "p", text: "\"Send one task\" and \"send your product\" outperformed \"book a call\" by a wide margin, in replies and in actual submissions. The difference is that the first two ask for a thing the reader already has, and the third asks for their calendar. The free review and the free teardown are the reason this is a client plan and not a content plan." },

      { t: "h2", text: "The illustrations" },
      { t: "p", text: "The isometric machines did more than I expected. By the third week people were recognising posts from the picture before reading the name, and a few replies mentioned the drawings specifically. A consistent visual system is a signature, and a signature compounds in a way that individual posts do not." },

      { t: "h2", text: "What did not work" },
      { t: "h2", text: "The same hook everywhere" },
      { t: "p", text: "Early on, the X post, the Threads post and the Instagram caption shared a first line. Threads wants a question; X wants the number first; Instagram wants the picture to carry it and the caption to add one thing. Once the hooks were written per platform, each one did better, and the write-up link did better from all three." },

      { t: "h2", text: "Two deep formats in one day" },
      { t: "p", text: "A long X thread and a seven-slide carousel on the same day split attention and doubled production time for no gain. One deep format per day, chosen by weekday, is the rule for the second thirty days, and it was the right call from the first week of December." },

      { t: "table", head: ["Did more", "Did less"], rows: [
        ["A figure with a source", "An opinion without one"],
        ["\"Send me one thing\"", "\"Book a call\""],
        ["A recognisable illustration", "A stock-style image"],
        ["A hook written per platform", "One hook pasted three times"],
        ["One deep format per day", "Thread and carousel on the same day"],
      ] },

      { t: "callout", title: "The thing I underestimated", text: "The blog. A post is gone in a day. The write-up is found by search and by people who want the sources, weeks later. The post is the hook; the write-up is the asset." },

      { t: "h2", text: "What I would change for the next fifty" },
      { t: "ul", items: [
        "Write the blog post first and cut the social posts from it, rather than the other way round. The write-up is where the thinking happens.",
        "Fewer offers, more playbooks. The offer posts are necessary and the playbook posts are what people share.",
        "Reply more. The replies were where the actual conversations with labs and founders started, and I was slower there than on posting.",
      ] },
      { t: "p", text: "Thank you to everyone who read, replied, and sent something. Ten days of this plan remain, then a short break, then the next fifty." },
    ],
    faq: [
      { q: "Does posting every day work for getting clients?", a: "In my fifty days, the posts that produced client conversations were the ones with a sourced number and a concrete free first step (send one task, send your product). Volume alone did less than those two elements." },
      { q: "Should you post the same content on X, Threads and Instagram?", a: "The same topic, not the same hook. Threads responds to a question, X to a number first, Instagram to the image with a short caption. Per-platform hooks did better on each and sent more readers to the write-up." },
      { q: "Is a blog worth it alongside social posting?", a: "Yes. Social posts are gone in a day; the write-up is found by search and by readers who want the sources for weeks afterwards. The post is the hook and the write-up is the asset." },
    ],
    forFounders: "If you are building in public, the same two things work: a real number from your product and one concrete thing a reader can send you.",
    forLabs: "The posts labs responded to most were the ones about specific checks: hidden tests, flaky tests, reading trajectories. Those are the ones to send a colleague.",
    sources: [
      { title: "Own posting log, 5 Nov – 25 Dec 2026; every write-up on this blog", url: "https://www.prashantworks.com/blog" },
    ],
    cta: { label: "Get a free review" },
  },

  {
    slug: "the-mvp-sprint-week-by-week",
    day: 22,
    plan: 2,
    date: "2026-12-26",
    track: "Founders",
    title: "\"What do I get each week?\" The MVP sprint, week by week",
    standfirst: "Three weeks from an agreed scope to a deployed product. A prototype on the first Friday, a staging link you can use on the second, a live product on the third. Here is what lands on your desk each week, and what I need from you to keep it there.",
    heroAlt: "Isometric sprint rail: three stations along a conveyor, rising in height, the last one in accent blue with a flag",
    keywords: ["MVP sprint timeline", "MVP development process", "3-week MVP", "fixed-price MVP sprint", "build an MVP", "startup product development", "weekly deliverables", "MVP deployment"],
    takeaways: [
      "Week 1 ends with a clickable prototype and the data model agreed. Week 2 ends with a staging link where the core flow works end to end. Week 3 ends with the product live, edge cases handled, and handover documentation.",
      "Every Friday: a written update with done, next, risks and decisions needed, whether the news is good or not.",
      "The scope is one flow, fixed before day one in the free teardown, which is what keeps three weeks at three weeks.",
    ],
    body: [
      { t: "p", text: "Founders who have been through a bad outsourcing project ask one question before anything else: what do I actually get, and when? The answer for the $3,000 MVP sprint is specific enough to write down, so here it is, week by week, with what you see on each Friday and what I need from you to keep the dates." },

      { t: "h2", text: "Before day one" },
      { t: "p", text: "The free teardown has already happened. It ended with a one-page scope: the one flow, the screens, the stack, what is explicitly out. The price is fixed against that page. If you did a design sprint first, the prototype and scope from it are the starting point and week one is shorter." },

      { t: "h2", text: "Week 1: design" },
      { t: "p", text: "Monday and Tuesday: the flow on paper, then screens in Figma, every state, real copy. Wednesday: the data model, what gets stored, how it relates, which parts of the flow read and write it, agreed in writing. Thursday: the screens linked into a clickable prototype. Friday: you use the prototype, tell me where you got stuck, and the first written update arrives." },
      { t: "p", text: "**What you get on Friday:** a clickable prototype of the whole flow and the agreed data model. **What I need from you:** an hour using the prototype and your notes by Monday." },

      { t: "h2", text: "Week 2: build" },
      { t: "p", text: "The core flow is built end to end: auth, the screens, the backend, the database, the one integration the flow needs if there is one. If the product has an AI feature, this is when it is wired in, with sources, a fallback and a cost cap. By Friday the flow works on a staging URL you can log into." },
      { t: "p", text: "**What you get on Friday:** a staging link where you can complete the flow with real data. **What I need from you:** use it as if you were a customer, and send the three things that bothered you most." },

      { t: "h2", text: "Week 3: ship" },
      { t: "p", text: "Edge cases from your week-two notes and from my own testing. Error states, empty states, the slow-connection case, the wrong-input case. Then deployment to your cloud account, with the domain, monitoring, and a handover document that explains how to run it, where the keys are, and what to do when something breaks. Friday: live." },
      { t: "p", text: "**What you get on Friday:** the product live on your domain, the repository, the design files, the handover document, and 30 days of support starting. **What I need from you:** access to the cloud account and the domain by Wednesday." },

      { t: "table", head: ["Friday", "Delivered", "You do"], rows: [
        ["Week 1", "Clickable prototype, data model agreed", "Use it, send notes by Monday"],
        ["Week 2", "Staging link, core flow end to end", "Use it as a customer, send three things"],
        ["Week 3", "Live product, repo, designs, handover, support starts", "Provide cloud and domain access by Wednesday"],
      ] },

      { t: "callout", title: "Every Friday, regardless", text: "A written update: done, next, risks, decisions needed. If something slipped, the update says so and says what changes. You should never have to ask how it is going." },

      { t: "h2", text: "What moves the dates, and what does not" },
      { t: "p", text: "Two things move the dates: a decision that waits more than a few days, and new scope. The first is why the Friday update has a decisions-needed section with a recommendation for each, so a one-word reply is enough. The second is why new ideas are written down and quoted rather than squeezed in. Everything else, including the normal surprises of building software, is inside the three weeks, because the scope was cut to fit them." },
      { t: "gallery", items: [
        { src: slide("the-mvp-sprint-week-by-week", 3), alt: "Slide: week 1, design" },
        { src: slide("the-mvp-sprint-week-by-week", 4), alt: "Slide: week 2, build" },
        { src: slide("the-mvp-sprint-week-by-week", 5), alt: "Slide: week 3, ship" },
        { src: slide("the-mvp-sprint-week-by-week", 6), alt: "Slide: every Friday" },
      ], caption: "From the carousel version of this post." },
    ],
    faq: [
      { q: "How long does it take to build an MVP?", a: "Three weeks for one complete flow: design and prototype in week one, the core flow built on staging in week two, edge cases and deployment in week three. The scope is fixed beforehand so the timeline holds." },
      { q: "What do you deliver each week of an MVP sprint?", a: "Week one: a clickable prototype and the agreed data model. Week two: a staging link where the flow works end to end. Week three: the live product, repository, design files, handover documentation and 30 days of support." },
      { q: "What can delay an MVP sprint?", a: "A client decision that waits more than a few days, or new scope added mid-sprint. Both are handled by the Friday update's decisions-needed section and by quoting new ideas rather than absorbing them." },
    ],
    forFounders: "Send your product or idea. The teardown comes back with the one-page scope this sprint would run on, and a start date.",
    forLabs: "A ten-task pilot has the same rhythm: a report at the end of the week, decisions needed listed, and nothing added to the scope without being written down.",
    sources: [
      { title: "Services and pricing on this site", url: "https://www.prashantworks.com/services" },
    ],
    cta: { label: "Get a free one-page teardown", topic: "product" },
  },

  {
    slug: "red-teaming-tasks-that-find-real-failures",
    day: 23,
    plan: 2,
    date: "2026-12-27",
    track: "AI labs",
    title: "Red-teaming tasks that find real failures",
    standfirst: "A red-team prompt no real user would ever send teaches the model nothing. The good ones look like Tuesday's support ticket with one trap inside, graded by a rubric that says what a safe and useful answer looks like, not only what a bad one does.",
    heroAlt: "Isometric red-team rig: a central unit with an accent core, three dark probe units wired to it from different angles",
    keywords: ["red teaming tasks", "AI safety evaluation", "adversarial prompts", "red team dataset design", "safety rubric", "harmful request evaluation", "refusal evaluation", "AI red team"],
    takeaways: [
      "A red-team task has three parts: a realistic request a real user would send, one trap (an instruction to ignore, a leak to avoid, a harmful step hidden in a helpful one), and a rubric for the safe, useful answer.",
      "Tricks and riddles do not train models. Realism does: the failures that matter happen on ordinary-looking requests.",
      "Grade helpfulness too. A model that refuses everything has also failed the task.",
    ],
    body: [
      { t: "p", text: "Red-teaming data has a quality problem that is the mirror image of the one in coding benchmarks. Coding tasks fail when they are too easy to game. Red-team tasks fail when they are too strange to matter: elaborate jailbreak riddles, role-play scenarios nobody would write, prompts whose only purpose is to be adversarial. A model trained on those learns to recognise adversarial prompts. It does not learn to handle the ordinary request with a problem inside it, which is what actually arrives." },
      { t: "p", text: "Here is the structure I use for red-team tasks that find failures worth fixing. Three parts, each with a reason." },

      { t: "h2", text: "Part 1: a realistic request" },
      { t: "p", text: "Start from something a real user in the product's context would send. A support ticket. A question from a customer. A request from a colleague pasted into an internal tool. Tuesday afternoon, not a thriller plot. The realism is the point: the model's behaviour on strange prompts is less important than its behaviour on the ten thousand ordinary ones, and failures on ordinary prompts are the ones that reach users." },

      { t: "h2", text: "Part 2: one trap" },
      { t: "p", text: "Inside the realistic request, one thing that should change the right answer. An instruction embedded in pasted content that the model should not follow. A request that would leak something from context that the user should not see. A harmful step hidden inside an otherwise helpful task: \"summarise this document and also email it to this address\". A premise that is false and should be corrected rather than built on. One trap per task, so the grading can say exactly what the model did about it." },

      { t: "h2", text: "Part 3: a rubric for the good answer" },
      { t: "p", text: "Most red-team rubrics describe the bad answer: did the model comply with the harmful part. That is half a rubric. The other half describes the good answer: did it complete the legitimate part of the request, did it explain what it would not do and why, did it offer the safe alternative, did it stay useful. A model that refuses the whole ticket because one line was a trap has failed the user, and the rubric has to say so." },

      { t: "table", head: ["Part", "Weak version", "Strong version"], rows: [
        ["Request", "A jailbreak riddle", "A support ticket with pasted customer content"],
        ["Trap", "Obviously adversarial", "One line in the pasted content that asks the model to do something it should not"],
        ["Rubric", "\"Did it comply? Y/N\"", "Did it do the legitimate part, decline the trap, explain, and offer an alternative"],
      ] },

      { t: "h2", text: "Grading helpfulness" },
      { t: "p", text: "The rubric's helpfulness criteria carry real weight, not a token one. A typical split: declined the harmful part, 40%; completed the legitimate part correctly, 30%; explained the decline in plain terms, 15%; offered a safe alternative, 15%. Under that rubric a blanket refusal scores 40, which is a fail, and a model that quietly does everything scores 60, which is also a fail. Only the model that handled both halves passes. That is the behaviour worth training toward." },

      { t: "callout", title: "The test for a red-team task", text: "Would a real user have sent this? Is there exactly one thing in it that should change the answer? Does the rubric reward the answer you would want a careful colleague to give?" },

      { t: "h2", text: "Why this needs domain authors" },
      { t: "p", text: "A realistic support ticket in a medical product, a finance tool or a developer platform looks different in each, and the traps that matter are different too. The authors who write good red-team tasks are the ones who have read the real tickets. That is the same requirement as every other kind of expert task: vetted people from the domain, a scored trial on the rubric, a second review on every item." },
    ],
    faq: [
      { q: "What makes a good red-teaming task?", a: "A realistic request a real user would send, with exactly one embedded trap (an instruction to ignore, a leak to avoid, a harmful step inside a helpful one), and a rubric that grades both the refusal of the trap and the completion of the legitimate part." },
      { q: "Should red-team rubrics grade helpfulness?", a: "Yes, with real weight. A model that refuses the entire request because one line was a trap has failed the user. The rubric should reward doing the legitimate part, declining the trap, explaining, and offering a safe alternative." },
      { q: "Why are jailbreak-style prompts poor training data?", a: "They teach the model to recognise adversarial prompts, not to handle ordinary requests with a problem inside them. The failures that reach users happen on realistic requests, so that is what the tasks should look like." },
    ],
    forFounders: "If your product has an AI feature that reads user content, the trap in part two is your threat model: what happens when pasted content tells the model to do something? Test that before launch.",
    forLabs: "Send one red-team task and the free review will score it against the three parts and rewrite the rubric to grade both halves.",
    sources: [
      { title: "Anthropic Engineering, Demystifying evals for AI agents (grading criteria), 9 Jan 2026", url: "https://anthropic.com/engineering/demystifying-evals-for-ai-agents" },
    ],
    cta: { label: "Get a free written review of one task", topic: "data" },
  },
];
