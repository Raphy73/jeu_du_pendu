String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const word = "chambery"

class Game {
    constructor() {
        this.numberOfTry = 5;
        this.unknowWord = word.replace(/./g, 'x');
        this.lettersFound = [];
    }

    guess(oneLetter) {
        if(word.includes(oneLetter)) {
            if(!this.lettersFound.includes(oneLetter)) {
                this.lettersFound.push(oneLetter);
                let positionOfCharactersFoundInTheWord = [];
                for(let i=0; i<word.length;i++) {
                    if (word[i] === oneLetter) positionOfCharactersFoundInTheWord.push(i);
                }
                for(let i=0; i<positionOfCharactersFoundInTheWord.length;i++) {
                    this.unknowWord = this.unknowWord.replaceAt(positionOfCharactersFoundInTheWord[i], oneLetter);
                }
            }
        } else {
            this.numberOfTry--;
        }
    }

    test() {

    }

    print() {
        return this.unknowWord;
    }

    reset() {
        this.numberOfTry = 5;
    }

    getNumberOfTry() {
        return this.numberOfTry;
    }

    getLettersFound() {
        return this.lettersFound;
    }

    getUnknowWord() {
        return this.unknowWord;
    }
}

module.exports = Game;