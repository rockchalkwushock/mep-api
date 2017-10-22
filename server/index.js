// const { opts } = require('./config')

// const compose = require('micro-compose')
// const compress = require('micro-compress')
// const cors = require('micro-cors')(opts.cors)
// const ratelimit = require('micro-ratelimit')
// const sentry = require('micro-sentry')

// const { client } = require('./services/mail/clients')
const { getImagesByTag } = require('./services/cloudinary')
// const { validator } = require('./utils')

const service = async () => {
  try {
    // await client(req, res)
    await getImagesByTag('wedding')
  } catch (e) {
    throw e
  }
}

module.exports = service
