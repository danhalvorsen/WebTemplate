import { esbuildPlugin } from '@web/dev-server-esbuild';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

function myEsbuildPluginWithHtml(options) {
  const esbuild = esbuildPlugin(options);
  return {
    name: 'my-esbuild-plugin-with-html',
    serve(context) {
      if (context.path === '/' || context.path === '/index.html') {
        const htmlPath = join(process.cwd(), 'src', 'my-custom.html');
        context.body = readFileSync(htmlPath, 'utf8');
      } else if (context.path === '/another-page.html') {
        const htmlPath = join(process.cwd(), 'src', 'another-page.html');
        context.body = readFileSync(htmlPath, 'utf8');
      } else {
        return esbuild.serve?.(context);
      }
    },
    transform(context) {
      return esbuild.transform?.(context);
    },
  };
}

export default {
  port: 8000,
  open: true,
  rootDir: join(__dirname, '../src'), // Use ES module-friendly path resolution
  plugins: [
    myEsbuildPluginWithHtml({
      jsx: true,
      target: 'es2020',
    }),
  ],
};
