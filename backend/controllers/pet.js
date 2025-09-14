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
    const petData = req.body;
    if (req.files) {
      petData.profilePhoto = req.files[0]?.path;
      petData.images = req.files.map(file => file.path);
    }
    const pet = new Pet(petData);
    await pet.save();
    res.status(201).json({ message: 'Pet added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.editPet = async (req, res) => {
  try {
    const petData = req.body;
    if (req.files) {
      petData.profilePhoto = req.files[0]?.path;
      petData.images = req.files.map(file => file.path);
    }
    const pet = await Pet.findByIdAndUpdate(req.params.id, petData, { new: true });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};