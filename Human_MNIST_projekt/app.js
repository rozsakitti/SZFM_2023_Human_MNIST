const express = require("express");
const path = require('path');

const app = express();

const dbModule = require('./db');
const db = dbModule.getConnection();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use('/images', express.static(path.join(__dirname, '/public/images')));
app.use(express.static('js'));

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

const fs = require('fs');
const cors = require('cors');
app.use(cors())


app.get('/api', (req, res) => {
    console.log("HTTP GET Request received");
    const pathToDiscover = path.join(__dirname,'/public/auth/img/mnist/')

    fs.readdir(pathToDiscover, (error, files) => {
        if (error) {
          console.log(error);
          res.status(500);
          return res.json(`Error reading the files`);
        }
          console.log(files);
          res.status(200);
          return res.send(files);
      });
})

app.get("/eredmeny", (req, res) => {
    const query = "select ID, pictureurl, answer, UID, testID from meresresult"
    db.query(query, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
        }
    })

})

app.post("/meres", function(req, res) {
    const values = [req.body.pictureurl, req.body.answer, req.body.UID, req.body.testID];
    const query = `Insert into meresresult (pictureurl, answer, UID, testID) values(?)`;
    console.log(query)
    console.log(values)
    db.query(query, [values], function(err, result) {
        if(err) {
            console.log(err)
        } else {
            console.log("1 record inserted successfully!")
        }
        })
});

app.listen(35000, () => {
    console.log("Server started on Port 35002");
})