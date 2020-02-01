var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "beethoven",
  database: "burger_db"
});

// Make connection.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection.connect(function(err) {
    if (err) {
      console.error("Error connecting to the database. Try again, coder");
      console.log(err)
      return;
    }
    console.log("Connection to database has been established, coder");
  });
}

// Export connection for the ORM to use.
module.exports = connection;