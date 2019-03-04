const express = require('express')
const categoriesCtrl = require('../controllers/categoriesCtrl')

const router = express.Router()

router.route('/api/categoryAdd')
    .post(categoriesCtrl.categoryAdd)
router.route('/api/categories/:id')
    .get(categoriesCtrl.getCategories)
router.route('/api/editCategory/:id')
    .get(categoriesCtrl.editCategory)
router.route('/api/updateCategory/:id')
    .post(categoriesCtrl.updateCategory)
router.route('/api/deleteCategory/:id')
    .delete(categoriesCtrl.deleteCategory)

module.exports = router