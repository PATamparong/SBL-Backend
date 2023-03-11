const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: '10.0.11.23',
    user: 'root',
    password: 'mlinc1234',
    database: 'sample',
    multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
});

module.exports = mysqlConnection;