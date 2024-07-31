const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



router.get('/', (req, res) => {
    res.render('movies/2000Movies.ejs');
  });


 

  module.exports = router;
