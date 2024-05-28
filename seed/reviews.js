const mongoose = require('mongoose');
const { Review, Movie } = require('../models');
const connectDB = require('../db');

const seedReviews = async () => {
  await connectDB();

  const movies = await Movie.find();
  const reviews = [
    { movie: movies[0]._id, score: 95, comment: 'Great movie!' },
    { movie: movies[1]._id, score: 99, comment: 'GOAT movie!' },
    { movie: movies[2]._id, score: 85, comment: 'Must watch!' },
    { movie: movies[3]._id, score: 75, comment: 'Okay movie!' },
    { movie: movies[4]._id, score: 80, comment: 'Good movie!' },
    { movie: movies[5]._id, score: 70, comment: 'Very wholesome, but still good!' },
  ];

  await Review.insertMany(reviews);
  console.log('Reviews seeded!');
  process.exit();
};

seedReviews();
