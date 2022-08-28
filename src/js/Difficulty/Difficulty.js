export class Difficulty {
    EASY = 'easy'
    NORMAL = 'normal'
    HARD = 'hard'

    constructor() {}

    diffСondition(difficulty, blue, brown, green) {
        let newBlue = [];
        let newBrown = [];
        let newGreen = [];

        if (difficulty === this.EASY) {
            newBlue = blue.filter(item => item.difficulty !== this.HARD);
            newBrown = brown.filter(item => item.difficulty !== this.HARD);
            newGreen = green.filter(item => item.difficulty !== this.HARD);
        }

        if (difficulty === this.NORMAL) {
            return [blue, brown, green];
        }

        if (difficulty === this.HARD) {
            newBlue = blue.filter(item => item.difficulty !== this.EASY);
            newBrown = brown.filter(item => item.difficulty !== this.EASY);
            newGreen = green.filter(item => item.difficulty !== this.EASY);
        }

        return [newBlue, newBrown, newGreen];
    }

    getRandomColor = (stepCounts) => {
        if (!stepCounts.filter((item) => !!item).length) {
            return [null, stepCounts];
        }

        const counts = [...stepCounts];
        const random = Math.floor(Math.random() * counts.length);

        if (counts[random]) {
            counts[random] = counts[random] - 1;
            return [random, counts];
        }

        return this.getRandomColor(stepCounts);
    }
}