const Plan = require('../models/plans')

const plansAdd = (req, res) => {
    let plan = new Plan(req.body)
    plan.save()
        .then((plan) => {
            return res.status(200).json(plan)
        })
        .catch(() => {
            return res.status(400).json('Faild')
        })
}

const getPlans = (req, res) => {
    let date = req.params.date
    console.log(date)
    Plan.find({planSelectedDate: date},function(err, plans) {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(plans);
        }
    })
}

const editPlan = (req, res) => {
    let id = req.params.id
    Plan.findById(id, function(err, plan){
        if(err) {
            return res.json(err)
        }
        else {
            return res.json(plan)
        }
    })
}

const updatePlan = (req, res) => {
    Plan.findById(req.params.id, function(err, plan){
        if(!plan) {
            return res.status(400).send('faild')
        }
        else {
            plan.itemName = req.body.itemName
            plan.itemPrice = req.body.itemPrice
            plan.save().then((plan) => {
                return res.json(plan)
            })
            .catch(() => {
                return res.status(400).send("unable to update the database")
            })
        }
    })
}

const deletePlan = (req, res) => {
    Plan.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)
            return res.json(err)
        else 
            return res.json('Successfully removed')
    })
}


module.exports = {
    plansAdd,
    getPlans,
    editPlan,
    updatePlan,
    deletePlan
}