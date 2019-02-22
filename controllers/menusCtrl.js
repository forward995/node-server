const Menu = require('../models/menus')

const menusAdd = (req, res) => {
    let menu = new Menu(req.body)
    menu.save()
        .then(() => {
            return res.status(200).json("Success")
        })
        .catch(() => {
            return res.status(400).json('Faild')
        })
}

const getmenus = (req, res) => {
    Menu.find(function(err, menus) {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(menus);
        }
    })
}

const editmenu = (req, res) => {
    let id = req.params.id
    Menu.findById(id, function(err, menu){
        if(err) {
            return res.json(err)
        }
        else {
            return res.json(menu)
        }
    })
}

const update = (req, res) => {
    Menu.findById(req.params.id, function(err, menu){
        if(!menu) {
            return res.status(400).send('faild')
        }
        else {
            menu.menuName = req.body.menuName
            menu.categoryId = req.body.categoryId
            menu.save().then(() => {
                return res.json('Update complete')
            })
            .catch(() => {
                return res.status(400).send("unable to update the database")
            })
        }
    })
}

const deletemenu = (req, res) => {
    Item.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)
            return res.json(err)
        else 
            return res.json('Successfully removed')
    })
}

module.exports = {
    menusAdd,
    getmenus,
    editmenu,
    update,
    deletemenu
}