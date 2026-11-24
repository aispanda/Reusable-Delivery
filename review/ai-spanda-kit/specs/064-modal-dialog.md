# Modal / Dialog

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 64.

## Purpose and use
Pop-up box over the page, confirm or fill in

## Content and anatomy
Focus, attention
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
closed, open, focus-visible. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a named dialog with focus moved inside on open, contained while modal and returned to the trigger on close.

Acceptance: Escape and explicit close work where appropriate; keyboard users cannot interact with the background while modal.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--modal`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** Opening a descriptively named modal moves focus inside; Tab and Shift+Tab remain within it while open; Escape and a visible close control dismiss it when appropriate, and focus returns to its trigger. Background interaction is unavailable while modal.
- **Current evidence:** The Storybook modal story checks pointer open and close. `taskbox/scripts/check-kit-keyboard.mjs` was recorded as passing real Chrome keyboard Enter, Escape and focus return. It does not establish comprehensive focus containment, background blocking, screen-reader behavior, or support for every dialog context. The component is a prototype with fixed trigger and close controls.
