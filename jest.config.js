module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/__tests__/**/*.test.ts'],
    coverageDirectory: './coverage/',
    collectCoverage: true,
  };
  