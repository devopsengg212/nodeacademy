const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//@desc Get all users
//@route GET /api/users
//@access public

const getUsers = asyncHandler(async (req,res) =>{
    const users = await User.find({})

    res.status(200).json({nbHits:users.length,users:users})
})

//@desc Create new  user
//@route POST /api/users
//@access public

const createUser = asyncHandler(async (req,res,next) =>{
  

    const user = await User.create({})
    res.status(201).json({success:true,
        msg:'Created new User',
    user:user})
  
})

//@desc get specific user
//@route GET /api/users/:id
//@access public

const getUser = asyncHandler(async (req,res) =>{
    const {id:userId} = req.params
    const user = await User.find({_id:userId})
    if(user == '' || !user){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    res.status(201).json({msg:'User Found',user:user})
})


//@desc Update user
//@route PUT /api/users/:id
//@access public

const updateUser = asyncHandler(async (req,res) =>{
    const {id:userId} = req.params
    const user = await User.find({_id:userId})
    if(user == '' || !user){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    
    const updatedUser = await User.findByIdAndUpdate({_id:userId},req.body,{new:true,runValidators:true})
    res.status(201).json({msg:'User Updated', user:updatedUser})
})


//@desc delete user
//@route DEL /api/users/:id
//@access public

const deleteUser = asyncHandler( async (req,res) =>{
    const {id:userId} = req.params
    const user = await User.find({_id:userId})
    if(user == '' || !user){
        res.status(404)
        throw new Error('The Id is invalid, Try again with different Id')
    }
    const deletedUser = await User.findByIdAndDelete({_id:userId})
    res.status(201).json({msg:'User Deleted Successfully', user : deletedUser})
})


//@desc login user
//@route  /api/users/login
//@access public

const login = asyncHandler( async (req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Please provide EMail and Password to login') 
    }
    const user = await User.findOne({email:email})
    if(user == '' || !user){
        res.status(404)
        throw new Error('Credentials are wrong, please try again')
    }
    
    if(user.password !== password){
        res.status(404)
        throw new Error('Sorry the password is wrong , try again')
      }
      const accessToken = jwt.sign({user:{username:user.username,email:user.email,id:user._id.toString()}},process.env.JWT_SECRET,{expiresIn:'7d'})
    res.status(201).json({msg:'Login Successful', user : user,token:accessToken})
})

//@desc delete user
//@route DEL /api/users/:id
//@access public

const register = asyncHandler( async (req,res) =>{
    const {username,email,password} = req.body
    const checkuser = await User.findOne({email:email})
    
    if(!checkuser || checkuser == null){
        const user = await User.create({username,email,password})
        res.status(201).json({msg:'User Registered', user : user})
        
    }
    else{
        res.status(400)
        throw new Error('The user with this email id already exit. Please Login')
    }
   
})



module.exports = {getUsers,createUser,getUser,deleteUser,updateUser,login,register}
