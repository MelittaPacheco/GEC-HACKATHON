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
        default: ""
    },
    profileImage:
    {
        type:String,
        default: ""
    },
    bio: {
        type: String,
        default: "Hey, I'm new here!!!"
    },
    userType: {
        type: String,
        default: "user"
    },
  
    gender:{
        type:String,
        default: ""

    },

    preference:  {
        type: String,
        default: ""
    },
    skill:  {
        type: String,
        default: ""
    },
    dietRequirement:  {
        type: String,
        default: ""
    },
   
},{timestamps:true});

module.exports = mongoose.model("user", userSchema);