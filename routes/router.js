const router = require("express").Router();
const movieRouter = require("movie.router");

router.use("/movies", movieRouter);
