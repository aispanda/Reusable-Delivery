# Primary button

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 51.

## Purpose and use
Main action button, near-black with amber shadow

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Action, confidence
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

## Claude review, batch 1, 24 November 2026

- **Verified gap:** the sheet and this spec describe a near-black button with an amber shadow, but the kit rendered no shadow.
- **Change:** a provisional 4px decorative amber offset (`--sk-accent`, sheet value, not approved) that shrinks to 2px with a 2px shift when pressed; disabled buttons have no offset; the focus ring sits 6px out so it clears the offset. Text contrast still comes from the near-black face.
- **Evidence:** `PrimaryAmberOffset` checks the offset colour and its removal when disabled. `evidence/check-button-states.mjs` uses a real pointer to confirm hover and pressed backgrounds differ.
- **Open:** approval of the amber offset, its geometry and the hover and pressed colours.

Stories are in `src/SpandaKitActionsForms.stories.tsx`; each new story failed against the packet code and passed after the change, in a headless Chrome Storybook run on this review branch. Human visual, keyboard, screen reader and device review remain open.
