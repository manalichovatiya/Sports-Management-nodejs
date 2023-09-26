const Joi = require("joi");

/** Create token  */
const generateToken = {
  body: Joi.object({
    player: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};