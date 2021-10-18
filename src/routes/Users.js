const router = require('express').Router()
const bcrypt = require('bcrypt')

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ success: 'user stuff here' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
})

router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        res.status(201).json({ success: 'created' })
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
})

module.exports = router;