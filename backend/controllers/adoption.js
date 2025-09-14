const AdoptionRequest = require('../models/AdoptionRequest');

exports.submitAdoption = async (req, res) => {
  try {
    const { userId } = req.user;
    const adoptionData = { ...req.body, userId };
    const adoption = new AdoptionRequest(adoptionData);
    await adoption.save();
    res.status(201).json({ message: 'Adoption application submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAdoptions = async (req, res) => {
  try {
    const adoptions = await AdoptionRequest.find().populate('userId', 'firstName lastName email').populate('petId', 'name');
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

exports.deleteAdoption = async (req, res) => {
  try {
    await AdoptionRequest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Adoption application deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};