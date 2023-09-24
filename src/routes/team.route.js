const express = require("express");
const { teamValidation } = require("../validations");
const { teamController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create team */
router.post(
  "/create-team",
  validate(teamValidation.createTeam),
  teamController.createTeam
);

/** team list */
router.get(
  "/list",
  teamController.getTeamList
)
// delete team
router.delete(
  "/delete/:teamId",
  teamController.deleteTeam
)
//update team
router.put(
  "/update-team/:teamId",
  teamController.updateTeam
)

module.exports = router;