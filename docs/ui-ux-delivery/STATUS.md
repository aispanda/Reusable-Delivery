# Status

Last updated: 24 November 2026. Draft.

## Verified in this package

Run on 24 November 2026 from `docs/ui-ux-delivery/` after `npm ci`, using Node 22.23.5, Playwright 1.65.1, `@axe-core/playwright` 4.14.0, Storybook 10.1.11 and Chrome for Testing 153 on Linux:

* `npm run typecheck` passed.
* `npm run test:stories` passed 8 scenarios: 5 neutral example stories and 3 button example stories, with Storybook accessibility rules set to fail on violations.
* `npm run check:static` with `WIDTHS=320,1280` passed every check at both widths, with no serious or critical axe findings on the sample fixture.
* `npm run build-storybook` completed, with a large chunk size warning.

Earlier runs of the same starter showed that each static check and each button story fails when the fixture or component is deliberately broken, then passes again when restored. Those runs used an earlier copy of the starter and are not repeated here.

## Open

* Portability: not yet validated on a second, unrelated project.
* Human review: no human design, keyboard or screen reader review of this package has been recorded.
* Visual regression: no visual baseline has been accepted and this package has no visual comparison setup. The example screenshot is a preview, not a baseline.
* GitHub Pages is not configured; run the examples locally.
* Licensing: dependencies are installed separately and keep their own licenses. Direct dependency metadata shows MIT, Apache 2.0 and MPL 2.0; transitive dependencies and generated bundles have not been audited.

## Do not claim

Portability to any site, accessibility compliance or certification, human approval, visual regression coverage, or that story counts equal tested components.
