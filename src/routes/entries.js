const express = require("express");
const router = express.Router();

const { createEntry } = require('../dal/entries')

router.post('/create', [], (req,res,next) => {
    const {itemName, price } = req.body;

    const item = await createEntry()


});

module.exports = router;