import express from "express";
import { join } from "path";
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

import routes from "./routes";
import errorMiddleware from "./middlewares/error.middleware";
import responseMiddleware from "./middlewares/response.middleware";

const app = express();

// app.use(logger("dev"));
//解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
app.use(express.json());
//解析 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use(responseMiddleware);
app.use("/api", routes);

//错误处理
app.use(errorMiddleware);

export default app;
