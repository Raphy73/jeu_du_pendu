const word = "chambery"

class Game {
    constructor() {
        this.numberOfTry = 5;
        this.unknowWord = word.replace(/./g, 'x');
        this.lettersFound = [];
    }

    guess(oneLetter) {
        let revealWord = "";
        if(word.includes(oneLetter)) {
            if(!this.lettersFound.includes(oneLetter)) {
                this.lettersFound.push(oneLetter);
                this.lettersFound.forEach((letter) => {
                    return revealWord;
                });
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

    getNumberOfTry() {
        return this.numberOfTry;
    }

    getLettersFound() {
        return this.lettersFound;
    }

    reset() {
        this.numberOfTry = 5;
    }
}

module.exports = Game;