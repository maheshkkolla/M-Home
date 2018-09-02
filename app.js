import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import apiRoutes from "./routes/api";
import MQTTService from "./services/MQTTService";

const app = express();

MQTTService.subscribe();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/lib", express.static(__dirname + "/node_modules"));

app.get("/ping", function(req, res, next) {
  res.send("pong");
});

app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./app/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./app/build", "index.html"));
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
