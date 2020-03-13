class Dice {
    constructor() {
        this.ranNum;

        this.getRanNum = function () {
            return this.ranNum = Math.floor(Math.random() * 6);
        }
    }
}


