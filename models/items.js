const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Item = new Schema({
    itemName: {
        type: String
    },
    itemPrice: {
        type: Number
    },
    itemAmount: {
        type: Number
    },
    categoryId: {
        type: Number
    }
    ,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', Item)