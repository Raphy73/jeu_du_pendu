String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const allTheWords = ["Ennui", "Verseau", "Tapisser", "Compter", "Sarbacane", "Poignet", "Saint", "Antiacide", "Chine", "Havre", "Molaire", "Exercice", "Rabat", "Murmure", "Historien", "Sportif", "Sauce", "Continental", "Lasagne", "Clown", "Serpent", "Iliaque", "Pis", "Triple", "Trottoir", "Contribution"];

class Game {
    constructor() {
        this.word = allTheWords[Math.floor(Math.random()*allTheWords.length)].toLowerCase();
        this.numberOfTry = 5;
        this.unknowWord = this.word.replace(/./g, '#');
        this.lettersFound = [];
        this.isTheWordFound = false;
    }

    guess(oneLetter) {
        if(this.word.includes(oneLetter)) {
            if(!this.lettersFound.includes(oneLetter)) {
                this.lettersFound.push(oneLetter);
                let positionOfCharactersFoundInTheWord = [];
                for(let i=0; i<this.word.length;i++) {
                    if (this.word[i] === oneLetter) positionOfCharactersFoundInTheWord.push(i);
                }
                for(let i=0; i<positionOfCharactersFoundInTheWord.length;i++) {
                    this.unknowWord = this.unknowWord.replaceAt(positionOfCharactersFoundInTheWord[i], oneLetter);
                }
                this.checkIfTheWordIsFound();
            }
        } else {
            this.numberOfTry--;
            if(this.numberOfTry <= 0) {
                this.word = allTheWords[Math.floor(Math.random()*allTheWords.length)].toLowerCase();
                this.numberOfTry = 5;
                this.unknowWord = this.word.replace(/./g, '#');
                this.lettersFound = [];
                this.isTheWordFound = false;
            }
        }
    }

    checkIfTheWordIsFound() {
        if(this.unknowWord.includes('#')) {
            return 'Le mot n\'est pas trouvé...';
        } else {
            this.isTheWordFound = true;
            return 'Le mot est trouvé !';
        }
    }

    print() {
        return this.unknowWord;
    }

    reset() {
        this.word = allTheWords[Math.floor(Math.random()*allTheWords.length)].toLowerCase();
        this.numberOfTry = 5;
        this.unknowWord = this.word.replace(/./g, '#');
        this.lettersFound = [];
        this.isTheWordFound = false;
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

    getIsTheWordFound() {
        return this.isTheWordFound;
    }
}

module.exports = Game;