const express = require("express");

const router = express.Router();

const userRoutes= require("./user.route")
const postRoutes= require("./post.route")
const commentRoutes=require("./comment.route")
const subscriberRoutes=require("./subscriber.route")
const chatRoutes=require("./chat.route")

router.use("/user",userRoutes);
router.use("/post",postRoutes);
router.use("/comment",commentRoutes )
router.use("/subscriber",subscriberRoutes )
router.use("/chat",chatRoutes )

module.exports = router;