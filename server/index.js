const { opts } = require('./config')

const compress = require('micro-compress')
const cors = require('micro-cors')(opts.cors)
const ratelimit = require('micro-ratelimit')
const { get, post, router } = require('microrouter')
const sentry = require('micro-sentry')

const { client } = require('./services/mail/clients')
const { getImageIds } = require('./services/cloudinary')

const service = router(get('/images/:tag', getImageIds), post('/mail', client))

const compressedService = compress(service)
const corsProtectedService = cors(compressedService)
const limitProtectedService = ratelimit(opts.rate, corsProtectedService)
const reportingOnService = sentry(
  'https://462435ad8fd540b4ade2d83f6640ab53:c214a8f1c7be42e98a2161b20f80a07b@sentry.io/229797'
)(limitProtectedService)

module.exports = reportingOnService
