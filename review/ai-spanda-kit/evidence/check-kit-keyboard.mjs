import { chromium } from 'playwright';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
try {
  const page = await browser.newPage();
  const story = async id => page.goto(`http://localhost:6007/iframe.html?id=ai-spanda-draft-kit--${id}&viewMode=story`);
  await story('modal-keyboard');
  await page.getByRole('button', { name: 'Open Review draft' }).focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.getByRole('dialog').isVisible(), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('dialog').count(), 0);
  assert.equal(await page.getByRole('button', { name: 'Open Review draft' }).evaluate(el => el === document.activeElement), true);
  await story('accordion-keyboard');
  const summary = page.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.getByText('Illustrative explanation.').isVisible(), true);
  await page.keyboard.press('Space');
  assert.equal(await page.getByText('Illustrative explanation.').isVisible(), false);
  await story('radio-keyboard');
  await page.getByRole('radio', { name: 'Brief' }).focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowDown');
  assert.equal(await page.getByRole('radio', { name: 'Detailed' }).isChecked(), true);
  assert.equal(await page.getByRole('radio', { name: 'Brief' }).isChecked(), false);
  console.log('PASS: native dialog Escape/focus return, accordion Enter/Space and radio keyboard selection');
} finally { await browser.close(); }
