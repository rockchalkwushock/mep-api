// When running on CI don't use .env
if (!process.env.CI) {
  require('dotenv-safe').load()
}
const microService = require('./server')

module.exports = microService
