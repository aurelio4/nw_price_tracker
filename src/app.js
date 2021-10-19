const express = require('express');
const helmet = require('helmet');

// Routes
const usersRoutes = require('./routes/Users')
const authRoutes = require('./routes/auth')
const app = express()

app.use(helmet())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/auth', authRoutes)

module.exports = app;