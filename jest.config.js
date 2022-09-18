
/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src/__tests__/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|svg|scss)$': 'identity-obj-proxy'
  },
  testRegex: '.spec.ts(x)$',
  //setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '\\.(css|less|svg|scss)$'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
}

module.exports = config;