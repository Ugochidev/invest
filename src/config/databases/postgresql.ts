// import { Pool } from "pg";
// import dotenv from "dotenv";
// dotenv.config();
import environment from "../environment";

// // creating connection:
// const pool = new Pool({
//   host: environment.hostPg,
//   user: environment.userPg,
//   port: parseInt(environment.dbPort),
//   password: environment.passwordPg,
//   database: environment.databasePg,
// });

// pool.query("SELECT NOW()", (err : any) => {
//   if (!err) {
//     console.log("connected to PGsql");
//   } else {
//     console.log(err.message);
//   }
// });

// module.exports = pool;


import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../../modules/users/entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: environment.hostPg,
  port: parseInt(environment.portPg),
  username: environment.userPg,
  password: environment.passwordPg,
  database: environment.databasePg,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
