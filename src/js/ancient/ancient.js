import cardsDataBlue from '../../assets/data/mythicCards/blue';
import cardsDataBrown from '../../assets/data/mythicCards/brown';
import cardsDataGreen from '../../assets/data/mythicCards/green';

export class Ancient {
    constructor() {
        this.azathoth = document.querySelector('#azathoth');
        this.difficulty = document.querySelector('.difficulty-container');
        this.diffOne = null;
        this.cardsNum = 0;
        this.cardsDataBlue = cardsDataBlue;
        this.cardsDataBrown = cardsDataBrown;
        this.cardsDataGreen = cardsDataGreen;
    }

    showDiff() {
        this.azathoth.addEventListener('click', () => {
            if (this.diffOne === null) {
                this.diffOne = document.createElement("div");
                this.diffOne.classList.add("difficulty");
                this.diffOne.innerText = 'Низкая';
                this.difficulty.appendChild(this.diffOne);
            } else
                return null
        });
    }

    cardsNumber(Blue,Brown,Green) {
        this.azathoth.addEventListener('click', () => {
            this.cardsNum = 15;
            if (this.cardsNum === 15) {
                Blue = this.cardsDataBlue.slice(0, 2);
                Brown = this.cardsDataBrown.slice(0, 9);
                Green = this.cardsDataGreen.slice(0, 5);
                console.log(Blue);
            }
        });
    }

    init = () => {
        this.showDiff();
        this.cardsNumber();
    }
}