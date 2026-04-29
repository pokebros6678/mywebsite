# All Tech'd Out marketing site

Single-page React (Vite + TypeScript) site for an IT services business. Visual base: white/off-white backgrounds with primary accent **#2784F5**. Contact is via **mailto**, **tel**, and external links only (no form backend).

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

- **dev** — local dev server with hot reload  
- **build** — typecheck and output to `dist/`  
- **preview** — serve the production build locally

## Customizing content

- **Branding and copy:** Edit components under `src/components/` (for example `Hero.tsx`, `About.tsx`, `Services.tsx`, `SiteFooter.tsx`, and the logo text in `SiteHeader.tsx`).
- **Contact links:** At the top of [`src/components/Contact.tsx`](src/components/Contact.tsx), set `CONTACT_EMAIL`, `CONTACT_PHONE`, and `LINKEDIN_URL` (or add/remove cards as needed). Use E.164 for `tel:` (e.g. `tel:+14155552671`).
- **Page title and SEO:** Update [`index.html`](index.html) (`<title>`, meta description) and optionally add Open Graph tags when you have a canonical URL and image.

## Lint

```bash
npm run lint
```
