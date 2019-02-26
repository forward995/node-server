const express = require('express')
const subCategoriesCtrl = require('../controllers/subCategoriesCtrl')

const router = express.Router()

router.route('/api/subCategoryAdd')
    .post(subCategoriesCtrl.subCategoryAdd)
router.route('/api/subCategories')
    .get(subCategoriesCtrl.getSubCategories)
router.route('/api/editSubCategory/:id')
    .get(subCategoriesCtrl.editSubCategory)
router.route('/api/updateSubCategory/:id')
    .post(subCategoriesCtrl.updateSubCategory)
router.route('/api/deleteSubCategory/:id')
    .delete(subCategoriesCtrl.deleteSubCategory)

module.exports = router