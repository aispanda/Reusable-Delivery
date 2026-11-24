# Secondary button

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 52.

## Purpose and use
Second action, outlined or lighter

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Choice, calm
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on cream. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a native button for a lower-emphasis action; preserve clear keyboard focus.

Acceptance: The named action fires on click, Enter or Space and remains visually distinguishable from the primary action.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--secondary-button`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** A descriptive label names the lower-emphasis action; click, Enter and Space each activate it once when enabled; disabled controls cannot activate or take keyboard focus. Focus, hover and pressed states should remain distinguishable against approved surfaces.
- **Current evidence:** The `SecondaryButtonCustomClass` Storybook interaction asserts that custom and base classes coexist. The native element and shared focus rule are present in source; this specific example does not yet test keyboard activation, disabled behavior or state contrast. Secondary hover/pressed styling, approved tokens and human review remain open.

## Claude review, batch 1, 24 November 2026

- **Verified gap:** the secondary button had no hover or pressed feedback.
- **Change:** provisional hover (8% ink tint) and pressed (16% ink tint) backgrounds on the white face.
- **Evidence:** `evidence/check-button-states.mjs` failed on the packet styles and passed after the change. `SecondaryKeyboardAndDisabled` checks Enter, Space and pointer activation and that a disabled button is skipped and inert; it also passed on the packet code, so it adds coverage rather than proving a fix.
- **Open:** visual approval of both tints.

Stories are in `src/SpandaKitActionsForms.stories.tsx`; each new story failed against the packet code and passed after the change, in a headless Chrome Storybook run on this review branch. Human visual, keyboard, screen reader and device review remain open.
