const db = require('../data/Pool')
const sqlLoader = require('sql-loader')

const sql = sqlLoader('../sql')

async function createEntry({  itemName, price }) {
    const  {rows}  = await db.query(sql.entries.create_entry, [itemName,price])
    
    return rows 
}

module.exports = {
    createEntry
}