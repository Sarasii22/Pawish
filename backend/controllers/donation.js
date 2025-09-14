const Donation = require('../models/Donation');

exports.submitDonation = async (req, res) => {
  try {
    const { userId } = req.user;
    const donation = new Donation({ ...req.body, userId });
    await donation.save();
    res.status(201).json({ message: 'Donation submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('userId', 'firstName lastName email');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Donation deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};