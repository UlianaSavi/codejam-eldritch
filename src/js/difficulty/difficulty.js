import cardsDataBlue from '../../assets/data/mythicCards/blue';
import cardsDataBrown from '../../assets/data/mythicCards/brown';
import cardsDataGreen from '../../assets/data/mythicCards/green';

export class Difficulty {
    constructor() {
        this.difficulty = document.querySelector('.difficulty-container');
        this.cardsDataBlue = cardsDataBlue;
        this.cardsDataBrown = cardsDataBrown;
        this.cardsDataGreen = cardsDataGreen;
    }

    diffСondition(Blue,Brown,Green) {
        this.difficulty.addEventListener('click', () => {
            if (this.difficulty.innerText == 'Низкая') {
                Blue = this.cardsDataBlue.filter(item => item.difficulty !== 'hard');
                Brown = this.cardsDataBrown.filter(item => item.difficulty !== 'hard');
                Green = this.cardsDataGreen.filter(item => item.difficulty !== 'hard');
                console.log(Blue);
            }
        });
    }


    // GetMissing() {
    //     if(this.cardsBlue.length !== 2) {

    //     }
    // }

    init = () => {
        this.diffСondition()
    }
}