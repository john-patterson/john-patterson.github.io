# johnppatterson.com

Personal website for John Patterson — a single-page site built with **Vite + React + TypeScript**
and deployed to **GitHub Pages** at [www.johnppatterson.com](https://www.johnppatterson.com).

## Develop

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Editing content

All content lives in `src/data/`:

- `profile.ts` — name, role, tagline, summary, contact links
- `jobs.ts` — work history (Experience section)
- `skills.ts` — skill groups
- `education.ts` — schooling

The résumé PDF served at `/assets/documents/john_patterson_resume.pdf` lives in `public/assets/`.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. The custom domain is preserved via `public/CNAME`.

> One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
