const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let User = new Schema({
    contactName: {
        type: String
    },
    phoneNumber: {
        type: String
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
        type:String
    },
    address: {
        type: String
    },
    cityAddr: {
        type: String
    },
    stateAddr: {
        type: String
    },
    zip: {
        type: String
    },
    golfCourseUrl: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', User)