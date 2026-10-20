# Validation — 20 October 2026

## Executed

- All 11 Node domain tests passed: exact paise multiplication, duplicate quantities, expansion, removal, restore sanitation, missing prices, composition, stage transitions, name privacy, guidance and feed invalidation.
- Application JavaScript syntax and static build passed.
- A JSDOM interaction check passed against the built standalone app: complete journey, eight companies, full-tray expansion, direct quantity entry, invalid input rejection, remove/undo, mobile tray actions, review, reveal, final CTAs, persistent local Like, official expert contact and retained edits. Dialog and reduced-motion APIs were stubbed. This does not test CSS layout or native browser functionality.
- Shared image renderer previously generated default and eight-stock 1080×1350 cards with the actual Geojit logo. A long greeting with all names was visually inspected for overlap.
- Geojit logo and Radio Canada Big fonts are local assets. Colour and typography tokens match the supplied Figma system.

## Responsive and interaction changes

Consolidated stylesheet; desktop tray scrolls within the viewport; mobile/tablet tray uses a dialog and safe-area-aware summary; cards stack at narrow widths; long monetary values wrap; quantities can be entered directly. Added selected-company filtering, result counts, focus/scroll preservation, browser history, cancellable reveal timers and async gift-image readiness. Share uses a prepared image to retain browser user activation. Like persists only on the current device; no global count is implied.

## Browser verification

TinyFish completed live QA for deployed commit cffe2d4880b811bedda04bb9630a64f3ef70dabd in 74 steps (309 seconds), run 2ef9dac3-5e73-438d-b50f-1ad5e5107bc5. It reported no blocking defects and confirmed adding all eight companies, expansion, increments, remove/undo, review, wrap/unwrap/skip, greeting edits, opt-in names, visible Geojit logo on the card, Like toggling, download initiation via Blob URL, share fallback, expert dialog/close and FLIP target. No messages or orders were sent.

The run reported an approximate desktop viewport of 1920×1360 and no visible clipping or overflow. Exact viewport resizing was unsupported. Its mobile/tablet descriptions did not establish reproducible dimensions, so they are NOT counted as verified breakpoint tests. Explicit 320×700, 390×844 and 768×1024 layout checks remain outstanding, including fixed mobile-summary overlap. Native mobile share sheets and downloaded-file inspection were not verified by this run. No screenshot artifacts were returned.

## Launch scope

This is a public interactive campaign app. Prices and company descriptions remain clearly illustrative. It does not place investment orders or transfer shares. Geojit-approved research, current prices and required campaign disclosures must be supplied before using it as an investment recommendation campaign. No WCAG or compliance certification is claimed. Native share-sheet completion remains device-dependent.
