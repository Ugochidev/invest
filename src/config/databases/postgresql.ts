// import { Pool } from "pg";
// import dotenv from "dotenv";
// dotenv.config();
// import environment from "../environment";

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

// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import { User } from "../../modules/users/entity/User";

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: environment.hostPg,
//   port: parseInt(environment.portPg),
//   username: environment.userPg,
//   password: environment.passwordPg,
//   database: environment.databasePg,
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   migrations: [],
//   subscribers: [],
// });
// AppDataSource.initialize()
//   .then(() => {
//     // here you can start to work with your dat
//     console.log("POSTGRESQL");

//   })
//   .catch((error) => console.log(error));

// Import the necessary dependencies
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../../modules/users/entity/User";
import environment from "../environment";

// Create a new DataSource instance with the database connection details
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

// Initialize the connection to the database
AppDataSource.initialize()
  .then(() => {
    console.log("POSTGRESQL connected");
  })
  .catch((error) => console.log(error));
