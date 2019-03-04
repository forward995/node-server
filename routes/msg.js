const express = require('express')
const msgCtrl = require('../controllers/msgCtrl')
const router = express.Router()

router.route('/api/messages')
    .post(msgCtrl.send)

module.exports = router