// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Leonardo Barreiras",
  role: "Junior Software Developer",
  focus: "Full-stack .NET, Next.js & Android",
  location: "Almada, Portugal",
  availability: "Open to work · Available immediately",
  focusCard: "Full-Stack & Edge Systems",
  intro:
    "Final-year Computer Engineering student at IPS. I've just completed a full-stack internship at 4ITHOLDING (INNOVANOW), where I built Seatly for a real client: a .NET API, a Next.js back office and a Kotlin Android app. I take products end to end, with a designer's eye for the details users actually notice.",
  email: "leo.gbarreiras@gmail.com",
  resumeUrl: "/Leonardo_Barreiras_CV_EN.pdf",
  resumePtUrl: "/Leonardo_Barreiras_CV_PT.pdf",
  siteUrl: "https://leonardo-barreiras.vercel.app",
  socials: [
    { name: "GitHub", url: "https://github.com/leobarreiras00", handle: "leobarreiras00" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/leonardo-barreiras/", handle: "in/leonardo-barreiras" },
  ],
};

export const stats = [
  { value: "74", label: "functional requirements shipped on Seatly" },
  { value: "4", label: "Scrum sprints, from requirements to handover" },
  { value: "~1 min", label: "from new listing to Telegram alert on Flipora" },
  { value: "~90", label: "products live on lbwatches.pt" },
];

