const express = require('express');
const db = require('./db');
const cors = require('cors');
const movieControllers = require('./controllers/movieControllers');
const actorControllers = require('./controllers/actorControllers');
const reviewControllers = require('./controllers/reviewControllers');

const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })

app.get('/actors', actorControllers.getActors)
app.get('/actors/:id', actorControllers.getActor)
app.get('/movies', movieControllers.getMovies)
app.get('/movies/:id', movieControllers.getMovie)
app.get('/reviews', reviewControllers.getReviews)
app.get('/reviews/:id', reviewControllers.getReview)


//// Megan Marsh assisted with troubleshooting server.js