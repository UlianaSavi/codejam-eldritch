import cardsDataBlue from '../assets/data/mythicCards/blue';
import cardsDataBrown from '../assets/data/mythicCards/brown';
import cardsDataGreen from '../assets/data/mythicCards/green';
import { Ancient } from './Ancient/Ancient';
import { Difficulty } from './Difficulty/Difficulty';
import { Deck } from './Deck';
import { Game } from './Game/Game';

import '../css/css.css';

const deck = new Deck(cardsDataBlue, cardsDataBrown, cardsDataGreen);
const ancient = new Ancient();
const difficulty = new Difficulty();

const game = new Game({ deck, ancient, difficulty });
game.init();
