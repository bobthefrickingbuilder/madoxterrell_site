# madoxterrell_site

Profile and sheet-music shop for Madox Terrell, Ottawa composer, vocalist and producer.

## Layout

- `public/` is the deployed site (static, no build step).
- `public/css/tokens.css` holds the design tokens from the Madox Terrell Design System (Night default, Day via `data-theme="day"`).
- `vercel.json` points Vercel at `public/`.

## Deploy on Vercel

1. Import this repo in Vercel.
2. Framework preset: Other. Leave build command empty. Output directory: `public` (already set in `vercel.json`).
3. Production branch: `main`.
4. Add the domain under Project Settings, Domains.

## Next

Shop (PDF scores in CAD, cart, checkout), score detail pages, gallery with comments, About, Contact, Privacy and Refund Policy.
