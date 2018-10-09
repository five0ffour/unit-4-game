$(document).ready(function() {

    /******************/
    /* Event Handlers */
    /******************/

    // On click - Red Crystal
    $("#redbtn").on("click", function(e) {
        alert("Clicked red!");
        game.crystalGuess("red");
    });

    // On click - Blue Crystal
    $("#bluebtn").on("click", function(e) {
        alert("Clicked blue!");
        game.crystalGuess("blue");
    });

    // On click - Yellow Crystal
    $("#yellowbtn").on("click", function(e) {
        alert("Clicked yellow!");
        game.crystalGuess("yellow");
    });

    // On click - Green Crystal
    $("#greenbtn").on("click", function(e) {
        alert("Clicked green!");
        game.crystalGuess("green");
    });

});