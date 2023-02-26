export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "production",
  dbUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.SECRET_TOKEN || "",
};
