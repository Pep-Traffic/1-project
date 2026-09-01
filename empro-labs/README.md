# Empro Labs — Next.js site

A multi-page Next.js 14 (App Router) site for Empro Labs, a software development agency.

## Pages

- `/` — Home (hero, live pipeline + regions panel, services accordion, process, work, testimonials, contact form)
- `/about` — Company story, animated stats counters, values, team
- `/portfolio` — Filterable project grid (All / Web Development / GHL / WordPress / Shopify / SEO / Ads)
- `/services` — Services overview
- `/services/web-development` — GHL / WordPress / Shopify project showcase with working tabs
- `/services/seo` — SEO service page with an animated traffic-growth chart
- `/services/ads-management` — Ads service page with a live-updating campaign dashboard
- `/contact` — Contact page with a fully validated form

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production build (what Vercel runs)

```bash
npm run build
npm run start
```

This project has already been built and smoke-tested locally with zero errors before delivery.

## Deploying to Vercel

1. Push this project to a GitHub repository (see steps below).
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every future push to your main branch will auto-deploy.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first, then use the URL it gives you in the command above.)

## Notes

- The contact form validates client-side but does not send real emails yet — there's a clear comment in
  `app/contact/ContactForm.js` marking where to wire up a service like Formspree or your own API route.
- Update `hello@emprolabs.dev`, team member names, and portfolio project names/results with your real details
  before going live.
- Google Fonts are loaded via `<link>` tags in `app/layout.js`. If you see a font-related warning during
  `npm run build` in a network-restricted environment, it's safe to ignore — Vercel's build servers can
  reach fonts.googleapis.com normally.
