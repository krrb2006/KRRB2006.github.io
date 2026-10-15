# Design QA — KRRB2006.github.io homepage

## Evidence and comparison target

- Selected source visuals: ImageGen option 1 at `C:\Users\29131\.codex\generated_images\01a11f76-dfec-7052-a62c-a4be61c332ad\exec-410a1e8e-041b-4c9b-98c5-b2c20e5e5984.png` and option 3 at `C:\Users\29131\.codex\generated_images\01a11f76-dfec-7052-a62c-a4be61c332ad\exec-338e1a87-3713-4c3c-8bd1-8574cd48bc3d.png`. The user asked to blend their layout/energy and the darker, red-forward palette.
- Rendered implementation: `http://127.0.0.1:4175/` (local verification preview; desktop and 390 × 844 mobile viewport inspected).
- Combined visual comparison: `http://127.0.0.1:4175/qa/comparison.html` (both selected concepts and the updated rendered page were visible together in one capture).
- Source dimensions: both generated concepts are 1536 × 1024 px. The comparison frame presents them in 16:9 cards with `object-fit: cover`, so the visible source crops are not a pixel-exact viewport capture.
- Implementation capture: 1270 × 717 px browser screenshot; nominal CSS viewport 1270 × 717 px, browser scale reported by the capture API is unavailable. In the combined comparison, the implementation is rendered at 1280 × 720 then scaled to fit its 16:9 frame. No pixel-density resampling was applied to the direct implementation capture.
- State: desktop homepage, dark theme, top-of-page hero; the full page content and interaction states were also inspected by scrolling/opening the editor and secret letter.
- Focused comparison: the hero is the dominant shared region and is fully visible in the direct implementation capture. No separate close-up comparison was needed for this concept-level mock; the contact sheet is sufficient for judging hierarchy, imagery, palette, and first-fold composition.

## Findings

- No actionable P0, P1, or P2 visual/interaction differences remain in the inspected desktop state.
- Fonts and typography: the title uses a readable Chinese display serif, paired with rounded site-name/section text and monospace metadata. Google font imports have system-font fallbacks. The chosen visual's editorial hierarchy is retained.
- Spacing and layout rhythm: the split image/editorial hero, compact sticky navigation, ticker, and spaced sections follow the selected references. The project, writing, friends, and easter-egg blocks remain distinct and navigable.
- Colors and tokens: near-black foundation with stronger signal red, pink/violet, and small lime status accents blends option 3's palette with option 1's softer details. The dark/light switch was checked; the default now remains dark and the light variant remains legible.
- Images and assets: the hero uses the existing digital-garden cover plus three newly generated, original red/pink cyberpunk illustrations (rooftop, archive, and team arena). The four externally sourced temporary photos were removed. The existing Tomb of Knowledge project-card image remains separate from the homepage background.
- Copy and content: homepage labels, intro, section copy, all three showcased project descriptions/URLs, friend names/URLs, footer, and hidden letter are editable. Defaults are editorial sample copy and should be replaced with the owner's final wording when desired. The LLM security lab is accurately labeled as in progress based on its public README.

## Interaction and test evidence

- Opened the customize dialog, changed the site name, saved, and verified the browser title/header updated; restored defaults afterward.
- Toggled dark/light themes and verified the dark default after a cache-busting hard refresh.
- Lit the three stars in order; the hidden letter opened and its link resolves to `https://github.com/krrb2006/cruel.github.io`.
- Verified the Tomb of Knowledge live demo and repository return HTTP 200. Tested its links, plus the three supplied friend links are wired into editable URL fields.
- `node --check js/main.js`, `node --check js/hacker-home.js`, and `git diff --check` pass.
- Responsive breakpoint rules are present for widths below 760 px and reduced-motion preferences; the mobile hero was inspected at a 390 × 844 CSS-pixel viewport.
- Browser console error collection was unavailable through the selected in-app browser control; no visible runtime errors appeared in the rendered page.

## Follow-up verification — 2026-10-15

- Implemented a four-image autoplay carousel with previous/next controls, pagination dots, editable captions, pause-on-hover/focus/hidden-tab behavior, and reduced-motion handling. The original digital-garden cover remains first, followed by three new AI illustrations.
- Strengthened the cursor trail with interpolated, larger red/pink stars and sparkles along the full movement path; touch and reduced-motion users do not receive the trail.
- Reworked the hero to be taller and more image-led, closer to option 1 while retaining the red-forward palette. Verified homepage at desktop and 390 × 844 CSS-pixel viewport; the header, image controls, captions, title, and call to action remain visible and usable.
- Rechecked `node --check js/main.js`, `node --check js/hacker-home.js`, and `git diff --check` after these changes.
- The hero now uses only the original illustration and three generated original illustrations; no external photo credits are required.
- The selected concepts and updated desktop rendering were captured together in `http://127.0.0.1:4175/qa/comparison.html`. The implementation preserves option 1's large visual-led hero and editable right-hand copy while adopting the requested real-photo slideshow; no P0/P1/P2 mismatch was identified. The exact original IP illustrations are intentionally not bundled without clear reuse rights—owner-provided images can replace them through the local upload control.

## Comparison history

1. First render exposed two issues: inherited theme styling made the second hero-title line too dark, and the body/theme background did not stay aligned after theme changes. The heading color was made explicit, the page now uses an explicit body class, and the custom theme syncs the site's root theme attribute. A forced reload then showed the intended dark background and high-contrast title in both the direct capture and the combined comparison page.

## Implementation checklist

- [x] Main-blog role is limited to `KRRB2006.github.io`; `cruel.github.io` is only linked from the three-star easter egg.
- [x] Custom homepage has editable text fields, local-browser persistence, JSON export, and background-image replacement.
- [x] Friends, archives, Tomb of Knowledge demo/source, and the secret letter have working links.
- [x] Desktop and mobile hero layouts plus carousel and cursor interactions reviewed.
- [ ] Replace sample article/about copy with the owner's final text, if desired.
- [x] Inspect the mobile breakpoint and carousel controls at a 390 × 844 viewport.
- [ ] Run a browser-console log pass when a console-inspection surface is available.

## Follow-up polish

- The settings editor intentionally saves to this browser only. GitHub Pages is static and has no secure write API, so publishing personalized copy still requires syncing the exported configuration into the repository and publishing it.
- Mobile behavior is implemented with a 760 px breakpoint but was not captured at a real mobile viewport in this pass.

final result: passed
