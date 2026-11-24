# Workbench Split Panel

Status: pilot implementation observed; visual tokens and final approval remain provisional.

## Purpose and content
Place the agent brief and workflow preview side by side, stacking them at narrow widths.

One labeled brief section and one labeled workflow section.

## States and design roles
See `../tokens.provisional.json` and `../index.html`; current values reflect the existing prototype, not final brand approval. Applicable interaction states and responsive layouts must be reviewed in context.

## Behavior and accessibility
Changing the select in the brief updates the preview without navigation.

## Acceptance and evidence
Playwright checks the scenario update and horizontal overflow at 320, 768 and 1280px; agent inspected a 320px screenshot.

Automated axe found no serious or critical violations at the three tested widths. Automated results do not replace human keyboard, screen-reader, zoom, contrast and visual review.

## Handoff
Implementation: `../index.html`; test: `../check-pilot.mjs`; token generator: `../generate-tokens.mjs`. Review owner and final approval: TODO.

## Proposed component-specific criteria
Group the brief and workflow preview in separately labeled sections; stack at narrow widths.

Acceptance: Selecting an example updates the preview, and the layout avoids horizontal overflow.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--workbench`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** At chosen widths, each named section remains readable without horizontal overflow and stacks according to the agreed responsive rules. Where the actual screen supports example selection, changing it updates the associated preview and announces changes appropriately.
- **Current evidence:** The separate static pilot has the scenario/overflow checks and axe results noted above. The React Workbench story only renders illustrative brief and preview sections; it does not implement or test the static pilot's selection flow. Human visual, keyboard and screen-reader review and approved tokens remain open.

- **Follow-up evidence:** A 100-character unbroken value overflowed the React example at 320 pixels. The panels now allow wrapping; `taskbox/scripts/check-workbench-overflow.mjs` passed at 320 and 1280 pixels in local Chrome. This does not verify the static pilot or all possible content.
