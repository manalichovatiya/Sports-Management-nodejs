const { Game } = require("../models");

// Create game
const createGame = async (reqBody) => {
  return Game.create(reqBody);
};

// Get game list
const getGameList = async (filter,options) => {
    return Game.find();
};

// Get Game details by id
const getGameById = async (gameId) => {
  return Game.findById(gameId);
};

// update Game
const updateDetails = async (gameId, reqBody) => {
  return Game.findByIdAndUpdate(gameId, { $set: reqBody });
};

// Delete Game
const deleteGame = async (gameId) => {
  return Game.findByIdAndDelete(gameId);
};

module.exports = {
    createGame,
    getGameList,
    getGameById,
    updateDetails,
    deleteGame
}