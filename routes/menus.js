const express = require('express')
const menusCtrl = require('../controllers/menusCtrl')

const router = express.Router()

router.route('/api/menusAdd')
    .post(menusCtrl.menusAdd)

router.route('/api/menus')
    .get(itemsCtrl.getmenus)

router.route('/api/editmenu/:id')
    .get(menusCtrl.editmenu)

router.route('/api/updatemenus/:id')
    .post(menusCtrl.update)

router.route('/api/deletemenu/:id')
    .delete(menusCtrl.deletemenu)

module.exports = router