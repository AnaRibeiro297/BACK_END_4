<<<<<<< HEAD:src/config/database.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool de conexões com MySQL usando Promises
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'sabordigital',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
=======
const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool de conexões com MySQL usando Promises
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'sabordigital',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
>>>>>>> 4e253939f6d1227b6a015f3dd0ab95ad4a2dce1b:projetos/sabor_digital/src/config/database.js
