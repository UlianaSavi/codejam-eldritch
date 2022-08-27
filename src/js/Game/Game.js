export class Game {
    constructor({ deck, ancient, difficulty }) {
        this.deck = deck;
        this.ancient = ancient;
        this.difficulty = difficulty;

        this.ancientsContainer = document.querySelector('.ancients-container');
        this.difficultyContainer = document.querySelector('.difficulty-container');
        this.deckContainer = document.querySelector('.deck-container');

        this.latsCardContainer = null;
        this.stateContainer = null;
    }
    
    createDifficultyItems = () => {
        this.difficultyContainer.innerHTML = `
            <div class="difficulty" id="easy">Низкая</div>
            <div class="difficulty" id="normal">Средняя</div>
            <div class="difficulty" id="hard">Высокая</div>
        `;
    }

    createDeckStartButton = () => {
        this.deckContainer.innerHTML = `
            <span class="shuffle-button">Замешать колоду</span>
        `;
    }

    setStateContainer = () => {
        const [firstStep, secondStep, thirdStep] = this.ancient.getSteps();
        const green = 0;
        const brown = 1;
        const blue = 2;

        const firstStepEnded = !firstStep.filter((item) => !!item).length;
        const secondStepEnded = !secondStep.filter((item) => !!item).length;
        const thirdStepEnded = !thirdStep.filter((item) => !!item).length;

        const endedClass = 'done';

        this.stateContainer.innerHTML = `
            <div class="stage-container">
                <span class="stage-text ${firstStepEnded ? endedClass : ''}">Первая стадия</span>
                <div class="dots-container" id="firstStep">
                    <div class="dot green">${firstStep[green]}</div>
                    <div class="dot brown">${firstStep[brown]}</div>
                    <div class="dot blue">${firstStep[blue]}</div>
                </div>
            </div>
            <div class="stage-container">
                <span class="stage-text ${secondStepEnded ? endedClass : ''}">Вторая стадия</span>
                <div class="dots-container" id="secondStep">
                <div class="dot green">${secondStep[green]}</div>
                <div class="dot brown">${secondStep[brown]}</div>
                <div class="dot blue">${secondStep[blue]}</div>
                </div>
            </div>
            <div class="stage-container">
                <span class="stage-text ${thirdStepEnded ? endedClass : ''}">Третья стадия</span>
                <div class="dots-container" id="thirdStep">
                <div class="dot green">${thirdStep[green]}</div>
                <div class="dot brown">${thirdStep[brown]}</div>
                <div class="dot blue">${thirdStep[blue]}</div>
                </div>
            </div>
        `;
    }

    createDeckContent = () => {
        this.deckContainer.innerHTML = `
            <div class="current-state"></div>
            <div class="deck" style="background-image: url(./assets/mythicCardBackground.png);"></div>
            <div class="last-card"></div>
        `;

        this.latsCardContainer = document.querySelector('.last-card');
        this.stateContainer = document.querySelector('.current-state');

        this.setStateContainer();
    }

    showCard = () => {
        const [firstStep, secondStep, thirdStep] = this.ancient.getSteps();

        if (firstStep.filter((item) => !!item).length) {
            const [color, newCounts] = this.difficulty.getRandomColor(firstStep);
            this.ancient.setSteps([newCounts, secondStep, thirdStep]);
            this.setStateContainer();
            const card = this.deck.getCardByColor(color);
            this.latsCardContainer.style.backgroundImage = `url(${card.cardFace})`;
            return;
        }
        
        if (secondStep.filter((item) => !!item).length) {
            const [color, newCounts] = this.difficulty.getRandomColor(secondStep);
            this.ancient.setSteps([firstStep, newCounts, thirdStep]);
            this.setStateContainer();
            const card = this.deck.getCardByColor(color);
            this.latsCardContainer.style.backgroundImage = `url(${card.cardFace})`;
            return;
        }

        if (thirdStep.filter((item) => !!item).length) {
            const [color, newCounts] = this.difficulty.getRandomColor(thirdStep);
            this.ancient.setSteps([firstStep, secondStep, newCounts]);
            this.setStateContainer();
            const card = this.deck.getCardByColor(color);
            this.latsCardContainer.style.backgroundImage = `url(${card.cardFace})`;
            return;
        }

        this.deckContainer.querySelector('.deck').style.backgroundImage = '';
    }

    deckContainerClick = (event) => {
        const { target } = event;

        if (target.closest('.shuffle-button')) {
            this.createDeckContent();
        }

        if (target.closest('.deck')) {
            this.showCard();
        }
    }


    chooseDifficulty = (event) => {
        const difficulty = event.target.getAttribute('id');
        const newDeck = this.difficulty.diffСondition(difficulty, this.deck.blue, this.deck.brown, this.deck.green);

        this.deck.updateDeck(...newDeck);
        this.deck.getMissing(this.difficulty.NORMAL, this.ancient.blueCount, this.ancient.brownCount, this.ancient.greenCount);

        event.target.classList.add('active');
        this.createDeckStartButton();
    }

    chooseBoss = (event) => {
        const name = event.target.getAttribute('id');
        const newDeck = this.ancient.chooseBoss(name, this.deck.blue, this.deck.brown, this.deck.green);
        this.deck.updateDeck(...newDeck);

        this.createDifficultyItems();
    }

    init = () => {
        this.ancientsContainer.addEventListener('click', this.chooseBoss);
        this.difficultyContainer.addEventListener('click', this.chooseDifficulty);
        this.deckContainer.addEventListener('click', this.deckContainerClick);
    }
}
