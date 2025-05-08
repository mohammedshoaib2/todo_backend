import mongoose from "mongoose";
import { environmentVariables } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${environmentVariables.mongodbUri}`
    );

    console.log("connected to Database");

    return connectionInstance;
  } catch (error) {
    console.log("Unable to connect Database", error);
    process.exit(1);
  }
};

export { connectDB };
