# Michael Scott Cohen

The official personal site for Michael Scott Cohen, built with the Next.js App Router and deployed through Vercel.

- Canonical origin: `https://www.michaelscottcohen.com`
- Production branch: `main`
- Primary routes: `/`, `/about`, `/newsletter`, `/insights`, and `/companies`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

Run every release check before creating a preview:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

`npm test` protects canonical-host consistency, stable sitemap dates, route-safe navigation, lazy video embeds, structured data, social-image presence, analytics privacy, and audited accessibility fixes.

## Content architecture

- `src/lib/site.ts` owns the canonical origin and content-update dates.
- `src/lib/content.ts` owns homepage content and public-source links.
- `src/lib/insights.ts` owns first-party operator essays.
- `src/lib/company-pages.ts` owns company-page copy and primary sources.
- `src/app/sitemap.ts`, `robots.ts`, `llms.txt`, and `llms-full.txt` expose crawl and entity-discovery signals.
- `scripts/generate-og.py` regenerates the 1200×630 social image.

Keep public claims attributable to an existing public source. Distinguish company valuation, company revenue, acquisition value, and personal proceeds.

## Analytics

Vercel Web Analytics is integrated without sending subscriber email addresses in custom events. The Vercel project still needs Web Analytics enabled for production collection.

## Release boundary

A successful local build is not a deployment. Create a Vercel preview, review every changed route, and obtain explicit production approval before merging or promoting the deployment.
