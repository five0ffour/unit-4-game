//-----
// game object - tracks the current state of the game in progress
//-----

var game = {

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
    generateRandomNum : function (low, high) {
        var num = (Math.floor(Math.random() * (high - low + 1) + low));
        console.log("game.generateRandomNum() - The randomly selected num between " + low + " and " + high + " is: \"" + num + "\"");
        return num;
    },

    // resetGame - clears the board and resets the target value and crystal nums for a new game
    resetGame: function () {
        this.won = false;
        this.currentNum = 0;
        this.targetNum = this.generateRandomNum(19, 120);
        this.redValue = this.generateRandomNum(1, 12);
        this.blueValue = this.generateRandomNum(1, 12);
        this.yellowValue = this.generateRandomNum(1, 12);
        this.greenValue = this.generateRandomNum(1, 12);

        console.log("game.resetGame() - Our new target number is: " +   this.targetNum);
        console.log("game.resetGame() - Crystals:  [R, B, Y, G] = [" +  this.redValue + "," +
                                                                        this.blueValue + "," +
                                                                        this.yellowValue + "," +
                                                                        this.greenValue + "]");
    },

    // wonGame() - updates if game's victory conditions are met
    wonGame : function () {
        this.wins++;
        this.won = true;
    },

    // lostGame() - updates if game's victory conditions are exceeded
    lostGame : function () {
        this.losses++;
        this.won = false;
    },
    
    // checkGameEnd() - return flag if we met the game end conditions, update win/losses appropriately
    checkGameEnd : function () {

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
    crystalGuess : function (crystal) {
    
        var color = crystal.toLowerCase();
        switch(color) {
            case 'red' :
                this.currentNum += this.redValue;
                break;

            case 'blue' :
                this.currentNum += this.blueValue;
                break;
            
            case 'yellow' :
                this.currentNum += this.yellowValue;
                break;
        
            case 'green' :
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
    }

}