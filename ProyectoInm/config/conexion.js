require('dotenv').config();

var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'inmob_app',
    password: process.env.DB_PASSWORD || 'InmobApp2026!',
    database: process.env.DB_NAME || 'inmobiliaria',
    charset: 'utf8mb4'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }

    console.log(
        'Database connection established to',
        `${process.env.DB_HOST || '127.0.0.1'}:${process.env.DB_PORT || 3306}/${process.env.DB_NAME || 'inmobiliaria'}`
    );
    connection.release();
});

module.exports = pool;
