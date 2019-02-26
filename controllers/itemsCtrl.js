const Item = require('../models/items')

const itemsAdd = (req, res) => {
    let item = new Item(req.body)
    item.save()
        .then(() => {
            return res.status(200).json("Success")
        })
        .catch(() => {
            return res.status(400).json('Faild')
        })
}

const getItems = (req, res) => {
    Item.find(function(err, items) {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(items);
        }
    })
}

const editItem = (req, res) => {
    let id = req.params.id
    Item.findById(id, function(err, item){
        if(err) {
            return res.json(err)
        }
        else {
            return res.json(item)
        }
    })
}

const updateItem = (req, res) => {
    Item.findById(req.params.id, function(err, item){
        if(!item) {
            return res.status(400).send('faild')
        }
        else {
            item.itemName = req.body.itemName
            item.itemPrice = req.body.itemPrice
            item.itemAmount = req.body.itemAmount
            item.save().then(() => {
                return res.json('Update complete')
            })
            .catch(() => {
                return res.status(400).send("unable to update the database")
            })
        }
    })
}

const deleteItem = (req, res) => {
    Item.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)
            return res.json(err)
        else 
            return res.json('Successfully removed')
    })
}

module.exports = {
    itemsAdd,
    getItems,
    editItem,
    updateItem,
    deleteItem
}