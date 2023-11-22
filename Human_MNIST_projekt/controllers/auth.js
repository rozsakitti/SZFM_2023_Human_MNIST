const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const dbModule = require('../db');
const db = dbModule.getConnection();

exports.register = (req, res) => {
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

        db.query('INSERT INTO users SET ?', {email: email, password: hasedPassword}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                // res.render('login', {
                //     message: "User registered"
                // });
                res.redirect('/login');
            }
        });
    });
}

exports.login = (req, res) => {
    const {email, password} = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
            res.render('login', {
                message: "Hiba történt a bejelentkezés közben"
            });
        } else if (results.length > 0) {
            const user = results[0];
            const isPasswordMatch = await bcrypt.compare(password, user.password); // Itt összehasonlítjuk a titkosított jelszót

            if (isPasswordMatch) {
                const token = jwt.sign({email: user.email}, 'titkoskulcs', {expiresIn: '1h'});

                res.setHeader('Authorization', `Bearer ${token}`);
                res.render('project', {
                    message: "Sikeres bejelentkezés"
                });
            } else {
                res.render('login', {
                    message: "Hibás jelszó"
                });
            }
        } else {
            res.render('login', {
                message: "Nincs ilyen felhasználó"
            });
        }
    });
}

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token == null) {
        return res.redirect('/');
    }

    jwt.verify(token, 'titkoskulcs', (err, user) => {
        if (err) {
            return res.redirect('/');
        }
        req.user = user;
        next();
    });
};

// exports.getJsonImages = (req, res) => {
//     db.query('SELECT * FROM images ORDER BY RAND() LIMIT 15', (error, results) => {
//         if (error) {
//             console.error('Véletlenszerű képek lekérése során hiba:', error);
//             res.status(500).json({ error: 'Szerverhiba' });
//         } else {
//             res.json({ images: results });
//         }
//     });
// }

exports.getJsonImages = (req, res) => {
    db.query('SELECT * FROM images ORDER BY imagesId LIMIT 20', (error, results) => {
        if (error) {
            console.error('Véletlenszerű képek lekérése során hiba:', error);
            res.status(500).json({error: 'Szerverhiba'});
        } else {
            const szukitetResults = szukites(results).slice(0, 15);
            res.json({images: szukitetResults});
        }
    });
}

function szukites(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}