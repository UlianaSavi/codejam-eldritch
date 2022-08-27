export class Deck {
    GREEN = 0;
    BROWN = 1;
    BLUE = 2;

    constructor(cardsDataBlue, cardsDataBrown, cardsDataGreen) {
        this.startedBlue = cardsDataBlue;
        this.startedBrown = cardsDataBrown;
        this.startedGreen = cardsDataGreen;

        this.blue = cardsDataBlue;
        this.brown = cardsDataBrown;
        this.green = cardsDataGreen;
    }

    updateDeck = (blue, brown, green) => {
        this.blue = blue;
        this.brown = brown;
        this.green = green;
    }

    getMissing = (cardTypeToFill, blueCount, brownCount, greenCount) => {
        if (this.blue.length !== blueCount) {
            this.blue = [
                ...this.blue,
                ...this.startedBlue.filter((card) => card.difficulty === cardTypeToFill).slice(0, blueCount - this.blue.length)
            ];
        }

        if (this.brown.length !== brownCount) {
            this.brown = [
                ...this.brown,
                ...this.startedBrown.filter((card) => card.difficulty === cardTypeToFill).slice(0, brownCount - this.brown.length)
            ];
        }

        if (this.green.length !== greenCount) {
            this.green = [
                ...this.green,
                ...this.startedGreen.filter((card) => card.difficulty === cardTypeToFill).slice(0, greenCount - this.green.length)
            ];
        }
    }

    getCardByColor = (colorIndex) => {
        if (colorIndex === this.GREEN) {
            return this.green.splice(0, 1)[0];
        }

        if (colorIndex === this.BROWN) {
            return this.brown.splice(0, 1)[0];
        }

        if (colorIndex === this.BLUE) {
            return this.blue.splice(0, 1)[0];
        }
    }

    removeCard = () => {
        const allCards = [...this.deck.green, ...this.deck.brown, ...this.deck.blue];
    }
}
