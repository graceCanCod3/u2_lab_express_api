const { Actor } = require(`../models`);


const getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

const getActor = async (req, res) => {
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
}

module.exports = {
  getActors,
  getActor
}
