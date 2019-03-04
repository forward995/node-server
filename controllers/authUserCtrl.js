let User = require('../models/users')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const config = require('../config/config')

const signin = (req, res) => {
    User.findOne({
        "email": req.body.email
    }, (err, user) => {
        if(err || !user)
            return res.status('401').json({
                error: "User not found"
            })
        const token = jwt.sign({
            _id: user._id
        }, config.jwtSecret)
        return res.json({
            token,
            user
        })
    })
}

const signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                error: "error"
            })
        }
        res.status(200).json({
           user
        })
    })
}

const updateUser = (req, res) => {
    User.findById(req.params.id, function(err, user){
        if(!user)
            return res.status(404).send('data is not found')
        else {
            user.contactName = req.body.contactName
            user.phoneNumber = req.body.phoneNumber
            user.email = req.body.email
            user.password = req.body.password
            user.golfCourseName = req.body.golfCourseName
            user.address = req.body.address
            user.cityAddr = req.body.cityAddr
            user.stateAddr = req.body.stateAddr
            user.zip = req.body.zip
            user.golfCourseUrl = req.body.golfCourseUrl
            user.save().then(() => {
                return res.json({user})
            })
            .catch(() => {
                res.status(400).send("unable to update the database")
            })
        }
    })
}

module.exports = {
    signin, 
    signup,
    updateUser
}