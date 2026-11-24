# Alert / Notice

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 63.

## Purpose and use
Success, warning, error or info message

## Content and anatomy
Guidance, safety
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: White on green, black on amber, white on red. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Present a concise status message, its consequence and recovery action when needed.

Acceptance: Message severity is conveyed in text; announce urgent updates appropriately without overusing live regions.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--alert`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example wraps its supplied content in a polite status region; it has no severity or recovery-action variants.

**Proposed check:** For a dynamic message, check that the correct message is announced at the appropriate urgency; verify severity and any recovery action in words. Screen-reader behavior and urgent variant remain untested.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
