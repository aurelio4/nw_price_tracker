const app = require('./src/app.js')

const { initializeDatabase } = require('./src/dal/initialize')

initializeDatabase()

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`\n** Running on port ${port} **\n`)
});

app.timeout = 60 * 10 * 1000;