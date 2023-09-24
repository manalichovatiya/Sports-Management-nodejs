const { Team } = require("../models");

// Create team
const createTeam = async (reqBody) => {
  return Team.create(reqBody);
};

// Get team list
const getTeamList = async () => {
    return Team.find();
};

// Get Team details by id
const getTeamById = async (teamId) => {
  return Team.findById(teamId);
};

// update Team
const updateDetails = async (teamId, reqBody) => {
  return Team.findByIdAndUpdate(teamId, { $set: reqBody });
};

// Delete Team
const deleteTeam = async (teamId) => {
  return Team.findByIdAndDelete(teamId);
};

module.exports = {
    createTeam,
    getTeamList,
    getTeamById,
    updateDetails,
    deleteTeam
}