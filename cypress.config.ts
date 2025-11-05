// cypress.config.ts
import { defineConfig } from 'cypress'
// 👉 use import em vez de require:
import allureWriter from '@shelex/cypress-allure-plugin/writer.js'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    setupNodeEvents(on, config) {
      // registra o writer do Allure
      allureWriter(on, config)
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    retries: 2,
  },

  // Reporter JUnit para métricas TMMi
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/junit-[hash].xml',
    testsuitesTitle: 'E2E-Cypress',
  },

  // Variáveis do Allure
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    allureLogCypress: true,
  },
})
