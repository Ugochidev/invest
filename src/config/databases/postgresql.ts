import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
import environment from "../environment";

// creating connection:
const pool = new Pool({
  host: environment.hostPg,
  user: environment.userPg,
  port: environment.portPg,
  password: environment.passwordPg,
  database: environment.databasePg,
});

pool.query("SELECT NOW()", (err : any) => {
  if (!err) {
    console.log("connected to PGsql");
  } else {
    console.log(err.message);
  }
});

module.exports = pool;
