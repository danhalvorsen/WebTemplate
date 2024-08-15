import { puppeteerLauncher } from '@web/test-runner-puppeteer';

export default {
  browsers: [puppeteerLauncher({ concurrency: 1 })],
  files: 'dist/**/*.test.js', // Adjust this to match your compiled output
  nodeResolve: true,
};
