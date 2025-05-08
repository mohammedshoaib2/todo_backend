import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});
const PORT = 8080;
connectDB()
  .then((databaseInstance) => {
    app.listen(PORT, () => {
      console.log("Listening at Port : ", PORT);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to database ERROR :: ", error);
  });
