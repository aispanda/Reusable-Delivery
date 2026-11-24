/// <reference types="vitest/config" />
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const executablePath = process.env.CHROME_PATH;
export default defineConfig({
  plugins: [react()],
  test: {
    projects: [{
      extends: true,
      plugins: [storybookTest({ configDir: path.join(import.meta.dirname, '.storybook') })],
      test: {
        name: 'storybook',
        browser: { enabled: true, headless: true, provider: playwright(executablePath ? { launchOptions: { executablePath, args: process.env.CHROME_ARGS ? process.env.CHROME_ARGS.split(' ') : [] } } : {}), instances: [{ browser: 'chromium' }] },
        setupFiles: ['.storybook/vitest.setup.ts'],
      },
    }],
  },
});
