# Dropdown Select

Status: pilot implementation observed; visual tokens and final approval remain provisional.

## Purpose and content
Choose one example use case with a native, visibly labeled select.

Support tickets, Meeting notes and Product questions.

## States and design roles
See `../tokens.provisional.json` and `../index.html`; current values reflect the existing prototype, not final brand approval. Applicable interaction states and responsive layouts must be reviewed in context.

## Behavior and accessibility
On selection, update the adjacent brief and all three workflow steps. Keyboard access and native arrow-key selection are intended behavior and require a dedicated check.

On 2026-11-24, a separate headless Chrome Playwright probe focused the select but neither ArrowDown alone nor Space/ArrowDown/Enter changed `support` to `notes` at the first viewport. The cause is not yet established; native select behavior in this environment or a component issue are both possibilities. Do not count keyboard selection as passed. See `../../taskbox/scripts/check-studio-select-keyboard.mjs` for the latter reproduction.

A subsequent agent-operated full Chrome check used Tab to reach the control, then opened its native menu with a pointer and used Down and Return to select Meeting notes. The brief and all three displayed workflow steps updated. This narrows the concern but does not establish keyboard-only menu opening, physical-device behavior, or why the headless probe failed; those checks remain open.

## Acceptance and evidence
Playwright changes the selection to Meeting notes and verifies the brief and first step at 320, 768 and 1280px.

Automated axe found no serious or critical violations at the three tested widths. Automated results do not replace human keyboard, screen-reader, zoom, contrast and visual review.

## Handoff
Implementation: `../index.html`; test: `../check-pilot.mjs`; token generator: `../generate-tokens.mjs`. Review owner and final approval: TODO.

## Proposed component-specific criteria
Use a visibly labeled native select for choosing one option; retain platform keyboard behavior.

Acceptance: Changing the selection updates the associated content and the selected value remains visible.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--dropdown`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The React story selects `Meeting notes` and checks the selected value. It does not check the static pilot's content updates or prove native arrow-key behavior. A subsequent failing-then-passing test verified that a disabled React select is skipped when tabbing; the draft now forwards native select attributes. Test keyboard selection, applicable validation and form behavior in the target use case. The static pilot evidence above applies only to the isolated HTML screen and stated tested widths; human review remains open.
