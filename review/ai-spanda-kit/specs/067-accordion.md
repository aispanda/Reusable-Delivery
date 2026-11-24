# Accordion

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 67.

## Purpose and use
Expand and collapse sections, FAQs

## Content and anatomy
Order, focus
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
collapsed, expanded, focus-visible. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on cream. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use native details and summary or labeled buttons with expanded state and associated panels.

Acceptance: Keyboard activation opens and closes the correct panel and exposes its state.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--accordion`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** A clearly named control exposes expanded/collapsed state, and pointer, Enter and Space open and close the associated content without moving focus unexpectedly. Review focus visibility and multiple-panel behavior where used.
- **Current evidence:** The draft uses native `details`/`summary`. The Storybook interaction checks pointer opening; `taskbox/scripts/check-kit-keyboard.mjs` was recorded as passing native Enter and Space in Chrome. Multi-panel behavior, manual screen-reader checks and supported-device review remain open.
