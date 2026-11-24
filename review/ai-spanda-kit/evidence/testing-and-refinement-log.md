# AI Spanda — testing and refinement evidence log

**Purpose:** Collect the history and supporting evidence for a future demonstration slide. This is a working record, not the slide or a claim that the design system is complete. Add new entries as work happens; preserve dates, scope, unresolved issues and links to evidence. Never infer an outcome from a test that did not measure it.

**Last updated:** 2026-11-24. The component work described below is local and provisional.

## Stage 1 — Framework review and correction

| Evidence | Finding | Response | Why it helps |
| --- | --- | --- | --- |
| Carbon's bounded review and Claude Opus 5.5's subsequent review of the earlier framework packet | The workflow needed a path for the actual static HTML Studio; Open Design's role was inconsistent, and a single button exercise was not a full screen or human review. | Updated the framework to distinguish static and React paths, make Open Design optional, and record review limitations. | The workflow can be applied to the actual target stack, and its evidence is less likely to be overstated. |

Sources: [Carbon review](../handoffs/carbon-bounded-framework-review.md), [Claude review summary](../handoffs/claude-opus-framework-review-summary.md), [working framework](../lean-uiux-delivery-framework.md). Claude reviewed the earlier framework packet, not the 35 later component drafts.

## Stage 2 — Static Studio pilot

| Check | Result and scope | Significance |
| --- | --- | --- |
| Playwright and automated accessibility checks | On an isolated static HTML Studio copy, checked example switching, skip-link focus, live-region markup and horizontal overflow at 320, 768 and 1280 pixels; no serious or critical axe findings were detected in the tested states. | Demonstrated a test on the actual target technology, without changing the live site. This is not full accessibility certification or a human review. |

Source: [delivery status](../handoffs/current-delivery-status.md) and `../../ai-builder-studio-pilot/evidence/`.

## Stage 3 — Draft component library and initial tests

- Created **35 draft specifications** and **35 illustrative React Storybook examples**. The examples are a separate lab, not the static Studio implementation. Four additional source rows were treated as states of parent components.
- Earlier saved evidence recorded 58 passing Storybook stories, TypeScript and a successful Storybook build. Storybook's configured accessibility checks ran. This count is a historical snapshot, not the number of individually approved components.
- Source: [delivery status](../handoffs/current-delivery-status.md); written specifications in `../../ai-builder-studio-pilot/component-specs/`; examples in `../../taskbox/src/components/SpandaKit.stories.tsx`.

## Stage 4 — Primary button pilot

| Issue found | Correction | Evidence and practical effect |
| --- | --- | --- |
| A custom CSS class replaced the button's own classes. | Preserved the base classes when a custom class is supplied. | A new regression test failed before the fix and passed afterward; custom styling no longer strips the core button style in that tested case. |
| Hover and pressed feedback were absent. | Added provisional feedback while retaining the existing visual direction. | Makes those interaction states distinguishable; the design still needs human review. |
| The story lacked focused interaction and disabled examples. | Added stories for focus, Enter, Space, pointer activation and disabled keyboard behavior. | The specified behaviors can be checked repeatedly. |

Impeccable's source detector returned no findings on its scan; that is not a complete design review. The default button was inspected at mobile and desktop widths. The amber shadow and approved brand tokens remain undecided. Source: [primary button spec](../../ai-builder-studio-pilot/component-specs/051-primary-button.md).

## Stage 5 — Parallel group review and focused fixes

Three reviewers examined forms, content, and navigation/interaction groups from source. Their findings were coordinated and checked; the review is preliminary, not a complete visual critique of every component.

