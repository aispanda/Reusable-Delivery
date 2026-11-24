# AI Spanda component review packet — 24 November 2026

**Status: drafts for Claude review, not production-ready or human-approved.** This snapshot includes 35 written component specifications, React reference component code, styles and stories, agent review notes, and selected visual and browser evidence. The reference examples are not integrated into either live site.

## Read first

- `code/`: current SpandaKit components, styles, tokens, stories, and focused form scenarios.
- `specs/`: the 35 component specs and their index.
- `visuals/`: Storybook screenshots at mobile and desktop widths with a manifest. Captures are from one local browser, not human approval, a physical-device test, or an approved Chromatic baseline.
- `evidence/`: review tracker, form follow-up, testing history, and focused browser regression scripts.

## Current verified results

The 24 November 2026 full project Storybook run passed 82 scenarios, including 56 SpandaKit stories and three focused form stories; TypeScript passed. Counts are scenarios, not component approvals. Two targeted browser regressions failed before their fixes and passed after: Escape for a hover-open tooltip with focus elsewhere, and Workbench long-text overflow at 320 and 1280 pixels. Impeccable's source detector returned no findings for the scanned component and story files; this does not constitute a complete visual or accessibility review.

## Open and review priorities

Synthetic long unbroken text previously overflowed Header, Hero, AssetCard, SectionHeading and Badge. Scoped wrapping fixes passed all ten local Chrome checks at 320 and 1280 pixels; ordinary example content did not reproduce the stress-case failures. Toggle and RadioGroup do not yet expose some configurable state and form attributes. Dynamic removal of tabs is unverified. See the detailed evidence for other gaps. Human design, keyboard, screen-reader and real-device reviews, approved brand values, an accepted Chromatic baseline, and validation in the actual sites remain open.

## Suggested review

Review in small groups against the specs, source, stories, screenshots, and evidence. Distinguish verified defects from suggestions or unknowns. Give exact file paths and replacement edits for actionable improvements, and list the precise tests or human checks needed. Avoid inventing approved brand decisions or claiming the components are production-ready.
