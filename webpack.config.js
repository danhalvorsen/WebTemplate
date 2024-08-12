const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development', // Set to 'development' for the start script
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Points to the main app index.html
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),  // Serve files from the root directory
    },
    port: 8080,  // Specify the port number for the development server
    open: true,  // Automatically open the browser when the server starts
    hot: true,   // Enable Hot Module Replacement (HMR)
    historyApiFallback: true, // Fallback to index.html for Single Page Applications
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
