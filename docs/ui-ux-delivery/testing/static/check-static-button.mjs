// Static HTML check for one component fixture. Draft: adapt CRITERIA to the real component.
// Run from a folder whose node_modules contains playwright:
//   node path/to/check-static-button.mjs path/to/fixture.html [evidence folder]
// Optional: BROWSER=chromium|firefox|webkit, WIDTHS=320,768,1280,
// CHROME_PATH for an installed Chrome (chromium only), @axe-core/playwright for automated rules.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { basename, dirname, extname, join, resolve, sep } from 'node:path';

const CRITERIA = { buttonName: 'Run example', statusBefore: 'Not run', statusAfter: 'Example ran' };
const NOT_COVERED = ['screen reader output', 'focus indicator contrast', 'zoom and text spacing', 'touch and real devices', 'visual design quality'];

const fixture = process.argv[2];
if (!fixture) throw new Error('Provide a path to the HTML fixture.');
const evidenceDir = resolve(process.argv[3] ?? 'evidence');
const browserName = process.env.BROWSER ?? 'chromium';
if (!['chromium', 'firefox', 'webkit'].includes(browserName)) throw new Error(`Unknown BROWSER: ${browserName}`);
const widths = (process.env.WIDTHS ?? '390').split(',').map(Number);

const require = createRequire(resolve(process.cwd(), 'package.json'));
const playwright = require('playwright');
let AxeBuilder = null;
try { const axe = require('@axe-core/playwright'); AxeBuilder = axe.default ?? axe.AxeBuilder; } catch { /* optional */ }
let playwrightVersion = 'unknown';
try { playwrightVersion = require('playwright/package.json').version; } catch { /* not exported */ }

// Serve over http: file:// pages follow different security and storage rules from a real site.
const root = dirname(resolve(fixture));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const file = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname));
    if (!file.startsWith(root + sep)) throw new Error('outside fixture folder');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const url = `http://127.0.0.1:${server.address().port}/${encodeURIComponent(basename(fixture))}`;

const record = {
  date: new Date().toISOString(),
  fixture: resolve(fixture),
  fixtureSha256: createHash('sha256').update(await readFile(fixture)).digest('hex'),
  playwright: playwrightVersion,
  criteria: CRITERIA,
  notCovered: NOT_COVERED,
  checks: [],
};
async function check(name, width, run) {
  try { await run(); record.checks.push({ name, width, result: 'pass' }); }
  catch (error) { record.checks.push({ name, width, result: 'fail', detail: String(error?.message ?? error) }); }
}
const focusStyle = (el) => { const s = getComputedStyle(el); return `${s.outlineStyle} ${s.outlineWidth} ${s.outlineColor} | ${s.boxShadow}`; };

const executablePath = browserName === 'chromium' ? process.env.CHROME_PATH : undefined;
let browser;
try {
  browser = await playwright[browserName].launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
  record.browser = `${browserName} ${browser.version()}`;
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 844 } });
    const page = await context.newPage();
    await page.goto(url);
    const button = page.getByRole('button', { name: CRITERIA.buttonName });
    const status = page.getByRole('status');

    if (AxeBuilder) {
      await check('Automated rules: no serious or critical violations on load', width, async () => {
        const { violations } = await new AxeBuilder({ page }).analyze();
        record.axe = { ...record.axe, [width]: violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length })) };
        const blocking = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
        assert.equal(blocking.length, 0, blocking.map((v) => v.id).join(', '));
      });
    } else {
      record.checks.push({ name: 'Automated rules', width, result: 'skipped', detail: '@axe-core/playwright is not installed' });
    }

    await check('No horizontal overflow', width, async () => {
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth));
    });

    await check('Tab reaches the button and its focus style changes', width, async () => {
      const before = await button.evaluate(focusStyle);
      await page.keyboard.press('Tab');
      assert.equal(await button.evaluate((el) => el === document.activeElement), true, 'button is not focused');
      assert.notEqual(await button.evaluate(focusStyle), before, 'no outline or shadow change on focus');
    });

    await check('Enter activates', width, async () => {
      assert.equal((await status.innerText()).trim(), CRITERIA.statusBefore);
      await page.keyboard.press('Enter');
      assert.equal((await status.innerText()).trim(), CRITERIA.statusAfter);
    });

    await check('Space activates', width, async () => {
      await page.reload();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      assert.equal((await status.innerText()).trim(), CRITERIA.statusAfter);
    });
    await context.close();
  }
} finally {
  await browser?.close();
  server.close();
}

await mkdir(evidenceDir, { recursive: true });
const out = join(evidenceDir, `static-check-${browserName}-${record.date.replace(/[:.]/g, '')}.json`);
await writeFile(out, JSON.stringify(record, null, 2));
for (const c of record.checks) console.log(`${c.result.toUpperCase()} ${c.width}px  ${c.name}${c.detail ? `: ${c.detail}` : ''}`);
console.log(`Evidence saved: ${out}`);
if (record.checks.some((c) => c.result === 'fail')) process.exitCode = 1;
