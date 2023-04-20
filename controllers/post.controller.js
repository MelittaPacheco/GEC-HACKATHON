const Post = require('../models/post.model')
const cloudinary= require('../helpers/cloudinary')
// create
exports.addPost = async (req, res) => {
    try {
        console.log(req.body)
        const result = await cloudinary.uploader.upload(req.file.path);
          const post= new Post({
            postImage:result.secure_url,
            content:req.body.content,
            vote:req.body.vote,
            preference:req.body.preference,
            skill:req.body.skill,
            dietRequirement:req.body.dietRequirement,
            // comment:req.body.comment,
            userID:req.body.userID
        });
        
        await post.save();
        res.status(200).send(post);
      } catch (err) {
        res.send(err);
      }

}


// delete
exports.deletePost = async (req, res) => {
    console.log(req.params.id)
     try {
         const post= await Post.findByIdAndDelete(req.params.id);

         res.status(200).send(post);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getPost = async (req, res) => {
    console.log(req.params.id)
     try {
         const post = await Post.findById(req.params.id)
         res.status(200).send(post);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getPosts = async (req, res) => {
    console.log("get all ")
     try {
        // const user = await User.find();
         const post = await Post.find()
         res.status(200).send(post);
     }
     catch (err){
         res.send(err);
     }}
//update

exports.updatePost = async (req, res) => {
    console.log("update")
     try {
        // if (req.file) {
        //     const updatePost = {
        //         content:req.body.content,
        //         upVote:req.body. upVote,
        //         downVote:req.body.downVote,
        //         preference:req.body.preference,
        //         skill:req.body.skill,
        //         dietRequirement:req.body.dietRequirement,
        //         comment:req.body.comment
        //     };
        //     const post = await Post.findByIdAndUpdate(req.params.id, updateUser);
        //   } else {
            const result = await cloudinary.uploader.upload(req.file.path, {
                public_id: req.body.email,
              });
              const updatePost={
                postImage:result.secure_url,
                content:req.body.content,
                vote:req.body.vote,
                preference:req.body.preference,
                skill:req.body.skill,
                dietRequirement:req.body.dietRequirement,
                // comment:req.body.comment
    
              }
        const post = await Post.findByIdAndUpdate(req.params.id, updatePost);
            // }
            const updatedRecord = await Post.findById(req.params.id);
            console.log("updated");
            res.status(200).send(updatedRecord);
        }
        catch (err){
            res.send(err);
        }}
   

 //get posts of a particular user
 exports.getUserPosts= async (req, res) => {
    console.log(req.params.id)
     try {
         const posts = await Post.find({userID:req.params.id});
        //   const posts = await Post.find();

        console.log(posts)
         res.status(200).send(posts);
        }
        catch (err){
            res.send(err);
        }}   
        
 exports.getPostsByTitle= async (req, res) => {
            console.log(req.body)
             try {
                 const posts = await Post.find({content:req.params.content});
             
               
                 res.status(200).send(posts);
                }
                catch (err){
                    res.send(err);
                }} 
                
exports.getPostsByPreferences= async (req, res) => {
                    console.log(req.body)
                     try {
                         const posts = await Post.find({preference:req.params.preference});
                     
                       
                         res.status(200).send(posts);
                        }
                        catch (err){
                            res.send(err);
                        }} 
                        
exports.getPostsBySkill= async (req, res) => {
                           
                             try {
                                 const posts = await Post.find({skill:req.params.skill});
                             
                               
                                 res.status(200).send(posts);
                                }
                                catch (err){
                                    res.send(err);
                                }}

                         
exports.getPostsByDiet= async (req, res) => {
    
     try {
         const posts = await Post.find({dietRequirement:req.params.diet});
     
       
         res.status(200).send(posts);
        }
        catch (err){
            res.send(err);
        }}                               
exports.updateUpVote = async (req, res) => {
   
     try {
        const prevPost= await Post.findById(req.params.id)
        console.log(prevPost.vote)
        let newUpVote=(prevPost.vote)+1
        const post = await Post.findByIdAndUpdate(req.params.id, {
            vote:newUpVote
        });
        const updatePost= await Post.findById(req.params.id)
         res.status(200).send(updatePost);
     }
     catch (err){
         res.send(err);
     }}


     exports.updateDownVote = async (req, res) => {
   
        try {
           const prevPost= await Post.findById(req.params.id)
           let newDownVote=(prevPost.vote)-1
           const post = await Post.findByIdAndUpdate(req.params.id, {
               vote:newDownVote
           });
           const updatePost= await Post.findById(req.params.id)
           res.status(200).send(updatePost);
        }
        catch (err){
            res.send(err);
        }}