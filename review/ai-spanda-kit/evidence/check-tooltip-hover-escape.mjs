import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseUrl = process.env.STORYBOOK_URL ?? 'http://127.0.0.1:6014';
const launchOptions = { headless: true };
if (process.env.CHROME_PATH) launchOptions.executablePath = process.env.CHROME_PATH;

const browser = await chromium.launch(launchOptions);
try {
  const page = await browser.newPage();
  await page.goto(new URL('/iframe.html?id=ai-spanda-draft-kit--tooltip', baseUrl).href);
  const trigger = page.getByRole('button', { name: 'More information' });
  await trigger.waitFor();
  assert.equal(await trigger.evaluate(element => element === document.activeElement), false, 'Trigger should not have keyboard focus');
  await trigger.hover();
  const tooltip = page.getByRole('tooltip');
  await tooltip.waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  assert.equal(await tooltip.isVisible(), false, 'Escape should dismiss a tooltip opened by hover even when focus is elsewhere');
  console.log('PASS: Escape dismisses the hover-opened tooltip with focus elsewhere');
} finally {
  await browser.close();
}
