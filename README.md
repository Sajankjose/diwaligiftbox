# Geojit Diwali Wealth Box

Five-stage, dependency-free interactive campaign prototype, evolved from `feature/diwali-wealth-box-prototype` (5cc71cf). The previous add/search/theme/quantity/review/export behaviour is retained and extended.

## Run and build

Requires Node 18+ for tests/build; Python 3 is used only for the optional local server.

```sh
npm test
npm run build
npm start
```

Visit http://localhost:8080. Alternatively, build and open `dist/wealth-box-preview.html` directly in a current browser. The standalone HTML has all styles and scripts embedded and no network dependency. The build commands do not deploy. The user-authorized public deployment is at https://sajankjose.github.io/diwaligiftbox/. GitHub Pages publishes the `feature/diwali-wealth-box-prototype` branch.

## Experience

- Invitation → building → reviewing → revealing → completed, with editing back to the studio.
- Eight retained prototype companies; six compartments, expanding in threes, up to a configurable maximum of 30.
- Whole-share quantities, zero removes, undo, drag-and-drop and tap alternatives.
- Search, six themes, deterministic dismissible guidance and versioned local draft persistence (migration from v1).
- Review by company or sector, concentration and indicative total in integer paise calculations.
- Mobile persistent summary opens a native modal tray. Native dialogs provide focus containment and Escape support.
- 1080×1350 greeting preview and PNG export use the same canvas renderer. Names are opt-in. Values and quantities are never rendered.
- Native file sharing when supported; a clear download-and-attach fallback for WhatsApp. No automatic messages or orders.
- Reduced motion, skip options, visible keyboard focus, quantity announcements and no audio playback.

## Files and component boundaries

- `src/catalogue.js`: stock catalogue, themes, capacity and guidance thresholds.
- `src/model.js`: calculations, state transitions, persistence sanitation, guidance rules, price adapter.
- `src/app.js`: invitation, studio, cards, tray, quantities, review, reveal, composer, dialogs and interaction events.
- `src/gift-card.js`: shared canvas image renderer and Blob conversion.
- `style.css`: responsive campaign styling and motion.
- `build.mjs`: static output and a self-contained preview.
- `tests/model.test.js`: domain regression tests.
- `VALIDATION.md`: evidence and outstanding checks.

## Data and release requirements

All eight prices, including Motherson ₹158.15, are retained **illustrative prototype values**, not independently verified quotations. Every price-facing screen labels this. Business descriptions are illustrative. Approved investment theses, company risks, research dates and source links have not been supplied; the rationale dialog says so explicitly.

`refreshPrices(adapter)` accepts `{id,price}` entries; missing or invalid quotes become unavailable and suppress a definitive total. A production feed must provide authentication, source/as-of timestamps, stale-data policy and consent/security review. After feed updates, dispatch `wealthbox:prices-updated` for re-rendering. There is no connected live feed or periodic refresh in this demo.

The Geojit design-system file was successfully inspected on 20 October 2026. The UI now uses Radio Canada Big (bundled 400/500/600/700), primary #09877B, pressed #036057, text #022F2D/#4A6361, light-yellow #FAFAED and card border #C9E2E0. Primary and secondary actions use the 56px/48px pill button geometry. See BRAND-SOURCES.md. Burgundy, gold and cream remain decorative campaign colours. The actual uploaded white Geojit logo is embedded without recolouring in the header, footer and gift-card export. The box and diyas are local CSS/canvas artwork.

No suitability assessment, brokerage calculation, transaction submission, client lookup or consent-based lead capture is implemented. The final screen provides Like, Share, Download, Talk to a Geojit expert and Invest via FLIP. Expert assistance offers official phone, branch locator and WhatsApp support; FLIP opens its verified login URL without transmitting an order. There is no backend.

## Analytics and privacy

Events dispatch locally as `wealthbox:analytics` CustomEvents. No remote analytics library is loaded. An integrator may set `window.wealthBoxAnalyticsConsent=true` and initialize `window.dataLayer=[]` after obtaining appropriate consent. Events contain action names, company IDs, quantities/capacity and theme, never greeting text or client details. Provider integrations and consent UI remain out of scope.

Drafts are stored only on the visitor's browser. Storage failures are announced. Valid stage hashes restore the saved journey; an empty basket cannot enter review or completion. Browser back/forward navigation preserves the draft. Likes persist on the current device only.

## Publication

The public app is deployed at https://sajankjose.github.io/diwaligiftbox/. Current source changes are synchronized to main and the GitHub Pages publishing branch `feature/diwali-wealth-box-prototype`. See VALIDATION.md for executed checks and remaining launch limitations.
