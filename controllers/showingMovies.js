const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Movies= require('../models/movie');
// query the database for all of the movies (and save as a variable --> allMovies)

router.get('/', async (req, res) => {
  const allMovies = await Movies.find({})
  console.log(allMovies)
    res.render('movies/70sMovies.ejs', {allMovies} )
})
// send allMovies to the view 



  module.exports = router;
