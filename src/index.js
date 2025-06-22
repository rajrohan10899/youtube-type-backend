import dotenv from "dotenv";
import dbConnection from "./database/dbConfig.js";
import { app } from "./app.js";

dotenv.config();

const port = process.env.PORT;

dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB_DB Connection failed While Connecting SERVER`, error);
  });
