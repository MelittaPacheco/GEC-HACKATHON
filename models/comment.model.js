const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    postID:{type:mongoose.Schema.Types.ObjectId},
    userID: {type:mongoose.Schema.Types.ObjectId},
    userName:{type: String},
    message:{type:String,}
  
   
},{timestamps:true});

module.exports = mongoose.model("comment", commentSchema);