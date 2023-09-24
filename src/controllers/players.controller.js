const { playersService } = require("../services");

/** create players */
const createPlayers = async (req, res) => {
  try {
    const reqBody = req.body;
    const players = await playersService.createPlayers(reqBody);
    if (!players) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Players create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get players list */
const getPlayersList = async (req, res) => {
  try {
    const getList = await playersService.getPlayersList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get players list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete players */
const deletePlayers = async (req, res) => {
  try {
    const playersId = req.params.playersId;
    const playersExists = await playersService.getPlayersById(playersId);
    if (!playersExists) {
      throw new Error("Players not found!");
    }
    await playersService.deletePlayers(playersId);

    res.status(200).json({
      success: true,
      message: "Players delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update players */
const updatePlayers = async (req, res) => {
  try {
    const reqBody = req.body;
    const playersId = req.params.buplayersId;
    const playersExists = await playersService.getPlayersById(playersId);
    if (!playersExists) {
      throw new Error("Players not found!");
    }
    await playersService.updateDetails(playersId,reqBody);

    res.status(200).json({
      success: true,
      message: "Players update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPlayers,
  getPlayersList,
  deletePlayers,
  updatePlayers
};