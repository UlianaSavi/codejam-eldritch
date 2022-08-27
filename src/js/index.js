import '../css/css.css';

import { Ancient } from './ancient/ancient';
import { Difficulty } from './difficulty/difficulty';

const ancient = new Ancient();
ancient.init();

const difficulty = new Difficulty();
difficulty.init();