const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:[true,'Please add the username'],
},
email:{
type:String,
required:[true,'Please enter the email']
},
password:{
    type:String,
    required:[true,'Please anter the password']
},
});

module.exports = mongoose.model('user',userSchema)
