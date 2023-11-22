const express = require('express')
const {getContact} = require('../controllers/contactController')
const router = express.Router()

router.route('/').get(getContact).post()
router.route('/:id').get().patch().delete()

module.exports = router
