# Tooltip

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 70.

## Purpose and use
Small hint on hover over an icon or word

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Help, clarity
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
Use for short supplementary information, available on keyboard focus as well as pointer hover.

Acceptance: Tooltip is dismissible, remains available while focused and is not the only source of essential instructions.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--tooltip`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** Supplemental text appears on focus or hover, remains available while either condition continues, can be dismissed with Escape, and is associated with the trigger. It must not be the sole source of essential instructions; check hoverable content, touch alternatives and screen-reader behavior in context.
- **Current evidence:** Focus/hover transition stories verify focus retained after pointer exit and hover retained after focus leaves; one story verifies Escape dismissal. These are focused React-lab checks, not proof of touch, screen-reader, positioning or all interaction sequences. The trigger copy is illustrative.

- **Follow-up evidence:** Local Chrome reproduced Escape failing when the tooltip was open from hover and focus was elsewhere. The draft now listens for Escape while open; `taskbox/scripts/check-tooltip-hover-escape.mjs` passed after the fix. Touch and screen-reader review remain open.
