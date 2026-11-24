# Card

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 54.

## Purpose and use
Basic content card, white surface

## Content and anatomy
Clean, clear
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, hover where interactive. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Group related content with a heading and meaningful reading order; make only the actual link or action interactive.

Acceptance: Long text wraps without clipping and any action has a descriptive accessible name.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--card`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example renders an article containing supplied children; its story supplies a heading and paragraph. No whole-card action is implemented.

**Proposed check:** In a narrow fixture, long heading and body text wrap within the card; any supplied link is separately focusable and describes its destination. Confirm whether article is appropriate in each page context.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
