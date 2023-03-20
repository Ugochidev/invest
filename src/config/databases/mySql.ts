// import environment from "../environment";

// import { DataSource } from "typeorm";

// export const dataSource = new DataSource({
//   type: "mysql",
//   host: environment.hostSql,
//   port: parseInt(environment.portSql),
//   username: environment.userSql,
//   password: environment.passwordSql,
//   database: environment.databaseSql,
//   entities: [__dirname + "/../**/*.entity{.ts,.js}"],
//   synchronize: true,
// });
// dataSource
//   .initialize()
//   .then(() => {
//     console.log("MYSQL connected");
//   })
//   .catch((error) => console.log(error));
