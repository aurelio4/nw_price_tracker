const express = require('express');
const helmet = require('helmet');

// Routes
const usersRoutes = require('./routes/Users')
const authRoutes = require('./routes/auth')
const itemRoutes = require('./routes/items')
const entriesRoutes = require('./routes/entries')
const app = express()

app.use(helmet())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/auth', authRoutes)
app.use('/items', itemRoutes)
app.use('/entries', entriesRoutes)

module.exports = app;