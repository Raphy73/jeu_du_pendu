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
    response.render('pages/index', { game : undefined, numberOfTry : game.getNumberOfTry(), unknowWord : game.getUnknowWord(), isTheWordFound : game.getIsTheWordFound(), isLoose : game.getIsLoose() })
})

app.post('/', (request, response) => {
    console.log(request.body);

    if(request.body.reset) {
        console.log('Reset !');
        game.reset();
    } else {
        let guess = game.guess(request.body.word);
        console.log("Guess" + guess);
    }

    response.render('pages/index', { game : game.print(), numberOfTry : game.getNumberOfTry(), unknowWord : game.getUnknowWord(), isTheWordFound : game.getIsTheWordFound(), isLoose : game.getIsLoose() })
})