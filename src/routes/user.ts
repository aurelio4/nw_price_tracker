import express from "express";
const router = express.Router(),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  { check, validationResult } = require("express-validator");

const users: Object = [];

router.post(
  "/",
  [
    // check("name", "name is required").not().isEmpty(),
    // check("email", "please include a valid email").isEmail(),
    // check(
    //   "password",
    //   "please enter a password with 6 or more charecters"
    // ).isLength({ min: 6 }),
  ],
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        console.log(req.body)
        //const { name, email, password } = req.body;

    //   const salt = await bcrypt.genSalt(10);
    //   var pass = await bcrypt.hash({ password }, salt);

     // console.log({ name, email }, pass);
    } catch (err) {
      console.error(err);
    }
  }
);
module.exports = router;
