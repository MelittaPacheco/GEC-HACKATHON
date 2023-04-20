const Subscriber = require('../models/subscriber.model')
// create
exports.addSubscriber = async (req, res) => {
    try {
        console.log(req.body)
            const subscriber= new Subscriber({
                trainerID:req.body.trainerID,
                userID: req.body.userID,
                userName:req.body.userName,
                userImage:req.body.userImage
            
        });
        
        await subscriber.save();
        res.status(200).send(subscriber);
      } catch (err) {
        res.send(err);
      }
  
}


// delete
exports.deleteSubscriber = async (req, res) => {
    console.log(req.params.id)
     try {
         const subscriber= await Subscriber.findByIdAndDelete(req.params.id);

         res.status(200).send(subscriber);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getSubscriber = async (req, res) => {
    console.log(req.params.id)
     try {
         const subscriber = await Subscriber.findById(req.params.id)
         res.status(200).send(subscriber);
     }
     catch (err){
         res.send(err);
     }}



   

 exports.getTrainerSubscriber= async (req, res) => {
    console.log(req.params.id)
     try {
         const subscriber= await Subscriber.find({trainerID:req.params.id});
    
        console.log(subscriber)
         res.status(200).send(subscriber);
        }
        catch (err){
            res.send(err);
        }}   
        
 