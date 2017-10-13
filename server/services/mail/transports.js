const { createTransport } = require('nodemailer')

const { iCloud, mailRu } = require('../../config')

module.exports.iCloudTransporter = createTransport(
  iCloud.config,
  iCloud.defaults
)
module.exports.mailRuTransporter = createTransport(
  mailRu.config,
  mailRu.defaults
)
