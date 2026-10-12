# Madox Terrell Design System

Madox Terrell is an Ottawa composer, vocalist and producer who writes for choirs, records under the name **Madox**, and sells sheet music as PDF downloads (priced in CAD). The system carries **one website** for two sides of one musician: choral writing and electronic production. **Night** is the default theme; **Day** is the light variant for print, mail and light-mode requests.

## Sources
- Local folder `madox-terrell-design-system/` (attached, read-only): `README.md`, `tokens.json`, `tokens.css`, `components/bundle.css`, `components/bundle.js` (namespace `MadoxUI`), per-component `README.md` + `preview.html` for Button, Chip, Field, SiteHeader, ScoreCard, Waveform, and a `Cover` preview (brand banner).
- No Figma, no GitHub repo, no logo file, no font files were provided.

## Index
- `styles.css` — entry point (imports only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css` (Night + `[data-theme="day"]`), `typography.css` (tokens + type classes), `spacing.css` (space, radius, focus, motion), `base.css` (body, focus ring, links)
- `components/components.css` — component classes (`mx-*`)
- `components/actions/Button`, `components/forms/Chip`, `components/forms/Field`, `components/navigation/SiteHeader`, `components/shop/ScoreCard`, `components/brand/Waveform` — each `.jsx` + `.d.ts` + `.prompt.md` + card
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/cover-banner.html` — the source Cover banner (brand graphic)
- `ui_kits/website/` — Home, Scores, Cart/checkout, Contact click-through
- `SKILL.md` — Agent Skill entry

## Components
- **Button** — `variant`: primary (action fill, one per viewport) / light (ink fill, Listen/Watch) / outline (secondary); `href` renders a link.
- **Chip** — filter toggle; selected = violet fill + check mark.
- **Field** — labelled input/textarea; `help`, `error` ("Error: …", icon, 4px ink border).
- **SiteHeader** — name, nav (Works, Listen, Scores, Gallery, About, Contact), cart icon + count.
- **ScoreCard** — 340px PDF score listing with cover panel, CAD price, Add to cart.
- **Waveform** — decorative hero motif, once per page, static.

Intentional additions: none. `SiteHeader` gained optional `onNavigate`/`onCart` callbacks and `ScoreCard` an optional `href` (title link, per its README); `Field` error note now includes an icon as the source README requires ("the word Error, an icon and a heavier border"). The source `Cover` has no component code; it is kept as a brand asset card.

## Content fundamentals
- Direct, plain voice. No filler adjectives ("passionate", "unique"). State what was written, for whom, and when.
- Real facts only: titles, years, ensembles, venues. Reference copy: "Choral and electronic music, written, sung and produced in Ottawa." · "Digital download, instant delivery." · "Commission a new work".
- Naming: "Madox" on records, "Madox Terrell" everywhere else.
- Person: third person in biography; second person in shop and contact copy.
- Works in *italics* in running text (*Lost in Translation*); plain titles in cards and lists.
- Casing: sentence case for titles and button labels; eyebrows uppercase with 0.16em tracking.
- Currency: `$4.00 CAD` — dollar sign, two decimals, code.
- Missing facts are bracketed placeholders in `ink-muted`: [email address], [price], [First page of score]. Never invent dates, reviews, statistics or recordings.
- No emoji, ever.

## Visual foundations
- **Colour (Night):** surface #313d5a navy, surface-alt #264027 forest, ink #d5ecd4 mint, ink-muted #a1b0ab sage, accent #6d9dc5 sky, violet #73628a, action #944654 wine, on-fill #f2f9f1 paper, line #6b6054 taupe. **Day** swaps surfaces to mint/paper, ink to forest, accent to wine.
- **Rules:** alternate sections between `surface` and `surface-alt` so no screen is one flat field. `accent` only at 24px+ (19px bold+) or as decoration — surname in the hero, prices, large headings, active-nav underline, waveform bars. `violet` and `action` are fills only, with `on-fill` text; `action` once per viewport (primary CTA, latest-release block). Never `accent` on `violet`. `line` is decorative hairline only. State = fill vs outline + check mark, never hue alone. No error colour: errors use the word "Error", an icon and a heavier border.
- **Type:** display = Martian Mono (monospaced; replaces the originally specified Monoglyphic) for titles, eyebrows, prices, metadata, cart count. Sans = Figtree for body, labels, nav, buttons. Monospace is wide: budget ~0.62em per character; break names at the space. Scale: hero-name 120/114 800, display-xl 72/78 800, display-lg 52/58 600, display-md 36/44 600, score-title 28/36 600, price 28/32 600, eyebrow 14/20 600, meta 15/22 500, body-lg 20/32, body 18/29, small 15/22, label 15/20 600, button 17px 600.
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, 96. Container 1240px, gutter space-8 (space-4 below 640px). Sections space-24 vertical. Card padding space-6 (large cards space-12); gaps space-6.
- **Shape:** cards 20px, cover panels 12px, buttons/chips/waveform bars pill, fields 4px.
- **Cards:** `surface-alt` fill, 1px `line` border, 20px radius, no shadow. Feature cards are flat `violet` or `action` fills.
- **Shadow:** a single token, `shadow-cover` (0 14px 32px rgba(0,0,0,.35)), only to lift a `panel-light` score cover so a white scan reads as paper. No other elevation; no inner shadows.
- **Backgrounds:** flat colour fields. No gradients, textures, photography rules or blur/transparency defined. The brand graphic (Cover) is flat rounded colour blocks plus waveform pills.
- **Imagery:** score scans (white paper) on mint panels; release artwork placeholders. No colour grading guidance supplied.
- **Motion:** sections fade and rise 16px over 400ms on scroll entry; page changes cross-fade 200ms; buttons/chips transition background 200ms. Waveform never animates. All motion off under `prefers-reduced-motion`.
- **Hover/press:** not specified in the source beyond the 200ms background transition; no shrink or opacity press. Disabled = 50% opacity.
- **Focus:** 3px solid `focus` ring, 3px offset, on every interactive element.
- **Targets:** ≥44px; buttons and fields 48px high.
- **Links:** body links are `ink` with an `accent` underline.

## Iconography
- Inline SVG, 2px round-capped/joined strokes in `currentColor`, 24px viewBox (cart icon at 22px; chip check uses 3px stroke at 14px).
- Social icons (Facebook, Instagram) are filled single-colour marks in `ink` — **no files were supplied**; the UI kit uses text links instead.
- No icon font, no PNG icons, no emoji, no unicode glyphs as icons (the middle dot "·" is used as a metadata separator, e.g. "PDF · Intermediate").
- No external icon set is specified. If more icons are needed, Lucide (2px round stroke) is the closest match — flagged substitution, not yet used.

## Logo
No logo was provided. The name is set in type: "Madox Terrell" in the display face (700, 18px in the header; hero-name with the surname in `accent`).

## Fonts
Display: **Martian Mono** (Google Fonts), chosen in place of Monoglyphic, which was never supplied. Body: **Figtree** (Google Fonts).
