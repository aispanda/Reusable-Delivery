# Checkbox

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 59.

## Purpose and use
Pick one or more options

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Choice, control
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
unchecked, checked, focus-visible, disabled. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a labeled native checkbox for an independent choice.

Acceptance: Space toggles the checked value; checked and disabled states are exposed to assistive technology.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--checkbox`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The example wraps a native checkbox in its visible label. Its story clicks to check and sends Space to uncheck, asserting the two states. A subsequent test reproduced that the disabled attribute was discarded; the draft now forwards native checkbox attributes, and a story verifies that the disabled control is skipped by keyboard tabbing. Form submission, controlled state and error descriptions still need contextual testing. The stories do not establish screen-reader behavior or touch-target usability; these remain for human review. This is a React example, separate from the static Studio.

## Claude review, batch 1, 24 November 2026

- **Verified gap:** a disabled checkbox looked the same as an enabled one apart from the native box.
- **Change:** labels of disabled choices use the muted text token.
- **Evidence:** `DisabledChoiceIsMuted` checks the label colour.
- **Open:** error descriptions and controlled state in context.

Stories are in `src/SpandaKitActionsForms.stories.tsx`; each new story failed against the packet code and passed after the change, in a headless Chrome Storybook run on this review branch. Human visual, keyboard, screen reader and device review remain open.
