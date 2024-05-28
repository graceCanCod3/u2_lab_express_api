const express = require('express');
const Controller = express.Controller();
const { Movie } = require('../models');


controller.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('reviews');
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


controller.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('reviews');
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = controller;
