import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { environmentVariables } from "./constants.js";

const app = express();

app.use(
  express.json({
    limit: "2mb",
  })
);

app.use(
  cors({
    origin: environmentVariables.corsOrigin,
    credentials: true,
  })
);

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
export { app };
