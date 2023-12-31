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
        rank: {
            type: Number,
            default:0,
        },
        totalScore:{
            type:Number,
        },
        matchesPlayed:{
            type:Number,
            default:0,
        },
        token: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
		image: {
			type: String,
			required: true,
		},
    },{ timestamps: true }
)

module.exports = mongoose.model("User", userSchema);