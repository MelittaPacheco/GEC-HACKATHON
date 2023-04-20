const express =require("express")
const router=express.Router();
const upload = require("../helpers/multer");

const PostController=require("../controllers/post.controller");

router.get("/", async (req, res) => {
    await PostController.getPosts(req, res);
});
router.get("/:id", async(req,res)=> {
    await PostController.getPost(req, res);
});
router.get("/content/:content", async(req,res)=> {
    await PostController.getPostsByTitle(req, res);
});
router.get("/preference/:preference", async(req,res)=> {
    await PostController.getPostsByPreferences(req, res);
});
router.get("/skill/:skill", async(req,res)=> {
    await PostController.getPostsBySkill(req, res);
});
router.get("/diet/:diet", async(req,res)=> {
    await PostController.getPostsByDiet(req, res);
});
router.get("/user/:id", async(req,res)=> {
    await PostController.getUserPosts(req, res);
});
router.post("/",upload.single("postImage"), async(req,res)=> {
    await PostController.addPost(req, res);
});

router.put("/:id",upload.single("postImage"), async(req,res)=> {
    await PostController.updatePost(req, res);
});

router.delete("/:id", async(req,res)=> {
    await PostController.deletePost(req, res);
});
router.post("/upvote/:id",async(req,res)=>{
    await PostController.updateUpVote(req, res);
})
router.post("/downvote/:id",async(req,res)=>{
    await PostController.updateDownVote(req, res);
})
module.exports = router;