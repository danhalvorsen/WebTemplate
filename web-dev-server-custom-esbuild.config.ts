import { esbuildPlugin } from '@web/dev-server-esbuild';
import { Plugin } from '@web/dev-server-core';
import { readFileSync } from 'fs';
import { join } from 'path';

// Define the type for EsbuildPluginArgs manually
interface EsbuildPluginArgs {
  jsx?: boolean;
  target?: string;
  tsconfig?: string;
  minify?: boolean;
  define?: Record<string, string>;
  entryPoints?: string[];
}

function myEsbuildPluginWithHtml(options: EsbuildPluginArgs): Plugin {
  const esbuild = esbuildPlugin(options);

  return {
    name: 'my-esbuild-plugin-with-html',

    // Hook to serve the initial HTML file
    serve(context) {
      if (context.path === '/' || context.path === '/index.html') {
        // Path to your HTML file
        const htmlPath = join(process.cwd(), 'src', 'my-custom.html');
        context.body = readFileSync(htmlPath, 'utf8');
      } else if (context.path === '/another-page.html') {
        // Path to another HTML file
        const htmlPath = join(process.cwd(), 'src', 'another-page.html');
        context.body = readFileSync(htmlPath, 'utf8');
      } else {
        // Fallback to original esbuild plugin's serve method
        return esbuild.serve?.(context);
      }
    },

    // Hook to process other files normally with esbuild
    transform(context) {
      return esbuild.transform?.(context);
    },
  };
}

export default {
  port: 8000,
  open: true, // Automatically open the browser
  rootDir: './src', // Set the root directory
  plugins: [
    myEsbuildPluginWithHtml({
      jsx: true, // Enable JSX transformation (optional)
      target: 'es2020', // Set the target ECMAScript version
    }),
  ],
};
