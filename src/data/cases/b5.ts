import type { CaseContent } from "./types";

export const content: Record<string, CaseContent> = {
  "education-landing-page": {
    tagline: "A school website that leads students and parents straight to admissions",
    summary: "A creative, admissions-first landing page for an educational institution. It serves prospective students and their parents, and points every section towards an enquiry or a campus visit. I shaped the page structure, outlined the copy and designed it for desktop and mobile.",
    seo: {
      title: "Education Landing Page: UX case study",
      description: "Admissions-first landing page for a college. Freelance product designer case study: a programme finder and a parents’ section that lead to enquiries.",
      keywords: ["education website design case study", "school landing page design", "admissions page UX", "college website redesign", "landing page designer for education", "freelance product designer for edtech"],
    },
    context: {
      problem: "Institution websites try to serve everyone at once, so the admissions path gets buried under news, notices and menus. Students and parents arrive with different questions about courses, fees, campus life and outcomes, and leave when they can’t see the next step.",
      audience: [
        { who: "Prospective students", need: "To find a programme that fits their interests and see what life on campus is like." },
        { who: "Parents and guardians", need: "Clear answers on fees, safety, support and outcomes before they agree to apply." },
        { who: "Admissions team", need: "Enquiries that arrive with enough detail to follow up properly." },
      ],
      goals: ["Make enquiring or applying the clearest action on the page", "Answer parents’ questions before they have to ask", "Give the institution character without hiding the controls", "Keep intake dates and fees easy for the team to update"],
    },
    approach: [
      { title: "Sorting the audiences", text: "I listed who lands on the page and what each of them needs to decide. Students and parents came out as two readers with different questions, so the page had to serve both without becoming two sites." },
      { title: "Writing the page as questions", text: "Before any layout, I wrote the page as a run of real questions in the order a family would ask them. Each section then had one job and one way forward." },
      { title: "Creative layout, calm controls", text: "I put the creative energy into type, colour bands and campus photography. Navigation, buttons and forms stayed conventional so nobody had to hunt for the next step." },
      { title: "Handover to build", text: "I prepared desktop and mobile designs with a small set of reusable sections. Notes covered which content the team would update each intake, such as dates and fees." },
    ],
    journey: { title: "From first visit to enquiry", steps: ["Arrives from search", "Picks a programme", "Checks fees and intake dates", "Sends an admissions enquiry", "Books a campus visit"], key: 3 },
    structure: {
      root: "Admissions landing page",
      groups: [
        { name: "Hero", items: ["Headline and next intake", "Apply and enquire actions"] },
        { name: "Programmes", items: ["Programme finder", "Course cards"] },
        { name: "Campus life", items: ["Photo story", "Clubs and facilities", "Student support"] },
        { name: "For parents", items: ["Fees in plain words", "Safety and wellbeing", "Steps to apply"] },
        { name: "Get in touch", items: ["Enquiry form", "Visit booking", "Common questions"] },
      ],
    },
    decisions: [
      { title: "A programme finder before the prospectus", problem: "A long course list overwhelms a student who doesn’t yet know the official programme names. They think in interests, not catalogue titles.", alt: "A full A–Z course list with a downloadable prospectus.", choice: "A short finder by interest and level that narrows to a few course cards. Each card opens the enquiry form with the programme already filled in.", why: "It meets students where they start, and the prefilled programme saves the admissions team a round of questions." },
      { title: "A section written for parents", problem: "Parents often make or fund the decision, but their questions about fees, safety and outcomes were scattered across pages.", alt: "Fold parent questions into a general FAQ at the bottom of the page.", choice: "A dedicated band addressed to parents, with fees, support and safety in plain words and its own enquiry action.", why: "Naming the reader makes the section easy to find when a student shares the link. It makes the page longer, which I accepted because every band has its own way to enquire." },
      { title: "Expression in content, not in controls", problem: "The brief called for a creative page, but playful layouts can hide where to click.", alt: "Scroll-driven layouts with hidden menus and unusual navigation.", choice: "Character comes from type, colour blocks and campus photography, while the header, buttons and forms stay fixed and familiar.", why: "The institution feels distinct, and applicants never have to learn the interface before they can act." },
    ],
    features: [
      { icon: "cap", title: "Programme finder", text: "Narrows courses by interest and level instead of listing everything at once." },
      { icon: "calendar", title: "Intake dates up front", text: "The next intake and key deadlines sit in the hero, so urgency is clear without pressure." },
      { icon: "users", title: "Parents’ section", text: "Fees, safety and support explained in plain words for the people who often decide." },
      { icon: "map", title: "Campus visit booking", text: "Families can pick a visit slot from the same page they read about the campus." },
      { icon: "doc", title: "Enquiry with context", text: "The form carries the chosen programme, so the team can reply with the right details." },
    ],
    outcome: ["Section-by-section page structure and copy outline", "High-fidelity desktop and mobile designs for the landing page", "Programme finder and enquiry form with their states", "A small set of reusable sections, cards and form fields", "Annotated hand-off for development"],
    learned: ["Writing the page as a list of real questions first made most layout decisions easy.", "On an institution site, creativity works best in the content, not in the controls."],
  },

  "coding-bootcamp-landing": {
    tagline: "A bootcamp page that answers the hard questions before anyone applies",
    summary: "A landing page for a coding bootcamp, written for career switchers and working learners deciding whether to commit. I structured the page around their doubts, designed the curriculum as a visual path and shaped the route to an application.",
    seo: {
      title: "Coding Bootcamp Landing Page: case study",
      description: "Landing page for a coding bootcamp. Freelance product designer case study: a project-led curriculum path and a readiness check that makes applying easier.",
      keywords: ["coding bootcamp landing page design", "edtech landing page case study", "bootcamp website UX", "course landing page designer", "freelance product designer for edtech", "landing page for online course"],
    },
    context: {
      problem: "Choosing a bootcamp is a big decision in time and money, and visitors arrive sceptical about outcomes and unsure they can keep up. Many tech course pages lead with buzzwords and logos, while the things people need to decide, such as syllabus, schedule and cost, sit deep in the page or behind a sales call.",
      audience: [
        { who: "Career switchers", need: "Proof that a beginner can follow the course and finish with real work to show." },
        { who: "Working learners", need: "A schedule and weekly time commitment that fits around a job." },
        { who: "Recent graduates", need: "Practical skills and projects that go beyond their degree." },
        { who: "Admissions team", need: "Applicants who understand the format and what it asks of them." },
      ],
      goals: ["Make the curriculum concrete for beginners", "Show schedule and cost without a sales call", "Lower the first step towards applying", "Keep the page easy to skim on a phone"],
    },
    approach: [
      { title: "Listing the doubts", text: "I wrote down every reason a visitor might hesitate, from cost to whether they are good enough. Each doubt became a section or a line the page had to answer." },
      { title: "Turning the syllabus into a path", text: "I regrouped the modules into stages, each tied to a project the learner builds. That gave the page a story a beginner could follow." },
      { title: "Designing for skimmers", text: "I gave every section a headline that makes sense on its own, so a quick scroll still tells the whole story. Detail sits in expandable panels for those who want it." },
      { title: "Preparing the build", text: "I designed desktop and mobile layouts with the curriculum path and readiness check as reusable components. The hand-off covered each state, from empty to completed." },
    ],
    journey: { title: "From curious visitor to applicant", steps: ["Lands on the promise", "Follows the curriculum path", "Checks schedule and cost", "Takes the readiness check", "Applies for a cohort"], key: 3 },
    structure: {
      root: "Bootcamp landing page",
      groups: [
        { name: "Hero", items: ["Outcome headline", "Next cohort date", "Apply action"] },
        { name: "Curriculum", items: ["Stage-by-stage path", "Projects you build", "Tools you learn"] },
        { name: "Format", items: ["Full-time and part-time options", "Mentor support", "Weekly time commitment"] },
        { name: "Cost", items: ["Pricing", "Payment options", "What’s included"] },
        { name: "Apply", items: ["Readiness check", "Application form", "Questions"] },
      ],
    },
    decisions: [
      { title: "Curriculum as a path of projects", problem: "A syllabus as a bullet list reads like jargon to a beginner and doesn’t show progress.", alt: "A tabbed list of modules and technologies.", choice: "A path of stages, each showing the project a learner builds at that point and the skills it uses.", why: "Projects make the outcome tangible and show how someone gets from nothing to a portfolio. Technology detail moved into an expandable panel to make room." },
      { title: "A readiness check before the form", problem: "An application form is a big step for someone who isn’t sure they can code.", alt: "Send every visitor straight to a long application form.", choice: "A short, low-stakes check on background, available time and goal that suggests a format and carries the answers into the application.", why: "It lowers the first step and gives admissions useful context. To stop it feeling like a test, it is brief and never scores anyone." },
      { title: "Cost shown, not behind a call", problem: "Hiding the price behind a sales call frustrates a sceptical audience and sends them elsewhere for answers.", alt: "Replace pricing with a Talk to us button.", choice: "A clear pricing section with what’s included and payment options, placed next to the schedule.", why: "Being open about cost builds trust. The info call stays as a secondary action for people who still have questions." },
    ],
    features: [
      { icon: "code", title: "Project-led curriculum", text: "Each stage of the course is shown through the project a learner ships." },
      { icon: "calendar", title: "Cohort dates", text: "Upcoming start dates and formats sit side by side so visitors can plan." },
      { icon: "tasks", title: "Readiness check", text: "A few quick questions that suggest a format and prefill the application." },
      { icon: "money", title: "Clear pricing", text: "Cost, what’s included and payment options shown on the page." },
      { icon: "chat", title: "Info call booking", text: "A secondary route for visitors who want to talk before applying." },
    ],
    outcome: ["Page structure and copy hierarchy", "High-fidelity desktop and mobile designs", "Curriculum path component with its states", "Readiness check flow screens", "Hand-off file with specs for development"],
    learned: ["A sceptical audience reads every section for what’s missing; leaving out the cost would have said more than any headline.", "Turning modules into projects made the page clearer for beginners, and for me."],
  },

  "personal-finance-app": {
    tagline: "A money app that tells you what’s safe to spend, calmly",
    summary: "A personal finance app for people who find money apps stressful. It brings spending, bills and savings goals into one calm view built around a single question: what can I spend? I designed the flows, screens and tone for iOS and Android.",
    seo: {
      title: "Personal Finance App: UX case study",
      description: "Personal finance app built around a calm safe-to-spend view. Freelance product designer case study: budgets, goals and a weekly spending review flow.",
      keywords: ["personal finance app design", "fintech app UX case study", "budgeting app design", "mobile banking app designer", "freelance product designer for fintech", "money management app UI"],
    },
    context: {
      problem: "Many people avoid their money apps because dense charts, red numbers and guilt-heavy alerts make them anxious. The product had to help them understand where their money goes and what’s safe to spend, without making them feel judged.",
      audience: [
        { who: "Young earners", need: "A clear sense of what’s left to spend before the next payday." },
        { who: "Households sharing costs", need: "One view of bills and shared spending that everyone can follow." },
        { who: "Goal savers", need: "Steady, visible progress towards something they care about." },
        { who: "Anxious checkers", need: "Reassurance and simple next steps, without being lectured." },
      ],
      goals: ["Answer what can I spend at a glance", "Make sorting transactions quick", "Turn goals into small, regular steps", "Keep the tone calm and non-judgemental"],
    },
    approach: [
      { title: "Mapping money moments", text: "I mapped the moments people open a finance app: payday, a big purchase, a bill due, a worrying balance. Each moment needed a fast, specific answer." },
      { title: "Choosing one headline number", text: "I worked out which single figure would answer most of those moments. Safe-to-spend became the centre of the home screen and the rest of the app was arranged around it." },
      { title: "Designing calm states", text: "I designed every state of the budget, from on track to overspent, with neutral colour and a suggested next step. I wrote the copy alongside the screens so tone and layout matched." },
      { title: "Prototype and hand-off", text: "I built a clickable prototype of the home screen and the weekly review. The hand-off included components, chart styles and tone guidelines." },
    ],
    journey: { title: "A quick check-in", steps: ["Opens the app", "Sees safe-to-spend amount", "Reviews recent spending", "Adjusts a budget", "Moves money to a goal"], key: 1 },
    structure: {
      root: "Personal Finance App",
      groups: [
        { name: "Home", items: ["Safe-to-spend", "Upcoming bills", "Recent activity"] },
        { name: "Spending", items: ["Categories", "Transactions", "Weekly review"] },
        { name: "Plan", items: ["Budgets", "Savings goals", "Bills"] },
        { name: "Account", items: ["Linked accounts", "Security", "Notifications"] },
      ],
    },
    decisions: [
      { title: "One number on the home screen", problem: "A dashboard of balances, charts and categories left people to work out for themselves whether they were okay.", alt: "A home screen with balance, spending chart and category breakdown side by side.", choice: "Home leads with a single figure: what’s safe to spend until payday after bills and goals, with the detail one tap away.", why: "It answers the question people open the app with. The trade-off is that the figure has to be explained, so tapping it opens a plain breakdown." },
      { title: "Neutral colour for overspending", problem: "Red warnings and alarm icons make people feel judged, and they stop opening the app.", alt: "Traffic-light colours across every budget.", choice: "Overspending uses a neutral accent with a suggestion, such as moving money from another category. Red is kept for real risks like a failed payment.", why: "Calm feedback keeps people engaged with their budget, and keeping red rare means it still means something when it appears." },
      { title: "A weekly swipe review", problem: "Automatic categories are often wrong, and fixing them one at a time is tedious.", alt: "Edit each transaction from its own detail screen.", choice: "A weekly stack of cards where people confirm or change a category with a swipe, with an offer to create a rule when a merchant repeats.", why: "A short weekly habit keeps the data accurate without daily effort, and rules cut the repeat work over time." },
    ],
    features: [
      { icon: "money", title: "Safe-to-spend figure", text: "One figure that accounts for bills and goals before showing what’s free to use." },
      { icon: "chart", title: "Spending by category", text: "A simple monthly view of where money went, with no dense charts." },
      { icon: "bell", title: "Bill reminders", text: "Gentle notices before a bill is due, timed so there’s still room to act." },
      { icon: "star", title: "Savings goals", text: "Goals broken into small regular amounts, with progress shown at a glance." },
      { icon: "lock", title: "Privacy controls", text: "App lock, hidden balances and clear control over linked accounts." },
    ],
    outcome: ["User flows for onboarding, linking accounts, budgets and goals", "High-fidelity iOS and Android screens", "Clickable prototype of the home screen and weekly review", "Component library with chart, card and input states", "Tone guidelines for calm, non-judgemental copy"],
    learned: ["In finance, tone is part of the interface: the same number can feel helpful or threatening.", "Choosing one headline number forced clearer thinking about the product than any chart did."],
  },

  "ecommerce-app": {
    tagline: "A shopping app where finding, paying and tracking each take one clear step",
    summary: "A mobile shopping app covering the full path from browsing to delivery and returns. It is for shoppers who want to find the right item, pay quickly and know where their order is. I designed the flows and screens for iOS and Android.",
    seo: {
      title: "E-Commerce App: mobile UX case study",
      description: "Mobile e-commerce app from browse to delivery. Freelance product designer case study: one-screen checkout, clearer size picking and an orders tab.",
      keywords: ["ecommerce app design case study", "mobile shopping app UX", "checkout UX design", "retail app designer", "freelance product designer for ecommerce", "online store app UI"],
    },
    context: {
      problem: "A shopping app has to be faster than the store’s own mobile website, or people won’t keep it installed. On a small screen, product detail, size choice and checkout become fiddly, and questions after purchase often end up with the support team.",
      audience: [
        { who: "Casual browsers", need: "Inspiration and an easy way to save items for later." },
        { who: "Intent shoppers", need: "To find a specific item fast and pay without re-entering details." },
        { who: "Returning customers", need: "To track orders and start returns without contacting support." },
        { who: "Store team", need: "Fewer order questions and fewer wrong-size returns." },
      ],
      goals: ["Shorten the path from product to paid", "Make size and variant choice confident", "Give orders and tracking a clear home", "Make returns self-serve"],
    },
    approach: [
      { title: "Mapping two ways to shop", text: "I separated browsing for ideas from searching for a known item, because they need different entry points. Home serves the first, and search with filters serves the second." },
      { title: "Rethinking the product page", text: "I ordered the product page around the decision: images, price, variant choice, then detail. Delivery and returns information sits next to the button, where doubts come up." },
      { title: "Designing checkout and tracking", text: "I brought checkout onto one screen and treated what happens after payment as part of the same flow. Tracking and returns got the same attention as browsing." },
      { title: "States and hand-off", text: "I designed empty, loading, error and out-of-stock states for the key screens. The hand-off included a component set for product cards, variants and order status." },
    ],
    journey: { title: "From browsing to delivery", steps: ["Searches or browses", "Opens a product", "Picks size and colour", "Pays on one screen", "Tracks the delivery"], key: 3 },
    structure: {
      root: "E-Commerce App",
      groups: [
        { name: "Home", items: ["Picks for you", "Collections", "Search"] },
        { name: "Shop", items: ["Categories", "Filters", "Product page"] },
        { name: "Bag and checkout", items: ["Bag", "Delivery", "Payment"] },
        { name: "Orders", items: ["Live tracking", "Returns", "Order history"] },
        { name: "Profile", items: ["Wishlist", "Saved addresses", "Preferences"] },
      ],
    },
    decisions: [
      { title: "Single-screen checkout with saved defaults", problem: "Multi-step mobile checkouts ask for the same details again and hide the total until the end.", alt: "A classic stepper of address, delivery, payment and review.", choice: "One screen with address, delivery and payment as editable rows, and the total pinned above the pay button.", why: "Returning shoppers pay with one confirmation. New shoppers expand each row, which is slightly longer for them but clearer for everyone." },
      { title: "The size picker sits on the button", problem: "Shoppers add items without choosing a size, then hit an error or receive the wrong one.", alt: "An always-active add button that asks for size in a pop-up afterwards.", choice: "Size and colour options sit directly above the button, show availability per option, and the button names the choice once it’s made.", why: "The choice is made and confirmed in one place. It takes space from the image gallery, a trade-off I accepted because the gallery scrolls anyway." },
      { title: "Orders get their own tab", problem: "Where is my order and how do I return it are the most common reasons to open the app after buying, yet tracking is often buried in a profile menu.", alt: "Order history inside the profile screen.", choice: "A dedicated Orders tab with live status at the top, and returns started from the order itself.", why: "After a purchase, tracking is the main job of the app. Giving it a tab cost a navigation slot, so the wishlist moved into the profile." },
    ],
    features: [
      { icon: "search", title: "Search with filters", text: "Fast search with filters that stay set as shoppers move between results." },
      { icon: "heart", title: "Saved wishlist", text: "Save items for later and get a nudge when they come back in stock." },
      { icon: "cart", title: "One-screen checkout", text: "Saved details as editable rows with the total always in view." },
      { icon: "box", title: "Order tracking", text: "Live status for every order, with returns started from the same screen." },
      { icon: "bell", title: "Price and stock alerts", text: "Optional notifications for saved items, set from the product page." },
    ],
    outcome: ["End-to-end flows from browse to return", "High-fidelity screens for iOS and Android", "Prototype from product page to payment", "Component set for product cards, variants and order status", "Empty, loading, error and out-of-stock states"],
    learned: ["After a purchase, the order screen becomes the home screen, so it deserved the same care.", "Small labels, like naming the chosen size on the button, did more than larger layout changes."],
  },

  "software-agency-website": {
    tagline: "An agency site where the work does the selling",
    summary: "A brand website for a software agency, aimed at founders and product leaders choosing a build partner. I defined the structure around the buyer’s questions, designed a reusable case study template and set the visual direction.",
    seo: {
      title: "Software Agency Website: UX case study",
      description: "Brand website for a software agency. Freelance product designer case study: a work-led homepage, a reusable case study template and a guided project brief.",
      keywords: ["software agency website design", "agency website case study", "B2B website UX", "development studio website", "freelance product designer for agencies", "web design for software company"],
    },
    context: {
      problem: "Agency websites tend to look alike: bold claims, a services grid and a contact form. Buyers comparing studios need to see how a team works, what it has shipped and how an engagement runs before they reach out, and the site had to show that without overpromising.",
      audience: [
        { who: "Startup founders", need: "A partner who can ship a first version and explain the process plainly." },
        { who: "Product leaders", need: "Evidence of quality and a delivery process they can trust." },
        { who: "Operations and procurement", need: "Clear engagement models and an obvious next step." },
        { who: "Prospective hires", need: "A sense of how the studio works and what it values." },
      ],
      goals: ["Make the work the main proof", "Explain the process and engagement models", "Make starting a project easy", "Give the brand a clear, distinct voice"],
    },
    approach: [
      { title: "Positioning before pixels", text: "I started with what the studio does best and for whom, in one line. Every page had to support that line, which made it easier to cut generic content." },
      { title: "Structuring around buyer questions", text: "I listed what a buyer asks before getting in touch: what have you built, how do you work, how do we start. The sitemap follows that order." },
      { title: "Designing the case study template", text: "I designed one case study layout that any team member could fill in: problem, approach, what shipped. A consistent format keeps the work section strong as it grows." },
      { title: "Brand and hand-off", text: "I set the type, colour and illustration style, then applied them across every page. The hand-off covered responsive layouts and the case study template as components." },
    ],
    journey: { title: "From first look to project brief", steps: ["Lands on the homepage", "Scans selected work", "Reads one case study", "Checks how engagements work", "Sends a project brief"], key: 2 },
    structure: {
      root: "Agency website",
      groups: [
        { name: "Home", items: ["Positioning line", "Selected work", "Services in brief"] },
        { name: "Work", items: ["Case study list", "Filter by service", "Case study template"] },
        { name: "Services", items: ["Product design", "Web and mobile builds", "Engagement models"] },
        { name: "Studio", items: ["Process", "Team", "Careers"] },
        { name: "Start a project", items: ["Guided brief", "Book a call"] },
      ],
    },
    decisions: [
      { title: "Work leads the homepage", problem: "Visitors skim service lists that every agency shares, while the real proof sits two clicks deep.", alt: "A services-first homepage with work as a secondary page.", choice: "The homepage opens with selected work, each card stating the problem and what was shipped, and services are introduced through the projects.", why: "Work shows ability better than claims. The site then depends on good case studies, which is why the template got as much attention as the homepage." },
      { title: "A guided project brief", problem: "A bare contact form brings vague messages and slow back-and-forth before a first call.", alt: "Name, email and message fields only.", choice: "A short stepped brief covering what you’re building, its stage and timeline, with budget as an optional range, ending with a suggested next step.", why: "It helps buyers shape their request and gives the team context for the call. Budget is optional so early founders aren’t put off." },
      { title: "Engagement models in plain terms", problem: "Buyers hesitate when they don’t know whether to ask for a fixed project, a retainer or a dedicated team.", alt: "Leave engagement models for the sales call.", choice: "A services section that explains each model: who it suits, how it starts and what you get each week, without listing prices.", why: "Clear models help buyers choose before the call. Leaving prices out keeps the page accurate as rates change." },
    ],
    features: [
      { icon: "layout", title: "Work-led homepage", text: "Selected projects open the site, each with its problem and outcome in a line." },
      { icon: "doc", title: "Case study template", text: "One reusable layout that keeps every case study consistent and easy to write." },
      { icon: "tasks", title: "Guided project brief", text: "A short stepped form that turns a vague enquiry into a useful first call." },
      { icon: "gear", title: "Process overview", text: "How a project runs, from first call to launch, shown in a few clear stages." },
      { icon: "users", title: "Studio and careers", text: "Team, values and open roles in one place for clients and future hires." },
    ],
    outcome: ["Sitemap and page-by-page content structure", "Designs for home, work, case study, services, studio and contact pages", "Reusable case study template", "Visual direction for type, colour and illustration", "Responsive layouts and hand-off notes"],
    learned: ["An agency site is mostly a content problem; the case study template mattered more than the hero.", "Asking for budget as an optional range felt like the right balance between context and friction."],
  },

  "social-gaming-app": {
    tagline: "Casual games that are easier to play with friends than alone",
    summary: "A social gaming app built around playing casual games with friends, even when they aren’t online at the same time. I designed the play loop, the social layer and the safety controls for iOS and Android.",
    seo: {
      title: "Social Gaming App: mobile UX case study",
      description: "Mobile social gaming app for playing with friends. Freelance product designer case study: turn-based play, link invites and safer chat in the game loop.",
      keywords: ["social gaming app design", "mobile game UX case study", "casual game app designer", "multiplayer game UI", "freelance product designer for games", "game lobby and matchmaking UX"],
    },
    context: {
      problem: "Casual games are easy to start and just as easy to drop. Playing with friends is what brings people back, but inviting them, waiting for them and coordinating play adds friction that solo play doesn’t have.",
      audience: [
        { who: "Friend groups", need: "An easy way to start a game together, even when they aren’t online at once." },
        { who: "Solo casual players", need: "Quick matches with people at a similar level." },
        { who: "Competitive players", need: "Rankings, streaks and fast rematches." },
        { who: "New players", need: "A gentle start without being thrown into hard matches." },
      ],
      goals: ["Get a new player into a first game quickly", "Make inviting a friend a single step", "Support play across different schedules", "Keep social features friendly and safe"],
    },
    approach: [
      { title: "Mapping the play loop", text: "I mapped the loop from opening the app to finishing a game and starting the next. Every screen had to shorten that loop or give a reason to return." },
      { title: "Designing the social layer", text: "I designed friends, invites and reactions as part of the loop rather than a separate social tab. Social actions appear where they are useful, such as the results screen." },
      { title: "Turn-based and live states", text: "I designed both turn-based and live versions of a match, and how a game moves between them. The home screen became a list of games waiting on you or on them." },
      { title: "Safety and hand-off", text: "I added reporting, blocking and chat limits as a dedicated flow. The hand-off included components for game cards, turn states and reactions." },
    ],
    journey: { title: "Playing with a friend", steps: ["Opens the app", "Picks a game mode", "Invites a friend by link", "Plays a turn", "Gets a rematch nudge"], key: 2 },
    structure: {
      root: "Social Gaming App",
      groups: [
        { name: "Play", items: ["Quick match", "Play with friends", "Practice"] },
        { name: "Social", items: ["Friends", "Groups", "Chat"] },
        { name: "Progress", items: ["Levels", "Leaderboards", "Achievements"] },
        { name: "Profile", items: ["Avatar", "Settings", "Safety controls"] },
      ],
    },
    decisions: [
      { title: "Turn-based by default, live when possible", problem: "Live matches need everyone online at once, which rarely happens in a group of friends.", alt: "Live-only matches with a waiting lobby.", choice: "Games start turn-based with a notification when it’s your turn, and switch to live play when both players are in the app.", why: "Friends can keep a game going through the day. The cost is more game states, which I made readable as a your turn and their turn list on home." },
      { title: "Invite links over contact syncing", problem: "Asking for contacts on first launch feels intrusive, and many players refuse.", alt: "Contact-book sync during onboarding.", choice: "A share link that opens straight into a game with the sender, with contact syncing offered later as an option.", why: "A link works in any messaging app and needs no permission. It relies on people sharing, so the share action sits on every results screen." },
      { title: "Reactions with strangers, chat with friends", problem: "Open chat between strangers brings moderation work and makes some players feel unsafe.", alt: "Full text chat in every match.", choice: "Quick reactions and preset phrases in matches with strangers, and full chat only between accepted friends.", why: "Matches stay friendly without heavy moderation. Strangers get less room to express themselves, which suits short casual games." },
    ],
    features: [
      { icon: "game", title: "Quick match", text: "Start a game with someone at a similar level in a single tap." },
      { icon: "users", title: "Friends and groups", text: "Play with friends one to one or keep a running game going in a group." },
      { icon: "bell", title: "Turn reminders", text: "A notification when it’s your turn, with quiet hours players can set." },
      { icon: "star", title: "Levels and streaks", text: "Progress that rewards coming back, without punishing a missed day." },
      { icon: "shield", title: "Safety controls", text: "Block, report and chat limits that are easy to find mid-game." },
    ],
    outcome: ["Core play loop and social flows mapped end to end", "High-fidelity mobile screens for home, lobby, match and results", "Interactive prototype of the invite-to-play flow", "Component set for game cards, turn states and reactions", "Safety settings and report flow"],
    learned: ["In social games, the rematch and share moments are part of the design, not afterthoughts.", "Designing for friends who aren’t online together changed the whole home screen."],
  },

  "restaurant-reservations-app": {
    tagline: "Find a table that’s free when you want it, and book it fast",
    summary: "A restaurant reservations app for diners who want to know where they can eat at the time they want. I designed search, booking, changes and reminders for iOS and Android, with the restaurant host’s needs in mind.",
    seo: {
      title: "Restaurant Reservations App: UX case study",
      description: "Mobile restaurant booking app built on real availability. Freelance product designer case study: time-first search, a booking sheet and fewer dead ends.",
      keywords: ["restaurant booking app design", "reservation app UX case study", "food app designer", "table booking app UI", "freelance product designer for hospitality", "mobile booking flow design"],
    },
    context: {
      problem: "Booking a table often means calling during a busy service, or using an app that shows restaurants but not whether they have space. Diners want to know quickly if they can eat somewhere at a time that suits them, and restaurants want accurate bookings and fewer no-shows.",
      audience: [
        { who: "Diners planning ahead", need: "To book a specific time for a group and share the details." },
        { who: "Last-minute diners", need: "Somewhere nearby with a table free right now." },
        { who: "Restaurant hosts", need: "Bookings with the right party size, notes and timely changes." },
        { who: "Groups and occasions", need: "Special requests handled before they arrive." },
      ],
      goals: ["Show real availability before anything else", "Book with as few steps as possible", "Make changing or cancelling easy", "Capture allergies and occasions up front"],
    },
    approach: [
      { title: "Two sides of a booking", text: "I mapped what the diner and the host each need from a reservation. Several design choices, like structured notes, came from the host’s side." },
      { title: "Search that starts with time", text: "I reordered search so party size and time come first and availability appears on every result. Browsing by cuisine and area works within that." },
      { title: "Designing the booking sheet", text: "I put the whole booking into one sheet over the restaurant page. I then designed the edge cases: no availability, waitlists, changes and late cancellations." },
      { title: "Reminders and hand-off", text: "I wrote the reminder and confirmation messages alongside the screens. The hand-off covered every booking state for iOS and Android." },
    ],
    journey: { title: "Booking a table", steps: ["Sets party and time", "Browses open tables", "Picks a time slot", "Confirms with notes", "Gets a reminder"], key: 2 },
    structure: {
      root: "Restaurant Reservations App",
      groups: [
        { name: "Discover", items: ["Nearby now", "Search by cuisine", "Collections"] },
        { name: "Restaurant", items: ["Available times", "Menu", "Photos"] },
        { name: "Booking", items: ["Party and time", "Special requests", "Confirmation"] },
        { name: "My bookings", items: ["Upcoming", "Change or cancel", "Past visits"] },
        { name: "Profile", items: ["Dietary preferences", "Saved places", "Notifications"] },
      ],
    },
    decisions: [
      { title: "Availability before restaurant details", problem: "Diners scroll through restaurants that turn out to be full at the time they want.", alt: "A discovery feed of restaurants, with availability shown only on the detail page.", choice: "Search starts with party size and time, and every result card shows bookable slots directly.", why: "It answers the real question, can I eat here tonight, straight away. Cards lost space for imagery, so photos moved into a swipeable header on the restaurant page." },
      { title: "Nearby times instead of fully booked", problem: "A fully booked restaurant is a dead end that sends diners elsewhere.", alt: "A Fully booked label with a waitlist button.", choice: "The app shows the closest free times at that restaurant and at similar places nearby, with the waitlist as a secondary option.", why: "It keeps the diner moving towards a booking. Those set on that one place still have the waitlist." },
      { title: "A booking sheet, not a booking flow", problem: "Multi-screen booking forms feel heavy for something people often do on the move.", alt: "Separate screens for time, details and confirmation.", choice: "A bottom sheet over the restaurant page that holds time, party size, requests and confirm, with saved details filled in.", why: "Diners keep the restaurant in view while they book. To keep the sheet short, occasion and allergy notes are optional and remember past answers." },
    ],
    features: [
      { icon: "search", title: "Search by time", text: "Party size and time come first, so every result is somewhere you can book." },
      { icon: "calendar", title: "Live time slots", text: "Bookable times shown on each card and on the restaurant page." },
      { icon: "food", title: "Menus and dietary notes", text: "Menus to browse and dietary needs passed to the restaurant with the booking." },
      { icon: "bell", title: "Reminders and changes", text: "A reminder before the booking with one-tap options to change or cancel." },
      { icon: "map", title: "Nearby tonight", text: "Places close by with tables free in the next few hours." },
    ],
    outcome: ["Booking flows from search to arrival", "Change, cancel and waitlist flows", "High-fidelity iOS and Android screens", "Prototype of the booking sheet", "Reminder and confirmation message copy"],
    learned: ["Putting time first turned a browsing app into a booking app.", "What the app shows when a slot is gone matters as much as the happy path."],
  },

  "local-marketplace-app": {
    tagline: "Buy and sell with people nearby, with trust built into every step",
    summary: "A local marketplace app where people buy and sell second-hand items close to home. I designed the listing, messaging and meet-up flows for iOS and Android, with trust and safety built into each one.",
    seo: {
      title: "Local Marketplace App: UX case study",
      description: "Mobile marketplace for buying and selling nearby. Freelance product designer case study: photo-first listing, offers in chat and safer meet-up planning.",
      keywords: ["marketplace app design case study", "buy and sell app UX", "peer-to-peer marketplace design", "classifieds app designer", "freelance product designer for marketplaces", "mobile marketplace UI"],
    },
    context: {
      problem: "Buying and selling locally depends on trust between strangers, and listing an item is often slow enough that people don’t bother. Buyers need confidence in the item and the seller, while sellers want to list in moments and avoid endless messages that go nowhere.",
      audience: [
        { who: "Casual sellers", need: "To list unwanted items quickly and get a fair price." },
        { who: "Bargain hunters", need: "Good items close by and a fast way to reach the seller." },
        { who: "Small local sellers", need: "Repeat listings and a reputation that builds over time." },
        { who: "Cautious buyers", need: "Clear signs that a seller and an item are real." },
      ],
      goals: ["Make listing an item quick", "Show distance and trust on every listing", "Keep conversations focused on the deal", "Make meeting up feel safe"],
    },
    approach: [
      { title: "Mapping trust moments", text: "I marked every point where a buyer or seller has to trust the other: the listing, the first message, the price, the meet-up. Each point got its own design treatment." },
      { title: "Making listing fast", text: "I cut the listing form down to what a buyer needs to decide and moved everything else to optional fields. Photos come first because they matter most." },
      { title: "Designing the deal chat", text: "I turned the parts of a deal, offers, counters and meet-up plans, into actions inside the chat. Free text stays for questions." },
      { title: "Safety and hand-off", text: "I designed verification, ratings and reporting as one consistent set of patterns. The hand-off included the listing card and chat action components." },
    ],
    journey: { title: "From listing to sold", steps: ["Browses nearby items", "Opens a listing", "Messages the seller", "Agrees price and place", "Meets and marks sold"], key: 3 },
    structure: {
      root: "Local Marketplace App",
      groups: [
        { name: "Explore", items: ["Nearby feed", "Categories", "Search and filters"] },
        { name: "Sell", items: ["Photo capture", "Listing details", "My listings"] },
        { name: "Inbox", items: ["Chats", "Offers", "Meet-up plans"] },
        { name: "Profile", items: ["Ratings", "Verification", "Saved items"] },
      ],
    },
    decisions: [
      { title: "Photos first, form second", problem: "Long listing forms make sellers give up before they post.", alt: "A form asking for title, category, description and price before any photos.", choice: "Listing opens on the camera. After photos, the form asks only for title, price and category, with description optional.", why: "Photos are what buyers look at first and the step sellers most often skip. A short form gets items listed, and sellers can add detail later." },
      { title: "Offers as cards inside chat", problem: "Open chat leads to long haggling threads and repeated is this still available messages.", alt: "Free text chat only.", choice: "Chat with built-in actions to offer, accept, counter and propose a meet-up place and time, each shown as a card.", why: "Cards make the state of the deal clear to both sides at a glance, and the listing updates to reserved when an offer is accepted." },
      { title: "Approximate location until a deal", problem: "An exact pin can expose a seller’s home, but buyers still need to know how far away an item is.", alt: "Exact pins on a map for every listing.", choice: "Listings show distance and neighbourhood only. The exact meet-up spot is shared in chat once both agree, with public places suggested.", why: "Sellers stay protected while buyers get what they need to decide. The map is less precise, which is fine for browsing." },
    ],
    features: [
      { icon: "map", title: "Distance-based feed", text: "Items sorted by how close they are, with the neighbourhood on every card." },
      { icon: "upload", title: "Quick listing", text: "Photos first and a short form, so an item can go live in moments." },
      { icon: "chat", title: "Offers in chat", text: "Offer, counter and accept as clear cards inside the conversation." },
      { icon: "star", title: "Ratings and reviews", text: "Feedback after each deal that builds a seller’s reputation." },
      { icon: "shield", title: "Verified profiles", text: "Verification badges and easy reporting to help people trust each other." },
    ],
    outcome: ["Buyer and seller flows from listing to sold", "High-fidelity iOS and Android screens", "Prototype of the listing and offer flows", "Trust and safety patterns for verification, ratings and reporting", "Component set for listing cards and chat actions"],
    learned: ["In a local marketplace, trust signals are the product; they belong on every card, not only on the profile.", "Privacy and convenience pulled in opposite directions on location, and showing distance instead of a pin was a fair middle ground."],
  },

  "travel-app-onboarding": {
    tagline: "A travel app first run that shows value before it asks for anything",
    summary: "The onboarding flow for a mobile travel app, from first launch to a saved trip and an account. I redesigned what the app asks, when it asks, and how quickly it shows something useful.",
    seo: {
      title: "Travel App Onboarding: UX case study",
      description: "Onboarding for a mobile travel app. Freelance product designer case study: guest-first exploring, visual interest picking and permissions asked in context.",
      keywords: ["travel app onboarding design", "mobile onboarding UX case study", "app permissions UX", "travel app designer", "freelance product designer for travel", "first-run experience design"],
    },
    context: {
      problem: "Travel apps tend to ask for a lot up front: an account, preferences, a home city, location and notifications. Ask too much and people leave before they see anything; ask too little and the first screen feels generic.",
      audience: [
        { who: "First-time users", need: "To see what the app does before creating an account." },
        { who: "Trip planners", need: "Ideas that fit an upcoming trip, without filling in forms." },
        { who: "Frequent travellers", need: "A quick setup with saved trips and useful alerts." },
        { who: "Privacy-conscious users", need: "A clear reason before granting location or notifications." },
      ],
      goals: ["Show something useful before sign-up", "Personalise with as few questions as possible", "Ask for permissions in context", "Make every step skippable"],
    },
    approach: [
      { title: "Auditing the first run", text: "I reviewed how similar travel apps handle first launch and listed every question and permission they ask for. Most of them came before the user had seen any value." },
      { title: "Deciding what to ask, and when", text: "I sorted each question into needed now, useful later or learnable from behaviour. Only the first group stayed in onboarding." },
      { title: "Designing the first screens", text: "I designed the welcome, interest picker and first tailored screen as one short sequence. Every screen has a skip that still lands somewhere useful." },
      { title: "Prototype and hand-off", text: "I built a clickable prototype of the full first run, including skip and return paths. The hand-off covered permission pre-prompts and the guest-to-account states." },
    ],
    journey: { title: "The first run", steps: ["Opens the app", "Picks travel interests", "Sees tailored trip ideas", "Saves a first trip", "Creates an account"], key: 2 },
    structure: {
      root: "Travel App Onboarding",
      groups: [
        { name: "Welcome", items: ["Value preview", "Skip to explore"] },
        { name: "Personalise", items: ["Travel style", "Interests", "Home city"] },
        { name: "First value", items: ["Tailored ideas", "Save a trip"] },
        { name: "Account", items: ["Sign-up options", "Keep saved trips"] },
        { name: "Permissions", items: ["Location when needed", "Trip alerts"] },
      ],
    },
    decisions: [
      { title: "Sign-up after the first saved trip", problem: "A sign-up wall on launch asks for commitment before people know what the app does.", alt: "Mandatory sign-up before the first screen.", choice: "People explore and save a trip as a guest. The app asks them to create an account at the moment they save, so the trip isn’t lost.", why: "The request comes with an obvious reason. The cost is keeping guest data and merging it at sign-up, which I designed for and flagged to the team early." },
      { title: "Interests as picture tiles", problem: "Preference forms with dropdowns feel like admin and give weak signals.", alt: "A profile form for budget, dates and travel preferences.", choice: "A single screen of tappable picture tiles for travel style, such as beaches, cities, food and outdoors, with budget left until later.", why: "It’s quick and enjoyable, and enough to make the first screen feel personal. Finer preferences are learned from what people save." },
      { title: "Permissions at the moment of use", problem: "Asking for location and notifications on launch gets them denied, and system prompts are hard to show again.", alt: "One onboarding screen that requests every permission together.", choice: "Location is requested when someone taps nearby, and notifications when they save a trip, each with a short pre-prompt explaining the benefit.", why: "A reason tied to an action makes the request make sense. People who say no still have a full app." },
    ],
    features: [
      { icon: "plane", title: "Guest exploration", text: "The whole app is open to browse before any account is needed." },
      { icon: "star", title: "Interest picker", text: "Picture tiles that personalise the first screen in a few taps." },
      { icon: "map", title: "Tailored trip ideas", text: "A first screen shaped by the interests picked a moment earlier." },
      { icon: "bell", title: "Permission pre-prompts", text: "Short explanations shown before each system request, at the right moment." },
      { icon: "lock", title: "Sign-up that keeps trips", text: "Creating an account carries over everything saved as a guest." },
    ],
    outcome: ["Onboarding flow map with skip and return paths", "High-fidelity iOS and Android onboarding screens", "Permission pre-prompt designs and copy", "Clickable prototype of the first run", "Guest-to-account handover states"],
    learned: ["Every onboarding question has to pay for itself on the very next screen.", "Moving sign-up later moved work from design to data handling, so it needed the team’s input early."],
  },

  "coaching-landing-page": {
    tagline: "A coaching page that turns the right visitors into booked calls",
    summary: "A landing page for a coaching business with one goal: a booked discovery call. I structured the page around the reader’s situation, designed the trust and booking sections, and set the copy hierarchy for desktop and mobile.",
    seo: {
      title: "Coaching Landing Page: UX case study",
      description: "Landing page for a coaching business. Freelance product designer case study: a reader-first hero, a clear method and inline booking for discovery calls.",
      keywords: ["coaching landing page design", "coach website case study", "landing page for booking calls", "conversion-focused landing page", "freelance product designer for coaches", "service business website design"],
    },
    context: {
      problem: "Coaching is a personal purchase: visitors need to trust the coach and believe the approach fits them before they book. Many coaching pages lean on vague promises and long biographies, and the booking step comes too late or asks too much.",
      audience: [
        { who: "People feeling stuck", need: "A sign that this coach understands their situation." },
        { who: "Busy professionals", need: "The format, time commitment and next step, found quickly." },
        { who: "Undecided visitors", need: "A low-commitment way to find out more." },
        { who: "The coach", need: "Calls with people who are a good fit." },
      ],
      goals: ["Lead to a booked discovery call", "Say clearly who the coaching is for", "Build trust through the method, not hype", "Keep the page short enough to scan"],
    },
    approach: [
      { title: "Finding the one action", text: "I agreed one goal for the page, a booked call, and removed anything that competed with it. Newsletter sign-ups and social links moved to the footer." },
      { title: "Writing for the reader’s situation", text: "I outlined the copy from the visitor’s point of view: where they are now, what changes, how it works. The coach’s story comes after that, not before." },
      { title: "Designing for trust", text: "I gave the method a clear visual sequence so visitors can see what they are signing up for. Credentials sit beside the coach’s story, where they confirm rather than introduce." },
      { title: "Booking and hand-off", text: "I designed the inline booking and a short intake that follows it. The hand-off included reusable sections for future offers." },
    ],
    journey: { title: "From visitor to booked call", steps: ["Lands from a post", "Recognises their situation", "Reads how coaching works", "Picks a call slot", "Answers a short intake"], key: 1 },
    structure: {
      root: "Coaching landing page",
      groups: [
        { name: "Hero", items: ["Who it’s for", "Book a call"] },
        { name: "Is this you", items: ["Situations", "What changes"] },
        { name: "The method", items: ["Programme stages", "Session format"] },
        { name: "About the coach", items: ["Story", "Credentials"] },
        { name: "Book", items: ["Inline calendar", "Short intake", "Questions"] },
      ],
    },
    decisions: [
      { title: "Lead with the reader, not the coach", problem: "Coaching pages often open with the coach’s biography, asking visitors to care before they feel understood.", alt: "A hero with a portrait, title and credentials.", choice: "The hero names the situations the coaching serves in the reader’s own words, and the coach’s story comes after the method.", why: "Visitors keep reading when they see themselves in the first lines. Credentials then confirm a decision rather than having to start one." },
      { title: "Inline calendar over a contact form", problem: "A contact form adds an email exchange before a call is even booked.", alt: "An enquiry form with a promise to reply.", choice: "A booking calendar on the page showing free slots, with a short intake asked after the slot is picked.", why: "Booking becomes one decision, and the intake still gives the coach context. Asking questions after the slot keeps the commitment step light." },
      { title: "Saying who it isn’t for", problem: "Broad pages attract calls that aren’t a fit and waste time on both sides.", alt: "Speak to everyone to cast the widest net.", choice: "A short section stating who the coaching suits and who it doesn’t, pointing the second group to free resources.", why: "It sharpens the message and builds trust. It may mean fewer calls, but the ones that come are better fits." },
    ],
    features: [
      { icon: "megaphone", title: "Situation-led hero", text: "Opens with the visitor’s situation, not the coach’s title." },
      { icon: "tasks", title: "Clear method steps", text: "The programme laid out as a short sequence of stages." },
      { icon: "calendar", title: "Inline booking", text: "Free call slots on the page, with no form to send first." },
      { icon: "doc", title: "Post-booking intake", text: "A few questions after booking so the coach arrives prepared." },
      { icon: "book", title: "Free resources", text: "A helpful next step for visitors who aren’t ready or aren’t a fit." },
    ],
    outcome: ["Page structure and copy outline", "High-fidelity desktop and mobile designs", "Booking and intake flow screens", "Reusable sections for future offers", "Hand-off with type and spacing specs"],
    learned: ["On a coaching page, the copy is the design; the layout mostly had to stay out of its way.", "Moving questions after the booking made the call feel like a small step."],
  },

  "hero-section-explorations": {
    tagline: "Exploring how the first screen of a website earns attention",
    summary: "A set of website hero section explorations across layout, type and imagery. Every variant answers the same brief, so the trade-offs between patterns are easy to compare. I designed the set as a reference for choosing a hero on future sites.",
    seo: {
      title: "Hero Section Explorations: design study",
      description: "Website hero section explorations in layout, type and imagery. Freelance product designer study comparing hero patterns, with notes on when each one fits.",
      keywords: ["hero section design ideas", "website hero examples", "landing page hero layout", "above the fold design", "freelance product designer for websites", "homepage hero design"],
    },
    context: {
      problem: "The hero carries more weight than any other part of a website: it has to say what the product is, who it’s for and what to do next before the visitor scrolls. Heroes are often chosen by taste or trend, without comparing patterns against the message they need to carry.",
      audience: [
        { who: "Founders launching a site", need: "A hero that explains the product at first glance." },
        { who: "Marketing teams", need: "Patterns they can compare, test and reuse." },
        { who: "Designers and developers", need: "Layouts that hold up across screen sizes." },
      ],
      goals: ["Compare hero patterns side by side", "Keep the message clear in every variant", "Check how each pattern holds on mobile", "Build a set of reusable starting points"],
    },
    approach: [
      { title: "Writing one brief", text: "I wrote a single product message, headline, supporting line and action, and kept it fixed. Only the pattern changed between variants, so comparisons stayed fair." },
      { title: "Sketching patterns wide", text: "I sketched many directions across type-led, image-led, interactive and proof-first heroes. I kept the ones that said something different, not just looked different." },
      { title: "Refining the strongest directions", text: "I took the strongest directions to high fidelity on desktop and mobile. Each one had to keep its headline readable and its action visible without scrolling." },
      { title: "Documenting the trade-offs", text: "I noted when each pattern fits and what it costs, from copy demands to load weight. The set became a reference rather than a gallery." },
    ],
    journey: { title: "What a visitor does in the hero", steps: ["Reads the headline", "Scans the visual", "Checks the proof", "Clicks the main action", "Scrolls for detail"], key: 0 },
    structure: {
      root: "Hero explorations",
      groups: [
        { name: "Type-led", items: ["Oversized headline", "Split headline and detail"] },
        { name: "Image-led", items: ["Product screenshot", "Full-bleed photo", "Line illustration"] },
        { name: "Interactive", items: ["Short product motion", "Live demo"] },
        { name: "Proof-first", items: ["Proof under the action", "Separate proof band"] },
        { name: "Mobile", items: ["Stacked layout", "Sticky action"] },
      ],
    },
    decisions: [
      { title: "Type-led or image-led, by product", problem: "Image-led heroes look rich but can bury the message, while type-led heroes are clear but can feel bare.", alt: "Default to a large product screenshot on every site.", choice: "A rule of thumb: type-led when the product is new or abstract and needs explaining, image-led when the product is visual and the image itself explains it.", why: "The choice follows what the visitor must understand first, not the current trend. Type-led heroes then need stronger copy, which I noted for each variant." },
      { title: "One primary action, one quiet link", problem: "Two equally weighted buttons split attention and make visitors hesitate.", alt: "Two filled buttons side by side, such as Get started and Book a demo.", choice: "One filled primary button, with a secondary action as a text link, and only when it serves a different kind of visitor.", why: "A clear hierarchy speeds up the decision, while the link still catches visitors who aren’t ready to commit." },
      { title: "Motion that explains, not decorates", problem: "Animated heroes catch the eye but can delay reading, distract and slow pages on mobile.", alt: "A background video or looping decorative animation.", choice: "Motion only where it shows the product working, starting after the headline is readable and turned off for people who prefer reduced motion.", why: "Motion has to earn its place by explaining something. Respecting reduced-motion settings keeps the hero accessible." },
    ],
    features: [
      { icon: "layout", title: "Layout variants", text: "Centred, split and asymmetric grids tested against the same message." },
      { icon: "doc", title: "Headline type scales", text: "Type sizes and line lengths tuned so the headline reads at a glance." },
      { icon: "star", title: "Proof placement", text: "A short line of proof under the action compared with a separate proof band." },
      { icon: "spark", title: "Purposeful motion", text: "Short product sequences that start after the headline and respect reduced motion." },
      { icon: "phone", title: "Mobile checks", text: "Every variant redrawn for small screens with the action kept in view." },
    ],
    outcome: ["A set of hero variants built from one fixed brief", "Desktop and mobile versions of each variant", "Notes on when each pattern fits and what it costs", "Reusable hero components with type and spacing tokens"],
    learned: ["Fixing the message and changing only the pattern made the comparison fair and the lessons clear.", "Most heroes improved when I removed something rather than added it."],
  },
};
