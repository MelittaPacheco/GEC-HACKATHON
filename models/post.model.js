const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    userID:{type:mongoose.Schema.Types.ObjectId},
    userName:{type:String},
    content: {
        type: String,
    },
    postImage:
    {
        type:String,
        default: ""
    },
    // comment:[
    //     {
    //         userID: {type:mongoose.Schema.Types.ObjectId},
    //         userName:{type: String},
    //         message:{type:String,}
    //     }
    // ],
    vote:{type:Number},
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
    ingredients:{
        type: String,
        default: ""  
    },
    stepOne:{
        type: String,
        default: ""
    },
    stepTwo:{
        type: String,
        default: ""
    },
    stepThree:{
        type: String,
        default: ""
    },
    stepFour:{
        type: String,
        default: ""
    },
    stepFive:{
        type: String,
        default: ""
    },
},{timestamps:true});

module.exports = mongoose.model("post", postSchema);