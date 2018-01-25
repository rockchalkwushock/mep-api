const npsUtils = require('nps-utils')

const { concurrent, crossEnv, rimraf, series } = npsUtils

// NOTE: 'micro' & 'micro-dev' point to package.main || index.js

module.exports = {
  scripts: {
    clean: series(rimraf('coverage')),
    commit: 'git cz',
    default: `${crossEnv('NODE_ENV=production')} micro`,
    dev: `${crossEnv('NODE_ENV=development')} micro-dev -p 4000`,
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand',
      coverage: series.nps('test --coverage --silent'),
      watch: series.nps('test --watch')
    }
  }
}
