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

    //-------------------
    // generateRandomNum() - randomly generates a number within the specified range
    //-------------------
    generateRandomNum: function (low, high) {
        var num = (Math.floor(Math.random() * (high - low + 1) + low));
        // console.log("game.generateRandomNum() - The randomly selected num between " + low + " and " + high + " is: \"" + num + "\"");
        return num;
    },

    //-------------------
    // resetGame() - clears the board and resets the target value and crystal nums for a new game
    //-------------------
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

    //-------------------
    // wonGame() - updates if game's victory conditions are met
    //-------------------
    wonGame: function () {
        this.wins++;
        this.won = true;
    },

    //-------------------
    // lostGame() - updates if game's victory conditions are exceeded
    //-------------------
    lostGame: function () {
        this.losses++;
        this.won = false;
    },

    //-------------------
    // checkGameEnd() - return flag if we met the game end conditions, update win/losses appropriately
    //-------------------
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

    //------------------
    // crystalGuess() - player made a guess using a crystal
    //------------------
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


    //---------------------
    // findSolution() - kicks off a recursive routine to run permutations to find the solution
    //---------------------
    findSolution: function () {
        var goal = this.targetNum; // local copy of the target we're trying to find
        var choices = []; // local array of the crystal choices

        // Save the possible crystal guesses
        choices.push(game.redValue);
        choices.push(game.blueValue);
        choices.push(game.yellowValue);
        choices.push(game.greenValue);

        // sort the input choices from smallest to largest
        choices.sort(function (a, b) {
            return a - b
        });

        // create a tree to hold the permutations
        // note: root element has no data value
        var tree = new Tree(0);

        // add permutations of all of the choices as children of the root node
        // keep count of the sum of any branch to see if it matches the goal
        if (game.recurseChoices(tree._root, choices, goal) == true)
            console.log("findSolution() - found a solution!!");
        else
            console.log("findSolution() - could not find a solution.");

        // walk the tree leaves for the branch with goal using a callback function to compare
        tree.traverseDF(function (node) {
            if (node.cumValue == goal)
                tree.saveSolution(node);
        });

        // return the solution: the chain of parents of the magic branch
        return tree.solution;
    },

    //---------------------
    // recurseChoices() - a private function used by find soluitions to create new permutations
    //---------------------
    recurseChoices : function (parentNode, choices, goal) {
        var found = false;
        var cumValue = parentNode.cumValue;

        if (cumValue === goal) {
            // Solution found!
            return true;
        } else if (cumValue > goal) {
            // Solution too large
            return false;
        } else {
            // Make a local copy of the choices so we can modify it while recursing
            var localchoices = choices.slice();

            // Last node undershoots goal, remove the largest guess(es) if that/they would exceed target
            while ((localchoices.length > 0) &&
                ((cumValue + localchoices[localchoices.length - 1]) > goal))
                localchoices.pop();

            // For each choice, add a child node to the parent and iterate down
            for (var i = localchoices.length - 1; i >= 0; i--) {
                var value = localchoices[i];
                var childNode = parentNode.addNode(value, parentNode);

                if (game.recurseChoices(childNode, localchoices, goal)) {
                    // console.log("Found a solution!!");
                    return true;
                }
            }
        }
    }
}