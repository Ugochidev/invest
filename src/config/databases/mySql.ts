import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import environment from "../environment";

// creating connection
const connection : any = mysql.createConnection({
  host: environment.hostSql,
  port: environment.portSql,
  user: environment.userSql,
  password: environment.passwordSql,
  database: environment.databaseSql,
});

connection.connect(function (err: any) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
module.exports = connection.promise();
// connection.end()
