const db = require('../data/Pool')
const sqlLoader = require('sql-loader')

const sql = sqlLoader('../sql')

async function createUser({  email, password,username, formattedDate }) {
    const { rows } = await db.query(sql.users.create_user, [ email, password,username, formattedDate ])
    return rows 
}

async function getUser({ username }) {
    const { rows } = await db.query(sql.users.get_user, [ username ])
    return rows
}

module.exports = {
    createUser,
    getUser
}