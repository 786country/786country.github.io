# Naeem Ahmed · Resume & Portfolio

A brick-inspired Astro site about my work in data engineering, technical leadership, and applied AI, grounded in my chemical engineering background.

**Live site:** https://786country.github.io/

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Use the local URL printed by Astro. To build and preview the production site:

```sh
npm run build
npm run preview
```

## Editing the site

- `src/data/resume.ts` — profile, results, projects, experience, skills, and certifications.
- `src/pages/index.astro` — page structure and content.
- `src/styles/global.css` — responsive layout, brick illustrations, and print styles.
- `public/` — favicon and downloadable earlier CV.

Yoco experience and figures are current through 5 November 2026. The downloadable PDF predates Yoco; use the page's print action for the current resume. Yoco's official titles are Senior Data Engineer (Apr 2024–Mar 2026) and Staff Data Engineer (Mar 2026–present), confirmed from the supplied LinkedIn screenshot. Tech Lead is a responsibility held from July 2025. Revotech is listed as current. Entelect's exact end date still needs confirmation. The certification list includes 10 publicly visible LinkedIn entries plus an existing Dataiku Advanced Designer credential; the historical AWS credential is marked expired.

## Deployment

GitHub Actions builds pull requests. Pushes to `main` build `dist/` and publish it to GitHub Pages. No Hugo installation, theme submodules, or Netlify configuration is needed.

## Original site

The complete earlier Hugo site is preserved on [`archive/hugo-site-2026-11-06`](https://github.com/786country/786country.github.io/tree/archive/hugo-site-2026-11-06). It is not used by the Astro build.

## License

MIT; retained upstream license notices are in `LICENSE`.
