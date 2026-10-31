// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Leonardo Barreiras",
  role: "Junior Software Developer",
  focus: "Full-stack .NET, Next.js & Android",
  location: "Almada, Portugal",
  availability: "Open to work · available from November 2026",
  currently: "Open to work",
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
  slug: "seatly" | "flipora" | "lbwatches" | "caresync";
  title: string;
  kicker: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  note?: string;
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
    kicker: "Personal project · 2026 · in daily use",
    summary:
      "A private tool that spots underpriced listings for resale. It watches OLX, Vinted, Standvirtual and CustoJusto around the clock, values each listing against real market data and alerts me on Telegram within about a minute.",
    highlights: [
      "Cloudflare Worker on a per-minute cron, with a job dispatcher and a budget of 50 subrequests per run",
      "Market values built from hundreds of private sellers (one price per seller, shops and outliers excluded), compared with trade-in offers",
      "Supabase (PostgreSQL) with RLS, RPC functions and an alert queue with atomic claiming (FOR UPDATE SKIP LOCKED)",
      "Mobile-first Next.js 16 / React 19 app: listings, favourites with price-drop tracking, a deals board, market analysis and per-member access",
      "Telegram bot with a topic per category, inline actions and a morning digest",
      "Per-platform circuit breaker, stalled-job alarms, automated tests (node:test) and CI; built with AI-assisted development and code review",
    ],
    stack: ["TypeScript", "Cloudflare Workers", "Next.js 16", "React 19", "Supabase", "PostgreSQL", "Tailwind CSS", "Telegram Bot API", "GitHub Actions"],
    links: [],
    note: "Private tool behind a login: screenshots from the live app. Code walkthrough on request.",
    imageAlt: "Flipora mobile screens: listings, market analysis and a Telegram alert",
  },
  {
    slug: "lbwatches",
    title: "LBWATCHES",
    kicker: "Own brand · since 2024 · website since 2026",
    summary:
      "Catalog and storefront for my custom watch brand. Mobile-first, with WhatsApp as the main conversion channel, and it brings in leads from organic Google search with no paid ads.",
    highlights: [
      "~90 watches across 15 collections, with detail pages and model comparison",
      "Interactive Creator Studio to customise pieces",
      "Responsive design, technical SEO (sitemap, JSON-LD) and Vercel Analytics",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: [{ label: "lbwatches.pt", url: "https://lbwatches.pt" }],
    imageAlt: "LBWATCHES website showing the watch catalog",
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
