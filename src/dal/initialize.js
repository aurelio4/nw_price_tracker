const db = require('../data/Pool')

const sqlLoader = require('sql-loader')
const sql = sqlLoader('../sql')

async function initializeTables() {
    try {
        // add more initial tables here
        await db.query(sql.tables.users)
        await db.query(sql.tables.items)
        await db.query(sql.tables.entries)
    } catch (err) {
        console.error(err + ': this is the error')
    }
}

async function initializeDatabase() {
    // initializes tables
    try {
        await initializeTables()
        console.log('**Tables created! **')
    } catch (err) {
        console.error(err)
    }
}
    

module.exports = {
    initializeDatabase,
}