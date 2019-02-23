const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Category = new Schema({
    categoryName : {
        type: String
    },
    categoryIcon: {
        type: String
    },
    itemId: {
        type: String
    }
    
})

module.exports = mongoose.model('Category', Category)