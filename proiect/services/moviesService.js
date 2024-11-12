import {movies} from "../models/movies.js";

const getMovies = () => {
    return movies;
}

const createMovie = (movie) => {
    if(!movies.includes(movie)) {
        movies.push(movie);
    }
    return movie;
}

export {
    getMovies,
    createMovie
}