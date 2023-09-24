const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema(
    {
        date : {
            type : String,
            trim : true,
        },
        sport : {
            type : String,
            trim : true,
        },
        category : {
            type: mongoose.Types.ObjectId,
            ref: "Category",
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

const Game = mongoose.model("Game" , gameSchema);
module.exports = Game;