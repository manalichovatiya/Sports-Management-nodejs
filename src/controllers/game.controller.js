const { gameService } = require("../services");

/** create game */
const createGame = async (req, res) => {
  try {
    const reqBody = req.body;
    const game = await gameService.createGame(reqBody);
    if (!game) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Game create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get game list */
const getGameList = async (req, res) => {
  try {
    const getList = await gameService.getGameList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get game list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete game */
const deleteGame = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const gameExists = await gameService.getGameById(gameId);
    if (!gameExists) {
      throw new Error("Game not found!");
    }
    await gameService.deleteGame(gameId);

    res.status(200).json({
      success: true,
      message: "Game delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update game */
const updateGame = async (req, res) => {
  try {
    const reqBody = req.body;
    const gameId = req.params.bugameId;
    const gameExists = await gameService.getGameById(gameId);
    if (!gameExists) {
      throw new Error("Game not found!");
    }
    await gameService.updateDetails(gameId,reqBody);

    res.status(200).json({
      success: true,
      message: "Game update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGame,
  getGameList,
  deleteGame,
  updateGame
};