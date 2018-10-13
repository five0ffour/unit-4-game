//---
// input - helper function utility class for parsing and validating input keystrokes
//---
var input = {

    //---
    // validKey() - Determine if this an acceptable keystroke.
    //---
    validKey: function (key) {

        // Regex expression parsing,  accept alphanumerics only, upper or lower case
        if (!/^[a-zA-Z]*$/g.test(key)) {
            console.log("input.validKey() - invalid character [" + key + "]");
            return false;
        }

        return true;
    }

};

$(document).ready(function () {

    document.onkeyup = function (event) {

        // Get keystroke
        var userGuess = event.key.toLowerCase();

        switch (userGuess) {
            case "r":
            case "R":
                game.crystalGuess('red');
                break;

            case "b":
            case "B":
                game.crystalGuess('blue');
                break;

            case "y":
            case "Y":
                game.crystalGuess('yellow');
                break;

            case "g":
            case "G":
                game.crystalGuess('green');
                break;

            case "h":
            case "H":
                // Show the crystal values
                prompts.toggleHints();
                break;

            case "i":
            case "I":
                // Show the instruction card
                prompts.toggleInstructions();
                break;

            case "s":
            case "S":
                // Solve the solution set to show on the hint card
                game.solution = game.findSolution();
                console.log("onKeyUp() - solution: ", game.solution);
                prompts.reportResults(game);
                break;

            default:
                console.log("onKeyUp() event:  Oops, invalid key '" + userGuess + "', we only need letters R, B, Y, G, H + S");
                break;
        }
    }
});