# Toggle / Switch

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 61.

## Purpose and use
On or off setting

## Content and anatomy
Control, clarity
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
off, on, focus-visible, disabled. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a labeled checkbox or switch for a persistent on/off setting; communicate current state.

Acceptance: Keyboard activation toggles the state and the visible label remains stable.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--toggle`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The draft wraps a native checkbox with `role="switch"` in its label. Its Storybook interaction tabs to the control and presses Space twice, checking on and off states. A subsequent provisional visual treatment distinguishes its on/off state by both position and color; an agent inspected the on-state example at 390 and 1440 pixels. The draft exposes only a label, not disabled, form name/value or change handling. Verify visual treatment, forced-colors rendering, intended persistence, screen-reader behavior, touch targets and relevant states in the real use case; no such integration or human approval is established by this example.
