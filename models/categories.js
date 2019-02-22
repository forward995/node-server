const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Category = new Schema({
    categoryName : {
        type: String
    },
    categoryIcon: {
        type: String
    },
    itemsId: {
        type: String
    }
    
})

module.exports = mongoose.model('Category', Category)