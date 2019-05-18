let User = require('../models/users')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const config = require('../config/config')
const bcrypt = require('bcrypt')

const signin = (req, res) => {
    User.findOne({
        "email": req.body.email
    }, (err, user) => {
        if(err || !user)
            return res.status('401').json({
                error: "User not found"
            })
        else {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({
                    _id: user._id
                }, config.jwtSecret)
                res.json({status: 'success', message: 'user found!!!',
                        user: user, token: token
                    })
            } else {
                res.json({
                    status: "error",
                    message: "Invalid email/password!!!",
                    data: null
                })
            }
        }

        // return res.json({
        //     token,
        //     user
        // })
    })
}

const signup = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            res.json({ error: err})
        } else {
            res.json({status: "success", message: "User added successfully!!!", data: null});
        }
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