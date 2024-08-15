import path from 'path';

export default {
  entry: './src/index.ts', // Use index.ts as the entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply the rule to TypeScript files
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
      },
    ],
  },
  mode: 'production', // or 'development'
};
