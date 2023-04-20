const Chat = require('../models/chat.model')
// create
// exports.addChat = async (req, res) => {
//     try {
//         // console.log(req.body)
//         const userData= await Chat.find({trainerID: req.body.trainerID});
//         console.log(userData)
//         const messageData ={
//             userID:"644122936527c5ee6200f52a",
//             userName:"Melitta",
//             message:"hi"
//         }
// // console.log(messageData)
//             const chat= new Chat({
              
//                 trainerID:"64414f7a51c3c4b3171e38e9",
//                 messages:messageData,
             
            
//         });
        
//         await chat.save();
//         res.status(200).send(chat);
//       } catch (err) {
//         res.send(err);
//       }

// }

// exports.updateChat = async (req, res) => {

//     try {
//         const userData= await Chat.find({trainerID: req.params.id});
//         console.log(userData[0]._id)
//         const messageData ={
//             userID:req.body.userID,
//             userName:req.body.userName,
//             message:req.body.message
//         }
//         console.log(userData[0].messages)
//         userData[0].messages= userData[0].messages.push(messageData)
//         console.log(userData[0].messages)
//         // const chat = await Chat.findByIdAndUpdate(userData[0]._id, 
//         //     {
             
                

//         //     });

//         //     const updatedRecord = await User.findById(req.params.id);
//         //     console.log("updated");
//         //     res.status(200).send(updatedRecord);
//         }
//         catch (err){
//             res.send(err);
//         }}
   


// // delete
// exports.deleteChat = async (req, res) => {
//     console.log(req.params.id)
//      try {
//          const chat= await Chat.findByIdAndDelete(req.params.id);

//          res.status(200).send(chat);
//      }
//      catch (err){
//          res.send(err);
//      }}

// //get     
// exports.getChat = async (req, res) => {
//     console.log(req.params.id)
//      try {
//          const chat = await Chat.findById(req.params.id)
//          res.status(200).send(chat);
//      }
//      catch (err){
//          res.send(err);
//      }}

// //get  all   
// exports.getChat = async (req, res) => {

//      try {
//          const chat = await Chat.find()
//          res.status(200).send(chat);
//      }
//      catch (err){
//          res.send(err);
//      }}


   

// //  //get chats of a particular post
// //  exports.getPostChat= async (req, res) => {
// //     console.log(req.params.id)
// //      try {
// //          const chats = await Chat.find({postID:req.params.id});
// //         //   const posts = await Post.find();

// //         console.log(chats)
// //          res.status(200).send(chats);
// //         }
// //         catch (err){
// //             res.send(err);
// //         }}   
        
exports.addChat = async (req, res) => {
    try {
        console.log(req.body)
            const chat= new Chat({
                trainerID:req.body.trainerID,
                userID: req.body.userID,
                userName:req.body.userName,
                message:req.body.message
            
        });
        
        await chat.save();
        res.status(200).send(chat);
      } catch (err) {
        res.send(err);
      }

}
exports.getPostChat= async (req, res) => {
    console.log(req.params.id)
     try {
         const comments = await Comment.find({postID:req.params.id});
        //   const posts = await Post.find();

        console.log(comments)
         res.status(200).send(comments);
        }
        catch (err){
            res.send(err);
        }}   
        
 