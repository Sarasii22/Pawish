const express = require('express');
const { submitAlert, getAlerts, approveAlert } = require('../controllers/alert');
const router = express.Router();

router.post('/', submitAlert);
router.get('/pending', getAlerts);
router.patch('/:id/approve', approveAlert);

module.exports = router;