# Audience Card

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 76.

## Purpose and use
AISpanda.com hero audience card - Everyday professionals, Technology leaders, Builders & policy

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Clarity, belonging
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
Describe an actual target audience and its relevant benefit using project-provided content.

Acceptance: Content is readable and any action is clearly named; unsupported audience claims are not invented.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--audience-card`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example places the supplied title and child content in a card; the sample has no action. A later regression test reproduced invalid nested paragraphs for block children. The wrapper was changed, and the structured-content story now passes.

**Proposed check:** Verify actual audience copy and narrow wrapping; if actions are added they must have descriptive names. Confirm child markup remains valid for permitted content.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
