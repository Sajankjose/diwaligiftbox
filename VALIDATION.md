# Validation — 20 October 2026

## Executed

- 11 Node domain tests passed: exact price multiplication, duplicate company quantities, six-to-nine expansion, removal, invalid input sanitation, unavailable prices, sector and concentration calculation, five-stage transitions, default name privacy, deterministic dismissible guidance, and feed invalidation.
- JavaScript syntax check passed for application code.
- Static build generated with no dependency installation.
- The shared image renderer was executed using the installed native canvas runtime. Both default and eight-stock cards produced 1080×1350 PNGs. The eight-stock card with a long greeting was visually inspected: text and names fit without overlap.
- The standalone HTML's bundled script was syntax checked.

## Not executed / limitations

Browser control was unavailable in this managed workspace. No browser preview server or alternate browser automation was used. End-to-end clicks, layout screenshots, device breakpoints, real PNG browser downloads, native share sheets, drag/drop, keyboard/focus behaviour and reduced-motion behaviour are implemented but **not browser verified**. No claim of WCAG conformance or production compliance approval is made.

Before approval, check the standalone preview at 360/390/768/1440px, mobile landscape, keyboard only and reduced motion. Add all eight companies; increment quantities; remove/undo; switch themes and search; review by stock and sector; wrap/skip/reveal; edit after completion; refresh and recover draft. Export with names unchecked/checked, a long greeting and all eight names; try native sharing on a supported phone and fallback on desktop. Check browser console errors, focus restoration and any sticky control overlap.

Figma system and official logo assets were unavailable; exact Geojit branding requires review. Market prices and research remain explicitly illustrative/pending. Live price integration, official disclosures and research, analytics consent wiring and service routing must be approved before launch.

## Brand and CTA revision

The earlier Figma/logo limitations are resolved: the real logo and exact colour/type tokens have now been obtained. Radio Canada Big is bundled locally. Header, footer, gift card, pill buttons and final actions have been revised. Missing temporary sample icons were discarded; there are no broken asset URLs in the build.

The four final actions are explicit: Share my gift, Download gift card, Talk to a Geojit expert, Invest via FLIP. The expert dialog links to verified contact options. Export awaits the actual logo and font load. Device/browser QA remains pending because supported browser control is still unavailable.
