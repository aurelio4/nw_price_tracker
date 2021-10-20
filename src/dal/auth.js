const db = require('../data/Pool')
const sqlLoader = require('sql-loader')

const sql = sqlLoader('../sql')

async function getUser({  email, password }) {
    const  {rows}  = await db.query(sql.users.get_user, [email])
    
    return rows 
}

module.exports = {
    getUser
}