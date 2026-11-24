# Proof block

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 82.

## Purpose and use
AISpanda.com Asset Card proof - Proof text plus Last verified date

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Trust, evidence
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
Show only verifiable evidence and a real last-verified date when provided.

Acceptance: A source is linked where available; unknown proof and dates are labeled rather than invented.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--proof-block`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The example renders supplied proof text and an optional verification string; its fixture is explicitly illustrative and it has no dedicated source-link or missing-proof state.

**Proposed check:** Verify every displayed assertion and date against a source; if evidence is unavailable, communicate that accurately rather than inventing it. Source link and unavailable state remain unresolved.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
