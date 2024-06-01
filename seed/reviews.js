const mongoose = require('mongoose');
const { Review, Movie } = require('../models');
const db = require('../db');

const main = async () => {
  await db();

  const movies = await Movie.find();
  const reviews = [
    { movie: movies[0]._id, srottenTomattoeScorecore: 95, comment: 'Great movie!' },
    { movie: movies[1]._id, rottenTomattoeScore: 99, comment: 'GOAT movie!' },
    { movie: movies[2]._id, rottenTomattoeScore: 85, comment: 'Must watch!' },
    { movie: movies[3]._id, rottenTomattoeScore: 75, comment: 'Okay movie!' },
    { movie: movies[4]._id, rottenTomattoeScore: 80, comment: 'Good movie!' },
    { movie: movies[5]._id, rottenTomattoeScore: 70, comment: 'Very wholesome, but still good!' },
  ];

  await Review.insertMany(reviews);
  console.log('Reviews seeded!');
  
};

const run = async () => {
  await main()
  db.close()
}

run()
