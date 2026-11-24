# Avatar

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 68.

## Purpose and use
Small round photo or initials for a person

## Content and anatomy
Identity, trust
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: TODO. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Show a person’s image or initials with an appropriate accessible name where identity is meaningful.

Acceptance: Image fallback is available and decorative repeated avatars do not duplicate announcements.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--avatar`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example displays initials derived from the supplied name and exposes that name as an image label; it does not accept a photo or decorative mode.

**Proposed check:** Test blank and whitespace-separated names and identity announcements; decide photo fallback and decorative repeated-avatar behavior. Do not claim photo fallback exists.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
