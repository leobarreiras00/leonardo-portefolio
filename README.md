# Leonardo Barreiras · Portfolio

Personal portfolio of **Leonardo Barreiras**, Junior Software Developer (full-stack .NET, Next.js & Android).

**Live:** [leonardo-barreiras.vercel.app](https://leonardo-barreiras.vercel.app) · **LinkedIn:** [in/leonardo-barreiras](https://www.linkedin.com/in/leonardo-barreiras/)

## Featured work

| Project | What it is | Stack |
| --- | --- | --- |
| **Seatly** | Event seating and guest management platform built for a real client during my internship at 4ITHOLDING (INNOVANOW): REST API, web back office and Android app. 74 functional requirements across 4 Scrum sprints. | .NET 10, C#, EF Core, Next.js, TypeScript, Kotlin, PostgreSQL, MQTT, GitHub Actions |
| **Flipora** | Personal tool that watches OLX, Vinted, Standvirtual and CustoJusto, values listings against real market data and sends Telegram alerts within about a minute. | TypeScript, Cloudflare Workers, Next.js 16, Supabase (PostgreSQL), Telegram Bot API |
| **LBWATCHES** | Catalog and storefront for my own custom watch brand, live at [lbwatches.pt](https://lbwatches.pt). | Next.js 14, TypeScript, Tailwind CSS, Framer Motion |
| **CareSync** | Academic team project: care home management platform deployed on Azure. | ASP.NET Core MVC, Angular, EF Core, SQL Server, Azure |

Seatly, Flipora and CareSync are private repositories (client, personal and team projects). I'm happy to walk through the code in an interview.

## About this site

- [Astro](https://astro.build/) static site, styled with [Tailwind CSS](https://tailwindcss.com/) 4
- All content lives in [`src/data/site.ts`](src/data/site.ts); components only render it
- Optimised images (`astro:assets`), Open Graph and JSON-LD metadata, Vercel Analytics
- Deployed on Vercel

```bash
npm install
npm run dev     # local dev server
npm run build   # production build in dist/
```

Built on top of an open-source Astro portfolio template (MIT licence, see [LICENSE](LICENSE)).
