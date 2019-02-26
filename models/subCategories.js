const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let SubCategory = new Schema({
    subCategoryName : {
        type: String
    },
    categoryId: {
        type: String
    }
    
})

module.exports = mongoose.model('SubCategory', SubCategory)