/* eslint-disable no-console */
const { json, send } = require('micro')

const { iCloudTransporter, mailRuTransporter } = require('./transports')
const template = require('../../views')

let data
let html

module.exports.iCloudClient = async (req, res) => {
  try {
    data = await json(req)
    html = template(data)
    await iCloudTransporter.sendMail({ html })
    send(res, 200, { message: 'Your email was sent!' })
  } catch (e) {
    console.error(e.message)
  }
}

module.exports.mailRuClient = async (req, res) => {
  try {
    data = await json(req)
    html = template(data)
    await mailRuTransporter.sendMail({ html })
    send(res, 200, { message: 'Your email was sent!' })
  } catch (e) {
    console.error(e.message)
  }
}
