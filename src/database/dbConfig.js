import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(
      `\n MongoDB Connected SUCCESSFULLY..!! DB_HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(`MONGO_DB Connection FAILED: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
