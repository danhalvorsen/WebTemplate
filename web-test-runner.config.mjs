import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fileURLToPath } from 'url';

export default {
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: false, // Run with the GUI
      },
    }), // You can choose 'chromium', 'firefox', or 'webkit'
  ],
  files: 'src/__tests__/unittests/**/*.test.ts',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      target: 'auto',
    }),
  ],
  testFramework: {
    config: {
      ui: 'bdd', // Mocha BDD syntax (describe, it)
    },
  },
};
