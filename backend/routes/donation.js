const express = require('express');
const { submitDonation, getDonations, deleteDonation } = require('../controllers/donation');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, submitDonation);
router.get('/', adminMiddleware, getDonations);
router.delete('/:id', adminMiddleware, deleteDonation);

module.exports = router;