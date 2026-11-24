# Tabs

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 66.

## Purpose and use
Switch between views in one place

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Order, clarity
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
selected, unselected, focus-visible. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on cream. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use an accessible tablist with a selected tab and associated panel, including arrow-key navigation.

Acceptance: One tab and its panel are selected; focus and selection are distinguishable and accessible.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--tabs`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** One selected tab controls the visible, named panel; arrow keys move between tabs, Home and End move to the first and last, focus and selected state remain distinguishable, and the keyboard can reach the active panel's content. Verify wrap behavior and empty or changing lists in the intended product context.
- **Current evidence:** Storybook tests exercise Right Arrow selection, Left/Right wrapping, Home/End selection, and moving focus into the selected text panel. Screen-reader review and panel focus behavior with interactive content remain open.
