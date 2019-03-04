const express = require('express')
const plansCtrl = require('../controllers/plansCtrl')

const router = express.Router()

router.route('/api/plansAdd')
    .post(plansCtrl.plansAdd)

router.route('/api/plans/:date')
    .get(plansCtrl.getPlans)


router.route('/api/plans')
    .get(plansCtrl.getAllPlans)

router.route('/api/editPlan/:id')
    .get(plansCtrl.editPlan)

router.route('/api/updatePlan/:id')
    .post(plansCtrl.updatePlan)

router.route('/api/deletePlan/:id')
    .delete(plansCtrl.deletePlan)

module.exports = router