const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config()

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: process.env.DB_PSW,
    port: 5432,
    database: 'controle_de_gastos'
})

module.exports = pool;