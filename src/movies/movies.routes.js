const { Router } = require('express');
const movieRouter = Router();
const {addMovie, findMovie}= require('./movies.controllers');

movieRouter.post('/movies', addMovie);
movieRouter.get('/movies/:title', findMovie);

module.exports = movieRouter;
