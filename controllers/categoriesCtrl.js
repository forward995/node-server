let Category = require('../models/categories')
// let SubCategory = require('../models/subCategories')
// const Item = require('../models/items')

const categoryAdd = (req, res) => {
    let category = new Category(req.body)
    category.save()
        .then(() => {
            return res.status(200).json({'category':'category in added successfully'})
        })
        .catch(() => {
            return res.status(400).send('unable to save to database');
        });
}

const getCategories = (req, res) => {
    Category.find(function(err, categories){
        if(err) {
            return res.json(err)
        }
        else {
            res.json(categories)
        }
    })
}

const editCategory = (req, res) => {
    let id = req.params.id
    Category.findById(id, function(err, category){
        if(err) {
            return res.json(err)
        }
        return res.json(category)
    })
}

const updateCategory = (req, res) => {
    Category.findById(req.params.id, function(err, category) {
        if(!category)
            return res.status(404).send('data is not found')
        else {
            category.categoryName = req.body.categoryName
            category.categoryIcon = req.body.categoryIcon
            category.save().then(() => {
                return res.json("Update complete")
            })
            .catch(() => {
                res.status(400).send("unable to update the database")
            })
        }
    })
}

const deleteCategory = (req, res) => {
    Category.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)  {
            return res.json(err)
        }
        else {
            return res.json('Successfully removed')
        }
    })
}


module.exports = {
    categoryAdd,
    getCategories,
    editCategory,
    updateCategory,
    deleteCategory
}
