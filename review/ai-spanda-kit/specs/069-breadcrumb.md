# Breadcrumb

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 69.

## Purpose and use
Path back, Home / Shop / Product

## Content and anatomy
Orientation
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Bright Blue on cream. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a labeled navigation landmark and an ordered trail with the current page identified.

Acceptance: Each ancestor is a descriptive link and current location is exposed without depending on color.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--breadcrumb`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Review notes — 2026-11-24

- **Proposed checks:** A labeled breadcrumb landmark contains the ordered path; each ancestor has a descriptive, keyboard-reachable destination, and one current page is identified without relying on color. Review long paths and narrow layouts in context.
- **Current evidence:** The example renders a labeled navigation landmark and ordered list. A later test reproduced the missing current-page marker when the final item was a link; the implementation now identifies only the final item as current, with or without an `href`, and the linked-current story passes. Real navigation, long paths and keyboard focus remain unverified in context.
