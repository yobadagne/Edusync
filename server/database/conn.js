const mysql  = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();
//const db = mysql.createPool({
//    host: "localhost",
 //   user: "root",
  //  password : process.env.dbpassword,
   // database : "sms"
//});
const db = mysql.createPool({
    host: "sql9.freesqldatabase.com",
    user: "sql9650109",
    password : process.env.dbpassword,
    database : "sql9650109"
});

module.exports = db;
