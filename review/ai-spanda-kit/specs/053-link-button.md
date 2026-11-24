# Link button

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 53.

## Purpose and use
Text-only action, looks like a link

## Content and anatomy
Trust, clarity
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Bright Blue on cream. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a link with a real destination for navigation, and a button for an in-place action.

Acceptance: The label describes the destination or action, is keyboard reachable, and does not rely on color alone.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--link-button`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** A meaningful link name identifies its actual destination, Enter follows the supplied URL, visible keyboard focus is retained, and the link is distinguishable without color alone. In-place actions should use a button instead.
- **Current evidence:** `LinkButton` renders a native anchor with its supplied `href`; its story uses a placeholder fragment. The default story does not verify navigation, focus visibility, a real destination or visual distinguishability. Approved tokens and human review remain open.
