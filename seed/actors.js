const mongoose = require('mongoose');
const { Actor } = require('../models');
const connectDB = require('../db');

const seedActors = async () => {
  await connectDB();

  const actors = [
    { name: 'Actor One', age: 30, alive: true },
    { name: 'Actor Two', age: 40, alive: true },
    { name: 'Actor Three', age: 50, alive: true },
    { name: 'Actor Four', age: 20, alive: true },
    { name: 'Actor Five', age: 38, alive: true },
    { name: 'Actor Six', age: 51, alive: true }
  ];

  await Actor.insertMany(actors);
  console.log('Actors seeded!');
  process.exit();
};

seedActors();
