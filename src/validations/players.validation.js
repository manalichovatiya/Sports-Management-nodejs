const Joi = require("joi");

/** create Players */
const createPlayers = {
  body: Joi.object().keys({
    player_name: Joi.string().required().trim(),
    age: Joi.number().required(),
    team: Joi.string().required().trim(),
  }),
};

module.exports = {
    createPlayers
}