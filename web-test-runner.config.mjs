import { puppeteerLauncher } from '@web/test-runner-puppeteer';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  browsers: [puppeteerLauncher()],
  files: 'src/__tests__/**/*.test.ts', // Adjust the path to your test files
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'esnext',
    }),
  ],
  testFramework: {
    config: {
      ui: 'bdd',
    },
  },
};
