import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  express.json({
    limit: "2mb",
  })
);

app.use(
  cors({
    origin: "*",
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
