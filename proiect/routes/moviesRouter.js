import * as moviesController from "../controllers/moviesController.js"
import express from "express"

export const moviesRouter = express.Router();


moviesRouter.get("/", moviesController.getMovies);
moviesRouter.post("/", moviesController.createMovie);