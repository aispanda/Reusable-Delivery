# Principle Card

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 77.

## Purpose and use
AISpanda.com numbered principle card - Aim Before You Generate, Test the Logic, Own the Track, Save the Request First

## Content and anatomy
Seriousness, judgement
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: White on near-black. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Explain a named design or product principle with supporting text.

Acceptance: Title and description stay associated and numbering is used only when order matters.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--principle-card`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example places title and child content in a card; it does not render numbered or dark-surface variants. A later regression test reproduced invalid nested paragraphs for block children. The wrapper was changed, and the structured-content story now passes.

**Proposed check:** Verify title and description remain associated, readable and in valid markup; show numbering only when order is meaningful and review the intended approved styling.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
