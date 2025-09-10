const PetAlert = require('../models/PetAlert');
const ApprovedPost = require('../models/ApprovedPost');

exports.submitAlert = async (req, res) => {
  try {
    const alert = new PetAlert(req.body);
    await alert.save();
    res.status(201).json({ message: 'Pet alert submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await PetAlert.find({ status: 'pending' });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const alert = await PetAlert.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    const approvedPost = new ApprovedPost({ alertId: id });
    await approvedPost.save();
    res.json({ message: 'Alert approved', approvedPost });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};