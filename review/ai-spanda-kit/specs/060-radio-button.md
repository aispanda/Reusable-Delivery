# Radio button

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 60.

## Purpose and use
Pick exactly one option

## Content and anatomy
Choice, control
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
unchecked, checked, focus-visible, disabled. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on white. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Group mutually exclusive native radio options under a fieldset and legend.

Acceptance: Only one option in a group is selected; native arrow-key behavior and labels work.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--radio-button`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The example uses a fieldset and legend, with native radio inputs sharing a name. One story selects two options by pointer and checks that only the latter remains selected. A second story verifies that form data contains `Detailed` after that option is selected; the former implementation incorrectly submitted the indistinguishable default `on`, and the focused check failed before the value fix and passed afterward. A separate Playwright test used Space then ArrowDown in headless Chrome and verified the selection changed. Option strings currently serve as both labels and submitted values; confirm whether stable separate values are needed. Disabled/required states, error handling, screen readers and touch targets remain to be tested in context. This React draft does not establish the static Studio implementation.
