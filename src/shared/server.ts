import app from "./app";
import connectDB from "../config/database";
import environment from "../config/environment";

app().then(async () => {
  await connectDB();
  (await app()).listen(environment.port);
  console.log(`server listening on ${environment.port}`);
});
