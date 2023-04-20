const express =require("express")
const router=express.Router();


const ChatController=require("../controllers/chat.controller");



router.get("/", async(req,res)=> {
    await ChatController.getChat(req, res);
});
router.get("/:id", async(req,res)=> {
    await ChatController.getChat(req, res);
});
// router.get("/post/:id", async(req,res)=> {
//     await ChatController.getPostChat(req, res);
// });
router.post("/", async(req,res)=> {
    await ChatController.addChat(req, res);
});


router.delete("/:id", async(req,res)=> {
    await ChatController.deleteChat(req, res);
});
router.put("/:id", async(req,res)=> {
    await ChatController.updateChat(req, res);
});


module.exports = router;