const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:fifa1234@cluster0.iemzw.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    title: String,
    console: String,
    year: String,
    poster: String,
    price: String
});

var MyGameModel = mongoose.model("game", gameSchema);

app.get('/thegame', (req, res) => {

    MyGameModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/thegame/:id', (req, res) => {
    console.log(req.params.id);

    MyGameModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.post('/thegame', (req, res) => {
    console.log("Game: " + req.params.id + " was created");
    console.log(req.body.title);
    console.log(req.body.console);
    console.log(req.body.year);
    console.log(req.body.poster);
    console.log(req.body.price);

    MyGameModel.create({
        title: req.body.title,
        console: req.body.console,
        year: req.body.year,
        poster: req.body.poster,
        price: req.body.price
    })

    res.redirect('/read');
})

app.put('/thegame/:id', (req, res) => {
    console.log("Game: " + req.params.id + " was updated");
    console.log(req.body);

    MyGameModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

app.delete('/thegame/:id', (req, res) => {
    console.log("Game: " + req.params.id + " was deleted");

    MyGameModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})