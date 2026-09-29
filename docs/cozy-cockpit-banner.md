# Cozy Cockpit banner refresh — September 28, 2026

The studio card uses a responsive composition of the current Cozy Cockpit campaign artwork, replacing the old logo and cockpit screenshot. The wordmark and aircraft keep their natural aspect ratios. On phones the logo sits above the aircraft; the actions remain below the artwork at every size.

## Asset sources

Primary source: [Cozy Cockpit Figma file](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=0-1). The current Banner01 and Banner02 were visually inspected in Figma. The connector's Starter-plan limit prevented a fresh export, so the assets are byte-for-byte copies of the documented Figma exports already in the adjacent CozyCockpitWeb project (`docs/website-asset-provenance.md`, September 26 refresh), also used on the live Cozy Cockpit website. No UI screenshots or generated replacement artwork are used as assets.

| Local asset under `public/assets/cozy-cockpit/` | Figma source | Existing optimized export |
| --- | --- | --- |
| `logo.webp` | [Logo, 79:404](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-404) | `logo-800.webp`, 800 × 194 |
| `landscape.webp` | [Landscape, 79:487](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-487) | `landscape-1100.webp`, 1100 × 368 |
| `clouds.webp` | [Clouds, 79:488](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-488) | `clouds-1100.webp`, 1100 × 368 |
| `aircraft.webp` | [Aircraft, 79:493](https://www.figma.com/design/0XBuQIbeqa3bRRWf7TSWkS/Cozy-Cockpit?node-id=79-493) | `aircraft-800.webp`, 800 × 276 |

The tagline is the campaign's “COZY FLIGHTS. CURIOUS SIGHTS.” Rajdhani Semibold and its SIL Open Font License are copied from the same project. The Steam icon is from [Simple Icons](https://cdn.simpleicons.org/steam/ffffff); it is stored locally and reused for the CTA and footer.

## Link hierarchy

[Witchbrook](https://www.witchbrook.com/) provides a direct wishlist action alongside game media, while [A Short Hike](https://ashorthike.com/) pairs a short premise with explicit platform links. These are qualitative design references, not measured conversion evidence. Here, Wishlist on Steam is primary and Visit website is secondary, giving visitors a direct store route and a route to the trailer and more information.

The [Cozy Cockpit store page](https://store.steampowered.com/app/5251280/Cozy_Cockpit/) was verified as unreleased with wishlisting available. The footer uses the [MR FUTURE GAMES developer listing](https://store.steampowered.com/search/?developer=MR%20FUTURE%20GAMES), reached from Steam's own developer link. Both game CTAs are ordinary independent links; there are no nested anchors or JavaScript requirements.

The banner artwork also links directly to the Cozy Cockpit Steam store, with an accessible label and an inset keyboard-focus outline. The footer order is email, Steam, itch.io, YouTube, Bluesky. The stylesheet query version changes to `cozy-brand-3`. Existing studio branding and social destinations remain intact.

## Verification

Checked local rendering at 320, 390, 768, 901, 1440 and 1920px widths: no horizontal overflow or broken images. Inspected desktop and phone compositions, natural logo/aircraft proportions, and the 48px primary / 44px secondary action heights. Keyboard Tab reaches the wishlist link with a visible 3px focus outline. Clicking it reaches the verified Cozy Cockpit store page. No browser warning/error logs on the local page. All local HTML asset paths resolve, and SHA-256 comparisons confirm all four campaign files match the documented exports. `git diff --check` passes. No build step is required for this static site.
