import assert from 'node:assert/strict';
import { chromium } from 'playwright';

// Run against a separately started Storybook; no production site is touched.
const base = process.env.STORYBOOK_URL || 'http://127.0.0.1:6014';
const executablePath = process.env.CHROME_PATH;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
try {
  for (const width of [320, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${base}/iframe.html?id=ai-spanda-draft-kit--workbench&viewMode=story`);
    const content = page.locator('.sk-workbench section p').first();
    await content.waitFor();
    // An unbroken identifier is representative of real content that has no natural word break.
    await content.evaluate(el => { el.textContent = 'A'.repeat(100); });
    const sizes = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, document: document.documentElement.scrollWidth }));
    console.log(`${width}px viewport: document width ${sizes.document}px`);
    assert.ok(sizes.document <= sizes.viewport, `Workbench overflows at ${width}px: ${sizes.document}px document width`);
    await page.close();
  }
} finally {
  await browser.close();
}
