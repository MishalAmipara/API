var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contact_no:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Contact",ContactSchema);