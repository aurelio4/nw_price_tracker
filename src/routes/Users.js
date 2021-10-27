const router = require("express").Router();
const bcrypt = require("bcrypt");
const { createUser, getUser } = require("../dal/users");
const pool = require("../data/Pool");
const date = new Date();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

require("dotenv").config();

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

      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
      );

      return res
				.cookie("auth_token", token, {
					secure: process.env.NODE_ENV === 'production',
				})
				.status(200)
				.json({});
    } catch (err) {
      console.error(err);
	  if(err.constraint === "users_email_key") {
		res.status(500).json({ error: "Email is already in use." });
	  } else {
		res.status(500).json({ error: 'Server error, please try again later.' });
	  }
    }
  }
);

router.post(
	'/login',
	[
		//check to see if the request attempted has the data it needs
		check('username', 'please include a valid username').not().isEmpty(),
		check('password', 'password is required').exists(),
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { username, password } = req.body;

		try {
			const user = await getUser({ username });

			if (!user) {
				res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
			}

			const isMatch = await bcrypt.compare(password, user[0].password);

			if (!isMatch) {
				res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
			}

			const payload = {
				user: {
					username: user.username,
				},
			};

			const token = jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{ expiresIn: 360000 },
				(err) => {
					if (err) throw err;
				},
			);

			return res
				.cookie("auth_token", token, {
					secure: process.env.NODE_ENV === 'production',
				})
				.status(200)
				.json({});
		} catch (err) {
			console.error(err + 'bigERROR');
			res.status(500).send('server error');
		}
	},
);

module.exports = router;
