const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: [true, "Title is already in use"]
  },
  year: {
    type: String,
    required: [true, "Year is required"],
  },
  director: {
    type: String,
    required: [true, "Director is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  genre: {
    type: Array,
    required: [true, "Genre is required"],
  },
  rate: {
    type: String,
    required: [true, "Rate is required"],
  },
});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;