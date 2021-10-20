const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const {getUser} = require('../dal/auth');

router.post(
    "/",
    [
        //check to see if the request attempted has the data it needs
        check("email", "please include a valid email").isEmail(),
        check("password", "password is required").exists(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
           const user = await getUser({email});


            
            if (!user) {
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
            }
            
          
            const isMatch = await bcrypt.compare(password, user[0].password);
            
            if (!isMatch) {
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
            }

            const payload = {
                user: {
                    email: user.email,
                    
                },
            };

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
            //res.status(201).send('yurr')
        } catch (err) {
            console.error(err+ "bigERROR");
            res.status(500).send("server error");
        }
    },
);
module.exports = 
    router
