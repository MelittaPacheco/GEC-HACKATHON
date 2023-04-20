const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String, 
    },
    profileImage:
    {
        type:String,
    },
    bio: {
        type: String
    },
    userType: {
        type: String
    },
    chat:[
        {
            userID: {type:mongoose.Schema.Types.ObjectId},
            userName:{type: String},
            message:{type:String,}
        }
    ],
    gender:{
        type:String
    },

    preference:  {
        type: String
    },
    skill:  {
        type: String
    },
    dietRequirement:  {
        type: String
    },
    
},{timestamps:true});

module.exports = mongoose.model("user", userSchema);