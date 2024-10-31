import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60000, //1 minute
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:5173',
    screenshot: 'only-on-failure', // Capture screenshots on test failures
  },
  webServer: {
    command: 'make start', // or 'npm run dev' if you use npm
    port: 5173, // Port where your app runs
    timeout: 120 * 1000, // Wait for 2 minutes to start the server
    reuseExistingServer: !process.env.CI, // Only start a new server if none is running
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ]
});