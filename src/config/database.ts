// require dependencies
import mongoose from "mongoose";
import environment from "./environment";

const connectDB = async () => {
  try {
    await mongoose.connect(environment.dbUrl);
    console.log("Database Connected");
  } catch (error: any) {
    throw new Error("Database not Connected");
  }
};

export default connectDB;
