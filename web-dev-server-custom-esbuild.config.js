"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dev_server_esbuild_1 = require("@web/dev-server-esbuild");
var fs_1 = require("fs");
var path_1 = require("path");
function myEsbuildPluginWithHtml(options) {
    var esbuild = (0, dev_server_esbuild_1.esbuildPlugin)(options);
    return {
        name: 'my-esbuild-plugin-with-html',
        // Hook to serve the initial HTML file
        serve: function (context) {
            var _a;
            if (context.path === '/' || context.path === '/index.html') {
                // Path to your HTML file
                var htmlPath = (0, path_1.join)(process.cwd(), 'src', 'my-custom.html');
                context.body = (0, fs_1.readFileSync)(htmlPath, 'utf8');
            }
            else if (context.path === '/another-page.html') {
                // Path to another HTML file
                var htmlPath = (0, path_1.join)(process.cwd(), 'src', 'another-page.html');
                context.body = (0, fs_1.readFileSync)(htmlPath, 'utf8');
            }
            else {
                // Fallback to original esbuild plugin's serve method
                return (_a = esbuild.serve) === null || _a === void 0 ? void 0 : _a.call(esbuild, context);
            }
        },
        // Hook to process other files normally with esbuild
        transform: function (context) {
            var _a;
            return (_a = esbuild.transform) === null || _a === void 0 ? void 0 : _a.call(esbuild, context);
        },
    };
}
exports.default = {
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
