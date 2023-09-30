const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Url base que será usada en las pruebas de e2e
    baseUrl: "https://www.netflix.com/",
    //Tamaño en el cuál se verá la prueba
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Se ignoran esos casos de prueba
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js",
    ],
    // Evitia que cada prueba se haga de forma independiente, reutilizando las sesiones
    testIsolation: false,
  },
});