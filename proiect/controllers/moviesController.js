import * as moviesService from '../services/moviesService.js';

const getMovies = (req, res) => {
    res.send({movies: moviesService.getMovies()});
}

const createMovie = (req, res) => {
    const movie = moviesService.createMovie(String(req.body.title));
    res.status(201).send({movie: movie});
}

export {
     getMovies,
     createMovie
}