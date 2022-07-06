/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.ts",
    "**/*.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: 'coverage_dir',
  coverageReporters: ["html"]
};