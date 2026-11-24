# Navigation menu

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 65.

## Purpose and use
Header links, main site navigation

## Content and anatomy
Orientation, guidance
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
Use a nav landmark and descriptive links for site navigation; use buttons for expandable menus.

Acceptance: Current page and expanded state are communicated; keyboard access works at narrow widths.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--navigation`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** Provide a named navigation landmark with descriptive destinations, exactly one current-page indication where appropriate, visible keyboard focus and usable narrow-screen layout. Expanded states apply only if an expandable menu is actually provided.
- **Current evidence:** `NavigationCurrent` asserts that an explicitly current link exposes `aria-current="page"`; source also adds visual emphasis. Current selection is caller-supplied. This prototype renders a list of links rather than an expandable menu; keyboard navigation, wrapping at narrow widths and visual contrast still need focused and human checks.
