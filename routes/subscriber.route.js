const express =require("express")
const router=express.Router();


const SubscriberController=require("../controllers/subscriber.controller");



router.get("/:id", async(req,res)=> {
    await SubscriberController.getSubscriber(req, res);
});
router.get("/trainer/:id", async(req,res)=> {
    await SubscriberController.getTrainerSubscriber(req, res);
});
router.post("/", async(req,res)=> {
    await SubscriberController.addSubscriber(req, res);
});


router.delete("/:id", async(req,res)=> {
    await SubscriberController.deleteSubscriber(req, res);
});


module.exports = router;