const preset = require("../../jest.preset.js");

module.exports = {
  ...preset,
  testTimeout: 10000,
  moduleNameMapper: {
    ...preset.moduleNameMapper,
    "^inquirer$": "<rootDir>/test/inquirer-jest-mock.js",
    "^\\./team-service$": "<rootDir>/src/service/team-service-stub.ts",
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/cli-native-service.ts",
    "!src/**/team-service.ts",
    "!src/**/team-service-stub.ts",
    "!src/**/leapp-team-core/**"
  ],
  coverageReporters: [
    "lcov",
    "json-summary",
    "text",
    "text-summary"
  ]
};

