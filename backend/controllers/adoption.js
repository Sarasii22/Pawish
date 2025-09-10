const AdoptionRequest = require('../models/AdoptionRequest');

exports.submitAdoption = async (req, res) => {
  try {
    const adoption = new AdoptionRequest(req.body);
    await adoption.save();
    res.status(201).json({ message: 'Adoption request submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAdoptions = async (req, res) => {
  try {
    const adoptions = await AdoptionRequest.find();
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAdoption = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const adoption = await AdoptionRequest.findByIdAndUpdate(id, { status }, { new: true });
    res.json(adoption);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};