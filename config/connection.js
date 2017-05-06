
/*****************************************************************
 * Creates and exports connection object using mysql package so we
 * will be able to handle communications between us and MySQL DB.
 *****************************************************************/

/**
 * Dependencies
 */
const mysql = require("mysql");
var connection;
/**
 * Check if Node environment variable is equal to production,
 * If production is set, db is equal to JAWSDB_URL env variable.
 * Otherwise, create and object with localhost env variables for MySQL.
 */
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
     connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "4801",
        database: "burger_db"
    });
}

/**
 * Call mysql.createConnection using db options and save to connection variable for export.
 */

/**
 * Connect to mysql server, otherwise console error.
 *
 * TODO Better implement mysql error handling.
 */
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;