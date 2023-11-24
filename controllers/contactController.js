const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')


//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) =>{
    const contacts = await Contact.find({})

    res.status(200).json({nbHits:contacts.length,contacts:contacts})
})

//@desc Create new  contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res,next) =>{
   const {name,email,phone} = req.body
    if(!name ||!email ||!phone ){
        res.status(400)
        throw new Error('One or more field is empty try again')
        
    }
    const contact = await Contact.create({name,email,phone})
    res.status(201).json({success:true,
        msg:'Create new Contact',
    contact:contact})
  
})

//@desc get specific contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res) =>{
    const {id:taskId} = req.params
    const contact = await Contact.find({_id:taskId})
    if(contact == '' || !contact){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    res.status(201).json({msg:'Contact Found',contact:contact})
})


//@desc Update  contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res) =>{
    const {id:taskId} = req.params
    const contact = await Contact.find({_id:taskId})
    if(contact == '' || !contact){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    const {name,email,phone } = req.body
    const updatedContact = await Contact.findByIdAndUpdate({_id:taskId},{name,email,phone},{new:true,runValidators:true})
    res.status(201).json({msg:'Contact Updated', contact:updatedContact})
})


//@desc delete  contacts
//@route DEL /api/contacts/:id
//@access public

const deleteContact = asyncHandler( async (req,res) =>{
    const {id:taskId} = req.params
    const contact = await Contact.find({_id:taskId})
    if(contact == '' || !contact){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    const deletedContact = await Contact.findByIdAndDelete({_id:taskId})
    res.status(201).json({msg:'contact Deleted Successfully', contact : deletedContact})
})



module.exports = {getContacts,createContact,getContact,deleteContact,updateContact}