# Blockquote / Quote

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 78.

## Purpose and use
Agentic Build Studio request text - the brief sentence that changes with the use case

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Voice, emphasis, reflection
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
Present the selected example brief in a blockquote when it is genuinely quoted content.

Acceptance: Changing the example updates the correct text without changing focus unexpectedly.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--blockquote`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example displays supplied text in a blockquote; its Storybook fixture is static and does not model selection changes.

**Proposed check:** When used for a genuine quotation or example brief, check long text wraps and the selection updates the appropriate text without unintended focus changes. Test updates in the actual screen.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
