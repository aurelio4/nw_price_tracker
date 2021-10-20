const db = require('../data/Pool')
const sqlLoader = require('sql-loader')

const sql = sqlLoader('../sql')

const createItem = async (name) => {
    try {
        const { rows } = await db.query(sql.items.create_item, [ name ])
        return rows
    } catch (err) {
        console.error(err)
    }
}

module.exports = { createItem }