const express = require('express');
const { submitDonation, getDonations } = require('../controllers/donation');
const router = express.Router();

router.post('/', submitDonation);
router.get('/', getDonations);

module.exports = router;