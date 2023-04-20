const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    content: {
        type: String,
    
    },
    postImage:
    {
        type:String,
    },
    comment:[
        {
            userID: {type:mongoose.Schema.Types.ObjectId},
            userName:{type: String},
            message:{type:String,}
        }
    ],
    vote:{type:Number},
    preference:  {
        type: String
    },
    skill:  {
        type: String
    },
    dietRequirement:  {
        type: String
    },
    stepOne:{
        type: String
    },
    stepTwo:{
        type: String
    },
    stepThree:{
        type: String
    },
    stepFour:{
        type: String
    },
    stepOne:{
        type: String
    },
},{timestamps:true});

module.exports = mongoose.model("post", postSchema);