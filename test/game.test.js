const Game = require('../game.js');
const assert = require('assert').strict;

describe("Game test", function() {
    let game = new Game();

    it("should be 5 tries at the beggining of the game", function() {
        assert.equal(game.getNumberOfTry(), 5)
    })

    it("when I have a good answer, it doesn't decrease the numberOfTry", function() {
        game.guess("a");
        assert.equal(game.getNumberOfTry(), 5);
    })

    it("When I have a bad answer, it decrease the numberOfTry", function() {
        game.guess("z");
        assert.equal(game.getNumberOfTry(), 4);
    })

    it("should show only 'x' letter", function() {
        assert.equal(game.print(), "xxxxxxxx")
    })

    it("should put a good letter in the array only if she was not in yet", function() {
        game.guess('a');
        game.guess('a');
        assert.equal(game.getLettersFound().length, 1)
    })

    /* it("when i put a good letter, she has to appear", function() {

    })

    it("reset the game when I click on the button", function() {
        game.reset();
        assert.equal(game.getNumberOfTry(), 5)
    }) */
})