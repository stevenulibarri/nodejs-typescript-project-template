/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,

  testMatch: ['**/*.test.ts'],

  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
