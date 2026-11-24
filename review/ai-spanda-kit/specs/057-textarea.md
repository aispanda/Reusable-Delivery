# Textarea

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 57.

## Purpose and use
Longer text entry, comments, messages

## Content and anatomy
Clarity, focus
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
Associate a visible label with a native textarea and optional character guidance.

Acceptance: Long and multiline text remains usable and errors are announced when present.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--textarea`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

### Review evidence and remaining work — 2026-11-24
The example associates the visible `Notes` label with a native textarea. Its Storybook interaction enters two lines and checks the resulting value. A subsequent failing-then-passing form test verified that the control now forwards its name and submits the multiline value. Native attributes can now be passed through, but their states and error associations are not fully tested. Long-content usability, announced errors and visual, zoom and assistive-technology review remain open. This React example does not verify an implementation in the static Studio.
