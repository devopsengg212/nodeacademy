const express = require('express')
const {getUsers,getUser,createUser,updateUser,deleteUser,login,register} = require('../controllers/userController')
const router = express.Router()

//add a middleware that following 2 urls will
//be accessible by user who are admin only. 

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

//public access url

router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router
