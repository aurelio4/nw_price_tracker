const db = require('../data/Pool')

const sqlLoader = require('sql-loader')
const sql = sqlLoader('../sql')

async function initializeTables() {
    try {
        // add more initial tables here
        await db.query(sql.tables.users)
    } catch (err) {
        console.error(err)
    }
}

async function initializeDatabase() {
    // initializes tables
    await initializeTables()
    console.log('**Tables created! **')
}

module.exports = {
    initializeDatabase,
}