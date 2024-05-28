const express = require('express');
const connectDB = require('./db');
const movieControllers = require('./controllers/movieControllers');
const actorControllers = require('./controllers/actorControllers');
const reviewControllers = require('./controllers/reviewControllers');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/movies', movieControllers);
app.use('/api/actors', actorControllers);
app.use('/api/reviews', reviewControllers);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
