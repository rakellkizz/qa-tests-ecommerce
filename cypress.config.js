const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 7000,
    video: false,
    supportFile: 'cypress/support/e2e.js'
  }
});
