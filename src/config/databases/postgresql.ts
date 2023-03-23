import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "../../modules/users/models/entities/User";
import Profile from "../../modules/users/models/entities/Profile";
import environment from "../environment";

// Create a new DataSource instance with the database connection details
const AppDataSource = new DataSource({
  type: "postgres",
  host: environment.hostPg,
  port: parseInt(environment.portPg),
  username: environment.userPg,
  password: environment.passwordPg,
  database: environment.databasePg,
  synchronize: true,
  logging: false,
  entities: [User, Profile],
  migrations: ["./src/migrations/*.ts"],
  applicationName: "invest",
  migrationsTableName: "migrations",
});

// Initialize the connection to the database
AppDataSource.initialize()
  .then(() => {
    console.log("POSTGRESQL connected");
  })
  .catch((error) => console.log(error));

export default AppDataSource;
