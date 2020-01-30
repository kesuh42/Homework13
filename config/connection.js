var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "beethoven",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting to the database. Try again, coder");
    return;
  }
  console.log("Connection to database has been established, coder");
});

// Export connection for the ORM to use.
module.exports = connection;