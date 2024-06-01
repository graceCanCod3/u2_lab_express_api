const express = require('express');
const { Review, Movie } = require(`../models`);

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate(`movie`);
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate(`movie`);
    if (!review) return res.status(404).json({ msg: 'Review not found' });
    res.json(review);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Review not found' });
    }
    res.status(500).send('Server Error');
  }
}

const postReview = async (req, res) => {
  const { movie, score, comment } = req.body;
  try {
    const newReview = new Review({
      movie,
      score,
      comment
    });

    const review = await newReview.save();

    const movieToUpdate = await Movie.findById(movie);
    movieToUpdate.reviews.push(review.id);
    await movieToUpdate.save();

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  getReviews,
  getReview,
  postReview
}
