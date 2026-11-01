import type { CaseContent } from "./types";

export const content: Record<string, CaseContent> = {
  "tiksy": {
    tagline: "Every support ticket owned, prioritised and closed without the back-and-forth",
    summary: "TikSy is a ticketing system for support teams: one queue where requests arrive, get an owner and move to resolved. I designed the agent queue, the ticket workspace and the team lead’s overview, and shared the file with the design community.",
    seo: {
      title: "TikSy: support ticketing UX case study",
      description: "TikSy is a ticketing system for support teams. Freelance product designer case study: one queue, clear ownership and a ticket view built for fast replies.",
      keywords: ["help desk ticketing UI design", "support ticketing system case study", "customer support dashboard design", "ticket management UX", "SaaS product designer for startups", "freelance product designer SaaS"],
    },
    context: {
      problem: "Support teams lose time before they write a single reply: finding which tickets are theirs, reading long threads to catch up and checking whether someone else is already on it. When ownership is unclear, tickets get answered twice or not at all. The design had to make the queue readable at a glance and a ticket workable without switching screens.",
      audience: [
        { who: "Support agents", need: "Need to see their own tickets first and reply with the full history in view." },
        { who: "Team leads", need: "Need to spot ageing or unassigned tickets and rebalance work before customers chase." },
        { who: "End customers", need: "Need to know their request was received and what happens next." },
      ],
      goals: [
        "Make the owner of every ticket obvious",
        "Keep the reply and the history on one screen",
        "Surface tickets close to their response target",
        "Give leads a view of load across the team",
      ],
    },
    approach: [
      { title: "Mapping the ticket lifecycle", text: "I listed every state a ticket can be in, from new to reopened, and who moves it between them. That list became the backbone for statuses, filters and notifications." },
      { title: "Designing the queue first", text: "I started with the list view because agents live in it all day. I tuned density, sorting and row content until a ticket’s urgency and owner read in one scan." },
      { title: "Building the ticket workspace", text: "I designed the conversation, internal notes and ticket properties as one screen. Macros, tags and assignment sit beside the reply box so agents never lose their place." },
      { title: "Packaging for the community", text: "I organised the file into reusable components with clear names and every state drawn. Anyone picking it up can build new screens without reverse-engineering the layout." },
    ],
    journey: {
      title: "From new ticket to resolved",
      steps: ["Ticket arrives", "Routed to a queue", "Agent takes ownership", "Reply with full context", "Resolve and confirm"],
      key: 2,
    },
    structure: {
      root: "TikSy",
      groups: [
        { name: "Inbox", items: ["My tickets", "Unassigned", "All open", "Saved views"] },
        { name: "Ticket", items: ["Conversation", "Internal notes", "Properties", "Activity"] },
        { name: "Customers", items: ["Profiles", "Ticket history"] },
        { name: "Reports", items: ["Team load", "Response times", "Backlog"] },
        { name: "Settings", items: ["Queues", "Macros", "SLA rules"] },
      ],
    },
    decisions: [
      {
        title: "Take ownership before replying",
        problem: "In a shared queue, two agents can open the same ticket and both start writing an answer.",
        alt: "Letting anyone reply and showing a warning only after a second reply was sent.",
        choice: "I made assignment the first action: an unassigned ticket opens with a single take-ownership button, and the queue row shows who is viewing or typing in real time.",
        why: "A small step up front is cheaper than a duplicate answer, which confuses the customer and wastes an agent’s time.",
      },
      {
        title: "Notes inline, but impossible to confuse",
        problem: "Agents need internal notes for hand-offs, but a note sent to the customer by mistake is a serious error.",
        alt: "Moving internal notes into a separate tab away from the conversation.",
        choice: "I kept notes inline in the timeline so the story reads in order, but gave them a tinted background and switched the composer’s colour and label in note mode.",
        why: "Notes in a tab get missed at hand-off; a loud mode switch guards against the costly mistake without splitting the history in two.",
      },
      {
        title: "Sort by time left, not time received",
        problem: "A queue sorted newest first buries the older ticket that is about to miss its response target.",
        alt: "Sorting by creation date and offering a separate overdue filter.",
        choice: "I set the default sort to time remaining against the response target, with a countdown chip on each row that changes colour as the deadline nears.",
        why: "Agents work from the top down, so the order of the list is the real prioritisation tool; a filter only helps those who remember to use it.",
      },
    ],
    features: [
      { icon: "ticket", title: "Smart queues", text: "Saved views split tickets by team, priority or channel so each agent sees their own slice." },
      { icon: "users", title: "Collision alerts", text: "Rows show who is viewing or replying so two agents never answer the same ticket." },
      { icon: "doc", title: "Reply macros", text: "Reusable replies fill in customer details and set the status in one step." },
      { icon: "bell", title: "Response timers", text: "A countdown on every ticket shows how long is left before it needs a reply." },
      { icon: "chart", title: "Team load view", text: "Leads see open tickets per agent and move work across with drag and drop." },
    ],
    outcome: [
      "Queue, ticket workspace, customer profile and report screens",
      "Ticket lifecycle with statuses, ownership rules and reopen logic",
      "Component library with states for rows, chips, composer and sidebars",
      "Organised, documented design file shared with the design community",
    ],
    learned: [
      "In a support tool the list view does most of the work, so the row design deserved more time than any single screen.",
      "Safety features like note mode need to be loud. Subtle styling is fine for decoration, not for preventing mistakes.",
    ],
  },

  "inventory-management-system": {
    tagline: "Know what’s in stock, what’s running low and what to reorder",
    summary: "The Inventory Management System tracks items, purchase orders and suppliers for businesses that hold stock across one or more locations. I designed the dashboards, the ordering and receiving flows, and the screens staff use to count stock.",
    seo: {
      title: "Inventory Management System: UX case study",
      description: "An inventory management system for stock, orders and suppliers. Freelance product designer case study: reorder alerts and a receiving flow staff can trust.",
      keywords: ["inventory management dashboard design", "stock management software UX", "operations dashboard case study", "warehouse app UI design", "B2B SaaS product designer", "freelance product designer for SaaS"],
    },
    context: {
      problem: "Inventory goes wrong in small ways that add up: a delivery logged against the wrong item, a count done on paper and typed in later, a reorder nobody placed. Many tools show stock levels but not why they changed or what to do next. The design had to make every movement traceable and turn low stock into a clear action.",
      audience: [
        { who: "Operations managers", need: "Need to see stock health across locations and act on shortages before they affect sales." },
        { who: "Warehouse staff", need: "Need to receive deliveries and count stock quickly on a tablet, without errors." },
        { who: "Purchasing leads", need: "Need to raise orders from what is actually low and follow them through to delivery." },
      ],
      goals: [
        "Make stock levels and their history trustworthy",
        "Turn low-stock signals into purchase orders",
        "Keep receiving and counting fast on smaller screens",
        "Show stock health across locations in one view",
      ],
    },
    approach: [
      { title: "Following the stock", text: "I traced how an item moves: ordered, received, stored, transferred, sold or written off. Each movement became a record type, which kept the data and the screens in step." },
      { title: "Separating desk and floor work", text: "I split the product into planning screens for managers and task screens for staff. They share the same data but not the same layouts, because the jobs are different." },
      { title: "Dashboards built on exceptions", text: "I built the overview around what needs attention: low stock, late orders and count differences. Totals sit lower down because they rarely prompt an action." },
      { title: "Edge cases and handover", text: "I designed partial deliveries, damaged goods and negative stock, which is where inventory tools usually break. The handover documented movement types and status rules alongside the screens." },
    ],
    journey: {
      title: "From low stock to restocked",
      steps: ["Low-stock alert", "Review suggested quantity", "Raise purchase order", "Receive the delivery", "Stock updated with history"],
      key: 3,
    },
    structure: {
      root: "Inventory Management System",
      groups: [
        { name: "Overview", items: ["Stock health", "Alerts", "Locations"] },
        { name: "Items", items: ["Catalogue", "Stock levels", "Movement history", "Variants"] },
        { name: "Orders", items: ["Purchase orders", "Receiving", "Transfers"] },
        { name: "Suppliers", items: ["Directory", "Price lists", "Order history"] },
        { name: "Counts", items: ["Scheduled counts", "Adjustments", "Variance review"] },
      ],
    },
    decisions: [
      {
        title: "Stock as a ledger, not a number",
        problem: "When a stock figure is simply edited, nobody can tell later why it changed or who changed it.",
        alt: "An editable quantity field on the item page.",
        choice: "I made every change a movement with a reason, a person and a time; the stock level is the sum of those movements, with its history one click away.",
        why: "It adds a step to quick fixes, but it turns arguments about the numbers into a lookup.",
      },
      {
        title: "Receive against each order line",
        problem: "Deliveries rarely match the order exactly: short shipments, substitutes and damaged items are common.",
        alt: "A single mark-as-received button on the purchase order.",
        choice: "I designed receiving line by line, with fields for quantity received, damaged and missing, and the order stays partly open until the rest arrives.",
        why: "It is slower than one button, but it keeps stock accurate and gives purchasing a clear record to take back to the supplier.",
      },
      {
        title: "Suggested reorder, human approval",
        problem: "Automatic reordering saves effort but can place a large order on the back of a one-off spike.",
        alt: "Fully automatic purchase orders whenever stock crosses a threshold.",
        choice: "I showed a suggested quantity beside each low-stock item, with the recent usage behind it, and let the purchasing lead adjust and approve in a batch.",
        why: "The system does the maths and the person keeps the judgement, while batch approval keeps the task quick.",
      },
    ],
    features: [
      { icon: "box", title: "Stock by location", text: "Quantities for every item across warehouses and shops, with transfers between them." },
      { icon: "bell", title: "Low-stock alerts", text: "Reorder points per item raise alerts that link straight to a draft purchase order." },
      { icon: "doc", title: "Purchase orders", text: "Create, send and track orders, with partial receiving and supplier notes." },
      { icon: "search", title: "Movement history", text: "Every change to stock has a reason, a person and a time behind it." },
      { icon: "chart", title: "Count variance review", text: "Differences found during counts are listed for review before stock is adjusted." },
    ],
    outcome: [
      "Overview dashboard built around exceptions",
      "Item, purchase order, receiving, transfer and stock count flows",
      "Tablet-friendly layouts for receiving and counting",
      "Movement types and status rules documented for the build",
      "Component set for tables, filters, status chips and forms",
    ],
    learned: [
      "In operations tools the edge cases are the product. Partial deliveries got more of my time than the dashboard.",
      "Showing why a number changed builds more trust than making the number look precise.",
    ],
  },

  "verification-portal": {
    tagline: "Business verification checks with clear status and evidence behind every decision",
    summary: "The Verification Portal lets businesses request checks on companies and individuals, upload documents and follow each check to a decision. It also gives reviewers a workspace to examine evidence and record outcomes. I designed both sides: the client portal and the review workspace.",
    seo: {
      title: "Verification Portal: B2B UX case study",
      description: "A B2B verification portal for requesting and reviewing checks. Freelance product designer case study: clear status tracking and an audit-ready review flow.",
      keywords: ["verification portal UX design", "KYC and KYB dashboard design", "B2B portal case study", "compliance software product design", "document review workflow UI", "freelance product designer B2B SaaS"],
    },
    context: {
      problem: "Verification work stalls in the gaps: a request missing a document, a reviewer waiting on a reply, a client unsure whether anything is happening. Each check involves several documents and several people, and the reasons for a decision must stand up later. The design had to keep requests moving and make every decision explainable.",
      audience: [
        { who: "Business clients", need: "Need to submit checks with the right documents first time and see where each one stands." },
        { who: "Verification reviewers", need: "Need to compare documents and details side by side and record a decision with reasons." },
        { who: "Compliance leads", need: "Need an audit trail showing who decided what, when and on what evidence." },
      ],
      goals: [
        "Get complete requests on the first submission",
        "Make status visible without emails or calls",
        "Give reviewers evidence and decision in one view",
        "Keep a full record of every decision",
      ],
    },
    approach: [
      { title: "Defining what a check is", text: "I broke a verification into its parts: the subject, the required documents, the checks run and the decision. That model shaped both the request form and the review screen." },
      { title: "Starting with intake", text: "I worked on the request flow first, because incomplete requests cause most of the waiting. Requirements adapt to the check type so clients only see what applies to them." },
      { title: "Building the reviewer workspace", text: "I designed a split view with the document on one side and the submitted details and checklist on the other. A decision needs a reason and a note before it can be saved." },
      { title: "Writing the statuses", text: "I defined the status set and wrote plain-language descriptions of each one, for clients and for reviewers. The activity log records every change and sits on the check itself, not in settings." },
    ],
    journey: {
      title: "From request to verified",
      steps: ["Choose a check type", "Upload required documents", "Reviewer checks evidence", "Decision with reasons", "Report shared with client"],
      key: 2,
    },
    structure: {
      root: "Verification Portal",
      groups: [
        { name: "Requests", items: ["New check", "In progress", "Needs action", "Completed"] },
        { name: "Review", items: ["Assigned to me", "Evidence view", "Checklist", "Decisions"] },
        { name: "Reports", items: ["Verification reports", "Downloads"] },
        { name: "Audit", items: ["Activity log", "Decision history"] },
        { name: "Account", items: ["Team members", "Check types", "Billing"] },
      ],
    },
    decisions: [
      {
        title: "Ask for less, but ask correctly",
        problem: "A long generic form makes clients upload documents that don’t apply, and they still miss the ones that do.",
        alt: "One universal request form with a field for every possible document.",
        choice: "I made the form adapt to the check type and the kind of subject, listing only the documents required, each with an example of an acceptable upload.",
        why: "Fewer fields mean fewer mistakes, and an example removes much of the back-and-forth that holds checks up.",
      },
      {
        title: "One clear needs-action status",
        problem: "Clients stopped reading status updates because most of them needed nothing from them.",
        alt: "Showing clients the full internal status set.",
        choice: "I folded internal states into a short client-facing set and gave the needs-action state its own colour, its own tab and an email.",
        why: "Clients care most when the next move is theirs; making that one state stand out is what keeps a check moving.",
      },
      {
        title: "No decision without a reason",
        problem: "A bare approve or reject tells an auditor nothing months later.",
        alt: "Approve and reject buttons with an optional comment.",
        choice: "I required a reason and a short note for every decision, and linked it to the exact documents the reviewer looked at.",
        why: "It adds a little time to each review, but it makes every decision defensible and makes review quality easy to check.",
      },
    ],
    features: [
      { icon: "upload", title: "Guided uploads", text: "Each check lists exactly the documents it needs, with examples of good uploads." },
      { icon: "search", title: "Side-by-side review", text: "Reviewers compare a document with the submitted details without switching screens." },
      { icon: "bell", title: "Action-needed alerts", text: "Clients hear from the portal when they need to do something, not on every change." },
      { icon: "doc", title: "Decision reports", text: "A shareable report shows the outcome, the reasons and the evidence reviewed." },
      { icon: "shield", title: "Full audit trail", text: "Every action is logged with the person, the time and the documents involved." },
    ],
    outcome: [
      "Adaptive request form for each check type",
      "Client dashboard with status tracking and a needs-action tab",
      "Reviewer workspace with split evidence view, checklist and decision form",
      "Status set with client-facing and internal descriptions",
      "Activity log and decision report layouts",
    ],
    learned: [
      "Most delays in verification start at intake, so the form deserved as much care as the review screen.",
      "Clients and reviewers need different words for the same status. Writing both was part of the design, not an afterthought.",
    ],
  },

  "patient-care-app": {
    tagline: "Medicines, appointments and the care team, in the patient’s pocket",
    summary: "The Patient Care App helps people follow their care plan between visits: taking medicines on time, keeping appointments, logging how they feel and messaging their care team. A family member can help too. I designed the iOS and Android app, from onboarding to daily use.",
    seo: {
      title: "Patient Care App: healthtech UX case study",
      description: "A patient care app for medicines, appointments and care team messages. Freelance product designer case study: a calm daily view that keeps care on track.",
      keywords: ["patient app UX design", "healthtech mobile app case study", "medication reminder app design", "healthcare app product designer", "patient engagement app UI", "freelance product designer for healthtech"],
    },
    context: {
      problem: "Most care happens between appointments, at home, with no clinician in the room. Patients leave with instructions on paper, forget doses, lose track of follow-ups and are unsure whether a symptom is worth a message. The app had to make the plan easy to follow for people who may be unwell, tired or not confident with phones.",
      audience: [
        { who: "Patients at home", need: "Need to know what to take and do today, and get help when something feels wrong." },
        { who: "Family caregivers", need: "Need to see whether a parent or partner is on track and help without taking over." },
        { who: "Care teams", need: "Need timely, relevant updates from patients instead of scattered calls." },
      ],
      goals: [
        "Make today’s care plan clear at a glance",
        "Help people keep medicines and appointments on track",
        "Let patients reach the care team with the right context",
        "Stay readable and usable for older and unwell people",
      ],
    },
    approach: [
      { title: "Mapping a day of care", text: "I mapped what a patient does on an ordinary day of treatment: doses, readings, exercises and appointments. That told me the home screen should be a day, not a menu." },
      { title: "Setting rules for low energy", text: "I set rules early: large tap targets, high-contrast text, one task per screen and plain words. Every screen was checked against them before any polish." },
      { title: "Shaping the care team link", text: "I designed messaging and symptom check-ins as guided flows rather than open chat. Patients answer a few simple questions, so the team gets what it needs the first time." },
      { title: "Handover with every state", text: "I delivered screens with empty, missed, overdue and offline states, plus larger-text variants. Those states are where health apps most often feel broken." },
    ],
    journey: {
      title: "A day on the care plan",
      steps: ["Open today’s plan", "Take a dose", "Log how I feel", "Flag a concern", "Care team responds"],
      key: 3,
    },
    structure: {
      root: "Patient Care App",
      groups: [
        { name: "Today", items: ["Care plan", "Doses due", "Check-ins"] },
        { name: "Medicines", items: ["Schedule", "Refills", "History"] },
        { name: "Appointments", items: ["Upcoming", "Visit notes", "Directions"] },
        { name: "Care team", items: ["Messages", "Symptom check-in", "Contacts"] },
        { name: "Profile", items: ["Health details", "Family access", "Accessibility"] },
      ],
    },
    decisions: [
      {
        title: "A timeline of today, not a dashboard",
        problem: "Health apps often open on charts and tiles, which asks a tired patient to work out what matters.",
        alt: "A tile dashboard with medicines, readings, appointments and messages as equal blocks.",
        choice: "I opened the app on a simple timeline of today, each dose or task in time order with a large button to mark it done.",
        why: "Patients think about what to do next; charts can sit one tap away for those who want them.",
      },
      {
        title: "Missed doses without guilt",
        problem: "Red alerts and streak counters can make patients feel judged, and some stop opening the app.",
        alt: "Red overdue warnings and adherence streaks.",
        choice: "I treated a missed dose as a calm prompt with clear options: take it now, skip it or check what to do, using guidance from the care plan.",
        why: "The aim is safe behaviour, not a perfect record, and a neutral tone keeps people coming back after a bad day.",
      },
      {
        title: "Family access the patient controls",
        problem: "Caregivers want visibility, but patients may not want everything shared.",
        alt: "Full shared access to the patient’s account for a family member.",
        choice: "I designed invite-based access where the patient picks what a caregiver can see, such as medicines and appointments but not messages, and can change it at any time.",
        why: "It respects the patient’s privacy while still letting family help, and it keeps the patient in charge of their own care.",
      },
    ],
    features: [
      { icon: "bell", title: "Dose reminders", text: "Gentle reminders with take, skip and snooze options right from the notification." },
      { icon: "calendar", title: "Appointment tracking", text: "Upcoming visits with time, place, preparation notes and a reminder the day before." },
      { icon: "chat", title: "Guided check-ins", text: "Short symptom questions that reach the care team with context attached." },
      { icon: "users", title: "Family access", text: "Caregivers see only what the patient chooses to share." },
      { icon: "heart", title: "Accessible by default", text: "Large text, strong contrast and simple layouts that work for older and unwell people." },
    ],
    outcome: [
      "iOS and Android screens from onboarding to daily use",
      "Today timeline, medicines, appointments and care team flows",
      "Guided symptom check-in flow",
      "Caregiver invite and permissions flow",
      "Larger-text variants and empty, missed and offline states",
    ],
    learned: [
      "Tone matters as much as layout in health. A reminder that sounds like a warning gets ignored.",
      "Designing for the least confident user made the app simpler for everyone else too.",
    ],
  },

  "school-erp": {
    tagline: "Admissions, attendance, fees and results in one system the whole school can use",
    summary: "The School Management ERP brings a school’s daily work into one place: admissions, attendance, timetables, fees, exams and parent communication. Each role sees its own view of the same data. I designed the role-based dashboards and the core flows for administrators, teachers and parents.",
    seo: {
      title: "School Management ERP: UX case study",
      description: "A school management ERP for admissions, attendance, fees and results. Freelance product designer case study: role-based dashboards for staff and parents.",
      keywords: ["school ERP design", "school management software UX", "education SaaS case study", "edtech dashboard design", "role-based dashboard UI", "freelance product designer edtech"],
    },
    context: {
      problem: "Schools often run on a mix of registers, spreadsheets and messaging groups, so one student’s details live in several places. An ERP replaces all of that, but it serves people with very different jobs and very different comfort with software. The challenge was to keep a large system usable by giving each role only what it needs.",
      audience: [
        { who: "School administrators", need: "Need admissions, fees and records in order, with reports ready when they are asked for." },
        { who: "Class teachers", need: "Need to take attendance, enter marks and see their timetable without admin work getting in the way." },
        { who: "Parents and guardians", need: "Need to see attendance, fees due and results, and hear from the school in one place." },
        { who: "School principals", need: "Need a picture of attendance, fees and results across the whole school." },
      ],
      goals: [
        "Give each role a home screen that fits its job",
        "Make daily attendance quick for teachers",
        "Keep every student record in one place",
        "Make fees and results easy for parents to follow",
      ],
    },
    approach: [
      { title: "Listing roles and their jobs", text: "I listed every role in a school and what each does daily, termly and yearly. That split told me what belongs on a home screen and what belongs in a menu." },
      { title: "Designing one student record", text: "I designed the student profile first, since attendance, fees, marks and messages all hang off it. Each module then reads from and writes to that one record." },
      { title: "A home for every role", text: "I designed separate home screens for administrators, teachers, parents and the principal. They share components, but each shows only what that role checks every day." },
      { title: "Module flows and permissions", text: "I worked through admissions, attendance, fee collection and exam results end to end. The handover set out what each role can see and change, alongside the screens." },
    ],
    journey: {
      title: "A teacher’s morning",
      steps: ["Open today’s timetable", "Take class attendance", "Absences sent to parents", "Enter homework or marks", "Review class summary"],
      key: 1,
    },
    structure: {
      root: "School Management ERP",
      groups: [
        { name: "Students", items: ["Admissions", "Profiles", "Attendance", "Documents"] },
        { name: "Academics", items: ["Timetable", "Exams", "Report cards", "Homework"] },
        { name: "Finance", items: ["Fee structure", "Collections", "Dues"] },
        { name: "Communication", items: ["Notices", "Parent messages", "Events"] },
        { name: "Administration", items: ["Staff", "Classes and sections", "Roles and access"] },
      ],
    },
    decisions: [
      {
        title: "Mark the absences, not the class",
        problem: "Marking every student present one by one is slow, and teachers do it every single day.",
        alt: "A list where each student must be marked present or absent.",
        choice: "I made everyone present by default, so the teacher taps only the absent or late students and then confirms the register.",
        why: "Most students are in school on most days, so marking exceptions means far less tapping, while the confirm step still makes the teacher check the full list.",
      },
      {
        title: "Parents get their own view",
        problem: "Opening the full system to parents would confuse them and expose internal detail.",
        alt: "Giving parents a trimmed-down version of the staff interface.",
        choice: "I designed a separate, mobile-first parent view built around their child: today’s attendance, fees due, latest results and school notices.",
        why: "Parents have a handful of questions, and a view made for them answers those faster than any reduced admin screen.",
      },
      {
        title: "Fees as a schedule, not a balance",
        problem: "A single outstanding amount leaves parents unsure what it covers and when each part is due.",
        alt: "A balance figure with a pay button.",
        choice: "I showed fees as a term-by-term schedule with what is paid, what is due next and a receipt for each payment.",
        why: "A schedule answers the questions that would otherwise become calls to the school office, and it gives the admin team a clearer view of dues.",
      },
    ],
    features: [
      { icon: "users", title: "Student profiles", text: "One record holds a student’s details, attendance, fees, marks and documents." },
      { icon: "tasks", title: "Quick attendance", text: "Teachers mark only absent or late students, then confirm the register." },
      { icon: "money", title: "Fee management", text: "Fee schedules, collections, receipts and dues reports for the admin team." },
      { icon: "doc", title: "Exams and report cards", text: "Marks entered by subject feed report cards that parents can view and download." },
      { icon: "bell", title: "Notices to parents", text: "Announcements and absence alerts reach parents in their own view." },
    ],
    outcome: [
      "Home dashboards for administrators, teachers, parents and the principal",
      "Admissions, attendance, timetable, fees and exam result flows",
      "Mobile-first parent view",
      "Permissions set out for each role",
      "Shared component library for tables, forms and charts",
    ],
    learned: [
      "In a large ERP, what each role doesn’t see matters as much as what it does.",
      "Designing the student record first made every module easier, because they all had one place to point to.",
    ],
  },

  "online-learning-platform": {
    tagline: "Online courses designed around finishing, not just starting",
    summary: "The Online Learning Platform hosts courses with video lessons, readings, quizzes and progress tracking, for people studying around work or school. I designed the learner experience, from the course page to the lesson player and progress views, with finishing a course as the main aim.",
    seo: {
      title: "Online Learning Platform: edtech UX case study",
      description: "An online learning platform built around course completion. Freelance product designer case study: a focused lesson player and progress learners can see.",
      keywords: ["online learning platform UX design", "edtech product design case study", "LMS UI design", "course player interface design", "e-learning platform designer", "freelance product designer edtech"],
    },
    context: {
      problem: "Starting a course is easy; finishing it is not. Learners study in short gaps between other commitments, lose their place and drift away when progress feels slow or the next step is unclear. The platform had to make coming back easy and keep each session focused.",
      audience: [
        { who: "Busy adult learners", need: "Need to pick up where they left off in a short session and see that they are moving forward." },
        { who: "Full-time students", need: "Need structure, practice and clear feedback on what they have understood." },
        { who: "Course instructors", need: "Need to see where learners get stuck so they can improve the course." },
      ],
      goals: [
        "Get learners back into a lesson in one tap",
        "Keep lesson screens focused on learning",
        "Make progress visible at module level",
        "Show instructors where learners drop off",
      ],
    },
    approach: [
      { title: "Designing for the return visit", text: "I treated the second visit as more important than the first, since that is where courses are won or lost. The home screen became a resume point, not a catalogue." },
      { title: "Structuring a course", text: "I defined a simple hierarchy of course, module and lesson, with practice at the end of each module. A clear structure makes progress easy to show." },
      { title: "Shaping the lesson player", text: "I put video, notes and transcript together and cut navigation down to previous, next and the outline. Everything else waits until the lesson ends." },
      { title: "Instructor insights and handover", text: "I added a simple view of where learners pause or leave a course. The handover included the course structure rules and every lesson state." },
    ],
    journey: {
      title: "Back to a course",
      steps: ["Open the platform", "Resume last lesson", "Watch and take notes", "Quick check quiz", "Module marked complete"],
      key: 1,
    },
    structure: {
      root: "Online Learning Platform",
      groups: [
        { name: "Home", items: ["Continue learning", "Today’s goal", "Recommended next"] },
        { name: "Course", items: ["Overview", "Modules", "Lessons", "Resources"] },
        { name: "Lesson", items: ["Video", "Transcript", "Notes", "Quiz"] },
        { name: "Progress", items: ["Course progress", "Certificates", "Activity"] },
        { name: "Instructor", items: ["Course builder", "Learner insights", "Questions"] },
      ],
    },
    decisions: [
      {
        title: "Resume first, browse second",
        problem: "A home screen full of new courses tempts learners to start something else instead of finishing what they began.",
        alt: "A catalogue-style home with featured and recommended courses at the top.",
        choice: "I put a single continue card at the top, showing the exact lesson and how much of the module is left, and moved discovery below it.",
        why: "New courses lose some visibility, but the platform’s value depends on learners finishing, and a clear resume point removes the easiest excuse to drift.",
      },
      {
        title: "Short lessons with a natural stop",
        problem: "Long lessons with no clear end point are hard to fit into a short gap in someone’s day.",
        alt: "Long lectures with a scrub bar and chapter markers.",
        choice: "I designed lessons as short units, each ending with a small check and a clear done state, so a learner always stops at a finished point.",
        why: "Finishing a unit feels like progress, and stopping at a clean point makes it easier to come back.",
      },
      {
        title: "Progress by module, not one bar",
        problem: "A course-wide percentage moves slowly and can feel discouraging early on.",
        alt: "A single progress bar for the whole course.",
        choice: "I showed progress as a row of modules, each filling as lessons are done, with the current module expanded.",
        why: "Learners see a near goal they can reach soon, while the shape of the full course stays visible.",
      },
    ],
    features: [
      { icon: "video", title: "Focused lesson player", text: "Video, transcript and notes on one screen, with nothing else competing for attention." },
      { icon: "book", title: "Course outline", text: "Modules and lessons with clear done, current and next states." },
      { icon: "tasks", title: "Practice checks", text: "Short quizzes at the end of each lesson confirm understanding before moving on." },
      { icon: "chart", title: "Module progress", text: "Progress shown per module so learners always have a near goal." },
      { icon: "graph", title: "Instructor insights", text: "Instructors see where learners pause or leave so they can improve lessons." },
    ],
    outcome: [
      "Learner home, course page, lesson player and progress screens",
      "Course, module and lesson structure with lesson states",
      "Quiz and module completion flow",
      "Instructor insights view",
      "Responsive layouts for desktop and mobile web",
    ],
    learned: [
      "In learning products, the return visit is the real onboarding.",
      "Taking things out of the lesson screen helped more than anything I added to it.",
    ],
  },

  "course-marketplace": {
    tagline: "Find, compare and choose the right course without the guesswork",
    summary: "The Course Marketplace brings courses from many instructors into one place and helps learners choose well. I designed search and filters, course pages, comparison and checkout for learners, plus the listing flow for instructors.",
    seo: {
      title: "Course Marketplace: edtech UX case study",
      description: "A course marketplace that helps learners choose with confidence. Freelance product designer case study: search, comparison and course pages people trust.",
      keywords: ["course marketplace UX design", "edtech marketplace case study", "online course discovery UI", "two-sided marketplace product design", "search and filter UX design", "freelance product designer marketplace"],
    },
    context: {
      problem: "When a marketplace has many courses on the same topic, learners struggle to tell them apart. Titles sound alike, ratings cluster near the top and course pages read like adverts. The design had to help people compare on what matters to them and buy with confidence, while giving instructors a fair way to stand out.",
      audience: [
        { who: "Learners choosing courses", need: "Need to compare options on level, outcome, format and time, and trust what they read." },
        { who: "Career switchers", need: "Need a path that fits their starting point, not just one popular course." },
        { who: "Course instructors", need: "Need to list a course clearly and show what makes it different." },
      ],
      goals: [
        "Help learners narrow their choices quickly",
        "Make course pages answer the real questions",
        "Support side-by-side comparison",
        "Give instructors a structured listing format",
      ],
    },
    approach: [
      { title: "Listing the deciding questions", text: "I listed the questions a learner asks before paying: is it my level, what will I be able to do, how long will it take and who teaches it. Every page and filter had to answer one of them." },
      { title: "Search built on those questions", text: "I designed search with filters for level, format, length and outcome. The result card answers the same questions without opening the course." },
      { title: "Ordering the course page", text: "I structured the page from outcome to syllabus to instructor to reviews, with a sticky summary and enrol button. Sales copy is limited to one section the instructor writes freely." },
      { title: "Instructor listing and handover", text: "I designed a guided listing form whose fields map straight onto the course page and the filters. That keeps listings consistent, which is what makes comparison possible." },
    ],
    journey: {
      title: "From search to enrolled",
      steps: ["Search a skill", "Filter by level and format", "Compare shortlisted courses", "Read the course page", "Enrol and start"],
      key: 2,
    },
    structure: {
      root: "Course Marketplace",
      groups: [
        { name: "Discover", items: ["Search", "Categories", "Learning paths"] },
        { name: "Course", items: ["Outcomes", "Syllabus", "Instructor", "Reviews"] },
        { name: "Compare", items: ["Shortlist", "Side-by-side view"] },
        { name: "Account", items: ["My courses", "Wishlist", "Purchases"] },
        { name: "Teach", items: ["Create listing", "Course analytics", "Payouts"] },
      ],
    },
    decisions: [
      {
        title: "Structured listings over free-form pages",
        problem: "When instructors design their own pages, every course describes itself differently and comparison becomes impossible.",
        alt: "A rich-text editor for instructors to lay out their own course pages.",
        choice: "I designed a structured listing form with required fields for level, prerequisites, outcomes, length and format, plus one free section for the instructor’s own voice.",
        why: "Instructors give up some freedom, but learners get comparable pages, and the same fields power the filters and the comparison view.",
      },
      {
        title: "A shortlist that becomes a comparison",
        problem: "Learners open many tabs to compare courses and lose track of which was which.",
        alt: "A dedicated comparison tool reached from a separate menu.",
        choice: "I added a save-to-shortlist action on every result card, and the shortlist opens as a side-by-side table of the structured fields.",
        why: "Comparison grows out of something learners already do, saving things for later, instead of asking them to find a new tool.",
      },
      {
        title: "Reviews that say who wrote them",
        problem: "Star ratings alone don’t tell a beginner whether a course suits a beginner.",
        alt: "An average star rating and a list of the newest reviews.",
        choice: "I tagged each review with the reviewer’s starting level and whether they finished the course, and let learners filter reviews by level.",
        why: "A review from someone like you is worth more than a high average, and showing completion makes reviews harder to game.",
      },
    ],
    features: [
      { icon: "search", title: "Search by intent", text: "Search and filters for level, format, length and outcome." },
      { icon: "layout", title: "Shortlist and compare", text: "Saved courses open as a side-by-side view of their key details." },
      { icon: "star", title: "Reviews by level", text: "Reviews tagged with the reviewer’s starting level and whether they finished." },
      { icon: "map", title: "Learning paths", text: "Ordered sets of courses for a goal, from first steps to advanced." },
      { icon: "cart", title: "Quick checkout", text: "Enrol with saved payment details and start the first lesson right away." },
    ],
    outcome: [
      "Search results, filters and course card design",
      "Course page template built from structured fields",
      "Shortlist and side-by-side comparison",
      "Checkout and enrolment flow",
      "Instructor listing form and dashboard",
    ],
    learned: [
      "In a marketplace, consistent data is a design decision. Structure on the supply side is what makes the demand side work.",
      "Comparison features work best when they grow out of something people already do.",
    ],
  },

  "sih-2024": {
    tagline: "A clickable, demo-ready prototype designed under hackathon time pressure",
    summary: "For Smart India Hackathon 2024 I designed the prototype for our team’s solution: a web product built around one problem statement and judged on a live demo. I owned the flows and the UI, working beside the developers so design and build came together in time for judging.",
    seo: {
      title: "Smart India Hackathon 2024 prototype",
      description: "How I designed a prototype for Smart India Hackathon 2024. Freelance product designer case study: one core flow, built to demo well under time pressure.",
      keywords: ["hackathon prototype design", "Smart India Hackathon 2024", "rapid prototyping UX", "MVP design case study", "product designer for MVPs", "freelance product designer India"],
    },
    context: {
      problem: "A hackathon gives a team very little time to understand a problem, settle on a solution and show it working. Design can easily become the bottleneck, or be skipped and leave developers guessing. I had to produce something clear enough to build from and good enough to explain the idea to judges in a short demo.",
      audience: [
        { who: "Hackathon judges", need: "Need to understand the problem, the idea and why it works within a short demo." },
        { who: "Our developers", need: "Need screens and flows early enough to build against, without waiting for polish." },
        { who: "Intended end users", need: "Need the core task to make sense the first time they see it." },
      ],
      goals: [
        "Agree on one core flow early",
        "Unblock developers with usable screens fast",
        "Make the demo tell a clear story",
        "Keep the UI consistent without a full design system",
      ],
    },
    approach: [
      { title: "Framing in the first hours", text: "I worked with the team to cut the problem down to the single task the product had to do well. Everything else went on a later list we did not touch during the event." },
      { title: "Sketch, agree, then draw", text: "I sketched the core flow on paper and walked through it with the team before opening a design tool. Agreeing the flow first meant no screen was drawn twice." },
      { title: "Designing in build order", text: "I delivered screens in the order the developers needed them, starting with layout and navigation. Shared parts like buttons, inputs and cards came first so the build stayed consistent." },
      { title: "Shaping the demo", text: "I scripted the demo path through the prototype with realistic sample data. The pitch followed the same steps as the user journey, so the story and the product matched." },
    ],
    journey: {
      title: "The demo path",
      steps: ["State the problem", "Show the starting point", "Run the core task", "Show the result", "Share what comes next"],
      key: 2,
    },
    structure: {
      root: "Smart India Hackathon 2024 prototype",
      groups: [
        { name: "Entry", items: ["Sign in", "Quick setup"] },
        { name: "Core task", items: ["Input", "Processing state", "Result"] },
        { name: "Dashboard", items: ["Overview", "History"] },
        { name: "Demo support", items: ["Sample data", "Roadmap screen"] },
      ],
    },
    decisions: [
      {
        title: "One flow, fully finished",
        problem: "With little time, it is tempting to sketch every feature at a low level of detail.",
        alt: "Covering many features with rough, partly working screens.",
        choice: "I designed one core flow end to end with real content and every state it needs, and showed the other features only as a short roadmap screen.",
        why: "Judges remember one thing that works over several that half work, and the developers could build one flow properly.",
      },
      {
        title: "Familiar patterns, no new ones",
        problem: "New interaction patterns need explaining and testing, and there was no time for either.",
        alt: "A custom, distinctive interface to stand out visually.",
        choice: "I used familiar web patterns for navigation, forms and tables, and put the visual effort into typography, spacing and a single accent colour.",
        why: "Familiar patterns let judges focus on the idea rather than learning the interface, and they were faster for the developers to build.",
      },
      {
        title: "Style values before screens",
        problem: "With design and development running at the same time, small visual differences creep in fast.",
        alt: "Handing over finished screens and letting developers pick values from them.",
        choice: "I set a small set of colours, type sizes and spacing values first and shared them with the developers before any full screen was ready.",
        why: "It let the build start in parallel and kept screens consistent even when they were coded before I had drawn them.",
      },
    ],
    features: [
      { icon: "layout", title: "Core flow screens", text: "Every screen of the main task, with loading, empty and error states." },
      { icon: "gear", title: "Shared style values", text: "Colours, type and spacing agreed early so the build stayed consistent." },
      { icon: "chart", title: "Result screen", text: "A clear view of the outcome of the core task, made to be read at a glance during the demo." },
      { icon: "tasks", title: "Scripted demo path", text: "A step-by-step walk-through of the product with realistic sample data." },
      { icon: "spark", title: "Roadmap screen", text: "Features left out of the build, shown as next steps rather than half-built screens." },
    ],
    outcome: [
      "Core user flow designed end to end with all its states",
      "Shared colour, type and spacing values for the developers",
      "Clickable prototype for the team’s demo",
      "Demo script aligned with the user journey",
    ],
    learned: [
      "Under time pressure, deciding what not to design is the most useful design work.",
      "Sharing style values before screens let design and development run side by side instead of taking turns.",
    ],
  },

  "crowdfunding-platform": {
    tagline: "Back ideas you believe in, with clear goals and updates you can trust",
    summary: "The Crowdfunding Platform lets creators raise money for projects and lets backers find, fund and follow them. I designed the campaign page, the pledge flow, the creator’s campaign builder and the updates that keep backers informed after they pay.",
    seo: {
      title: "Crowdfunding Platform: fintech UX case study",
      description: "A crowdfunding platform for creators and backers. Freelance product designer case study: a campaign builder, a clear pledge flow and updates after funding.",
      keywords: ["crowdfunding platform UX design", "fintech product design case study", "pledge and donation flow design", "campaign page UI design", "marketplace product designer", "freelance product designer fintech"],
    },
    context: {
      problem: "Crowdfunding asks people to pay now for something that may arrive months later, or not at all. Backers need reasons to trust a campaign, and creators, often doing this for the first time, need help telling their story and setting realistic goals. The design had to build trust on both sides and keep it after the money changed hands.",
      audience: [
        { who: "Project creators", need: "Need to set up a clear campaign, reach their goal and keep backers informed." },
        { who: "Campaign backers", need: "Need to judge whether a project is credible and know what they get for their pledge." },
        { who: "Platform team", need: "Need to review campaigns and handle disputes and refunds fairly." },
      ],
      goals: [
        "Make every campaign’s goal, rewards and risks clear",
        "Keep the pledge flow short and safe",
        "Help first-time creators build a credible campaign",
        "Keep backers informed after funding",
      ],
    },
    approach: [
      { title: "Mapping trust on both sides", text: "I mapped what each side worries about: backers about losing money, creators about failing in public. Each worry became a requirement for a screen." },
      { title: "Fixing the campaign page", text: "I designed the campaign page as the centre of the product, with goal, progress, rewards, creator and risks in a fixed order. Every campaign follows it, so backers always know where to look." },
      { title: "Builder and pledge flows", text: "I designed a step-by-step builder for creators and a short pledge flow for backers. Each one shows a preview of what the other side will see." },
      { title: "Designing what happens after", text: "I designed the updates feed, delivery tracking and refund requests that start once funding closes. The handover described every campaign state from draft to fulfilled." },
    ],
    journey: {
      title: "From discovery to pledge",
      steps: ["Discover a campaign", "Check goal and creator", "Choose a reward", "Pledge securely", "Follow project updates"],
      key: 1,
    },
    structure: {
      root: "Crowdfunding Platform",
      groups: [
        { name: "Explore", items: ["Categories", "Trending", "Ending soon"] },
        { name: "Campaign", items: ["Story", "Rewards", "Creator profile", "Updates"] },
        { name: "Pledge", items: ["Reward choice", "Payment", "Confirmation"] },
        { name: "Creator studio", items: ["Campaign builder", "Backer list", "Post update", "Payouts"] },
        { name: "Backer account", items: ["My pledges", "Saved campaigns", "Refunds"] },
      ],
    },
    decisions: [
      {
        title: "A required risks section",
        problem: "Campaign pages tend to show only the upside, so backers feel misled when delays happen.",
        alt: "Leaving risks as an optional part of the story for creators to include if they choose.",
        choice: "I made a short risks and challenges section required on every campaign, placed just above the rewards, with prompts to help creators write it.",
        why: "It asks creators to be candid, which can feel uncomfortable, but it sets expectations early and makes later delays easier for backers to accept.",
      },
      {
        title: "When you’re charged, in plain words",
        problem: "Backers often don’t know whether they are charged now or only if the goal is reached.",
        alt: "Explaining the funding model on a help page linked from the footer.",
        choice: "I put a one-line explanation of when the card is charged next to the pledge button and again on the confirmation screen, matched to the campaign’s funding model.",
        why: "Surprises about money break trust faster than anything else, and the fix costs one line where the decision is made.",
      },
      {
        title: "Live preview while building",
        problem: "Creators write long stories and only see how the page looks once it is live.",
        alt: "A separate preview mode reached at the end of the builder.",
        choice: "I designed the builder with a live preview of the campaign page beside each step, including how it looks on a phone.",
        why: "Creators fix problems as they write rather than after launch, so the page backers see is closer to what the creator intended.",
      },
    ],
    features: [
      { icon: "money", title: "Funding progress", text: "Goal, amount raised, number of backers and time left, all in one block." },
      { icon: "star", title: "Reward tiers", text: "Rewards with what is included, any limits and estimated delivery." },
      { icon: "lock", title: "Clear pledge flow", text: "A short checkout that states when and how the backer is charged." },
      { icon: "megaphone", title: "Creator updates", text: "Creators post progress to backers, with delivery status alongside." },
      { icon: "layout", title: "Campaign builder", text: "Step-by-step setup with a live preview of the campaign page." },
    ],
    outcome: [
      "Explore, campaign page and pledge flow screens",
      "Step-by-step campaign builder with live preview",
      "Updates feed, delivery tracking and refund request flows",
      "Campaign states from draft to fulfilled",
      "Responsive layouts for campaign and pledge pages",
    ],
    learned: [
      "In money products, the words next to the pay button carry more weight than any visual design.",
      "Asking creators to name their risks felt like friction at first, but it is what makes the platform worth trusting.",
    ],
  },

  "executive-search-website": {
    tagline: "A discreet, credible website for a firm that places senior leaders",
    summary: "The Executive Search Website presents a recruiting firm that places senior leaders. It speaks to two audiences, companies hiring for top roles and executives open to a move, and gives each a confidential way to start a conversation. I designed the site structure, page layouts and content hierarchy.",
    seo: {
      title: "Executive Search Website: B2B UX case study",
      description: "A website for an executive search firm serving companies and senior candidates. Freelance product designer case study: two clear paths, discreet enquiries.",
      keywords: ["executive search website design", "recruitment firm website UX", "B2B website case study", "professional services website design", "website designer for consultancies", "freelance product designer websites"],
    },
    context: {
      problem: "Executive search is sold on trust and discretion, yet many firm websites look alike, with stock photos of handshakes and vague claims about finding the best talent. The site had to serve two very different visitors, a company leader with a critical hire and an executive weighing a move, without mixing their messages. Confidentiality had to be felt in the design, not just stated.",
      audience: [
        { who: "Boards and CEOs", need: "Need to judge quickly whether the firm understands their sector and the level of the hire." },
        { who: "HR and talent leaders", need: "Need to see how a search runs, what each stage involves and how the firm reports back." },
        { who: "Senior candidates", need: "Need a discreet way to register interest without it becoming public." },
      ],
      goals: [
        "Give hiring companies and candidates separate, clear paths",
        "Show expertise through sectors and process, not claims",
        "Make enquiries feel confidential",
        "Keep the site easy for the firm to update",
      ],
    },
    approach: [
      { title: "Splitting the audiences", text: "I mapped what a hiring company and a senior candidate each need to see before getting in touch. The two lists overlapped very little, which settled the site’s structure." },
      { title: "Content before layout", text: "I set out each page’s content hierarchy (headings, proof points and calls to action) before any visual design. Layouts were then shaped around real copy lengths." },
      { title: "A quiet visual language", text: "I chose a restrained palette, generous spacing and strong typography to signal discretion and seniority. Imagery shows places and work rather than posed people." },
      { title: "Templates for the firm", text: "I designed reusable templates for sector pages, articles and team profiles so the firm can add content without new design work. The handover included content guidance for each template." },
    ],
    journey: {
      title: "A hiring company’s path",
      steps: ["Land on the homepage", "Choose the hiring path", "Read the sector page", "See how a search runs", "Request a confidential call"],
      key: 4,
    },
    structure: {
      root: "Executive Search Website",
      groups: [
        { name: "Home", items: ["Two audience paths", "Sectors", "How a search runs", "Contact prompt"] },
        { name: "For companies", items: ["Sectors", "Search process", "Leadership roles"] },
        { name: "For candidates", items: ["Working with us", "Confidential registration"] },
        { name: "Insights", items: ["Articles", "Market notes"] },
        { name: "Firm", items: ["Team", "Values", "Contact"] },
      ],
    },
    decisions: [
      {
        title: "Two doors on the homepage",
        problem: "One message for both companies and candidates ends up vague for both.",
        alt: "A general homepage with the audience pages tucked away in the navigation.",
        choice: "I split the homepage just below the hero into two clear paths, one for companies hiring and one for executives, each leading to its own section and call to action.",
        why: "Visitors choose their path in one click and then read only what is relevant to them, at the cost of a slightly longer homepage.",
      },
      {
        title: "Process instead of promises",
        problem: "Claims about finding the best leaders are made by every firm and prove nothing.",
        alt: "A homepage built on bold claims and a wall of client logos.",
        choice: "I gave the search process its own page, setting out each stage, what the firm does in it and what the client receives, as a clear vertical timeline.",
        why: "Showing how the work is done convinces a board more than adjectives do, and it answers questions before the first call.",
      },
      {
        title: "A confidential form that asks little",
        problem: "Senior candidates hesitate to share details on a website, and a long form with a CV upload feels exposed.",
        alt: "A full candidate registration form with CV upload as the first step.",
        choice: "I designed a short first-contact form with name, current role level and a private contact method, plus a clear note on how details are handled; the CV comes later, on request.",
        why: "Asking for less lowers the barrier for people who value discretion, and the firm gets the full picture in conversation anyway.",
      },
    ],
    features: [
      { icon: "users", title: "Audience paths", text: "Separate routes for companies hiring and for executives considering a move." },
      { icon: "layout", title: "Sector pages", text: "Each sector page shows the roles the firm handles and how it approaches them." },
      { icon: "tasks", title: "Search process timeline", text: "Every stage of a search set out with what happens and what the client gets." },
      { icon: "lock", title: "Confidential enquiries", text: "Short forms with a clear note on how personal details are handled." },
      { icon: "book", title: "Insights section", text: "Articles and market notes that show the firm’s thinking." },
    ],
    outcome: [
      "Site map and content hierarchy for every page",
      "Homepage, company, candidate, sector, process and insights page designs",
      "Confidential enquiry and candidate registration forms",
      "Reusable templates for sector pages, articles and team profiles, with content guidance",
    ],
    learned: [
      "For a professional services firm, restraint signals seniority. Removing elements did more for credibility than adding them.",
      "Writing the content structure first kept the layouts from being designed around placeholder text.",
    ],
  },
};
