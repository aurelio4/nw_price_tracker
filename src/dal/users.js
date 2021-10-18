const db = require('../data/Pool')
const sqlLoader = require('sql-loader')

const sql = sqlLoader('../sql')

async function createUser({ username, email, password }) {
    const { rows } = await db.query(sql.users.create_user, [ username, email, password ])
    return rows 
}

module.exports = {
    createUser
}