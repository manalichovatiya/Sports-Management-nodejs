const Joi = require("joi");

/** create Game */
const createGame = {
  body: Joi.object().keys({
    date: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

module.exports = {
    createGame
}