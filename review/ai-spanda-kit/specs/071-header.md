# Header

Status: pilot implementation observed; visual tokens and final approval remain provisional.

## Purpose and content
Identify the current local prototype.

AI Builder Studio wordmark and Local prototype status.

## States and design roles
See `../tokens.provisional.json` and `../index.html`; current values reflect the existing prototype, not final brand approval. Applicable interaction states and responsive layouts must be reviewed in context.

## Behavior and accessibility
Header content remains visible and the skip link preceding it targets main content.

## Acceptance and evidence
Playwright verifies initial keyboard focus reaches Skip to content at three widths.

Automated axe found no serious or critical violations at the three tested widths. Automated results do not replace human keyboard, screen-reader, zoom, contrast and visual review.

## Handoff
Implementation: `../index.html`; test: `../check-pilot.mjs`; token generator: `../generate-tokens.mjs`. Review owner and final approval: TODO.

## Proposed component-specific criteria
Use a semantic header containing the wordmark, navigation or status relevant to this screen.

Acceptance: Header content remains usable at narrow widths and skip navigation reaches the main content.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--header`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example renders a header with supplied name and optional children; the separate static pilot has skip-link and axe evidence as recorded above.

**Proposed check:** Check long wordmark and status at narrow and wide widths without clipping; verify skip navigation and focus in the actual page, separately from this isolated React example.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
