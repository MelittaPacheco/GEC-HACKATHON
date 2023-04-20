const express =require("express")
const router=express.Router();


const CommentController=require("../controllers/comment.controller");



router.get("/:id", async(req,res)=> {
    await CommentController.getComment(req, res);
});
router.get("/post/:id", async(req,res)=> {
    await CommentController.getPostComment(req, res);
});
router.post("/", async(req,res)=> {
    await CommentController.addComment(req, res);
});


router.delete("/:id", async(req,res)=> {
    await CommentController.deleteComment(req, res);
});


module.exports = router;