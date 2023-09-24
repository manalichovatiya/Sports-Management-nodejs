const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema(
    {
        player_name : {
            type : String,
            trim : true,
        },
        age : {
            type : Number,
            trim : true,
        },
        team : {
            type: mongoose.Types.ObjectId,
            ref: "Team",
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

const Players = mongoose.model("Players" , playerSchema);
module.exports = Players;