import app from "./app";
import connectDB from "../config/databases/mongodb";
import environment from "../config/environment";
import AppDataSource  from "../config/databases/postgresql";
import { dataSource } from "../config/databases/mySql";

app().then(async () => {
  await connectDB();
  await dataSource;
  await AppDataSource;
  (await app()).listen(environment.port);
  console.log(`server listening on ${environment.port}`);
});
