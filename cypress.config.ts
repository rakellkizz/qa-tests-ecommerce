// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    retries: 2
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/junit-[hash].xml',
    testsuitesTitle: 'E2E-Cypress'
  },
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    allureLogCypress: true
  }
})
