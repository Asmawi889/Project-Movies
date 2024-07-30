const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



router.get('/Movies', (req, res) => {
    res.render('movies/70sMovies.ejs');
  });

  module.exports = router;

