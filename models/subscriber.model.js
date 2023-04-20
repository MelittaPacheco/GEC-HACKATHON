const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subscriberSchema = new Schema({

    trainerID: {type:mongoose.Schema.Types.ObjectId},
    userID: {type:mongoose.Schema.Types.ObjectId},
                    userName:{type: String},
                   userImage:{type:String}
   
},{timestamps:true});

module.exports = mongoose.model("subscriber", subscriberSchema);