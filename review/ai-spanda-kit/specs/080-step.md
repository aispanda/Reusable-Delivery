# Step

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 80.

## Purpose and use
One step inside the Stepper - number circle, title, short description

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Order, clarity
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: White on Bright Blue. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Display an ordinal, concise step title and a description inside its parent ordered list.

Acceptance: Reading order is number, title and explanation; decorative duplication is hidden from screen readers.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--step`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example renders a list item with a visually numbered span hidden from assistive technology, plus title and description; its story places it in an ordered list.

**Proposed check:** Check the item appears within an ordered list and its number, title and explanation are understood in order; verify the resulting announcement with a screen reader.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
