// Original sector pictograms, not corporate trademarks.
const iconPaths={
 ICICI:'<path d="m3 9 9-5 9 5M4 10h16M5 20h14M7 10v7m5-7v7m5-7v7M3 21h18"/>',
 TECHM:'<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><path d="m10 10-2 2 2 2m4-4 2 2-2 2"/>',
 LT:'<path d="M6 21V3h4v18M3 21h10M6 4h15v4H3l3-4Zm4 0 8 4M19 8v7m-2 0a2 2 0 1 0 4 0"/>',
 EXIDE:'<rect x="3" y="6" width="17" height="14" rx="3"/><path d="M7 3v3m9-3v3m4 5h2v4h-2M12 9l-4 5h4l-1 4 5-6h-4l1-3"/>',
 KALYAN:'<path d="m3 8 4-4h10l4 4-9 13L3 8Zm0 0h18M7 4l5 17 5-17M7 8l5-4 5 4"/>',
 SAGILITY:'<path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 7l-1.3-1.4a5 5 0 0 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1Z"/><path d="M4 12h4l2-3 3 6 2-3h5"/>',
 BEML:'<rect x="5" y="3" width="14" height="15" rx="4"/><path d="M5 11h14M12 3v8M7 22l2-4m6 0 2 4M7 21h10"/><circle cx="8.5" cy="14.5" r=".8"/><circle cx="15.5" cy="14.5" r=".8"/>',
 MOTHERSON:'<path d="m5 10 2-5h10l2 5M3 10h18v8H3v-8Zm3 8v3m12-3v3M3 14h4m10 0h4M8 10h8"/>'
};
const actionPaths={share:'<path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/>',download:'<path d="M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4"/>',expert:'<path d="M4 13v-2a8 8 0 0 1 16 0v2M4 12H2v6h4v-6H4Zm16 0h2v6h-4v-6h2Zm0 6v2h-6"/>',arrow:'<path d="M5 19 19 5M6 5h13v13"/>'};
export function svgIcon(id){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[id]||actionPaths[id]||actionPaths.arrow}</svg>`}
export const FESTIVE_ART='assets/gift-diwali.webp';
