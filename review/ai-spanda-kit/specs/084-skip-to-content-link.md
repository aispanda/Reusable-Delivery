# Skip To Content Link

Status: pilot implementation observed; visual tokens and final approval remain provisional.

## Purpose and content
Allow keyboard users to bypass the header and move to main content.

Visible label: Skip to content.

## States and design roles
See `../tokens.provisional.json` and `../index.html`; current values reflect the existing prototype, not final brand approval. Applicable interaction states and responsive layouts must be reviewed in context.

## Behavior and accessibility
The native link points to #main and appears on focus.

## Acceptance and evidence
Playwright verifies first Tab focuses this link; the actual screen-reader and target-focus experience still need manual review.

Automated axe found no serious or critical violations at the three tested widths. Automated results do not replace human keyboard, screen-reader, zoom, contrast and visual review.

## Handoff
Implementation: `../index.html`; test: `../check-pilot.mjs`; token generator: `../generate-tokens.mjs`. Review owner and final approval: TODO.

## Proposed component-specific criteria
Use the first keyboard-focusable link to target the main content landmark.

Acceptance: Tab reveals the link and activation reaches the main content; screen-reader behavior is manually verified.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--skip-link`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** The first Tab reveals and focuses a clearly named skip link; activating it reaches the intended main content target, including meaningful keyboard focus, without hiding the focus indicator. Verify screen-reader and browser behavior with the actual page.
- **Current evidence:** The static pilot's Playwright check verifies first-Tab focus on its skip link. The separate React story illustrates an anchor and main target but has no activation assertion. Target focus after activation and manual assistive-technology behavior remain open for each implementation.
