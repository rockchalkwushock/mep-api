const Joi = require('joi')
const validation = require('micro-joi')

module.exports.validator = validation(
  Joi.object({
    firstName: Joi.string().required(), // set min/max?
    lastName: Joi.string().required(), // set min/max?
    phone: Joi.string().required(), // better way to validate?
    email: Joi.string()
      .email()
      .required(), // email accepts object
    message: Joi.string().required() // set min/max?
  })
)
