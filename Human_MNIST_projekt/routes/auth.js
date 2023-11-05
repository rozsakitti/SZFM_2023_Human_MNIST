const express = require('express');
const authController = require('../controllers/register');

const router = express.Router();

router.post("/register", authController.register)
router.post("/auth/register", authController.register)

module.exports = router;