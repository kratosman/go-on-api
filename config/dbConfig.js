require('dotenv').config();
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: `${process.env.LOCALHOST}`,
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    port: `${process.env.DB_PORT}`
});

conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Database are connected to MYSQL WORKBENCH');
    }
})


module.exports = conn;