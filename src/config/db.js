import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect("");
    return connectionInstance;
  } catch (error) {
    console.log("Unable to connect Database");
    process.exit(1);
  }
};

export { connectDB };
