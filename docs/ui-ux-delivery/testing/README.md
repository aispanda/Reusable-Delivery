# Reusable UI testing starter — draft

Purpose: give a new project a small example of a testable component and a repeatable evidence record. Adapt these files to the actual product and stack. They are starters, not a production-ready test framework or proof of portability across all websites.

1. Record the project brief, supported browsers/devices, target stack, component states and acceptance criteria. Keep brand and token decisions in the project's source of truth.
2. For a static HTML project, copy `static-button.html` and `check-static-button.mjs` into a local test area and adapt the fixture to the real component. The check expects `playwright` to be installed in the project from which it is run, plus a compatible browser. Run `node path/to/check-static-button.mjs path/to/static-button.html` from that project. Set `CHROME_PATH` only if you need a specific locally installed Chrome; otherwise Playwright's default browser is used. A browser launch may require local environment permission.
3. For React, adapt `Button.example.stories.tsx` to the project's actual button and existing Storybook setup. Storybook, its browser test integration and accessibility checks must be installed and configured in that project. Change imports and criteria to match the real component. A story is an example; a rendering pass alone does not cover all behavior.
4. Use `results-checklist.md` for every meaningful pass, noting exact versions, commands, states, widths, results and exclusions. Add keyboard, screen reader, touch, zoom and visual checks appropriate to the use case. Do not equate automated results with human approval.
5. Review and accept visual baselines with the appropriate person before enabling comparisons in a tool such as Chromatic. Test the actual delivery stack separately from any reference implementation.

These examples are a first extraction from the AI Spanda pilot. The static fixture passed a local Chrome smoke test; the React story passed after adapting its import to the current Taskbox button. Validate them on a second, unrelated project and record what needed adaptation before describing the package as portable.

> **Annotation, Claude Opus 5.5 review, 24 November 2026: required minimum, optional extensions and setup.**
>
> Required for each project that adopts the starter:
> 1. A fixture or story built from the real component's markup, styles and acceptance criteria, not the example button.
> 2. Keyboard checks for each interactive state the brief names: reached by Tab, activated by Enter and Space where the element supports them, skipped when disabled.
> 3. Automated accessibility rules: Storybook's accessibility check set to fail on violations, or `@axe-core/playwright` for static HTML. Record which impact levels fail the run.
> 4. Proof that each new check can fail: break the fixture or component once on purpose, save the failing output, restore it, save the passing output.
> 5. A saved evidence file per run and a filled `results-checklist.md` naming who performed each manual check.
> 6. Before handoff, the checks in `human-review-checklist.md` marked as required.
>
> Optional when the brief or risk calls for it: other browsers through `BROWSER=firefox` or `BROWSER=webkit`, more widths through `WIDTHS`, zoom and forced colors review, real device and touch review, visual baselines, CI.
>
> Setup. A static site without Node can keep these checks in a separate `ui-tests/` folder with its own `package.json`, so the site gains no build tooling. Playwright needs a browser: run `npx playwright install chromium` where network access is allowed, or set `CHROME_PATH` to an installed Chrome. The static check serves the fixture over a local http address because `file://` pages follow different security and storage rules; a content security policy set in a meta tag still applies. The React example needs Storybook 9 or later and a React framework package; change `@storybook/react-vite` to the project's own, such as `@storybook/nextjs` or `@storybook/react-webpack5`.
>
> Native controls and simulated input. Story play functions use simulated events, which do not trigger native browser behavior such as closing a dialog with Escape or opening a select menu. Check those in a real browser and name the operating system in the evidence. For a native `select`, test the page's response to a change with Playwright's `selectOption`, and leave keyboard opening of the menu to a manual check on each supported operating system, because the menu is drawn by the operating system and is often not drivable in headless mode.
>
> Visual baselines. Screenshots differ between operating systems, browser versions and installed fonts, so a baseline made on one Mac will not match another machine or CI. Fix the environment first (a hosted service such as Chromatic, or one pinned container), then have the approving person accept the baseline.


> **Annotation, Claude Opus 5.5, package note, 24 November 2026:** In this package, run commands from `docs/ui-ux-delivery/`. One `package.json` there installs Playwright, `@axe-core/playwright` and Storybook for both routes: `npm install`, `npx playwright install chromium`, then `npm run check:static` for the static check or `npm run test:stories` for the stories. `react/Button.example.stories.tsx` imports the neutral example button from `examples/react/Button.tsx`; point it at the project's own component when adapting.
