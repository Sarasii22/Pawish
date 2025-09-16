const PetAlert = require('../models/PetAlert');
const ApprovedPost = require('../models/ApprovedPost');

exports.submitAlert = async (req, res) => {
  try {
    const userId = req.user.id;  // Changed to req.user.id (common in JWT payloads). If your payload uses '_id', change to req.user._id
    let alertData = { ...req.body, userId };
    // Combine age and ageUnit
    if (alertData.age && alertData.ageUnit) {
      alertData.age = `${alertData.age} ${alertData.ageUnit}`;
    }
    delete alertData.ageUnit;
    // Rename health to healthCondition
    if (alertData.health) {
      alertData.healthCondition = alertData.health;
      delete alertData.health;
    }
    // Clean up extraneous fields (optional, but good practice)
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
    const approvedPost = new ApprovedPost({
      alertId: id,
      petName: alert.petName,
      species: alert.species,
      breed: alert.breed,
      age: alert.age,
      gender: alert.gender,
      profilePhoto: alert.profilePhoto,
      images: alert.images,
      cityTown: alert.cityTown,
    });
    await approvedPost.save();
    res.json({ message: 'Alert approved', approvedPost });
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