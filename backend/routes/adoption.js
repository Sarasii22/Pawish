const express = require('express');
const { submitAdoption, getAdoptions, updateAdoption, deleteAdoption } = require('../controllers/adoption');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 4), submitAdoption);
router.get('/', adminMiddleware, getAdoptions);
router.patch('/:id', adminMiddleware, updateAdoption);
router.delete('/:id', adminMiddleware, deleteAdoption);

module.exports = router;