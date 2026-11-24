# Design system: UI/UX kit showroom

Status and owner: provisional until the design owner reviews the live page. Owner: Rajeev (AI Spanda).

Design principles and audience: calm, direct and backed by evidence. Business meaning first, technical proof one step away. No hype.

Source of token values, version, and how outputs are generated or mapped: `aispanda/aispanda-web` `src/styles/global.css` at commit 078a7b0 (24 November 2026), copied by hand into `showroom.css` as `--sp-*` custom properties. The token switch maps the same values onto the kit's `--ex-*` names inside the showroom only; `examples/tokens.example.css` is unchanged.

Color roles, verified contrast ratios and approved or prohibited pairings (ratios computed with the WCAG formula):

| Pair | Ratio | Use |
| --- | --- | --- |
| Ink #12141a on cream #f3f1ea | 16.29 | Body text and headings |
| Muted #5a5f68 on cream | 5.68 | Lede and supporting text |
| Muted #5a5f68 on white | 6.42 | Card text |
| White on ink | 18.41 | Primary buttons, selected tab |
| Ink on solar amber #e8a01a | 8.31 | Step numbers, open status markers |
| Ink on amber tint #fbefd6 | 16.15 | Kit answers in problem cards |
| Footer text #d4d6dc on ink | 12.67 | Footer copy |
| Clarity blue #2f6fe0 against cream, white and ink | 4.16, 4.70, 3.92 | Focus outline only (non text, needs 3:1) |

Prohibited: white text on amber (2.22), clarity blue for small text on cream (4.16) or ink (3.92). The provisional #2459c4 is not used. Links are ink with an amber underline, so they never rely on blue.

Typography roles, spacing, layout, responsive behavior: Sora 700 for headings, fluid from about 35 to 62 pixels for the main heading; Source Sans 3 at 18 pixels for body, 1.6 line height, line length kept under about 46 rem. Content width up to 72 rem with side gutters. Grids collapse to one column below 760 or 900 pixels; the page navigation list hides below 860 pixels while the GitHub button stays.

Shape, elevation, motion and reduced motion: 22 pixel panel radius, 12 pixel small radius, pill buttons. Signature amber offset shadow: 4 pixels on buttons, 10 pixels on key panels, with a 2 pixel ink border. Button hover moves 2 pixels only when reduced motion is not requested.

Interaction, focus, keyboard and accessibility rules: every control shows a 3 pixel clarity blue outline on keyboard focus. Skip link first in tab order. Tabs follow the APG pattern. The dialog is the native `dialog` element and returns focus to its trigger. Form errors are linked with `aria-describedby` and announced through a status region.

Content voice and usage rules: plain sentences, no hyphens or dashes, no sales language, no claims beyond STATUS.md.

Component inventory and links: header and navigation, buttons (`.sp-button`), hero proof panel, problem cards, stage tabs ([03-component-stage-tabs.md](03-component-stage-tabs.md)), token switch, live example components from `examples/components.css`, steps, code block, status cards, questions (`details`), footer.

Known exceptions, provisional values, decision owners and pending decisions: light theme only for now (provisional). Logo is the existing raster lockup on its own white or black ground until an SVG mark exists. Hero image is the aispanda.com hero, resized.

Visual acceptance criteria: body text at least 18 pixels with lines under 46 rem (provisional); every text pair at least 4.5:1 (approved by the brand contrast rules); focus outline visible on every control (approved); amber offset shadow only on buttons and key panels (provisional); no sideways scrolling at 320 pixels (approved).