export type Project = {
  slug: "seatly" | "flipora" | "lbwatches" | "vellum" | "caresync";
  title: string;
  kicker: string;
  summary: string;
  highlights: (string | { label: string; text: string })[];
  stack: string[];
  links: { label: string; url: string }[];
  note?: string;
  banner?: string;
  imageAlt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "seatly",
    featured: true,
    title: "Seatly",
    kicker: "Internship project · 4ITHOLDING (INNOVANOW) · 2026",
    summary:
      "Event seating and guest management platform built for a real client, from requirements to handover: a REST API, a web back office for companies and managers, and an Android app for event staff.",
    highlights: [
      "Delivered 74 functional requirements across 4 Scrum sprints (Jira, Confluence), with technical decisions reviewed by my advisor (CDO) through pull requests",
      ".NET 10 REST API with EF Core and LINQ, JWT auth, server-side role-based access, OpenAPI docs and unit tests",
      "Next.js + TypeScript back office with validated CSV import and filterable audit logs with JSON diffs",
      "Kotlin + Jetpack Compose Android app (MVVM) with offline/online sync and QR code scanning (ML Kit, CameraX)",
      "Real-time updates over MQTT and transactional email through the Brevo API",
      "PostgreSQL on Neon; CI with GitHub Actions and a protected main branch; deployed on Render and Vercel",
    ],
    stack: [".NET 10", "C#", "EF Core", "Next.js", "TypeScript", "Kotlin", "Jetpack Compose", "PostgreSQL", "MQTT", "GitHub Actions"],
    links: [{ label: "Live back office", url: "https://seatly-backoffice.vercel.app" }],
    note: "Client project: the source code is private. Happy to walk through it in an interview.",
    imageAlt: "Seatly back office dashboard with seat validation stats",
  },
  {
    slug: "flipora",
    featured: true,
    title: "Flipora",
    kicker: "SaaS & Arbitrage Engine · 2026 · Production (Daily Use)",
    summary:
      "Real-time multi-category arbitrage & valuation SaaS (iPhones, Watches, Cars & Streetwear). Monitors OLX, Vinted, Standvirtual and CustoJusto 24/7, evaluates listings against live trade-in and econometric market models, and dispatches sub-minute Telegram alerts.",
    highlights: [
      {
        label: "Edge Cron & In-Memory Delta Cache:",
        text: "Cloudflare Worker on a 1-minute fast-lane cron with a 50-subrequest budget, in-memory isolate cache and a `filter_changed_listings` Postgres RPC that cuts database egress by ~85%.",
      },
      {
        label: "Econometric & Dual-Benchmark Valuation:",
        text: "Deduped private-seller market medians (1,157+ prices across 949 sellers with IQR outlier trimming), trade-in priority hierarchy (`MAX(Worten, Fnac)`) and automotive regression models comparing Private vs. Dealer benchmarks across generation years and mileage sweet-spots.",
      },
      {
        label: "Bilingual Clause-Level NLP Lexicon:",
        text: "Deterministic PT/EN defect parser that splits descriptions into grammatical clauses to exclude replaced parts, eSIM-only imports or physical damage while preventing false positives on accessories.",
      },
      {
        label: "Deals Kanban, P&L & DAC7 Tax Ledger:",
        text: "End-to-end inventory pipeline (Bought → In Prep → Listed → Sold) tracking active stock capital, realized ROI per category and annual CSV exports with EU DAC7 tax threshold alerts.",
      },
      {
        label: "Multi-Tenant SaaS & High-Craft UI:",
        text: "Supabase RLS, `FOR UPDATE SKIP LOCKED` atomic alert queues, time-boxed read-only trial accounts, modular category packs, Apple-inspired Liquid Glass UI (0–100% refraction), Dark & Soft-Grey Light themes, instant PT/EN i18n and **673+ automated tests** (`node:test`).",
      },
    ],
    stack: ["TypeScript", "Cloudflare Workers", "Next.js 16", "React 19", "Supabase (PostgreSQL)", "Tailwind CSS", "Telegram Bot API", "Node:test (673+ tests)"],
    links: [],
    banner:
      "Private SaaS behind authentication — Explore the interactive modules above. 7-day read-only trial account or live code walkthrough available on request.",
    imageAlt: "Interactive Flipora showcase: live feed, market curves, deals P&L and settings",
  },
  {
    slug: "lbwatches",
    featured: true,
    title: "LBWATCHES",
    kicker: "Own brand · since 2024 · website since 2026",
    summary:
      "Catalog and storefront for my own custom watch brand: hand-assembled, Seiko-based pieces sold through a mobile-first site with a live Creator Studio. WhatsApp is the main conversion channel, and leads arrive through organic Google search.",
    highlights: [
      "~90 watches across 15 collections, each with a detail page and side-by-side model comparison",
      "Creator Studio: pick case, dial, hands and bezel and watch the build update live, with a Surprise me shuffle",
      "Built for phones first: bottom navigation, collections and models that open as sheets, WhatsApp one tap away",
      "Consent-first cookie banner: analytics and marketing only after an explicit opt-in",
      "Technical SEO (sitemap, robots, JSON-LD) and Vercel Analytics, with 23 customer reviews on the site",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: [{ label: "lbwatches.pt", url: "https://lbwatches.pt" }],
    imageAlt: "LBWATCHES mobile site: storefront, collections, model page and the Creator Studio",
  },
  {
    slug: "vellum",
    featured: true,
    title: "Vellum",
    kicker: "Own product · 2026 · Live",
    summary:
      "Workspace and knowledge platform that combines Notion's blocks, OneNote's notebook hierarchy and Word-grade A4 pagination. Write on a true A4 sheet, draw diagrams in the page, plan on a calendar of its own and export to PDF or Word without reformatting.",
    highlights: [
      {
        label: "A4 editor:",
        text: "TipTap v2 block editor on a 210 × 297 mm sheet with ruler, covers, tables and page breaks, plus a Mermaid studio with split code/preview and figure captions.",
      },
      {
        label: "Exports that keep the layout:",
        text: "PDF through Playwright, Word through `docx`, Markdown and standalone HTML, all from a paginated preview of exactly what comes out.",
      },
      {
        label: "Calendar & effort telemetry:",
        text: "Own calendar with recurrence and important days, and a dashboard that measures real active time, an effort index and editorial cadence with its own SVG charts.",
      },
      {
        label: "RBAC & offline:",
        text: "Better-Auth with five roles (`SUPER_ADMIN`, `OWNER`, `EDITOR`, `COMMENTER`, `VIEWER`) enforced on every Server Action, and an IndexedDB offline queue with conflict resolution.",
      },
      {
        label: "Design system:",
        text: "\"Tactile Editorial Atelier\": five curated themes and eight geometric wallpapers on CSS tokens, Newsreader / Plus Jakarta Sans / JetBrains Mono, a pen-drawn entrance, WCAG AA contrast on every theme, and a full Portuguese (PT-PT) interface.",
      },
    ],
    stack: ["Next.js 15", "TypeScript (strict)", "Tailwind CSS", "Motion", "TipTap v2", "Mermaid", "Prisma", "PostgreSQL (Neon)", "Better-Auth", "Playwright", "Vitest", "Docker", "Railway"],
    links: [{ label: "Live app", url: "https://vellumpt.up.railway.app" }],
    note: "Sign-in required: the source is proprietary (code visible, all rights reserved). A live walkthrough is available on request.",
    imageAlt: "Vellum tour: the pen-drawn entrance, dashboard, A4 editor with Mermaid, calendar, export and five themes",
  },
  {
    slug: "caresync",
    title: "CareSync",
    kicker: "Academic team project · IPS",
    summary:
      "Management platform for elderly care homes: residents, staff, rooms and visits, with billing flows and PDF generation.",
    highlights: [
      "ASP.NET Core MVC and Angular, with Entity Framework Core over SQL Server",
      "Billing API integration and PDF document generation",
      "Deployed on Azure App Service, SQL Database and Blob Storage",
    ],
    stack: ["C#", "ASP.NET Core", "Angular", "EF Core", "SQL Server", "Azure"],
    links: [],
    note: "Team project: the repository is private.",
    imageAlt: "CareSync application screenshot",
  },
];

