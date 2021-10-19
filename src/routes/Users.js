const router = require('express').Router()
const bcrypt = require('bcrypt')
const {createUser} = require('../dal/users');
const pool = require('../data/Pool');
const date = new Date();


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
    
        const { username, password:pass, email} = req.body;
        const salt = await bcrypt.genSalt(10);
        var password = await bcrypt.hash(pass, salt);
        console.log(pass);
        const formattedDate =` ${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
       // console.log(formattedDate);
        await createUser({email,password,username, formattedDate });
        res.status(201).json({ success: 'created' })
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
})

module.exports = router;