//---
// input - helper function utility class for parsing and validating input keystrokes
//---
var input = {

    //---
    // validKey() - Determine if this an acceptable keystroke.
    //            - Only accept r/b/y/g/h/i/s or their capital counterparts
    //---
    validKey: function (key) {

        // Regex expression parsing,  accept alphanumerics only, upper or lower case
        //  (!/^[a-zA-Z]*$/g.test(key))     <-- all alphas allowed
        if (!/^[rRbByYgGiIhHsH]*$/g.test(key)) {
            console.log("input.validKey() - invalid character [" + key + "]");
            return false;
        }

        return true;
    }

};

$(document).ready(function () {

    //---------------------------------
    // Guess - on click event handler - passes the crystal button click guesses on to the game engine for processing
    //---------------------------------
    $(".guess").on("click", function (event) {

        game.crystalGuess($(this).val());

    });

    //---------------------------------
    // OnKeyUp() event handler - handles all the keyboard inputs
    //---------------------------------
    document.onkeyup = function (event) {

        // Get keystroke
        var userGuess = event.key.toLowerCase();

        switch (userGuess) {
            case "r":
            case "R":
                // Selected Red Crystal
                game.crystalGuess('red');
                break;

            case "b":
            case "B":
                // Selected Blue Crystal
                game.crystalGuess('blue');
                break;

            case "y":
            case "Y":
                // Selected Yellow Crystal
                game.crystalGuess('yellow');
                break;

            case "g":
            case "G":
                // Selected Green  Crystal
                game.crystalGuess('green');
                break;

            case "h":
            case "H":
                // Show the Hint card of crystal values and solution set (if calculated)
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
                console.log("onKeyUp() event:  Oops, invalid key '" + userGuess + "', we only need letters R, B, Y, G, I, H + S");
                break;
        }
    }
});