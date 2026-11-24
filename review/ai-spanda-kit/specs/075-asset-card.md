# Asset Card

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 75.

## Purpose and use
AISpanda.com reusable asset card - type badge, status badge, title, description, Why it matters, Proof, Last verified, Explore asset

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Trust, proof, clarity
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Present asset type, status, title, description, proof and last-verified information when available.

Acceptance: A descriptive link leads to the actual asset; missing proof or date is not fabricated.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--asset-card`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example includes a title, description and Explore link; it has no dedicated type, status, proof or last-verified fields.

**Proposed check:** When supplied by the project, check type, status, evidence and dates against their sources; the link must identify and lead to the actual asset. Missing metadata must not be fabricated.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
