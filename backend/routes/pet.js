// Backend: routes/pet.js
// No changes needed.

const express = require('express');
const { getPets, addPet, editPet, deletePet } = require('../controllers/pet');
const { adminMiddleware } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', getPets);
router.post('/', adminMiddleware, upload.array('images', 4), addPet);
router.patch('/:id', adminMiddleware, upload.array('images', 4), editPet);
router.delete('/:id', adminMiddleware, deletePet);

module.exports = router;