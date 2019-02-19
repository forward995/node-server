const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let User = new Schema({
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
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', User)