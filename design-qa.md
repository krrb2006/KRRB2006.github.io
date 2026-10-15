# Design QA — homepage layout recreation

## Target and comparison setup

- Target: user-provided screenshot in `qa/layout-reference.png` (1536 × 1024 px), showing a wide image-led hero, centered editorial copy, radio/letter cards at right, then featured writing and recent items in two columns.
- Rendered page: local homepage at `http://127.0.0.1:4175/`, inspected at desktop 1536 × 1024 and mobile 390 × 844 CSS-pixel viewports. `qa/layout-comparison.html` displays the supplied target beside the implementation at the same scale; these QA-only artifacts are intentionally not published.
- Compared surfaces: typography, layout, color, imagery, and copy. The implementation follows the target's composition and hierarchy while retaining the blog's existing editable content, image carousel, projects, friend links, and three-star easter egg. Original supplied artwork and newly generated supporting artwork are used instead of copyrighted illustrations from the referenced series.

## Findings

- Desktop composition: full-width carousel background, overlaid intro and CTAs, right-side radio and letter cards, followed by the two-column featured essay/recent updates section. The hero height, navigation, card alignment, and section transition were checked against the 1536 × 1024 target.
- Palette and typography: near-black canvas, crimson/pink highlights, small lime waveform accents, Chinese editorial serif headings, and compact mono metadata.
- Content and links: recent updates expose the Tomb of Knowledge demo, Exam Revision Assistant repository, and LLM Web Vulnerability Lab repository. Existing project section and three-star link remain on the page.
- Mobile: inspected at 390 × 844. Hero image controls remain inside the artwork, title and actions stack below it, and radio/letter cards become a single-column section. No horizontal overflow was detected.
- Interaction/accessibility: manual carousel control exists; 3 star buttons were detected with accessible names; the project links resolve to their intended destinations. No browser console errors were collected.
- Validation: `node --check js/main.js`, `node --check js/hacker-home.js`, and `git diff --check` passed.

## Remaining differences

- The screenshot's portrait illustration and radio/flower collage differ from the site's own background art and generated supporting images. This is intentional: composition and atmosphere are borrowed, not the original copyrighted artwork.
- Recent updates are project cards rather than fabricated blog posts; the featured article CTA opens the site's existing archive.

## Feature follow-up — archive, friends, identity, and site metrics

- Replaced the one-post generated archive view with a responsive WeChat-inspired editor and archive list. Three sample posts load from `data/articles.json`; editor controls and one rendered-article preview were checked in the browser. No edits were committed as browser-local test data.
- Static publishing is explicit: the editor exports `articles.json` for `/data/articles.json`; friend management exports `friends.json` for `/data/friends.json`. Drafts, uploaded images, and unsynced friend edits remain local to that browser until exported and deployed.
- Added a custom SVG tab favicon and corrected the hidden-letter target to `https://krrb2006.github.io/cruel.github.io/`.
- Added the repository creation date (2026-04-02) and anonymous Busuanzi visitor/pageview counts. The local preview returned live counter values; the mobile archive matched the 390 px viewport without horizontal overflow.
- Verified friend manager presents all three existing links, has avatar URL/upload fields, and adds a fourth editable row. Verified article preview dialog, archive navigation, the exact easter-egg URL, and no browser console errors.
- Rechecked `node --check js/main.js`, `node --check js/hacker-home.js`, `node --check js/archive-studio.js`, and `git diff --check`.

final result: passed
