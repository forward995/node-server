const express = require('express')
const categoriesCtrl = require('../controllers/categoriesCtrl')

const router = express.Router()

router.route('/api/categoryAdd')
    .post(categoriesCtrl.create)
router.route('/api/category')
    .get(categoriesCtrl.getCategories)
router.route('/api/categoryEdit/:id')
    .get(categoriesCtrl.editGategories)
router.update('/api/categoryUpdate/:id')
    .post(categoriesCtrl.update)
router.route('/api/categoryDelete/:id')
    .delete(categoriesCtrl.deleteCategory)

module.exports = router