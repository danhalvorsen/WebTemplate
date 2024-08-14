import { esbuildPlugin } from '@web/dev-server-esbuild';
export default {
  open: true,
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  nodeResolve: true,
  appIndex: '__test__/mocha/index.html',
  rootDir: '../../',
};
