const express = require("express");
const { playersValidation } = require("../validations");
const { playersController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create players */
router.post(
  "/create-players",
  // auth(),
  validate(playersValidation.createPlayers),
  playersController.createPlayers
);

/** players list */
router.get(
  "/list",
  playersController.getPlayersList
)
// delete players
router.delete(
  "/delete/:playersId",
  playersController.deletePlayers
)
//update players
router.put(
  "/update-players/:playersId",
  playersController.updatePlayers
)

module.exports = router;