const express = require("express");
const { gameValidation } = require("../validations");
const { gameController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create game */
router.post(
  "/create-game",
  validate(gameValidation.createGame),
  gameController.createGame
);

/** game list */
router.get(
  "/list",
  gameController.getGameList
)
// delete game
router.delete(
  "/delete/:gameId",
  gameController.deleteGame
)
//update game
router.put(
  "/update-game/:gameId",
  gameController.updateGame
)

module.exports = router;