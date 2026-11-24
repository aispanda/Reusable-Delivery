# Input field

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 56.

## Purpose and use
Text entry, name, email, search

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Clarity, focus
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, focus-visible, disabled, invalid. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Associate a visible label with a native input; select an appropriate input type and connect any error to the control.

Acceptance: Keyboard input works; required, invalid and disabled states are exposed and error text is associated.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--input-field`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The example associates the visible `Name` label with a native text input. Its Storybook interaction types `Example` and checks the resulting value. A subsequent test reproduced that name and required attributes were discarded; the draft now forwards native input attributes, and the form story verifies the required property, visible required text and submitted name/value. An agent inspected the focused example at 390 and 1440 pixels. This does not establish complete validation or accessibility. Decide actual input types and error presentation, then test invalid, disabled and error-associated states. Human keyboard, screen-reader, zoom and visual review remain open. The React example is separate from the static Studio pilot.

## Claude review, batch 1, 24 November 2026

- **Verified gap:** callers had to render and wire their own hint and error text, so the spec's "error text is associated" criterion depended on each caller.
- **Change:** optional `hint` and `error` props render visible text below the control, join their IDs into `aria-describedby` after any caller-supplied IDs, and set `aria-invalid` when an error is shown. Error text is near-black with an "Error:" prefix; only the input border uses the sheet's error red, as a 2px border on white (4.83:1). The wrapper is now a `div` with a `label`, so hint and error text are not read as part of the label.
- **Evidence:** `InputHintAndError` checks the invalid state, the combined description and the border colour; the earlier `InputErrorAssociation` story still passes.
- **Open:** when to validate, announcement timing and human screen reader review.

Stories are in `src/SpandaKitActionsForms.stories.tsx`; each new story failed against the packet code and passed after the change, in a headless Chrome Storybook run on this review branch. Human visual, keyboard, screen reader and device review remain open.
