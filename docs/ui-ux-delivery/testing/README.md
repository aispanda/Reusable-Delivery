# Reusable UI testing starter (draft)

Purpose: give a new project a small example of a testable component and a repeatable evidence record. Adapt these files to the actual product and stack. They are starters, not a production ready test framework or proof of portability across all websites.

## Run in this package

Run commands from `docs/ui-ux-delivery/`. One `package.json` there installs Playwright, `@axe-core/playwright` and Storybook for both routes:

```sh
npm install
npx playwright install chromium   # or set CHROME_PATH to an installed Chrome
npm run check:static              # static HTML check, writes JSON evidence to evidence/
npm run test:stories              # Storybook stories with accessibility rules
```

`react/Button.example.stories.tsx` imports the neutral example button from `examples/react/Button.tsx`; point it at the project's own component when adapting.

## Adapt to a project

1. Record the project brief, supported browsers and devices, target stack, component states and acceptance criteria. Keep brand and token decisions in the project's source of truth.
2. **Static HTML:** copy `static/static-button.html` and `static/check-static-button.mjs` into a local test area and rebuild the fixture from the real component. Run `node path/to/check-static-button.mjs path/to/fixture.html` from a folder whose `node_modules` contains Playwright. A static site without Node can keep these checks in a separate `ui-tests/` folder with its own `package.json`, so the site gains no build tooling. The check serves the fixture over a local http address because `file://` pages follow different security and storage rules; a content security policy set in a meta tag still applies.
3. **React with Storybook:** adapt `react/Button.example.stories.tsx` to the project's own component and Storybook setup. It needs Storybook 9 or later and a React framework package; change `@storybook/react-vite` to the project's own, such as `@storybook/nextjs` or `@storybook/react-webpack5`. A rendering pass alone does not cover all behavior.
4. **Other stacks** (for example Astro or server rendered templates): run the same kinds of checks with the project's own browser test runner against built pages, rather than duplicating markup in another component framework only to create stories.
5. Use `results-checklist.md` for every meaningful pass, and add keyboard, screen reader, touch, zoom and visual checks appropriate to the use case. Automated results are not human approval.

## Required for each project that adopts the starter

1. A fixture, story or page test built from the real component's markup, styles, content and acceptance criteria, not the example button.
2. Keyboard checks for each interactive state the brief names: reached by Tab, activated by Enter and Space where the element supports them, skipped when disabled.
3. Automated accessibility rules: Storybook's accessibility check set to fail on violations, or `@axe-core/playwright` for pages and static HTML. Record which impact levels fail the run.
4. Proof that each new check can fail: break the fixture or component once on purpose, save the failing output, restore it, save the passing output.
5. A saved evidence file per run and a filled `results-checklist.md` naming who performed each manual check.
6. Before handoff, the checks in `human-review-checklist.md` marked as required.

Optional when the brief or risk calls for it: other browsers through `BROWSER=firefox` or `BROWSER=webkit`, more widths through `WIDTHS`, zoom and forced colors review, real device and touch review, visual baselines, CI.

## Native controls and simulated input

Story play functions use simulated events, which do not trigger native browser behavior such as closing a dialog with Escape or opening a select menu. Check those in a real browser and name the operating system in the evidence. For a native `select`, test the page's response to a change with Playwright's `selectOption`, and leave keyboard opening of the menu to a manual check on each supported operating system, because the menu is drawn by the operating system and is often not drivable in headless mode.

## Visual baselines

Screenshots differ between operating systems, browser versions and installed fonts, so a baseline made on one machine will not match another machine or CI. Fix the environment first (a hosted service such as Chromatic, or one pinned container), then have the approving person accept the baseline. Test the actual delivery stack separately from any reference implementation.

Portability: these examples have not yet been validated on a second, unrelated project. Record what needed adaptation before describing the package as portable.
