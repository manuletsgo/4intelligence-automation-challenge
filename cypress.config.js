const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const {
  addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

const { TARGET, env } = require('./cypress/config')

console.log('Environment configuration:')
console.table({ TARGET, ...env })

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config)

  allureWriter(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  )

  return config
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.feature',
    excludeSpecPattern: ['*.js'],
    env: {
      TARGET,
      ...env,
      allure: true,
      allureReuseAfterSpec: true
    },
    baseUrl: env.BASE_URL
  }
})
