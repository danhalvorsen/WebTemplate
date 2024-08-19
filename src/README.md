---
marp: true
---

# Web Dev Server

## Custom plugin for extensibility

``` typescript
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fileURLToPath } from 'url';
import { join } from 'path';

export default {
  port: 8000,
  open: true, // Automatically open the browser
  rootDir: './src', // Set the root directory
  plugins: [
    esbuildPlugin({
      jsx: true, // Enable JSX transformation (optional)
      target: 'es2020', // Set the target ECMAScript version
    }),
    {
      name: 'custom-html-entry-plugin',
      resolveMimeType(context) {
        // Make sure the HTML file is treated correctly
        if (context.path === '/' || context.path.endsWith('.html')) {
          return 'text/html';
        }
      },
      serve(context) {
        // Serve a custom HTML file as the initial entry point
        if (context.path === '/' || context.path === '/index.html') {
          const filePath = fileURLToPath(new URL('./my-custom.html', import.meta.url));
          context.body = filePath;
        }
      }
    }
  ],
};
```
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Web Dev Server](#web-dev-server)
  - [Custom plugin for extensibility](#custom-plugin-for-extensibility)
- [Web-Test-Runner](#web-test-runner)

<!-- /code_chunk_output -->


#

# Web-Test-Runner
