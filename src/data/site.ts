// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Leonardo Barreiras",
  role: "Junior Software Developer",
  focus: "Full-stack .NET, Next.js & Android",
  location: "Almada, Portugal",
  availability: "Available from November 2026",
  intro:
    "Final-year Computer Engineering student at IPS and software engineering intern at 4ITFUTURE. I build products end to end — APIs, web back offices and Android apps — with a designer's eye for the details users actually notice.",
  email: "leo.gbarreiras@gmail.com",
  resumeUrl: "/LB_CV.pdf",
  siteUrl: "https://leonardo-barreiras.vercel.app",
  socials: [
    { name: "GitHub", url: "https://github.com/leobarreiras00", handle: "leobarreiras00" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/leonardo-barreiras/", handle: "in/leonardo-barreiras" },
  ],
};

export const stats = [
  { value: "69", label: "functional requirements shipped on Seatly" },
  { value: "4", label: "Scrum sprints, solo, end to end" },
  { value: "3", label: "platforms: API, web and Android" },
  { value: "~90", label: "products live on lbwatches.pt" },
];

export type Project = {
  slug: "seatly" | "lbwatches" | "caresync";
  title: string;
  kicker: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "seatly",
    title: "Seatly",
    kicker: "Internship project · 4ITFUTURE · 2026",
    summary:
      "Event seating and guest management platform, built solo from requirements to production: a REST API, a web back office for companies and managers, and an Android app for event staff.",
    highlights: [
      "Delivered 69 functional requirements across 4 Scrum sprints (Jira, Confluence)",
      ".NET 10 REST API with JWT auth and server-side role-based access, documented with OpenAPI",
      "Next.js + TypeScript back office with validated CSV import and filterable audit logs with JSON diffs",
      "Kotlin + Jetpack Compose Android app (MVVM) with offline/online sync",
      "Real-time updates over MQTT and transactional email through the Brevo API",
      "PostgreSQL on Neon; CI with GitHub Actions and protected main; deployed on Render and Vercel",
    ],
    stack: [".NET 10", "C#", "Next.js", "TypeScript", "Kotlin", "Jetpack Compose", "PostgreSQL", "MQTT", "GitHub Actions"],
    links: [
      { label: "Live back office", url: "https://seatly-backoffice.vercel.app" },
      { label: "GitHub", url: "https://github.com/leobarreiras00" },
    ],
  },
  {
    slug: "lbwatches",
    title: "LBWATCHES",
    kicker: "Own brand · in production",
    summary:
      "Catalog and storefront for my custom watch brand. Mobile-first, with WhatsApp as the main conversion channel, and it brings in leads from organic Google search with no paid ads.",
    highlights: [
      "~90 watches across 15 collections, with detail pages and model comparison",
      "Interactive Creator Studio to customise pieces",
      "Technical SEO (sitemap, JSON-LD) and Vercel Analytics",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: [{ label: "lbwatches.pt", url: "https://lbwatches.pt" }],
  },
  {
    slug: "caresync",
    title: "CareSync",
    kicker: "Academic team project · IPS",
    summary:
      "Management platform for elderly care homes: residents, staff, rooms and visits, with billing flows and PDF generation.",
    highlights: [
      "ASP.NET Core MVC with Entity Framework Core over SQL Server",
      "Billing API integration and PDF document generation",
      "Deployed on Azure App Service, SQL Database and Blob Storage",
    ],
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Azure"],
    links: [{ label: "GitHub", url: "https://github.com/leobarreiras00" }],
  },
];

export const experience = [
  {
    period: "Jul 2026 — Oct 2026",
    role: "Software Engineering Intern",
    org: "4ITFUTURE",
    points: [
      "Designed and built Seatly end to end: .NET 10 API, Next.js back office and Kotlin Android app",
      "Migrated the stack from Azure SQL to PostgreSQL (Neon) and from .NET 9 to .NET 10",
      "Set up CI with GitHub Actions, PR-only main branch and continuous deployment",
      "Wrote the requirements spec, a software metrics report (GQM) and a DevOps report with runbooks",
    ],
  },
  {
    period: "Ongoing",
    role: "Founder & Developer",
    org: "LBWATCHES",
    points: [
      "Run a custom watch brand end to end: product, visual identity, content and customer service",
      "Built and maintain lbwatches.pt, which generates leads through organic search",
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
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "Kotlin", "Java", "SQL", "C"] },
  { group: "Backend", items: [".NET 10", "ASP.NET Core", "EF Core", "REST APIs", "JWT / RBAC", "OpenAPI", "Node.js"] },
  { group: "Frontend", items: ["Next.js", "React", "Angular", "Tailwind CSS", "Framer Motion", "SEO"] },
  { group: "Mobile", items: ["Android", "Jetpack Compose", "MVVM", "Offline sync"] },
  { group: "Data & Cloud", items: ["PostgreSQL", "SQL Server", "MySQL", "Neon", "Azure", "Vercel", "Render", "Docker (basics)"] },
  { group: "Practices", items: ["Git & GitHub Actions", "MQTT", "Scrum", "Jira & Confluence", "Requirements engineering", "Technical writing", "UX/UI"] },
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
