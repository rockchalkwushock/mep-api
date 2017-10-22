const isProd = process.env.NODE_ENV === 'production'
const window = parseInt(process.env.WINDOW, 10)
const limit = parseInt(process.env.LIMIT, 10)

module.exports = {
  ethereal: e => ({
    host: e.smtp.host,
    port: e.smtp.port,
    secure: e.smtp.secure,
    auth: {
      user: process.env.ETHEREAL_USER,
      pass: process.env.ETHEREAL_PASS
    },
    debug: !isProd
  }),
  iCloud: {
    config: {
      host: 'smtp.mail.me.com',
      port: 587, // as specified by Apple.
      secure: false, // as specified by Apple.
      auth: {
        user: process.env.ICLOUD_USER,
        pass: process.env.ICLOUD_PASS
      },
      debug: !isProd
    },
    defaults: {
      from: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
      to: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
      subject: 'Booking Inquiry',
      priority: 'high'
    }
  },
  mailRu: {
    config: {
      host: 'smtp.mail.ru',
      port: 465, // as specified by Mail.ru.
      secure: true, // as specified by Mail.ru.
      auth: {
        user: process.env.MAIL_RU_USER,
        pass: process.env.MAIL_RU_PASS
      },
      debug: !isProd
    },
    defaults: {
      from: `Masha Eltsova Photography ${process.env.MAIL_RU_USER}`,
      to: `Masha Eltsova Photography ${process.env.MAIL_RU_USER}`,
      bcc: `Masha Eltsova Photography ${process.env.ICLOUD_USER}`,
      subject: 'Booking Inquiry',
      priority: 'high'
    }
  }
}

module.exports.opts = {
  cors: {
    allowMethods: ['GET, POST'],
    allowHeaders: [
      'X-Requested-With',
      'Access-Control-Allow-Origin',
      'X-HTTP-Method-Override',
      'Content-Type',
      'Authorization',
      'Accept'
    ], // default
    maxAge: 86400, // default
    origin: isProd ? process.env.CLIENT_URL : '*'
  },
  rate: {
    window, // default: 1000
    limit, // default: 1
    keyGenerator: req =>
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress,
    headers: !isProd // default: false
  }
}

module.exports.isProd = isProd
