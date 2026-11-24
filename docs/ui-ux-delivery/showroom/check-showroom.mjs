// Checks for the showroom page, adapted from testing/static/check-static-button.mjs.
// Run from docs/ui-ux-delivery: npm run check:showroom
// Optional: WIDTHS=320,768,1280, CHROME_PATH for an installed Chrome, OUT for the evidence folder,
// BREAK=focus|tabs|dialog|form|tokens|contrast|overflow|alt|save|dialogcontrast to break the page on purpose and prove a check fails.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const page = join(here, 'index.html');
const outDir = resolve(process.env.OUT ?? join(here, 'delivery', 'check-results'));
const widths = (process.env.WIDTHS ?? '320,768,1280').split(',').map(Number);
const breakName = process.env.BREAK ?? '';
const NOT_COVERED = ['screen reader output', 'zoom and text spacing', 'forced colors', 'touch and real devices', 'other browsers and operating systems', 'visual design quality and brand fit'];

const require = createRequire(join(root, 'package.json'));
const { chromium } = require('playwright');
const axeModule = require('@axe-core/playwright');
const AxeBuilder = axeModule.default ?? axeModule.AxeBuilder;

// Deliberate faults, injected after the page scripts run, so each check can be shown to fail.
const BREAKS = {
  focus: () => { const s = document.createElement('style'); s.textContent = '*:focus-visible { outline: none !important; }'; document.head.append(s); },
  tabs: () => { const list = document.querySelector('[role="tablist"]'); list.replaceWith(list.cloneNode(true)); },
  dialog: () => { HTMLDialogElement.prototype.showModal = function () {}; },
  form: () => { const f = document.getElementById('ex-signup'); f.replaceWith(f.cloneNode(true)); },
  tokens: () => { const f = document.querySelector('.sp-switch fieldset'); f.replaceWith(f.cloneNode(true)); },
  contrast: () => { for (const el of document.querySelectorAll('.sp-lede')) el.style.color = '#b0b0b0'; },
  overflow: () => { const d = document.createElement('div'); d.style.width = '1600px'; d.style.height = '4px'; document.querySelector('main').append(d); },
  alt: () => { document.querySelector('.sp-brand img').removeAttribute('alt'); },
  save: () => { const b = document.getElementById('ex-save'); b.replaceWith(b.cloneNode(true)); },
  dialogcontrast: () => { document.querySelector('#ex-dialog p').style.color = '#b8b8b8'; },
};
if (breakName && !BREAKS[breakName]) throw new Error(`Unknown BREAK: ${breakName}`);

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname));
    if (!file.startsWith(root + sep)) throw new Error('outside kit folder');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const url = `http://127.0.0.1:${server.address().port}/showroom/index.html`;

const hash = async (f) => createHash('sha256').update(await readFile(f)).digest('hex');
const record = {
  date: new Date().toISOString(),
  page: 'showroom/index.html',
  sha256: { 'index.html': await hash(page), 'showroom.css': await hash(join(here, 'showroom.css')), 'showroom.js': await hash(join(here, 'showroom.js')) },
  playwright: JSON.parse(await readFile(join(root, 'node_modules/playwright/package.json'), 'utf8')).version,
  axeCorePlaywright: JSON.parse(await readFile(join(root, 'node_modules/@axe-core/playwright/package.json'), 'utf8')).version,
  break: breakName || null,
  failsOn: 'axe violations with impact serious or critical; any failed assertion',
  notCovered: NOT_COVERED,
  checks: [],
  axe: {},
};
async function check(name, width, run) {
  try { await run(); record.checks.push({ name, width, result: 'pass' }); }
  catch (error) { record.checks.push({ name, width, result: 'fail', detail: String(error?.message ?? error).replace(/\s+/g, ' ').slice(0, 400) }); }
}
async function axe(p, label, width) {
  const { violations } = await new AxeBuilder({ page: p }).analyze();
  record.axe[`${label} ${width}`] = violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length }));
  const blocking = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  assert.equal(blocking.length, 0, blocking.map((v) => `${v.id} (${v.impact})`).join(', '));
}

