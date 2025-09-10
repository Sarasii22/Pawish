const express = require('express');
const { submitAdoption, getAdoptions, updateAdoption } = require('../controllers/adoption');
const router = express.Router();

router.post('/', submitAdoption);
router.get('/', getAdoptions);
router.patch('/:id', updateAdoption);



module.exports = router;