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

## Festival artwork and floating actions revision

- All 11 domain tests, JavaScript syntax, static build and JSDOM journey checks passed. The DOM check also confirmed five actions in the final floating navigation.
- Native canvas rendered the new realistic artwork, official Geojit logo, long greeting and all eight names to a 1080×1350 PNG; visually inspected without text/image overlap.
- GitHub Pages deployed bee911a4099511dfdb1620ba5fb87ed922ee18cd successfully. Live app script, stylesheet, icon module and 284,652-byte WebP returned successfully.
- TinyFish run b280a324-db1b-433f-8ec6-b002cc40f766 completed in 42 steps. It reported the new artwork and pictograms visible, opening transition playing, final floating bar visible while scrolling, expert dialog above the bar with working close, and download enabled after preparation. No visible blocking overlap was reported.
- Exact viewport dimensions, 320/390px resizing and iframe checks were unavailable. No screenshot artifact was returned; the returned artwork URL is not a UI screenshot. Tool descriptions of a fish animation reflect its cursor and are not part of the app; the actual app has golden particles and a two-frame photographic transition. Browser console coverage is not claimed.
- A subsequent cache-version change ensures returning visitors fetch the updated stylesheet, app and gift-card renderer; no visual or functional logic changed in that cache-version revision.

## Guided portfolio and Smartfolios revision — 21 October 2026

- All 17 Node tests passed, including allocation budgets, original-basket comparison, shared snapshot privacy/validation and revised stage transitions. Syntax and static build passed.
- Native browser checks on the managed preview verified both entry routes, ₹25,000 allocation (₹20,075.17 invested, ₹4,924.83 unallocated), unwrap before editing, quantity edits, original-basket restoration, review and completion. DIY completed without a second unwrap.
- Verified the floating Muhurat action and dialog, session information, official Smartfolios target and explicit no-transfer/no-order language. No order or external message was submitted.
- Verified names-only sharing by default, opt-in quantities/values and recipient rendering of the actual shared snapshot.
- Desktop screenshot inspected: portfolio summary, branded festive canvas and floating actions visible. Exact mobile viewport testing remains outstanding as stated above.
- Prices and allocation remain illustrative pending approved inputs. The Smartfolios handoff does not submit pre-orders or automatically transfer holdings.
