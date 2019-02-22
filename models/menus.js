const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Menu = new Schema({
    menuName: {
        type: String
    },
    categoryId: {
        type: String
    }
})

module.exports = mongoose.model('Menu', Menu)