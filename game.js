String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

// const allTheWords = ["Chambery", "Ennui", "Verseau", "Tapisser", "Compter", "Sarbacane", "Poignet", "Saint", "Antiacide", "Chine", "Havre", "Molaire", "Exercice", "Rabat", "Murmure", "Historien", "Sportif", "Sauce", "Continental", "Lasagne", "Clown", "Serpent", "Iliaque", "Pis", "Triple", "Trottoir", "Contribution"];
const allTheWords = ["Chambery"];


class Game {
    constructor() {
        this.word = allTheWords[Math.floor(Math.random()*allTheWords.length)].toLowerCase();
        this.numberOfTry = 5;
        this.unknowWord = this.word.replace(/./g, '#');
        this.lettersFound = [];
        this.isTheWordFound = false;
        this.isLoose = false;
    }

    guess(oneLetter) {
        let oneLetterLowerCase = oneLetter.toLowerCase();
        if(this.word.includes(oneLetterLowerCase)) {
            if(!this.lettersFound.includes(oneLetterLowerCase)) {
                this.lettersFound.push(oneLetterLowerCase);
                let positionOfCharactersFoundInTheWord = [];
                for(let i=0; i<this.word.length;i++) {
                    if (this.word[i] === oneLetterLowerCase) positionOfCharactersFoundInTheWord.push(i);
                }
                for(let i=0; i<positionOfCharactersFoundInTheWord.length;i++) {
                    this.unknowWord = this.unknowWord.replaceAt(positionOfCharactersFoundInTheWord[i], oneLetterLowerCase);
                }
                this.checkIfTheWordIsFound();
            }
        } else {
            this.numberOfTry--;
            if(this.numberOfTry == 0) {
                this.isLoose = true;
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
        this.isLoose = false;
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

    getIsLoose() {
        return this.isLoose;
    }

    getIsTheWordFound() {
        return this.isTheWordFound;
    }
}

module.exports = Game;