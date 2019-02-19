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
            user: {_id: user._id, email: user.email}
        })
    })
}

const signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: "error"
            })
        }
        res.status(200).json({
            message: "Successfully signed up!"
        })
    })
}

module.exports = {
    signin, 
    signup
}