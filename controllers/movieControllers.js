const express = require('express');
const { Movie } = require(`../models`);


const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate(`reviews`);
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate(`reviews`);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getMovies,
  getMovie
}
