# Stepper Numbered Step List

Status: pilot implementation observed; visual tokens and final approval remain provisional.

## Purpose and content
Present the three ordered sample workflow steps.

Each step has a number, title and explanatory sentence; the ordered list has a polite live region.

## States and design roles
See `../tokens.provisional.json` and `../index.html`; current values reflect the existing prototype, not final brand approval. Applicable interaction states and responsive layouts must be reviewed in context.

## Behavior and accessibility
Changing the use case replaces all three titles and descriptions; no claim is made that a real agent runs.

## Acceptance and evidence
Playwright verifies the first step changes and the live-region attribute exists; actual screen-reader announcement still requires human testing.

Automated axe found no serious or critical violations at the three tested widths. Automated results do not replace human keyboard, screen-reader, zoom, contrast and visual review.

## Handoff
Implementation: `../index.html`; test: `../check-pilot.mjs`; token generator: `../generate-tokens.mjs`. Review owner and final approval: TODO.

## Proposed component-specific criteria
Use an ordered list for workflow steps with clear titles and explanatory text.

Acceptance: Changing the use case updates the three ordered steps; any live announcement is verified manually.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--stepper`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example renders a list of supplied titles and descriptions; it does not model live updates. The separate static pilot has limited change and live-region markup evidence as recorded above.

**Proposed check:** Check the rendered order and descriptions match supplied steps; separately verify changes and screen-reader announcement in the actual use-case flow.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
