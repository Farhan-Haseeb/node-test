const express = require("express");
const bodyParser = require("body-parser");
const expressLogger = require("express-bunyan-logger");
const cors = require("cors");
const router = require("./routes/api");
const app = express();

process.on("uncaughtException", (e) => {
  console.log(e);
});

/**
 * Set up basic node app structure. For that you will have to configure the following packages.
 * expressLogger
 * cors
 * bodyParser (since its deprecating what will you use to replace it)
 */

app.use("/api", router);

/**
 * The /api will have serve API what should we do to serve static files when `/` is hit, e.g ('/home')
 */

module.exports = app;
