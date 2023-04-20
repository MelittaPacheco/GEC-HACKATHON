const User = require('../models/user.model')
const cloudinary= require('../helpers/cloudinary')
// create
exports.addUser = async (req, res) => {
    try {
        console.log(req.body)
          const user= new User({
            name: req.body. name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
               
        });
        
        await user.save();
        res.status(200).send(user);
      } catch (err) {
        res.send(err);
      }

}

//signin
exports.login = async (req, res) => {
    const email = req.body.name;
    const password = req.body.password;

    try {
        let result = await User.findOne(email)
        console.log(result)
        if (result) {
            //compare passwords       
            if (result.password===password) {

                res.status(200).send(result)
            } else {
               
                res.send("Invalid Username or Password. Please try again")
            }
        } else {
         
            res.status(404).send("Account cannot be found. Try signing up")
        }
    }
     catch (err) {
        console.log(err)
     
    res.send(err)
}
}
// delete
exports.deleteUser = async (req, res) => {
    console.log(req.params.id)
     try {
         const user= await User.findByIdAndDelete(req.params.id);
console.log(user)
         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getUser = async (req, res) => {
    console.log(req.params.id)
     try {
         const user = await User.findById(req.params.id)
         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getUsers = async (req, res) => {
    console.log("get all ")
     try {
        // const user = await User.find();
         const user = await User.find()
         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}
//update

exports.updateUser = async (req, res) => {

    
    const result = await cloudinary.uploader.upload(req.file.path,{public_id:req.body.email});
    console.log(result)
    try {
        //  const user = await User.findByIdAndUpdate(req.params.id, 
        //     req.body);
        const user = await User.findByIdAndUpdate(req.params.id, 
            {
                name: req.body. name,
                email:req.body.email,
                password:req.body.password,
                mobile:req.body.mobile,
                profileImage:result.secure_url,
                bio:req.body.bio,
                userType:req.body.userType,
                preference:req.body.preference,
                skill:req.body.skill,
                dietRequirement:req.body.dietRequirement,
                gender:req.body.gender,
                chat:req.body.chat

            });

            const updatedRecord = await User.findById(req.params.id);
            console.log("updated");
            res.status(200).send(updatedRecord);
        }
        catch (err){
            res.send(err);
        }}
   
