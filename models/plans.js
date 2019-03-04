const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Plan = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    planSelectedDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Plan', Plan)