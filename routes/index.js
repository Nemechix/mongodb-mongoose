const express = require("express");

const app = express();

const apiRouter = require("router");

app.use("/api", apiRouter);
