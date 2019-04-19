const express = require("express");
const router = express.Router();

//Item Models
const Item = require("../../models/Item");

//@route GET api/item
//@desc  Get All Item
//@access public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route POST api/items
//@desc create  An item
//@access Private

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//@route POST api/items/:id
//@desc Delete  An item
//@access Private

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)

    .then(item => item.remove().then(() => res.json({ Success: true })))

    .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;
