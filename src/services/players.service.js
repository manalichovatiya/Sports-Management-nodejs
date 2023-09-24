const { Players } = require("../models");

// Create players
const createPlayers = async (reqBody) => {
  return Players.create(reqBody);
};

// Get players list
const getPlayersList = async () => {
    return Players.find();
};

// Get Players details by id
const getPlayersById = async (playersId) => {
  return Players.findById(playersId);
};

// update Players
const updateDetails = async (playersId, reqBody) => {
  return Players.findByIdAndUpdate(playersId, { $set: reqBody });
};

// Delete Players
const deletePlayers = async (playersId) => {
  return Players.findByIdAndDelete(playersId);
};

module.exports = {
    createPlayers,
    getPlayersList,
    getPlayersById,
    updateDetails,
    deletePlayers
}