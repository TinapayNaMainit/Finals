const express = require('express');
const { updatePassword } = require('../controllers/userController');
const router = express.Router();

router.put('/update-password', updatePassword);

module.exports = router;
