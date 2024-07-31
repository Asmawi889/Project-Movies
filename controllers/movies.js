const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const Movies= require('../models/movie');
// query the database for all of the movies (and save as a variable --> allMovies)

router.get('/', async (req, res) => {
  const allMovies = await Movie.find({})
  console.log(allMovies)
    res.render('movies/70sMovies.ejs' )
})
// send allMovies to the view
     
router.get('/new-movie', (req, res) => {
  res.render('movies/newMovie');
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


  
 
  
  

  

  
  
  
 
  
  