import app from "./app";
import environment from "../config/environment";



app().then(async () => {
  (await app()).listen(environment.port);
  console.log(`server listening on ${environment.port}`);
});
