const express = require('express');
const { getUsers, deleteUser, updateUser } = require('../controllers/user');
const { adminMiddleware } = require('../middleware/auth');
const router = express.Router();

router.get('/', adminMiddleware, getUsers);
router.patch('/:id', adminMiddleware, updateUser);
router.delete('/:id', adminMiddleware, deleteUser);

module.exports = router;