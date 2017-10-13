module.exports.etherealMessage = {
  from: 'Sender Name <sender@example.com>',
  to: 'Recipient <recipient@example.com>',
  subject: 'Nodemailer is unicode friendly ✔',
  text: 'Hello to myself!',
  html: '<p><b>Hello</b> to myself!</p>'
}

module.exports.mailRuMessage = {
  from: `Masha Eltsova Photography ${process.env.MAIL_RU_USER}`,
  to: `Masha Eltsova Photography ${process.env.MAIL_RU_USER}`,
  bcc: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
  subject: 'Booking Inquiry',
  priority: 'high',
  text: '',
  html: ''
}

module.exports.iCloudMessage = {
  from: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
  to: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
  subject: 'Booking Inquiry',
  priority: 'high',
  text: '',
  html: ''
}
