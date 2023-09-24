const express = require("express");
const userRoute = require("./user.routes");
const categoryRoute = require("./category.routes");
const tokenRoute = require("./token.route");
const bannerRoute = require("./banner.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/token", tokenRoute);
router.use("/banner", bannerRoute);

module.exports = router;