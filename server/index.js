const { opts } = require('./config')

const compress = require('micro-compress')
const cors = require('micro-cors')(opts.cors)
const ratelimit = require('micro-ratelimit')
const { get, post, router } = require('microrouter')
const sentry = require('micro-sentry')

const { client } = require('./services/mail/clients')
const { getImagesByTag } = require('./services/cloudinary')

const service = router(
  get('/images/:tag', getImagesByTag),
  post('/mail', client)
)

const compressedService = compress(service)
const corsProtectedService = cors(compressedService)
const limitProtectedService = ratelimit(opts.rate, corsProtectedService)
const reportingOnService = sentry(process.env.SENTRY_URL)(limitProtectedService)

module.exports = reportingOnService
