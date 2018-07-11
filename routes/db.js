/**
 * Created by lpw on 2018/6/27.
 */
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "school"
});
module.exports = db;