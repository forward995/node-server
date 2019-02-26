const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Course', Course)
