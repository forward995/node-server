const express = require('express')
const authCtrl = require('../controllers/authUserCtrl')

const router = express.Router()

router.route('/api/signup')
    .post(authCtrl.signup)
router.route('/api/signin')
    .post(authCtrl.signin)
router.route('/api/updateUser/:id')
    .post(authCtrl.updateUser)
    
module.exports = router;