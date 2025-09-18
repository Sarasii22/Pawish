

const express = require('express');
const { submitAlert, getAlerts, approveAlert, rejectAlert, deleteAlert } = require('../controllers/alert');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 4), submitAlert);
router.get('/pending', adminMiddleware, getAlerts);
router.patch('/:id/approve', adminMiddleware, approveAlert);
router.patch('/:id/reject', adminMiddleware, rejectAlert);
router.delete('/:id', adminMiddleware, deleteAlert);

module.exports = router;