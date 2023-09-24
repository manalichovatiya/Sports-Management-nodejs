const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
    {
        team_name : {
            type : String,
            trim : true,
        },
        sport : {
            type : String,
            trim : true,
        },
        players : {
            type: mongoose.Types.ObjectId,
            ref: "Players",
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Team = mongoose.model("Team" , teamSchema);
module.exports = Team;