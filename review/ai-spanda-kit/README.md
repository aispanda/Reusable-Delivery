# AI Spanda draft component kit: review copy

Review branch only. This folder holds a copy of the AI Spanda draft React kit, its 35 draft specs and evidence scripts from the 24 November 2026 review packet, so changes can be tested and reviewed. It is project specific, is not part of the reusable `docs/ui-ux-delivery` asset, and is not integrated with any live site.

Nothing here is approved. Human design, keyboard, screen reader and device review, approved tokens and a Chromatic baseline remain open.

## Run

```sh
cd review/ai-spanda-kit
npm install
npx playwright install chromium   # or set CHROME_PATH to an installed Chrome
npm test                           # Storybook scenarios with accessibility rules set to fail on violations
npm run typecheck
```

When running as root in a container, also set `CHROME_ARGS=--no-sandbox`.

`.storybook/` and `vite.config.ts` are a minimal harness for this copy; the original Taskbox configuration was not in the packet.
