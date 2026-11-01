# prashantworks.com

Personal portfolio of Prashant Kumar Singh. Moved off Figma Sites (Oct 2026).

- **Stack:** Vite + React + TypeScript + Tailwind (same as the FynoLabs site).
- **Look:** FynoLabs theme (white, electric blue `hsl(222 90% 54%)`, thin borders, uppercase tracked nav, arrow rows, line drawings).
- **Font:** Inter Tight only: light (300) headlines, regular body. Close to Inter on fynolabs.si.
- **Images:** all 170+ images from the old site are saved in `public/img/` as WebP, so nothing depends on Figma any more.

## Pages

Built to sell: every page ends in a booking, and every page is pre-rendered to real HTML for search engines.

| URL | What |
|---|---|
| `/` | Hero, who I build for, three doors (build / AI data / hire), proof, 4 featured case studies, process, prices, FAQ |
| `/work` | 57 case studies: freelance & studio (filter by AI products / SaaS / Mobile apps / Websites), own products, and in-house work (Ringover, Wispel) kept separate |
| `/work/<slug>` | One in-depth case study per project (see below) |
| `/book` | Embedded Cal.com calendar. `?topic=product`, `data` or `hire` changes the heading |
| `/services`, `/ai-training`, `/about`, `/gallery` | Services and pricing, AI training, experience, 70 screens |

Old Figma-site URLs redirect permanently: `/ringover`, `/vyuu-ai`, `/qrios-x`, `/ai-calls`, `/soc-intelligence`.

## Case studies

- **Data:** the project list is `src/data/projects.ts` (title, type, role, platforms, icon, cover, screens). The writing is in `src/data/cases/*.ts`, keyed by slug: `inhouse.ts` (Ringover, Wispel) and `b1.ts` to `b5.ts`. The shape is `src/data/cases/types.ts`.
- **Each page:** hero illustration, the problem and who it's for, how I worked (4 steps), the main flow, structure, key decisions (considered vs chosen), features, screens, how it was built (when I coded it), outcome and lessons, related work, booking.
- **Illustrations** are drawn from each project's own data, in the house style (hairlines, one blue, hatching = in design, solid blue = shipped): `src/components/CaseArt.tsx` (hero, audience, flow, decisions, build stack, screen placeholders, card covers) and `src/components/Glyphs.tsx` (the icon set).
- **Screens:** projects without saved screens show an illustrated placeholder ("Screens available on request"). To add screens: export PNGs to `Portfolio/<Project>/`, convert them with `scripts-images.py`, and list the keys in the project's `screens` in `projects.ts`.
- **Names:** client names are anonymised (the car repair client, the SOC platform, the AI governance console and others). Names kept: your own products, Figma Community files and names already on your old site.
- **Writing rules** for new case studies: `_notes/case-study-brief.md`.

### Check before publishing
Projects that only had a name in the Portfolio were written from the product type. Read them and correct anything that doesn't match what you did, especially "What was delivered" and the build stacks. Merged duplicates: Briefly (= Briefiq.in), LinkSaver (= Resource Saver / Resourcify), Smart Calendar (= SmartCalendar.io), Safe Bump (= SafeBump), TaskFlow (= Task Management), True-Match (= Dating app), TestGuard (= QA Testing), Video to Blog (= Video Transcriber), Prompt Enhancer (= Prompt Tuner), Agentic SOC Platform (= Cregent); Accioibis is a chapter of the Wispel page.

## SEO

- `npm run build` builds the app, then `scripts/prerender.mjs` writes real HTML for all 64 routes with title, description, canonical, Open Graph and JSON-LD (Person, ProfessionalService with prices, FAQPage, CreativeWork per case study, breadcrumbs), plus `sitemap.xml`, `404.html` and Netlify `_redirects`.
- Metadata lives in `src/seo.ts` (case studies) and `src/seo-pages.ts` (fixed pages).
- After going live: add the site to Google Search Console and submit `https://www.prashantworks.com/sitemap.xml`.

## Edit content

- `src/data/site.ts`: contact details, proof numbers, services, experience, skills, pricing, FAQ
- `src/data/projects.ts` and `src/data/cases/`: case studies
- `src/data/gallery.ts`: gallery images

## Run locally (Windows)

```
npm install
npm run dev        # http://localhost:8080
npm run build      # app + pre-rendered pages in dist/
```

## Go live (free) and cancel Figma

1. Push this folder to a new GitHub repo (e.g. `prashant-software-developer/prashantworks`).
2. Go to vercel.com → Add New → Project → import the repo → Deploy. Defaults are correct (Vite, `npm run build`, `dist`). `vercel.json` already handles page routes.
   - Netlify works too: drag the `dist/` folder onto app.netlify.com/drop. `public/_redirects` handles routes.
3. In Vercel → Project → Settings → Domains, add `prashantworks.com` and `www.prashantworks.com`.
4. At your domain registrar, replace the Figma DNS records with the ones Vercel shows (normally an A record for `@` and a CNAME for `www`).
5. Once the new site loads on prashantworks.com, unpublish the Figma site and cancel the plan.
6. In Google Search Console, resubmit `https://www.prashantworks.com/sitemap.xml`.

## Fixed during the move

- Phone link now matches the number shown (+91 80093 96321).
- One LinkedIn URL everywhere (`/in/prashant-product-engineer/`).
- One project count (22+); "Collaborat" typo gone; short page titles.
- The homepage was set to `noindex` on Figma. It's now indexable, with a sitemap and robots.txt.
- Removed the AI-lab logo wall and named-client mentions on the AI Training page. It now says "frontier AI labs" instead.