| Issue | Change | Evidence / improvement |
| --- | --- | --- |
| Secondary button could lose its base classes when a custom class was supplied. | Preserve both base and custom classes. | Regression test failed before the fix and passed afterward. |
| Radio options all submitted the default value `on`. | Give each option its own value. | A form-data test now verifies the selected value. |
| Tooltip disappeared on pointer exit even while its trigger remained focused. | Track hover and focus independently; retain Escape dismissal. | Focus/hover interaction stories now exercise both transitions. |
| A keyboard user could tab past a text-only tab panel. | Make the panel keyboard-focusable and provide a focus indicator. | A story checks the tab-to-panel path. |
| Navigation could not identify the current page. | Support an explicitly current link with semantic and visible indication. | A story checks `aria-current`; the current item is distinguishable in the example. |
| Simulated events did not reproduce native dialog and accordion keyboard defaults. | Checked actual keyboard input with Playwright in Chrome. | Escape and focus return for the dialog, and Enter/Space for the accordion, passed in that browser. This explains the earlier test-harness failures rather than labeling them component failures. |

**Latest recorded run:** 68 Storybook tests passed, including configured automated accessibility checks; TypeScript passed. The separate Playwright native keyboard check passed. The Storybook build passed earlier in this pass, with bundle-size warnings, before the last navigation change. Impeccable's changed-source detector reported an empty finding list after the edits. Test counts refer to stories across the project, not 68 components or complete coverage.

Source: [component review tracker](../handoffs/component-review-2026-11-24.md), `../../taskbox/src/components/SpandaKit.tsx`, `../../taskbox/src/components/SpandaKit.stories.tsx`, and `../../taskbox/scripts/check-kit-keyboard.mjs`.

## Stage 6 — Form controls and specification review

On 2026-11-24, parallel reviewers added component-specific evidence and pending acceptance checks to the remaining draft specifications. They reviewed source and existing stories; this was not a visual or human approval of all components.

| Issue | Change | Evidence / improvement |
| --- | --- | --- |
| The text input discarded the supplied field name and required setting. | Forward native input attributes and show a visible “required” label when applicable. | Tests failed before the fix and now verify the required state, label and submitted form value. An agent inspected the focused example at 390 and 1440 pixels; this is not human or device approval. |
| The checkbox ignored the disabled setting. | Forward native checkbox attributes. | A failing-then-passing story checks that the disabled checkbox is skipped by keyboard tabbing. |
| Audience and principle card wrappers could create invalid nested paragraphs when given structured content. | Use a container suitable for block children. | A story reproduced the invalid nesting and passes after the fix, avoiding that markup problem in the tested examples. |
| A breadcrumb whose final item was a link did not identify the current page. | Mark the final item current whether it is linked or plain. | A failing-then-passing story checks current-page semantics for a linked final item. |

After these changes, **72 Storybook tests passed**, including configured automated accessibility checks; TypeScript passed. The most recent changed-source Impeccable scan before the breadcrumb change returned no findings. The tests cover selected cases and do not establish complete component accessibility or validation. Sources: [input spec](../../ai-builder-studio-pilot/component-specs/056-input-field.md), [checkbox spec](../../ai-builder-studio-pilot/component-specs/059-checkbox.md), and [review tracker](../handoffs/component-review-2026-11-24.md).

## Stage 7 — Navigation and content checks

On 2026-11-24, reviewers rechecked the specification notes against the evolving code and identified a previously unsupported claim about dropdown arrow keys. The spec now describes that as intended behavior pending a dedicated check.

| Issue or gap | Change or test | Evidence / improvement |
| --- | --- | --- |
| Avatar initials could disappear when a name had extra spaces. | Normalize whitespace before deriving initials. | A story failed before the fix and passed afterward for `Alex Morgan` with extra spaces. |
| Tab keyboard coverage was limited. | Added Left/Right wrapping and Home/End checks. | The focused story verifies the stated selection and focus outcomes; interactive panel contents and screen-reader review remain open. |
| Several content examples only rendered with no specific checks. | Added focused assertions for an asset link and keyboard focus, step order, a supplied proof date, and the supplied image alternative. | These checks verify those specific examples; they do not validate external destinations, proof sources, licensing or visual design. |
| Native keyboard selection in the actual static Studio had not been verified. | Probed the select using real Playwright keyboard input in headless Chrome. | At the first viewport, neither ArrowDown alone nor Space/ArrowDown/Enter changed the selection. The cause is unresolved; this is not a pass or a confirmed component defect. |
| Follow-up in full Chrome | An agent used Tab to reach the control, opened its native menu with a pointer, then used Down and Return. | Meeting notes was selected and the brief plus three visible workflow steps updated. Keyboard-only menu opening and the headless discrepancy remain unverified. |

