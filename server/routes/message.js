const express = require('express')
const router = express.Router()
const User = require('../database/models/message')

router.get('/', messageController.list)
router.post('/get', messageController.getMessage)


module.exports = router