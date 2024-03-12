import express from "express";
import { join } from "path";
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

import routes from "./routes";
import errorHandler from "./middlewares/error";

const app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/api", routes);

//错误处理
app.use(errorHandler);

export default app;
