//--------
// prompts - holds the references to the DOM HTML elements and updates them with the passed game stats
//         - has the handler functions to toggle  card display
//--------
var prompts = {

    //-------------------
    // prompts Variables 
    //-------------------
    wins: 0,
    losses: 0,
    targetNum: 0,
    totalNum: 0,
    redElem: 0,
    blueElem: 0,
    yellowElem: 0,
    greenElem: 0,
    solutionElem: "",

    //------------------
    // prompts Methods 
    //------------------

    //---
    // getElementIds() - holds the references to the DOM elements to update 
    //---
    getElementIds: function (document) {
        this.targetNum = $("#targetNum");
        this.wins = $("#wins");
        this.losses = $("#losses");
        this.totalNum = $("#totalNum");
        this.redElem = $("#redElem");
        this.blueElem = $("#blueElem");
        this.yellowElem = $("#yellowElem");
        this.greenElem = $("#greenElem");
        this.solutionElem = $("#solutionElem");
    },

    //---
    // reportResutls() - updates the stored DOM display elements with the passed results
    //---
    reportResults: function (game) {
        $("#wins").text(game.wins);
        $("#losses").text(game.losses);
        $("#targetNum").text(game.targetNum);
        $("#totalNum").text(game.currentNum);
        $("#redElem").text(game.redValue);
        $("#blueElem").text(game.blueValue);
        $("#yellowElem").text(game.yellowValue);
        $("#greenElem").text(game.greenValue);
        $("#solutionElem").text(game.solution);
    },

    toggleHints: function () {
        var hintsElem = $("#hintsHdr");
        if (hintsElem.css("display") === "none") {
            hintsElem.css("display", "block");
        } else {
            hintsElem.css( "display",  "none");
        }
    },

    toggleInstructions: function () {
        var instructionElem = $("#instructions");
        if (instructionElem.css("display") === "none") {
            instructionElem.css("display", "block");
        } else {
            instructionElem.css("display", "none");
        }
    }
}