After these changes, **75 Storybook tests passed** across the project; TypeScript passed, and Impeccable's changed-source detector returned no findings. The total includes stories outside the 35-component kit and does not establish full state coverage.

The next pass changed the checkbox-like switch to a provisional switch-shaped control with on/off positions. An agent inspected its on-state at 390 and 1440 pixels. **76 Storybook tests passed** after this change; TypeScript passed and the changed-source detector reported no findings. Human design and accessibility review, forced-colors rendering and actual device testing remain open.

A subsequent form pass found that the textarea discarded its submitted name and the select ignored `disabled`. Regression stories reproduced both cases; the draft controls now forward native attributes and the tests pass. **78 Storybook tests passed** across the project, TypeScript passed, and the changed-source detector returned no findings. These checks do not cover every form state.

The separate Playwright keyboard check was extended to the React radio example: Space then ArrowDown selected the next option in headless Chrome. This verifies that tested sequence only; assistive technology and touch review remain open.

## Stage 8 — Claude's starter review and validation

Claude Opus 5.5 reviewed the starter in the earlier framework conversation and supplied exact replacement files and annotations. The replacement static check initially failed its axe integration because it used an implicit browser context; Claude supplied a targeted correction and the corrected check passed at 320 and 1280 pixels with no serious or critical axe findings on the sample fixture. Five deliberately broken fixture variants independently triggered their expected checks; the original fixture was not changed and passed again afterward. The exact React example, adapted only to import the current Taskbox button, passed three stories; separate non-button, ignored-disabled and missing-alt mutations failed as expected. Their outputs and JSON results are in `starter-tests/`. These demonstrate detection in the test samples, not complete site accessibility.

The current Taskbox suite passed **79 stories** and its Storybook build completed after the later component changes; the build reported large-chunk warnings. A story count is not a count of fully tested or approved components. Human review, a second-project portability trial, and visual baselines remain open.

## Stage 9 — Read-only checks of both live pages

On 2026-11-24, an agent used Playwright, headless Chrome 158 and axe on the public AI Spanda homepage and public Agentic Build Studio page at 390 and 1280 pixels. No forms were submitted or live files changed. These are current deployed pages, not the local 35-component React library. The live Studio page differs from the isolated selector pilot; no selector behavior was claimed for the live page.

After fonts loaded and entrance transitions settled, both pages returned HTTP 200 and had no document-level horizontal overflow at the tested widths. Axe flagged **10 elements for serious color-contrast issues and one moderate duplicate-landmark issue** on AI Spanda at each width. It flagged **one serious link-distinguishability issue** on the live Studio at each width. Findings require contextual review; automated checks do not establish overall accessibility or usability. Full targets and measured values: [live-readonly-audit.json](live-readonly-audit.json). Scope was the initial pages and loaded state, not all routes, authenticated flows, keyboard interactions, real devices or screen-reader review.

## Stage 10 — First local site integration comparison

On 2026-11-24, isolated local checkouts of AI Spanda (`078a7b07bdd7b8cfc7ac7f6f519dee85263b11fd`) and Agentic Build Studio (`4cd0daa0965d18bacae84277f0c9373bc6e42ee6`) were compared before and after a narrowly scoped adaptation of the draft button's pressed feedback. The Studio source HTML had matched the deployed HTML; the website's deployed commit was not established. These are candidate changes, not deployed changes or direct integration of the React Storybook library.

