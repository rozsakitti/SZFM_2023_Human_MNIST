const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("kezdo_felulet");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/auth/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/auth/login", (req, res) => {
    res.render("login");
});

router.get("/project", authController.authenticateToken, (req, res) => {
    res.render("project");
});

module.exports = router;