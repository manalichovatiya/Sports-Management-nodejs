const Joi = require("joi");

/** create Team */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
    players: Joi.string().required().trim(),
  }),
};

module.exports = {
    createTeam
}