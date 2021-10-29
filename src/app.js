const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const { authMiddleware } = require('./middleware/Auth')

// Routes
const usersRoutes = require('./routes/Users')
const itemRoutes = require('./routes/items');
const app = express()

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(helmet())
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/users', usersRoutes)
app.use('/items', itemRoutes)

app.get('/ping', authMiddleware, (req, res) => {
	console.log(req.user)
	res.status(200)
})

module.exports = app;