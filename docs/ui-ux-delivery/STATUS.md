# Status

Last updated: 24 November 2026. Draft.

## Verified in this package

Run on 24 November 2026 from `docs/ui-ux-delivery/` after `npm ci`, using Node 22.23.5, Playwright 1.65.1, `@axe-core/playwright` 4.14.0, Storybook 10.1.11 and Chrome for Testing 153 on Linux:

* `npm run typecheck` passed.
* `npm run test:stories` passed 8 scenarios: 5 neutral example stories and 3 button example stories, with Storybook accessibility rules set to fail on violations.
* `npm run check:static` with `WIDTHS=320,1280` passed every check at both widths, with no serious or critical axe findings on the sample fixture.
* `npm run build-storybook` completed, with a large chunk size warning.

Showroom page (`showroom/`), run on 24 November 2026 with `npm run check:showroom`, Google Chrome 153 headless on Linux through Playwright 1.65.1 and `@axe-core/playwright` 4.14.0:

* 33 checks passed at 320, 768 and 1280 pixels: axe on load, with the dialog open, in the form error state and with AI Spanda tokens (no violations of any impact); no sideways scrolling; every control reached by Tab with a visible outline; stage tabs, dialog, form, token switch and save button behavior.
* Each of those checks failed when its feature was broken on purpose, then passed again. Records are in `showroom/delivery/check-results/` and summarized in `showroom/delivery/results.md`.

Earlier runs of the same starter showed that each static check and each button story fails when the fixture or component is deliberately broken, then passes again when restored. Those runs used an earlier copy of the starter and are not repeated here.

## Open

* Portability: not yet validated on a second, unrelated project.
* Human review: no human design, keyboard or screen reader review of this package has been recorded.
* Visual regression: no visual baseline has been accepted and this package has no visual comparison setup. The example screenshot is a preview, not a baseline.
* GitHub Pages is not enabled for this repository yet. The workflow `.github/workflows/ui-ux-showroom-pages.yml` publishes the showroom once Pages uses GitHub Actions as its source; until then run it locally.
* Showroom: no human design, keyboard or screen reader review; checked only in Chrome on Linux; light theme only.
* Licensing: dependencies are installed separately and keep their own licenses. Direct dependency metadata shows MIT, Apache 2.0 and MPL 2.0; transitive dependencies and generated bundles have not been audited.

## Do not claim

Portability to any site, accessibility compliance or certification, human approval, visual regression coverage, or that story counts equal tested components.
