var mysql = require("mysql");
var connection;

//jawsDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
 connection = mysql.createConnection({
  host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "i7bnstejile8r7ic",
  password: "pikx9gcu7imsnszf",
  database: "w5kq58cgp3cjcm97"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
