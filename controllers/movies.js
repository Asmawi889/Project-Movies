const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const Movies= require('../models/movie');


     
router.get('/', (req, res) => {
  res.render('movies/newMovie.ejs');
});

      

router.post('/newMovies', async (req, res) => {
      try {
        // Check if the movie is posted
        const titleInDatabase = await Movies.findOne({ title: req.body.title });
  
        if (titleInDatabase) {
          return res.send('Movie already Posted.');
        }
      
        
        await Movies.create(req.body);
      
        res.redirect('/');
      } 
      catch (error) {
        console.log(error);
        res.redirect('/');
      }
    });
    
   
  


    module.exports = router;


  
 
  
  

  

  
  
  
 
  
  