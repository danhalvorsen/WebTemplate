const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './__tests__/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist_test'),
    filename: 'test_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './__tests__/index.html',  // Points to the test-specific index.html
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../__tests__'),
    },
    port: 8081,
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
