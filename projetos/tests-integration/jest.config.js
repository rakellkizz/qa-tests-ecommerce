/** @type {import('jest').Config} */
module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/*.spec.js'],   // simples e robusto no Windows
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/server.js'],
  coverageDirectory: 'coverage',
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'results',
      outputName: 'junit-integration.xml',
      suiteName: 'Integration Tests'
    }]
  ]
}
