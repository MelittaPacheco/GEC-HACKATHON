const express =require("express")
const router=express.Router();
const upload = require("../helpers/multer");

const UserController=require("../controllers/user.controller");

router.get("/", async (req, res) => {
    await UserController.getUsers(req, res);
});
router.get("/:id", async(req,res)=> {
    await UserController.getUser(req, res);
});
router.post("/", async(req,res)=> {
    await UserController.addUser(req, res);
});
router.post("/login", async (req, res) => {
    await UserController.login(req, res);
});
router.put("/:id",upload.single("profileImage"), async(req,res)=> {
    await UserController.updateUser(req, res);
});

router.delete("/:id", async(req,res)=> {
    await UserController.deleteUser(req, res);
});


module.exports = router;