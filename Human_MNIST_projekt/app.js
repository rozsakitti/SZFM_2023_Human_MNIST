const express = require("express");
const path = require('path');

const app = express();

const dbModule = require('./db');
const db = dbModule.getConnection();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use('/images', express.static(path.join(__dirname, '/public/images')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'hbs');
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/authRoute'));

app.listen(35000, () => {
    console.log("Server started on Port 35000");
})

// Import necessary modules and dependencies
const meresRoute = require('./routes/pages');

// ... Your other setup code ...

// Use the route for handling /auth/meres
app.use('/auth/meres', meresRoute);