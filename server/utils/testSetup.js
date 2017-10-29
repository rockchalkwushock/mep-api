// TODO Test with Ethereal account

// /* eslint-disable no-console */
// const { createTestAccount, createTransport } = require('nodemailer')

// const { ethereal } = require('../config')
// const { etherealMessage } = require('../services/mail/messages')

// module.exports.test = createTestAccount(async (err, data) => {
//   try {
//     if (err) {
//       console.error(`Failed to create a testing account.${err.message}`)
//       return process.exit(1)
//     }
//     console.log('Credentials obtained, sending message...')
//     const config = ethereal(data)
//     const transporter = await createTransport(config)
//     return await transporter.sendMail(etherealMessage)
//   } catch (e) {
//     console.error(e)
//     throw e
//   }
// })

/**
 * { accepted: [ 'recipient@example.com' ],
  rejected: [],
  response: '250 Accepted [STATUS=new MSGID=Wdd4z2sPKDqeLgTjWeENG8e-.AiIcrNxAAAAHnV-uBm2V1t1bAtE9NBKDE0]',
  envelope: { from: 'sender@example.com', to: [ 'recipient@example.com' ] },
  messageId: '<6d1d75eb-d6fe-06ba-0014-fbbd8bc9606c@example.com>' }
 */
