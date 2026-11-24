# Review and handoff: showroom

Scope and version: the showroom page (`showroom/`), the README banner with the AI Spanda lockup, and the Pages workflow, on branch `review/ui-ux-kit-readme-branding`, 24 November 2026.

Brief, design system and tokens, components and fixture links: [01-project-brief.md](01-project-brief.md), [02-design-system.md](02-design-system.md), [03-component-stage-tabs.md](03-component-stage-tabs.md); the page is its own fixture.

Screens and responsive previews: screenshots at 1280 and 390 pixels were shared with the owner in the delivery conversation; none are stored as a baseline.

Automated checks and manual keyboard and accessibility checks, with evidence: see [results.md](results.md). 33 automated checks pass at three widths, and each has been shown to fail. No manual checks by a person yet.

Human design review and decisions: owner decisions recorded: brand only the wrapper, keep tokens and examples neutral, build the showroom, use the existing logo raster. Design review of the live page: not done.

Known gaps and exceptions: light theme only; human review open; GitHub Pages must be enabled with GitHub Actions as its source before the workflow can publish; until then the page runs only locally.

Visual comparison: no baseline was established.

Source code paths, setup instructions and technical team handoff: `showroom/index.html`, `showroom.css`, `showroom.js`, `fonts/`, `brand/`, `check-showroom.mjs`; workflow `.github/workflows/ui-ux-showroom-pages.yml` publishes `showroom/`, `examples/` and `assets/` on pushes to main that touch the kit. To preview locally, serve `docs/ui-ux-delivery/` with any static server and open `/showroom/`.

Actual time versus estimate and remaining decisions: built in one session as budgeted. Remaining: enable Pages, human review, dark theme or not.

For each review listed, who performed it: automated checks and screenshot inspection by Claude (Opus 5.5), agent, with Playwright and axe. No person yet. Site current with the handed off source: yes, 24 November 2026 (no build step).

Baseline versus candidate on the same screens, content, states and widths: no earlier showroom exists, so there is no baseline to compare.
