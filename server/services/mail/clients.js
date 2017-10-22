const { json, send } = require('micro')

const { isProd } = require('../../config')
const { iCloudTransporter, mailRuTransporter } = require('./transports')
const template = require('../../views')

let data
let html

module.exports.client = async (req, res) => {
  if (!isProd) {
    try {
      data = await json(req)
      html = template(data)
      await iCloudTransporter.sendMail({ html })
      send(res, 200, { message: 'Your booking request was sent!' })
    } catch (e) {
      send(res, 400, {
        error: 'There was a problem with your request, please try back later.'
      })
      throw e
    }
  } else {
    try {
      data = await json(req)
      html = template(data)
      await mailRuTransporter.sendMail({ html })
      send(res, 200, { message: 'Your booking request was sent!' })
    } catch (e) {
      send(res, 400, {
        error: 'There was a problem with your request, please try back later.'
      })
      throw e
    }
  }
}
