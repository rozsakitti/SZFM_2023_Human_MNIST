const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const dbModule = require('../db');
const db = dbModule.getConnection();

exports.register = (req, res) => {
    console.log(req.body);

    const {email, password} = req.body;

    db.query('SELECT email from users where email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: "That email is already in use"
            });
        }

        let hasedPassword = await bcrypt.hash(password, 8);
        console.log(hasedPassword);

        db.query('INSERT INTO users SET ?', {email: email, password: hasedPassword}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: "User registered"
                });
            }
        });
    });
}