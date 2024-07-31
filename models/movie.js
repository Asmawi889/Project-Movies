const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: String,
  releaseDate: String,
  rating: Number,
  description: String,
  image: String,
  decade: String,
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
