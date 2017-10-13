const { opts } = require('./config')

const compose = require('micro-compose')
const compress = require('micro-compress')
const cors = require('micro-cors')(opts.cors)
const ratelimit = require('micro-ratelimit')
const sentry = require('micro-sentry')

const { client } = require('./services/mail/clients')
const { validator } = require('./utils')

const service = async (req, res) => {
  try {
    await client(req, res)
  } catch (e) {
    throw e
  }
}

module.exports = compose(compress, cors, validator)(
  ratelimit(opts.rate, sentry(process.env.SENTRY_URL)(service))
)