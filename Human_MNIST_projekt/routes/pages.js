const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();
module.exports = router;


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


router.get('/stat_message', (req, res) => {
    res.render('stat_message');
});

router.get('/jatek_message', (req, res) => {
    res.render('jatek_message');
});

router.get('/jatek', (req, res) => {
    res.render('jatek');
});

router.get('/szint1', (req, res) => {
    res.render('szint1');
});

router.get('/szint2', (req, res) => {
    res.render('szint2');
});

router.get('/szint3', (req, res) => {
    res.render('szint3');
});

router.get('/meres', (req, res) => {
    res.render('meres');
});

router.get("/api/meres", authController.getJsonImages);

router.get("/meres_eredmenyei2", (req, res) => {
    res.render('meres_eredmenyei');

});

router.get('/meres_eredmenyei', (req, res) => {
    res.render('meres_tablazat');
});