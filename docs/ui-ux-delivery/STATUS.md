# Status

Last updated: 24 November 2026. Draft.

> **Verification update, 24 November 2026:** The assembled candidate passed TypeScript, a Storybook build, eight Storybook scenarios and the static starter check at 390 pixels in local Chrome. The build reported large-chunk warnings. AI Spanda was named as copyright holder; third-party rights remain to be checked. The historical sections below describe the state when Claude drafted this file.

> **Rights update:** The owner confirmed AI Spanda created the asset and named AI Spanda as copyright holder. Direct dependency metadata identifies MIT, Apache-2.0, and MPL-2.0 licenses; dependencies are installed separately and retain their own terms. This is a direct-dependency check, not an audit of all transitive dependencies or generated distributions.

> **Visual update:** A screenshot of the neutral static examples is included for GitHub readers. It is not an approved visual regression baseline.

## Recorded evidence from the reference project

These results come from the AI Spanda project's evidence record. The raw outputs are not included in this package.

* The static check (`testing/static/check-static-button.mjs`) passed on the sample fixture at 320 and 1280 pixels, with no serious or critical axe findings.
* Five deliberately broken copies of the fixture each triggered their expected check. The unchanged fixture passed again afterward.
* `testing/react/Button.example.stories.tsx`, with only its import changed to the reference project's button, passed three stories. Three deliberate breaks (a non button element, an ignored disabled setting, a missing image alternative) each failed as expected.
* Versions recorded in the saved results: Playwright 1.65.1, Chromium 158.0.8127.88.

## Current environment, not verified as the run environment

`@axe-core/playwright` 4.14.0, Storybook 10.1.11, Node 26.13.0, macOS 27.0.1.

## Not yet run in this package

* `package.json`, `vite.config.ts`, `.storybook/` and `tsconfig.json` as assembled here
* `examples/`: the static component page and the React stories
* `testing/react/Button.example.stories.tsx` with its new import path

## Open

* Portability: no trial yet on a second, unrelated project.
* Human review: no human design, keyboard or screen reader review of this package has been recorded.
* Visual regression: a Chromatic project exists for the reference project's practice Storybook, but no build has been published and no baseline accepted. This package has no Chromatic setup.
* GitHub Pages is not configured; view examples locally.
* Licence: MIT proposed; copyright holder and third party rights to be confirmed.

## Do not claim

Portability to any site, accessibility compliance or certification, human approval, visual regression coverage, or that story counts equal tested components.
