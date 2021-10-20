const express = require("express");
const router = express.Router();
const { createItem } = require('../dal/items')

router.post('/', async (req, res) => {
    try {
        const { name } = req.body
        const item = await createItem(name)
        res.status(201).send({ success: 'item entered' })
    } catch(err) {
        console.error(err)
    }
})

module.exports = router