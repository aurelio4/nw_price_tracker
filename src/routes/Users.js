const router = require("express").Router();
const bcrypt = require("bcrypt");
const { createUser } = require("../dal/users");
const pool = require("../data/Pool");
const date = new Date();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    res.status(200).json({ success: "user stuff here" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

router.post(
  "/create",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more charecters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const { username, password: pass, email } = req.body;
      const salt = await bcrypt.genSalt(10);
      var password = await bcrypt.hash(pass, salt);

      const formattedDate = ` ${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
      await createUser({ email, password, username, formattedDate });

      const payload = {
        user: {
          email: email,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "server error" });
    }
  }
);

module.exports = router;
