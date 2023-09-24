const express = require("express");
const categoryRoute = require("./category.routes");
const tokenRoute = require("./token.route");
const bannerRoute = require("./banner.route");
const gameRoute = require("./game.route");
const playersRoute = require("./players.route");
const teamRoute = require("./team.route");

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/token", tokenRoute);
router.use("/banner", bannerRoute);
router.use("/game", gameRoute);
router.use("/players", playersRoute);
router.use("/team", teamRoute);

module.exports = router;