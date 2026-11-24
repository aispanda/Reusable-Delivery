# AI Spanda draft component review — 2026-11-24

Status: in progress. This is a source-based group review and focused React-lab testing, not approval of 35 production components. Three independent reviewers covered forms, content, and navigation; Codex verified and coordinated changes. Project tokens and brand choices remain provisional.

## Verified fixes

- Primary and secondary buttons: custom classes no longer remove base styling. Primary button has provisional hover/pressed feedback; Enter, Space, pointer, focus and disabled keyboard behavior have stories. Secondary button custom-class regression has a story.
- Radio group: selected option now submits its actual value; verified using FormData.
- Tooltip: focus and hover are tracked independently, with Escape dismissal. Stories cover focus retained after pointer leaves and pointer hover retained after focus moves.
- Tabs: a keyboard user can move from the selected tab into its text panel; a story exercises this path.
- Navigation: an explicitly current item exposes `aria-current="page"` and receives visible emphasis; a story checks its semantics.
- Textarea multiline input and switch Space-key interaction have focused stories.
- Input now forwards native form attributes and visibly identifies required fields; the focused form story checks the label, required state and submitted value. Checkbox now forwards native input attributes; its disabled story checks tab exclusion. These tests reproduced the prior missing-attribute behavior before the fix. An agent inspected the focused input at 390 and 1440 pixels.
- Audience and principle cards: a story reproduced invalid nested paragraphs with block content; wrappers were corrected and the regression story passes.
- Breadcrumb: the final item is marked current whether linked or plain; a regression story verifies the linked-current case.
- Avatar initials now handle extra whitespace; a failing-then-passing story checks the example. Tabs have focused Left/Right wrap and Home/End stories. Asset links, step order, supplied proof dates, and image alternatives have additional example-level assertions.
- Separate Playwright keyboard input in Chrome verified native dialog Escape and focus return, and accordion Enter/Space. Storybook's simulated keyboard did not reproduce those native browser defaults; the dedicated check is `taskbox/scripts/check-kit-keyboard.mjs` and needs Storybook on port 6007.

All 35 draft entries retain at least a default Storybook example; this does not mean every state has a focused test. The suite and configured automated accessibility checks run in browser via Storybook/Vitest/Playwright. Human visual, keyboard and screen-reader review, meaningful state coverage, real device review, approved tokens, Chromatic baselines, and actual static Studio implementation checks remain open.

## Review inventory and next actions

| Components | Source review and next focused work |
| --- | --- |
| Primary button, secondary button, link button | Verify secondary hover/pressed/disabled and link destination behavior; decide primary amber shadow and approved tokens. |
| Input, textarea, dropdown, checkbox, radio, toggle | Verify required/disabled/error and form integration where needed. Headless Chrome select-keyboard probe failed; in full Chrome an agent reached the control by Tab, opened it by pointer, then used Down/Return successfully. Keyboard-only opening and headless discrepancy remain unresolved. Switch refinement is provisional and requires visual review. |
| Card, featured card, asset card, audience card, principle card | Review long content and heading hierarchy; featured emphasis needs a non-color-only treatment; verify whether optional evidence/status is needed. Structured paragraph nesting was corrected in the two tested card examples. |
| Badge, alert, status text | Define meaningful variants and distinguish routine status from urgent alerts; check live announcements in context. |
| Modal, navigation, tabs, accordion, breadcrumb, tooltip, skip link | Extend coverage for modal background interaction, breadcrumb current-page semantics, and skip-link activation. The focused keyboard checks above are only a starting point. |
| Avatar, header, wordmark, hero, section heading, blockquote, hero image | Review content, accessible names, heading levels, responsive layout, long text and appropriate image alternatives in actual context. Avatar fallback and decorative use need decisions. |
| Stepper, step, workbench, proof block | Check real content and narrow layouts, step semantics and evidence sources; the separate static Studio pilot is evidence for its own tested states only. |

The listed groups cover all 35 named component types. Source review is not a complete Impeccable visual critique for each one, and no agent or automated result substitutes for human design approval. Keep this inventory open until each component has evidence for its actual use and meaningful states.

> **Annotation, Claude Opus 5.5 review, 24 November 2026:** Add these focused checks. Tooltip: the pointer can move from the trigger onto the tooltip without it closing (WCAG 1.4.13). Toggle: exposed as a switch with a checked state, and its name does not change with state; confirm with a screen reader. Skip link: activation moves focus, or the next Tab starting point, into the main content. Badge, alert and status text: announcements confirmed with a screen reader in context, since DOM assertions cannot show them. Label the three reviewers as people or agents.