export const experience = [
  {
    period: "Jul 2026 — Oct 2026",
    role: "Software Development Intern (Full-Stack)",
    org: "4ITHOLDING (INNOVANOW)",
    points: [
      "Built Seatly for a real client: .NET 10 API, Next.js back office and Kotlin Android app (486 hours, hybrid)",
      "Validated requirements and technical decisions with my advisor (CDO) through reviewed pull requests",
      "Migrated the stack from Azure SQL to PostgreSQL (Neon) and from .NET 9 to .NET 10",
      "Set up CI with GitHub Actions, a PR-only main branch and continuous deployment",
      "Wrote the requirements spec, user and technical manuals, a software metrics report (GQM) and a DevOps report, and handed the project over to the company",
    ],
  },
  {
    period: "Jan 2024 — Present",
    role: "Founder & Developer",
    org: "LBWATCHES",
    points: [
      "Run a custom watch brand end to end: product, visual identity, content and customer service",
      "Built and maintain lbwatches.pt (since June 2026), which generates leads through organic search",
    ],
  },
  {
    period: "May 2023 — Jul 2023",
    role: "Sales Associate (part-time)",
    org: "Inditex",
    points: ["Customer service and store operations in a fast-paced, high-volume environment"],
  },
];

export const education = {
  degree: "BSc in Computer Engineering",
  school: "Instituto Politécnico de Setúbal (ESTSetúbal)",
  period: "2022 — Dec 2026 (expected)",
  courses: "Applied Software Engineering, Databases, OOP, Web Programming, Algorithms & Data Structures, Networks, Operating Systems, Information Security",
};

export const skills = [
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "Kotlin", "Java", "SQL"] },
  { group: "Backend", items: [".NET 10", "ASP.NET Core", "EF Core", "LINQ", "REST APIs", "JWT / RBAC", "OpenAPI", "Node.js", "Unit testing"] },
  { group: "Frontend & mobile", items: ["Next.js", "React", "Angular", "Tailwind CSS", "Framer Motion", "Responsive design", "Technical SEO", "Android", "Jetpack Compose", "MVVM"] },
  { group: "Data & Cloud", items: ["PostgreSQL", "SQL Server", "MySQL", "Supabase", "Neon", "Azure", "Vercel", "Render", "Cloudflare Workers"] },
  { group: "Tools & practices", items: ["Git & GitHub Actions", "AI-assisted development", "MQTT", "Telegram Bot API", "Scrum", "Jira & Confluence", "Requirements engineering", "Technical writing", "UX/UI"] },
  { group: "Soft skills", items: ["Rigor & attention to detail", "High standards of quality", "Autonomy", "Client communication", "Teamwork", "Problem-solving"] },
];

export const certifications = [
  { title: "English for IT 1", issuer: "Cisco Networking Academy", hours: "50h", url: "/certificates/IT_ENG.pdf" },
  { title: "Networking Basics", issuer: "Cisco Networking Academy", hours: "22h", url: "/certificates/NB.pdf" },
  { title: "Business Continuity Management", issuer: "NAU", hours: "", url: "" },
  { title: "Data Structures", issuer: "NAU", hours: "25h", url: "https://lms.nau.edu.pt/certificates/e38eb049b47b4e6885b0987e3c14637e" },
  { title: "Database Fundamentals", issuer: "NAU", hours: "25h", url: "https://lms.nau.edu.pt/certificates/eb3c9c19ed154ff1878d624191b6d739" },
  { title: "Introduction to Web Programming", issuer: "NAU", hours: "25h", url: "https://lms.nau.edu.pt/certificates/f6376cce1f4748c7826c8ee2cbb72599" },
  { title: "Introduction to CSS", issuer: "NAU", hours: "21h", url: "https://lms.nau.edu.pt/certificates/2c5a3b1cb1a3413aa06add28efacada8" },
  { title: "Introduction to HTML", issuer: "NAU", hours: "21h", url: "https://lms.nau.edu.pt/certificates/3bd2a6afc7ab4442b855edc51eeb6ed3" },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent (C2)" },
];
