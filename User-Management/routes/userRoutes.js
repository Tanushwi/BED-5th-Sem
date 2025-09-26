const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controller/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getAllUsers);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;