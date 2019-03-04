let SubCategory = require('../models/subCategories')
// const Item = require('../models/items')

const subCategoryAdd = (req, res) => {
    let subCategory = new SubCategory(req.body)
    subCategory.save()
        .then((subCategory) => {
            return res.status(200).json(subCategory)
        })
        .catch(() => {
            return res.status(400).send('unable to save to database');
        });
}

const getSubCategories = (req, res) => {
    let id = req.params.id
    SubCategory.find({categoryId: id},function(err, subCategories){
        if(err) {
            return res.json(err)
        }
        else {
            res.json(subCategories)
        }
    })
}

const editSubCategory = (req, res) => {
    let id = req.params.id
    SubCategory.findById(id, function(err, subCategory){
        if(err) {
            return res.json(err)
        }
        return res.json(subCategory)
    })
}

const updateSubCategory = (req, res) => {
    SubCategory.findById(req.params.id, function(err, subCategory) {
        if(!subCategory)
            return res.status(404).send('data is not found')
        else {
            subCategory.subCategoryName = req.body.subCategoryName
            subCategory.save().then(() => {
                return res.json("Update complete")
            })
            .catch(() => {
                res.status(400).send("unable to update the database")
            })
        }
    })
}

const deleteSubCategory = (req, res) => {
    SubCategory.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)  {
            return res.json(err)
        }
        else {
            return res.json('Successfully removed')
        }
    })
}


module.exports = {
    subCategoryAdd,
    getSubCategories,
    editSubCategory,
    updateSubCategory,
    deleteSubCategory
}
