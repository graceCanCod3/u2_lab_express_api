const mongoose = require('mongoose')
const ActorSchema = require('./actor')
const ReviewSchema = require('./review')
const MovieSchema = require('./movie')

const Actor = mongoose.model('Actor', ActorSchema)
const Review = mongoose.model('Review', ReviewSchema)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
    Movie,
    Actor,
    Review
  };
  