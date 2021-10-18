const express = require('express');
const helmet = require('helmet');

// Routes
const usersRoutes = require('./routes/Users')

const app = express()

app.use(helmet())
app.use(express.json())

app.use('/users', usersRoutes)

module.exports = app;