module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  cacheDirectory: '.jest-cache',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: [
    "<rootDir>/website/.cache",
    "<rootDir>/examples",
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
      tsconfig: "tsconfig.json"
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  
};