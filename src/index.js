import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { environmentVariables } from "./constants.js";

dotenv.config({
  path: "../.env",
});
const PORT = environmentVariables.PORT || 3000 || 5000;
connectDB()
  .then((databaseInstance) => {
    app.listen(PORT, () => {
      console.log("Listening at Port : ", PORT);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to database ERROR :: ", error);
  });
