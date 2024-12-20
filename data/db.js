const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'laravel',
    password: 'laravel',
    database: 'laravel2',
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Connected to Mysql.');
});

module.exports = connection;