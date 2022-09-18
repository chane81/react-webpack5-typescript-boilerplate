
/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src/__tests__/'],
  testEnvironment: 'jsdom',
  // style mock
  moduleNameMapper: {
    '\\.(css|less|svg|scss)$': 'identity-obj-proxy'
  },
  testRegex: '.spec.ts(x)$',
  // 자동 cleanup 방지 - code 에서 cleanup 하기위함
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  // setupTest, extends jest
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts', '@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // transform ignore
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '\\.(css|less|svg|scss)$'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
}

module.exports = config;