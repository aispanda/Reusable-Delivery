import assert from 'node:assert/strict';
import { chromium } from 'playwright';

// Real pointer hover and press on the button stories. Run with Storybook started separately.
const base = process.env.STORYBOOK_URL || 'http://127.0.0.1:6006';
const executablePath = process.env.CHROME_PATH;
const args = process.env.CHROME_ARGS ? process.env.CHROME_ARGS.split(' ') : [];
const browser = await chromium.launch({ headless: true, args, ...(executablePath ? { executablePath } : {}) });
const style = (el) => { const s = getComputedStyle(el); return { bg: s.backgroundColor, shadow: s.boxShadow, transform: s.transform }; };
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 600 } });
  for (const [story, name] of [['primary-button', 'Start a project'], ['secondary-button', 'View details']]) {
    await page.goto(`${base}/iframe.html?id=ai-spanda-draft-kit--${story}&viewMode=story`);
    const button = page.getByRole('button', { name });
    await button.waitFor();
    await page.mouse.move(0, 0);
    const rest = await button.evaluate(style);
    await button.hover();
    const hover = await button.evaluate(style);
    await page.mouse.down();
    const pressed = await button.evaluate(style);
    await page.mouse.up();
    assert.notEqual(hover.bg, rest.bg, `${story}: hover background should differ from rest`);
    assert.notEqual(pressed.bg, hover.bg, `${story}: pressed background should differ from hover`);
    console.log(`PASS ${story}: rest ${rest.bg}, hover ${hover.bg}, pressed ${pressed.bg} ${pressed.transform}`);
  }
} finally {
  await browser.close();
}
