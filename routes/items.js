const express = require('express')
const itemsCtrl = require('../controllers/itemsCtrl')

const router = express.Router()

router.route('/api/itemsAdd')
    .post(itemsCtrl.itemsAdd)

router.route('/api/items')
    .get(itemsCtrl.getItems)

router.route('/api/editItem/:id')
    .get(itemsCtrl.editItem)

router.route('/api/updateItems/:id')
    .post(itemsCtrl.update)

router.route('/api/deleteItem/:id')
    .delete(itemsCtrl.deleteItem)

module.exports = router