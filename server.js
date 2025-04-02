const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { STATUS_CODE } = require("./constants/statusCode");
const { getInfoLog, getErrorLog } = require("./utils/logger");

const config = require("./config");
const prRouters = require("./routing/product");
const logOutRoute = require("./routing/logout");
const killRoute = require("./routing/kill");
const Home = require("./routing/home");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(getInfoLog(req.method, req.url));
  next();
});

app.use("/product", prRouters);
app.use("/logout", logOutRoute);
app.use("/kill", killRoute);
app.use("/", Home);

app.use((req, res) => {
  res
    .status(STATUS_CODE.NOT_FOUND)
    .sendFile(path.join(__dirname, "views", "404.html"));
  console.warn(getErrorLog(req.url));
});

app.listen(config.PORT);
