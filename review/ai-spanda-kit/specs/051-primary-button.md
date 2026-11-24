# Primary button

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 51.

## Purpose and use
Main action button, near-black with amber shadow

## Content and anatomy
Action, confidence
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, hover, focus-visible, pressed, disabled. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: White on near-black. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Use a native button for the primary action; activate with click, Enter or Space; unavailable actions use the disabled attribute.

Acceptance: A named action fires once when activated and does not fire when disabled; visible focus and label contrast are reviewed.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--primary-button`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component.

On 2026-11-24, an Impeccable-guided review identified missing hover and pressed feedback and a custom-class styling bug; the React draft was updated. Storybook checks verify custom classes preserve button styling, keyboard focus, Enter, Space and pointer activation, and disabled keyboard exclusion. Automated Storybook accessibility checks ran. Default renders were inspected at 390 and 1440 pixels. The amber shadow, approved tokens, hover/pressed visual review, long labels, screen-reader testing and human review remain open. The detector's source scan returned no findings; it does not establish visual quality.
