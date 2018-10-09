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
     }, 

    //---
    // reportResutls() - updates the stored DOM display elements with the passed results
    //---
    reportResults : function (game) {
        this.wins.textContent           = game.wins;
        this.losses.textContent         = game.losses;
        this.targetNum.textContent      = game.targetNum;
        this.totalNum.textContent       = game.currentNum;
    }
}