const express = require('express');
const router = express.Router();

const Item = require('../../model/Item');

router.get('/',(req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

router.post('/',(req,res) => {
    Item({
        name: req.body.name
    }).save().then(item => res.json(item));
});

router.delete('/:id',(req, res) => {
    Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
})

module.exports = router;