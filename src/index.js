import { app } from "./app";
import { connectDB } from "./config/db";

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
