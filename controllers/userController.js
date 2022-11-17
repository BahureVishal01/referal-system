const User = require("../models/userModel");


const signUpUser = async(req, res)=>{
   
    const userObjToBeStoredInDB = {
     Name : req.body.Name,
     Email : req.body.Email,
     RefferedUser : req.body.RefferedUser,
     isPaymentMade : req.body.isPaymentMade,
     TotalEarnings : req.body.TotalEarnings,
    }
    try {
     const userCreated = await User.create(userObjToBeStoredInDB);
     console.log("user is Created", userCreated );
      /**
      * Return the response
      */
     if(userCreated && userCreated.RefferedUser){
        const oldUser = await User.findOne({_id:userCreated.RefferedUser});
     
       
        if(oldUser){
           oldUser.TotalEarnings+=10;
           oldUser.isPaymentMade=true
        }
       await oldUser.save();
     //   console.log(oldUser);
     }
   
       const userCreationResponse  = { 
        Name : userCreated.Name,
         RefferedUser : userCreated.RefferedUser,
         Email : userCreated.Email,
         isPaymentMade : userCreated.isPaymentMade,
         TotalEarnings : userCreated.TotalEarnings,
         createdAt : userCreated.createdAt,
         updatedAt : userCreated.updatedAt
     }
 
     res.status(201).send(userCreationResponse);
 } catch(err){
     console.error("Error while creating new user", err.message);
     res.status(500).send({
         message : "some internal error while inserting new user"
     })
 }
 }

 const getAllUsers = async(req, res)=>{
    const user = await User.find({});
    if(!user){
        res.status(404).send("Users not found");
    }
    res.status(200).send(user);
 }
 const getOneUser = async(req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).send("user not found");
    }
    res.status(200).send(user);
 }

 module.exports = {signUpUser, getAllUsers, getOneUser};