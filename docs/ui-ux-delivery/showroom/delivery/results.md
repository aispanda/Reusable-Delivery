# UI test and review record: showroom

- Date, project, reviewer and source revision: 24 November 2026; UI/UX kit showroom; automated checks run by Claude (Opus 5.5) as an agent with Playwright; source is branch `review/ui-ux-kit-readme-branding`, file hashes in each JSON record.
- Target component or screen, stack and purpose: the whole showroom page, static HTML, CSS and script; to show the kit working on its own front page.
- Design, specification and token source links; provisional decisions: [02-design-system.md](02-design-system.md), [03-component-stage-tabs.md](03-component-stage-tabs.md), [04-screen-spec.md](04-screen-spec.md). Light theme and the raster logo are provisional.
- Relevant states and acceptance criteria: listed in [04-screen-spec.md](04-screen-spec.md) under data and states.
- Environment: Linux, Google Chrome 153.0.8010.12 headless through Playwright 1.65.1, `@axe-core/playwright` 4.14.0, viewports 320, 768 and 1280 pixels wide by 900 high, keyboard input.
- Tools and exact commands: from `docs/ui-ux-delivery/`, `npm ci`, then `CHROME_PATH=/usr/bin/google-chrome npm run check:showroom`; for each fault, the same command with `BREAK=<name>`.
- Result for each check: all 33 checks passed (11 at each width). axe reported no violations of any impact on load, with the dialog open, in the form error state and with AI Spanda tokens. Record: [check-results/showroom-check-2026-11-24.json](check-results/showroom-check-2026-11-24.json).
- Issue, correction and evidence that it was corrected: the first token switch run read the button colour during its 120 millisecond transition and failed; the check now waits for the transition, and the page itself was unchanged.
- Visual, keyboard, screen reader, zoom, touch and real device review actually performed: an agent looked at screenshots at 1280 and 390 pixels. That is not a human review. No human keyboard, screen reader, zoom, touch or real device review yet.
- Visual baseline: not set.
- Real integration versus fixture or mocked data scope: no backend; form and dialog results are local to the page.
- Remaining issues, owner and next action: human review using `testing/human-review-checklist.md`; owner Rajeev.
- Evidence links and demo relevant before and after observations: [check-results/](check-results/).
- Performed by, for each manual or visual check: screenshot inspection by Claude (Opus 5.5), agent. No person yet.
- Checks shown able to fail (fault injected after the page scripts run, failing output, then the passing run above):

| Fault (`BREAK=`) | Checks that failed at every width | Record |
| --- | --- | --- |
| `focus`: focus outline removed | Tab reaches every control with a visible outline | [json](check-results/showroom-break-focus-2026-11-24.json) |
| `tabs`: key handler removed | Stage tabs | [json](check-results/showroom-break-tabs-2026-11-24.json) |
| `dialog`: dialog never opens | Dialog | [json](check-results/showroom-break-dialog-2026-11-24.json) |
| `dialogcontrast`: dialog text made faint | Automated rules with the dialog open | [json](check-results/showroom-break-dialogcontrast-2026-11-24.json) |
| `form`: validation removed | Form | [json](check-results/showroom-break-form-2026-11-24.json) |
| `tokens`: switch disconnected | Token switch | [json](check-results/showroom-break-tokens-2026-11-24.json) |
| `save`: button handler removed | Save button | [json](check-results/showroom-break-save-2026-11-24.json) |
| `contrast`: lede text made faint | Automated rules on load, in the error state and with AI Spanda tokens | [json](check-results/showroom-break-contrast-2026-11-24.json) |
| `alt`: logo alt text removed | Automated rules on load, in the error state and with AI Spanda tokens | [json](check-results/showroom-break-alt-2026-11-24.json) |
| `overflow`: 1600 pixel element added | No horizontal overflow | [json](check-results/showroom-break-overflow-2026-11-24.json) |

- Not covered by this pass: screen reader output, zoom and text spacing, forced colors, touch and real devices, browsers other than Chrome, operating systems other than Linux, visual design quality and brand fit.
- Build status: no build step; the page is served as written.
- Detector scope: the whole showroom page.
- Operating system for each native control check: dialog open and Escape checked in Chrome on Linux. The native select menu was not opened by keyboard; that stays a human check on each supported system.
