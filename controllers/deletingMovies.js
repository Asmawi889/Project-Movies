

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Movie= require('../models/movie.js');

router.delete('/deleting', (req, res) => {
  element.findByIdAndDelete(req.params.product_id)
});




 

  module.exports = router;
