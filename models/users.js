const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const Schema = mongoose.Schema;

let User = new Schema({
    contactName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    password: {
        type: String,
        required: "Password is required"
    },
    golfCourseName: {
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cityAddr: {
        type: String,
        required: true
    },
    stateAddr: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    golfCourseUrl: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

// hash user password before saving into database

User.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
})

module.exports = mongoose.model('User', User)