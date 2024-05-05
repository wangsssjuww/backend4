const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '05032004',
    database:'belajar2'
});

connection.connect(error => {
    if(error){
    console.log(error)
    };
    console.log("Successfully connected to the database.");
});
module.exports = connection;