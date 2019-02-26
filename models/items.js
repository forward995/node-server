const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Item = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemAmount: {
        type: Number,
        required: true
    },
    subCategoryId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Item', Item)