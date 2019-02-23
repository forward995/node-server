const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Category = new Schema({
    categoryName : {
        type: String
    },
    categoryIcon: {
        type: String
    },
    menuId: {
        type: Number
    }
    
})

module.exports = mongoose.model('Category', Category)