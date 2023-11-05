const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE
});

module.exports = {
    getConnection: function () {
        return db;
    }
};