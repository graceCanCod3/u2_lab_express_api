const express = require('express');
const controller = express.Controller();
const { Actor } = require('../models');

// GET /api/actors
// Get all actors
controller.get('/', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET /api/actors/:id
// Get actor by ID
controller.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) return res.status(404).json({ msg: 'Actor not found' });
    res.json(actor);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Actor not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = controller;
