const Comment = require('../models/comment.model')
// create
exports.addComment = async (req, res) => {
    try {
        console.log(req.body)
            const comment= new Comment({
                postID:req.body.postID,
                userID: req.body.userID,
                userName:req.body.userName,
                message:req.body.message
            
        });
        
        await comment.save();
        res.status(200).send(comment);
      } catch (err) {
        res.send(err);
      }

}


// delete
exports.deleteComment = async (req, res) => {
    console.log(req.params.id)
     try {
         const comment= await Comment.findByIdAndDelete(req.params.id);

         res.status(200).send(comment);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getComment = async (req, res) => {
    console.log(req.params.id)
     try {
         const comment = await Comment.findById(req.params.id)
         res.status(200).send(comment);
     }
     catch (err){
         res.send(err);
     }}



   

 //get comments of a particular post
 exports.getPostComment= async (req, res) => {
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
        
 