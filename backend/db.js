const mysql = require('mysql2');

// Create connection to db
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to db: ", err);
    }
    else {
        console.log("Connected to MySQL db");
    }
});

module.exports = connection;