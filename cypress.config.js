const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: "1920",
  viewportHeight: "1080",
  chromeWebSecurity: true,

  e2e: {

    baseUrl: "https://skleptest.pl/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
