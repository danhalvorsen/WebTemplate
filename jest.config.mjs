// jest.config.mjs
import { resolve } from 'path';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: resolve('tsconfig.json'),
    },
  },
};
