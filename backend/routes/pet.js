const express = require('express');
const { getPets, addPet } = require('../controllers/pet');
const router = express.Router();

router.get('/', getPets);
router.post('/', addPet);

const { adminMiddleware } = require('../middleware/auth');
router.post('/', adminMiddleware, addPet); // In pet.js
//router.get('/', adminMiddleware, getAdoptions); // In adoption.js
//router.patch('/:id', adminMiddleware, updateAdoption); // In adoption.js

module.exports = router;