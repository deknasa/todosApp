const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "bolaliloq",
    database: "todosApp_db",
    host: "localhost",
    port: '5432'
})

module.exports = pool