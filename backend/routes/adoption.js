const express = require('express');
const { submitAdoption, getAdoptions, updateAdoption } = require('../controllers/adoption');
const router = express.Router();

router.post('/', submitAdoption);
router.get('/', getAdoptions);
router.patch('/:id', updateAdoption);

const { adminMiddleware } = require('../middleware/auth');
//router.post('/', adminMiddleware, addPet); // In pet.js
router.get('/', adminMiddleware, getAdoptions); // In adoption.js
router.patch('/:id', adminMiddleware, updateAdoption); // In adoption.js

module.exports = router;