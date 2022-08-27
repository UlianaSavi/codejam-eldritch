export class Ancient {
    azathoth = {
        name: 'azathoth',
        commonCount: {
            blue: 2,
            brown: 9,
            green: 5,
        },
        steps: [
            [1, 2, 1],
            [2, 3, 1],
            [2, 4, 0],
        ]
    };
    cthulthu = {
        name: 'cthulthu',
        commonCount: {
            blue: 4,
            brown: 9,
            green: 2,
        },
        steps: [
            [0, 2, 2],
            [1, 3, 0],
            [3, 4, 0],
        ]
    };
    iogSothoth = {
        name: 'iogSothoth',
        commonCount: {
            blue: 4,
            brown: 9,
            green: 2,
        },
        steps: [
            [0, 2, 1],
            [2, 3, 1],
            [3, 4, 0],
        ]
    };
    shubNiggurath = {
        name: 'shubNiggurath',
        commonCount: {
            blue: 4,
            brown: 9,
            green: 2,
        },
        steps: [
            [1, 2, 1],
            [3, 2, 1],
            [2, 4, 0],
        ]
    };
    
    constructor() {
        this.activeBoss = null;

        this.blueCount = 0;
        this.brownCount = 0;
        this.greenCount = 0;

        this.steps = [];
    }

    chooseBoss(boss, blue, brown, green) {
        let newBlue = [...blue];
        let newBrown = [...brown];
        let newGreen = [...green];

        this.activeBoss = boss;

        this.blueCount = this[this.activeBoss].commonCount.blue;
        this.brownCount = this[this.activeBoss].commonCount.brown;
        this.greenCount = this[this.activeBoss].commonCount.green;

        newBlue = newBlue.slice(0, this.blueCount);
        newBrown = newBrown.slice(0, this.brownCount);
        newGreen = newGreen.slice(0, this.greenCount);

        this.steps = this[this.activeBoss].steps;

        return [newBlue, newBrown, newGreen];
    }

    getSteps = () => {
        return this.steps;
    }

    setSteps = (steps) => {
        this.steps = steps;
    }
}
