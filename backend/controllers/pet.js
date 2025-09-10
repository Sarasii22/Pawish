const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find({ status: 'available' });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json({ message: 'Pet added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};