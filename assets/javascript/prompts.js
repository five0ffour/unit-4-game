//--------
// prompts - holds the references to the DOM HTML elements and updates them with the passed game stats
//--------
var prompts = {

    //-------------------
    // prompts Variables 
    //-------------------
    wins           : 0,
    losses         : 0,
    targetNum      : 0,
    totalNum       : 0,
    redElem        : 0,
    blueElem       : 0,
    yellowElem     : 0,
    greenElem      : 0,
    solutionElem   : "",

    //------------------
    // prompts Methods 
    //------------------

    //---
    // getElementIds() - holds the references to the DOM elements to update 
    //---
    getElementIds : function (document) {
         this.targetNum      = document.getElementById("targetNum");
         this.wins           = document.getElementById("wins");
         this.losses         = document.getElementById("losses");
         this.totalNum       = document.getElementById("totalNum");
         this.redElem        = document.getElementById("redElem");
         this.blueElem       = document.getElementById("blueElem");
         this.yellowElem     = document.getElementById("yellowElem");
         this.greenElem      = document.getElementById("greenElem");
         this.solutionElem   = document.getElementById("solutionElem");
     }, 

    //---
    // reportResutls() - updates the stored DOM display elements with the passed results
    //---
    reportResults : function (game) {
        this.wins.textContent           = game.wins;
        this.losses.textContent         = game.losses;
        this.targetNum.textContent      = game.targetNum;
        this.totalNum.textContent       = game.currentNum;
        this.redElem.textContent        = game.redValue;
        this.blueElem.textContent       = game.blueValue;
        this.yellowElem.textContent     = game.yellowValue;
        this.greenElem.textContent      = game.greenValue;
        this.solutionElem.textContent   = game.solution;
    },

     toggleHints : function() {
        var hintsElem = document.getElementById("hints");
        if (hintsElem.style.display === "none") {
            hintsElem.style.display = "block";
        } else {
            hintsElem.style.display = "none";
        }
    },

    toggleInstructions : function() {
        var instructionElem = document.getElementById("instructions");
        if (instructionElem.style.display === "none") {
            instructionElem.style.display = "block";
        } else {
            instructionElem.style.display = "none";
        }
    }
}