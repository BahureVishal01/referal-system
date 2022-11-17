const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
     Name : {
        type: String,
        required: [true,"please provide a user name"],
     },
     Email : {
        type: String,
        required: [true,"Please provide a user email"],
     },
     RefferedUser : {
        type: mongoose.SchemaTypes.ObjectId,
        default: null,
     },
     isPaymentMade: {
        type: Boolean,
        default: false,
     },
     TotalEarnings:{
        type: Number,
        default:0,
     },
     createdAt: {
        type: Date,
        immutable: true,
        default: ()=>{
            return Date.now();
        }
     },
     updatedAt : {
        type: Date,
        default: ()=>{
            return Date.now();
        }
     }
     
});
module.exports = mongoose.model("User", userSchema);