const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
name : {
    type:String,
    require:[true,'Please provide the contact name']
},
email:{
    type:String,
    required:[true,'please provide the email address'],
},
phone:{
    type:String,
    required:[true,'please provide the phone number '],
}

})

module.exports = mongoose.model('contact',contactSchema)