| Scope | Before → candidate | Evidence and limits |
| --- | --- | --- |
| Website homepage hero actions | Pressed state looked like hover → primary action moves a little further and reduces its shadow when pressed; a small Astro action-link component preserves the existing link destinations. | The focused Chrome check failed before and passed after; the site build passed. The component is an adaptation of the pattern in Astro, not the React component. |
| Studio load actions | Pressed state looked like hover → the targeted load actions use a darker pressed state. | The focused Chrome check failed before and passed after. Repository sample files loaded through the local file picker and all four views were selected and visible at 390 and 1280 pixels. |
| Browser and automated checks | Both baseline and candidate had no document-level horizontal overflow at 390 and 1280 pixels. | The homepage retained 10 axe contrast targets and one duplicate-landmark target; Studio retained one link-distinguishability target. These issues were outside the action-control change and remain open. External requests were blocked during the comparison; Studio's bundled stylesheet loaded locally, but remote resources were not represented. Website captures use the Astro development server and include its development toolbar. |

The scripts, JSON and screenshots are under `../site-comparison/`; local screenshots are draft evidence, not approved visual baselines. Impeccable's detector returned no findings for the changed website files; it flagged four warnings in the full Studio HTML that require contextual review. No human usability or accessibility review, screen-reader check, physical device test, or Chromatic comparison has been completed. The narrow test demonstrates added pressed feedback, not that either whole site is better or worse.

## Stage 10 — Component review for Claude (24 November 2026)

Three parallel agent reviewers examined form, navigation, and content components and their stories. This is agent review, not human approval or a complete visual critique. New focused stories verify input and textarea invalid-state descriptions and disabled controls' exclusion from form submission. The full Storybook suite passed 82 scenarios across the project, including 56 SpandaKit stories and three additional form-review stories; TypeScript passed. Counts are scenarios, not component approvals.

| Issue | Change | Verification and limits |
| --- | --- | --- |
| A tooltip opened by pointer hover did not dismiss on Escape when focus was elsewhere. | Handle Escape while the tooltip is open, regardless of focused element. | Local headless Chrome regression failed before and passed after the change. Human assistive-technology review remains open. |
| A long unbroken value in a workbench panel expanded a 320px viewport to 1094px. | Allow panel content to wrap. | Local headless Chrome regression failed before and passed at 320px and 1280px after. This does not cover all content shapes. |

Additional long-text refinement: synthetic unbroken strings caused overflow in Header, Hero, AssetCard, SectionHeading and Badge: nine of ten width/component cases failed before the changes. Scoped wrapping was added, and all ten cases passed in headless Chrome at 320 and 1280 pixels. Ordinary example content did not reproduce those stress-case failures. Toggle and RadioGroup have limited configurable state and form APIs; dynamic tab-list removal is an unverified edge case. Human visual, keyboard, screen reader and real-device reviews, brand approval, and an accepted Chromatic baseline remain outstanding. React examples are not production-site integration.

Sources: `taskbox/scripts/check-tooltip-hover-escape.mjs`, `taskbox/scripts/check-workbench-overflow.mjs`, `taskbox/scripts/check-content-overflow.mjs`, `taskbox/src/components/SpandaKitFormReview.stories.tsx`, and `Muse/handoffs/form-review-followup-2026-11-24.md` (paths relative to workspace root).

## Open work and limits to preserve in the demo

The framework now includes a draft [testing starter](../framework-templates/testing-starter/): a static HTML fixture and Playwright smoke check, an illustrative React story, and a results checklist. The static fixture passed its local Chrome keyboard smoke test on 2026-11-24. The React story also passed when its import was adapted to the current Taskbox button; the temporary test copy was then removed. Portability on a second project remains unverified, and existing pilot scripts still contain project-specific assumptions. Do not claim the process can be replicated unchanged on any website.

- Many component states and visual details still require deeper review; the 35 examples are drafts.
- Human visual, keyboard, screen-reader and usability reviews and approved tokens remain open.
- Chromatic is not connected and no approved visual baseline or cloud visual comparison exists. No Android emulator or physical-device test was performed for this component pass.
- React lab results do not establish that the actual static Studio implements each component. Static pilot results apply only to its tested states.
- The original issue, fix and passing check demonstrate specific improvements; they do not prove overall quality or accessibility compliance.

## Future entries

For each new stage, record **date and scope → tool or reviewer → issue → change → evidence/result → practical improvement → limitations → links**. Keep raw results or durable references where available. Select and condense the strongest evidence only when it is time to build the slide.
