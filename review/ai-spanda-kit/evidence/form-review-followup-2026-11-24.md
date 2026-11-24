# Form component follow-up — 24 November 2026

Scope: the draft React Storybook examples, not the live Studio or website. Findings are an agent source review and targeted automated checks, not human accessibility or design approval.

## Newly checked

`taskbox/src/components/SpandaKitFormReview.stories.tsx` adds three scenarios:

1. A required input exposes an invalid state and the supplied error description.
2. A required textarea exposes an invalid state and the supplied error description.
3. Disabled checkbox and select values are excluded from native form submission.

The focused command `./node_modules/.bin/vitest run --project storybook src/components/SpandaKitFormReview.stories.tsx` passed 3 of 3 scenarios on the local Storybook Chromium test runner. `./node_modules/.bin/tsc --noEmit` also passed. The assertions establish DOM semantics and form data only; they do not establish that a screen reader announced the error or that a particular visual design meets requirements.

## Open capability and review gaps

- `Toggle` currently accepts only a label. It cannot be configured through its API with a disabled state, controlled checked value, change handler or form name/value. Its draft spec lists disabled as a relevant state; do not claim that state is implemented.
- `RadioGroup` accepts label, options and name, but does not expose disabled or required states, a selected value, a change handler, or separate stable option values. Determine the target use case before defining its API.
- `SelectField` uses option labels as option values. Localized or changing labels can therefore also change submitted values; support for distinct values is an integration decision.
- The input and textarea examples do not render their own error text; callers must supply the description and reference it. Dynamic validation, announcement timing, human screen-reader and keyboard review, high contrast, touch and visual review remain open.
- No real site has been validated by these checks. Visual baseline approval, devices and remaining component states remain open.
