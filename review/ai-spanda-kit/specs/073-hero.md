# Hero

Status: DRAFT — inventory-derived; not an approved design or completed implementation. Source: AI Spanda sheet row 73.

## Purpose and use
Large intro at top of page - headline, short line, on AISpanda.com and Agentic Build Studio

## Content and anatomy
Intended feeling (sheet Psychology column, not content): Warmth, authority, first impression
Representative content, anatomy and length limits: TODO; use real project context before implementation.

## Variants and states
default, relevant interaction states to be determined. Sizes and responsive behavior: TODO. State labels are provisional where not documented.

## Design roles and reference
Source sheet's documented pairing: Near-black on cream / peach. This is a historical input, not an approved or contrast-verified pairing. Map to project token roles before use; do not copy failing pairings. Reference and license: TODO.

## Behavior and accessibility
Use native semantic elements where appropriate. Accessible name, keyboard behavior, focus management, error and edge cases: TODO for this component and its context.

## Acceptance and verification
Define observable outcomes for each important state and action. Link actual stories or fixtures, automated and manual checks, and any contrast evidence: TODO.

## Handoff
Implementation path, owner, approval, dependencies and open questions: TODO.

## Proposed component-specific criteria
Present the actual page heading, supporting text and primary action where applicable.

Acceptance: The heading and action are clear, content wraps and any image has appropriate alternative text.

These criteria are proposals; verify against the actual screen and record results.

## React draft example (separate Storybook lab)
`../../taskbox/src/components/SpandaKit.tsx` and `../../taskbox/src/components/SpandaKit.stories.tsx`; story ID `ai-spanda-draft-kit--hero`. This is an illustrative React prototype, not a static Studio implementation or a production-ready component. The story ran with the suite; Modal, Tabs, Input, Dropdown, Checkbox, Radio, Toggle and Accordion have explicit interaction checks in the kit. Human review, project tokens and full state coverage remain open.

## Source review and focused acceptance — 2026-11-24

**Observed in source:** The React example renders a section with a fixed h1, description and optional children; its action is an illustrative button.

**Proposed check:** Verify the page has an appropriate heading hierarchy, long text wraps, and a real action leads to the intended destination. Heading level flexibility and real action are unresolved.

This is a source review, not proof of a rendered, human, or assistive-technology check. All project-specific decisions and approval remain open.
