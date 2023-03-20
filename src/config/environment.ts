import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "production",
  dbUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.SECRET_TOKEN || "",
  hostPg: process.env.hostpg,
  userPg: process.env.userpg,
  portPg: process.env.portpg,
  passwordPg: process.env.passwordpg,
  databasePg: process.env.databasepg,
  hostSql: process.env.hostSql,
  portSql: process.env.portSql,
  userSql: process.env.userSql,
  passwordSql: process.env.passwordSql,
  databaseSql: process.env.databaseSql,
  saltRounds : 10,
   redisHost: process.env.REDIS_HOST || "127.0.0.1",
  redisPort: process.env.REDIS_PORT || "6379",

};
