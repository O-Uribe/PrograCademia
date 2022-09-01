const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
//console.log(movies);

router.get('/',(req,res) => {
    res.json(movies);
});

//agregar datos
router.post('/', (req, res) =>{
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating){
        const _id = movies.length + 1;
        const newMovie = {_id ,...req.body};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error: 'Hubo un error.'});
    }
});

//Actualizar datos
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i) =>{
            if(movie._id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'hubo un error.'})
    }
});


// Borrar datos
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if(movie._id == id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
});

module.exports = router;