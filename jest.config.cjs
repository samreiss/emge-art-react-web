module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],  // Loads jest-dom matchers
  testMatch: [
    '**/tests/unit/**/*.test.js', // Only run unit tests located in `tests/unit`
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // Transform TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript/JSX files
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};