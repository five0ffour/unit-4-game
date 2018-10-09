//-----
// game object - tracks the current state of the game in progress
//-----

var game = {

    solution: [],
    targetNum: 0,
    currentNum: 0,
    redValue: 0,
    blueValue: 0,
    yellowValue: 0,
    greenValue: 0,
    wins: 0,
    losses: 0,
    won: false,

    // generateRandomNum() - randomly generates a number within the specified range
    generateRandomNum: function (low, high) {
        var num = (Math.floor(Math.random() * (high - low + 1) + low));
        // console.log("game.generateRandomNum() - The randomly selected num between " + low + " and " + high + " is: \"" + num + "\"");
        return num;
    },

    // resetGame - clears the board and resets the target value and crystal nums for a new game
    resetGame: function () {
        this.solution = [];
        this.won = false;
        this.currentNum = 0;
        this.targetNum = this.generateRandomNum(19, 120);
        this.redValue = this.generateRandomNum(1, 12);
        this.blueValue = this.generateRandomNum(1, 12);
        this.yellowValue = this.generateRandomNum(1, 12);
        this.greenValue = this.generateRandomNum(1, 12);

        console.log("game.resetGame() - Our new target number is: " + this.targetNum);
        console.log("game.resetGame() - Crystals:  [R, B, Y, G] = [" + this.redValue + "," +
            this.blueValue + "," +
            this.yellowValue + "," +
            this.greenValue + "]");
    },

    // wonGame() - updates if game's victory conditions are met
    wonGame: function () {
        this.wins++;
        this.won = true;
    },

    // lostGame() - updates if game's victory conditions are exceeded
    lostGame: function () {
        this.losses++;
        this.won = false;
    },

    // checkGameEnd() - return flag if we met the game end conditions, update win/losses appropriately
    checkGameEnd: function () {

        // Game is still playing
        if (this.currentNum < this.targetNum)
            return false;

        // Determine if they won or lost
        if (this.currentNum === this.targetNum)
            this.wonGame();
        else
            this.lostGame();

        return true;
    },

    // crystalGuess() - player made a guess using a crystal
    crystalGuess: function (crystal) {

        var color = crystal.toLowerCase();
        switch (color) {
            case 'red':
                this.currentNum += this.redValue;
                break;

            case 'blue':
                this.currentNum += this.blueValue;
                break;

            case 'yellow':
                this.currentNum += this.yellowValue;
                break;

            case 'green':
                this.currentNum += this.greenValue;
                break;

            default:
                console.log("crystalGuess() - unknown crystal selected")
                break;
        }

        console.log("game.crystalGuess() - guessed with " + color + " crystal, current number is now " + this.currentNum);

        // Determine if this move ends the game 
        if (this.checkGameEnd()) {
            this.resetGame();
        }

        // Update Screen with latest stats
        prompts.reportResults(this);
    },

    // computeSoluton() - looks to find an answer in the solution set using a largest value first algorithm
    //                  - puts the answer in the game object's solution array
    computeSolution: function () {
        var count = 0;
        var crystals = [];

        /* Clear out any previous runs */
        this.solution = [];

        /* Load the stack with the randomly generated crystal values */
        crystals.push(this.redValue);
        crystals.push(this.blueValue);
        crystals.push(this.yellowValue);
        crystals.push(this.greenValue);

        /* Sort the array so the largest is at the end ready to be popped first */
        crystals.sort(function (a, b) {
            return a - b
        });

        /* Loop through the crystals, pop the largest crystal and apply the total */
        /* Save the crystal for the next loop if we have room                     */
        while ((crystals.length > 0) && (count <= this.targetNum)) {

            // Get the biggest crystal left
            var num = crystals.pop();

            // Apply the crystal if there is room, save it in the solution set
            if (count + num <= this.targetNum) {
                count += num;
                this.solution.push(num);

                if (this.targetNum === count) {
                    // Solution Found -  Stop!!
                    console.log("games.computeSolution() - we found one!");
                    return;
                } else if ((this.targetNum - count) >= num) {
                    // if we can still deduct the largest number, push it back on the stack and run again
                    crystals.push(num);
                }
            } else {
                // Undo the last move and loop again
                var undoNum = this.solution.pop();
                count -= undoNum;
            }
        }

    }
}