const MovieModel = require("../models/movie_model");

const getAllMovies = (req, res) => {
  MovieModel.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  getAllMovies,
};
