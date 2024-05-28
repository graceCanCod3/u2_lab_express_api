const mongoose = require('mongoose');
const { Movie } = require('../models');
const connectDB = require('../db');

const seedMovies = async () => {
  await connectDB();

  const movies = [
    { title: 'Movie One', runtime: 120, rating: 'PG-13', yearReleased: 2020, description: 'Description of movie one' },
    { title: 'Movie Two', runtime: 90, rating: 'R', yearReleased: 2019, description: 'Description of movie two' },
    { title: 'Movie Three', runtime: 156, rating: 'R', yearReleased: 2000, description: 'Description of movie three' },
    { title: 'Movie Four', runtime: 110, rating: 'R', yearReleased: 2006, description: 'Description of movie four' },
    { title: 'Movie Five', runtime: 138, rating: 'PG-13', yearReleased: 2023, description: 'Description of movie five' },
    { title: 'Movie Six', runtime: 200, rating: 'PG-13', yearReleased: 2022, description: 'Description of movie six' },
    { title: 'Movie Seven', runtime: 95, rating: 'G', yearReleased: 2018, description: 'Description of movie seven' },
    { title: 'Movie Eight', runtime: 98, rating: 'PG', yearReleased: 2009, description: 'Description of movie eight' },
    { title: 'Movie Nine', runtime: 190, rating: 'NR', yearReleased: 1989, description: 'Description of movie nine' },
    { title: 'Movie Ten', runtime: 120, rating: 'G', yearReleased: 2024, description: 'Description of movie ten' },

  ];

  await Movie.insertMany(movies);
  console.log('Movies seeded!');
  process.exit();
};

seedMovies();
