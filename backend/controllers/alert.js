
const PetAlert = require('../models/PetAlert');
const Pet = require('../models/Pet');

exports.submitAlert = async (req, res) => {
  try {
    const userId = req.user.id; // Assumes JWT payload has 'id'
    let alertData = { ...req.body, userId };
    if (alertData.age && alertData.ageUnit) {
      alertData.age = `${alertData.age} ${alertData.ageUnit}`;
    }
    delete alertData.ageUnit;
    if (alertData.health) {
      alertData.healthCondition = alertData.health;
      delete alertData.health;
    }
    delete alertData.confirmDetails;
    delete alertData.agreePolicies;
    if (req.files) {
      alertData.profilePhoto = req.files[0]?.path;
      alertData.images = req.files.map(file => file.path);
    }
    const alert = new PetAlert(alertData);
    await alert.save();
    res.status(201).json({ message: 'Pet alert submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await PetAlert.find({ status: 'pending' }).populate('userId', 'firstName lastName email');
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const alert = await PetAlert.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }
    const newPet = new Pet({
      name: alert.petName,
      species: alert.species,
      breed: alert.breed,
      age: alert.age,
      gender: alert.gender,
      location: alert.cityTown || 'Unknown', 
      profilePhoto: alert.profilePhoto,
      images: alert.images || [],
      behavior: alert.behavior,
      healthCondition: alert.healthCondition,
      goodWith: alert.goodWith,
      story: alert.story,
      reason: alert.reason,
      address: alert.address,
      phone: alert.phone,
      email: alert.email,
      userId: alert.userId,
      status: 'available'
    });
    await newPet.save();
    res.json({ message: 'Alert approved and added to adoptable pets', pet: newPet });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.rejectAlert = async (req, res) => {
  try {
    const { id } = req.params;
    await PetAlert.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
    res.json({ message: 'Alert rejected' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAlert = async (req, res) => {
  try {
    await PetAlert.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alert deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
