const mongoose = require ('mongoose');


//define a mongoose Schema for the user model
const userSchema = new mongoose.Schema({
    userName: { type: String,
    required:true},
    age: Number,
    email: { type:String, required:true},
})

//export the Schema
const User= mongoose.model ('User', userSchema)
module.exports = User;