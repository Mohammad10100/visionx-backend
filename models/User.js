const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        totalScore:{
            type:Number,
            default:0,
        },
        matchesPlayed:{
            type:Number,
            default:0,
        }
    }
)

module.exports = mongoose.model("User", userSchema);