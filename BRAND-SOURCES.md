# Brand and action sources — 20 October 2026

## Design system

https://www.figma.com/design/hDmsIdye34FxtTFpcUOwHu/Geojit---Website-Design-System

Read the file's local text styles, resolved variables and button component metadata through Figma. Button design context and screenshot were retrieved from node 4026:1328.

| Role | Source | Implementation |
|---|---|---|
| Typeface | Web/Mobile text styles | Radio Canada Big |
| Primary action | BG & Surface/CTA/Primary | #09877B |
| Pressed action | BG & Surface/CTA/Primary Pressed | #036057 |
| Primary text | Text/Primary | #022F2D |
| Secondary text | Text/Secondary | #4A6361 |
| Background | BG & Surface/Light Yellow | #FAFAED |
| Card border | Borders & Dividers/Cards | #C9E2E0 |
| Large button | 4026:1328 | 56px, 24px horizontal padding, 999px radius, 16px medium type |
| Medium button | 4026:1335 | 48px, 24px horizontal padding, 999px radius, 14px medium type |

The existing vanilla JavaScript renderer was retained. Component tokens are mapped to native CSS rather than introducing React/Tailwind. Diwali burgundy #713342 and antique gold #D6AE69 are campaign accents layered over brand UI.

## Logo and font assets

- Original uploaded `White_in_Transparent.png`, copied unchanged as `assets/geojit-white.png`. Includes emblem, wordmark and PEOPLE YOU PROSPER WITH tagline. Native image dimensions 290×100 are preserved proportionally. No generated text substitutes for the logo.
- The same PNG is embedded in `src/brand.js` and the static document, avoiding image load/cross-origin errors in standalone previews and canvas exports. PNG export waits for logo and fonts.
- Radio Canada Big weights 400/500/600/700 were retrieved from Google Fonts and bundled locally. The standalone HTML also embeds the fonts. Font license: SIL Open Font License, available with the font family at https://github.com/google/fonts/tree/main/ofl/radiocanadabig .
- Figma's temporary sample button icon downloads returned an unavailable page; these were discarded, not shipped. Product-specific action labels use text arrows. The template's calendar icon is intentionally not used for unrelated actions.

## Verified final actions

- Invest via FLIP: https://flip.geojit.com/ (official Geojit trading login).
- Expert/branch contact: https://www.geojit.com/contact .
- Telephone: 1800 571 5501, listed on the contact page.
- Geojit WhatsApp support: +91 99955 00044, listed on the contact page.

Expert action offers contact routes; it does not claim an appointment or expert connection has been booked. FLIP does not receive or submit the basket. Share actions never send quantities or investment values. Native share success is reported only after the browser promise resolves.

## Festival artwork revision — 20 October 2026

Built-in image generation produced a two-frame realistic saffron gift-box scene. Source asset: assets/gift-diwali.webp (1774×887, 284,652 bytes, optimized WebP). Prompt: a matched closed/open Diwali gift box at an elevated three-quarter angle; saffron embossed gold-foil packaging, champagne satin ribbon, cream/gold nine-compartment interior, realistic lit diyas, marigolds and warm golden bokeh; consistent camera and lighting; no text or logos. The actual Geojit logo is overlaid separately in the exported card.

The site uses a layered closed/open image transition, a brief golden glow and rising particles, with skip and reduced-motion support. Eight original SVG business pictograms replace letter-only stock tiles; these are sector illustrations, not company logos. A persistent completion action bar provides Like, Share, Download, Talk to an expert and Invest via FLIP.