const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
record.browser = `chromium ${browser.version()}`;
record.os = process.platform;
try {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const p = await context.newPage();
    if (breakName) await p.addInitScript(`document.addEventListener('DOMContentLoaded', ${BREAKS[breakName].toString()})`);
    const open = async () => { await p.goto(url); await p.evaluate(() => document.fonts.ready); };
    await open();

    await check('Automated rules on load: no serious or critical violations', width, () => axe(p, 'load', width));

    await check('No horizontal overflow', width, async () => {
      assert.ok(await p.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), 'page scrolls sideways');
    });

    await check('Tab reaches every visible control, each with a visible focus outline', width, async () => {
      const expected = await p.evaluate(() => {
        const sel = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, [tabindex="0"]';
        return [...document.querySelectorAll(sel)].filter((el) => {
          if (el.tabIndex < 0 || el.closest('[hidden], dialog:not([open])')) return false;
          if (el.type === 'radio' && !el.checked) return false;
          if (el.classList.contains('sp-skip')) return true;
          return el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
        }).length;
      });
      const seen = new Set();
      const missingFocus = [];
      for (let i = 0; i < 200; i += 1) {
        await p.keyboard.press('Tab');
        const info = await p.evaluate(() => {
          const el = document.activeElement;
          if (!el || el === document.body) return null;
          if (!el.dataset.seen) el.dataset.seen = String(Math.random());
          const s = getComputedStyle(el);
          const visible = s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2;
          return { id: el.dataset.seen, visible, label: `${el.tagName.toLowerCase()} ${(el.textContent || el.getAttribute('aria-label') || el.name || '').trim().slice(0, 30)}` };
        });
        if (!info || seen.has(info.id)) break;
        seen.add(info.id);
        if (!info.visible) missingFocus.push(info.label);
      }
      assert.equal(missingFocus.length, 0, `no visible focus on: ${missingFocus.join('; ')}`);
      assert.equal(seen.size, expected, `reached ${seen.size} of ${expected} controls`);
    });

    await open();
    await check('Stage tabs: arrow keys, Home and End move selection and show the matching panel', width, async () => {
      const state = () => p.evaluate(() => {
        const tabs = [...document.querySelectorAll('[role="tab"]')];
        const sel = tabs.filter((t) => t.getAttribute('aria-selected') === 'true');
        const shown = [...document.querySelectorAll('[role="tabpanel"]')].filter((x) => !x.hidden).map((x) => x.id);
        return { selected: sel.map((t) => t.id), focused: document.activeElement.id, shown, tabbable: tabs.filter((t) => t.tabIndex === 0).length };
      });
      await p.locator('#tab-brief').focus();
      await p.keyboard.press('ArrowRight');
      let s = await state();
      assert.deepEqual(s, { selected: ['tab-foundations'], focused: 'tab-foundations', shown: ['panel-foundations'], tabbable: 1 });
      await p.keyboard.press('End');
      s = await state();
      assert.deepEqual(s.selected, ['tab-review']);
      assert.deepEqual(s.shown, ['panel-review']);
      await p.keyboard.press('ArrowRight');
      assert.deepEqual((await state()).selected, ['tab-brief'], 'ArrowRight on the last tab should wrap to the first');
      await p.keyboard.press('ArrowLeft');
      await p.keyboard.press('Home');
      assert.deepEqual((await state()).shown, ['panel-brief']);
    });

    await check('Dialog: Enter opens it with focus inside, Escape closes it and focus returns', width, async () => {
      await p.locator('#ex-open-dialog').focus();
      await p.keyboard.press('Enter');
      assert.equal(await p.evaluate(() => document.getElementById('ex-dialog').open), true, 'dialog did not open');
      assert.equal(await p.evaluate(() => document.getElementById('ex-dialog').contains(document.activeElement)), true, 'focus is not inside the dialog');
      await check('Automated rules with the dialog open: no serious or critical violations', width, () => axe(p, 'dialog', width));
      await p.keyboard.press('Escape');
      assert.equal(await p.evaluate(() => document.getElementById('ex-dialog').open), false, 'dialog still open');
      assert.equal(await p.evaluate(() => document.activeElement.id), 'ex-open-dialog', 'focus did not return to the trigger');
      assert.equal((await p.locator('#ex-dialog-status').innerText()).trim(), 'Draft kept.');
    });

    await check('Form: an invalid address shows a linked error and focus moves to the field; a valid one clears it', width, async () => {
      await p.locator('#ex-signup button[type="submit"]').focus();
      await p.keyboard.press('Enter');
      const bad = await p.evaluate(() => {
        const e = document.getElementById('ex-email');
        return { invalid: e.getAttribute('aria-invalid'), described: e.getAttribute('aria-describedby'), errorShown: !document.getElementById('ex-email-error').hidden, focused: document.activeElement === e };
      });
      assert.deepEqual(bad, { invalid: 'true', described: 'ex-email-hint ex-email-error', errorShown: true, focused: true });
      await check('Automated rules in the error state: no serious or critical violations', width, () => axe(p, 'error', width));
      await p.locator('#ex-email').fill('name@example.com');
      await p.locator('#ex-signup button[type="submit"]').focus();
      await p.keyboard.press('Enter');
      assert.equal(await p.evaluate(() => document.getElementById('ex-email-error').hidden), true, 'error still shown');
      assert.equal((await p.locator('#ex-form-status').innerText()).trim(), 'Subscribed name@example.com.');
    });

    await check('Token switch: arrow key selects AI Spanda values and components restyle without code changes', width, async () => {
      await p.locator('input[name="tokens"][value="neutral"]').focus();
      await p.keyboard.press('ArrowDown');
      await p.waitForTimeout(400); // let the example button colour transition finish
      const after = await p.evaluate(() => ({
        attr: document.getElementById('stage').dataset.tokens,
        bg: getComputedStyle(document.getElementById('ex-save')).backgroundColor,
        cell: document.querySelector('[data-token="--ex-color-primary"]').textContent.trim(),
      }));
      assert.deepEqual(after, { attr: 'aispanda', bg: 'rgb(18, 20, 26)', cell: '#12141a' });
      await check('Automated rules with AI Spanda tokens: no serious or critical violations', width, () => axe(p, 'aispanda tokens', width));
    });

    await check('Save button: Enter and Space update the status message', width, async () => {
      await p.locator('#ex-save').focus();
      await p.keyboard.press('Enter');
      assert.equal((await p.locator('#ex-save-status').innerText()).trim(), 'Changes saved.');
      await p.locator('#ex-cancel').focus();
      await p.keyboard.press('Space');
      assert.equal((await p.locator('#ex-save-status').innerText()).trim(), 'Changes discarded.');
    });
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}

await mkdir(outDir, { recursive: true });
const name = `showroom-${breakName ? `break-${breakName}` : 'check'}-${record.date.slice(0, 10)}.json`;
await writeFile(join(outDir, name), JSON.stringify(record, null, 2) + '\n');
for (const c of record.checks) console.log(`${c.result.toUpperCase()} ${c.width}px  ${c.name}${c.detail ? `: ${c.detail}` : ''}`);
console.log(`Evidence saved: ${join(outDir, name)}`);
if (record.checks.some((c) => c.result === 'fail')) process.exitCode = 1;
