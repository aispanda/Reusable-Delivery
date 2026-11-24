import assert from 'node:assert/strict';
import { chromium } from 'playwright';

// Run with a separately started Storybook; mutate only these temporary browser pages.
const base = process.env.STORYBOOK_URL || 'http://127.0.0.1:6014';
const executablePath = process.env.CHROME_PATH;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const examples = [
  ['header', '.sk-header strong'],
  ['hero', '.sk-hero h1'],
  ['asset-card', '.sk-card h3'],
  ['section-heading', 'h2'],
  ['badge', '.sk-badge'],
];
const errors = [];
try {
  for (const width of [320, 1280]) {
    for (const [story, selector] of examples) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(`${base}/iframe.html?id=ai-spanda-draft-kit--${story}&viewMode=story`);
      const content = page.locator(selector).first();
      await content.waitFor();
      await content.evaluate(el => { el.textContent = 'A'.repeat(100); });
      const size = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, document: document.documentElement.scrollWidth }));
      const pass = size.document <= size.viewport;
      console.log(`${pass ? 'PASS' : 'FAIL'} ${story} at ${width}px: document ${size.document}px`);
      if (!pass) errors.push(`${story} at ${width}px`);
      await page.close();
    }
  }
  assert.deepEqual(errors, [], `Overflow detected: ${errors.join(', ')}`);
} finally {
  await browser.close();
}
