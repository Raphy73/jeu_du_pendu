require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Game = require('./game.js');

const PORT = process.env.PORT;

const app = express();
const game = new Game();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));

app.get('/', (request, response ) => {
    response.render('pages/index', { game : undefined, numberOfTry : game.getNumberOfTry() })
})

app.post('/', (request, response) => {
    console.log(request.body.word);
    console.log(game.guess(request.body.word));
    response.render('pages/index', { game : game.print(), numberOfTry : game.getNumberOfTry() })
})