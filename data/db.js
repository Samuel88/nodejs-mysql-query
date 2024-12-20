const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'test',
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Connected to Mysql.');
});

module.exports = connection;