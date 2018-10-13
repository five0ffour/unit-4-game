# unit-4-game

## Crystals Collector Guessing Game

Crystals Collector is not as much a game as a mathematical puzzle with a pasted on crystal theme.   The object of the game is to "collect" crystals of numeric value and figure out the right combination to hit the target number exactly.

The "trick" in the game is that the value of each crystal isn't revealed directly (not unlike a jewelry store!).  You'll have to watch the counter and do the math to figure out how much each crystal is worth.

From there,  keep adding crystals until you've matched or exceed the total score.   A match counts as a win,  and overshoot is a loss, those are reflected on the scoreboard card.   The game will automatically reset the counters,  randomize new crystal values and start again.

The game has a couple of features available to the keyboard using upper or lower case keys:  
    R, B, Y, G --  plays the corresponding crystal  
    I          --  toggles the instruction card on and off  
    H          --  toggles a hint card to show the crystal values and solution (see 'S' key)  
    S          --  cheat key to compute and display a possible solution shown on the hint card (and console)  

## Getting Started
To get started,  copy the program to a clean directory and run "index.html" in your browser.   The program is ready to start automatically.  From there,  simply use your keyboard or mouse to enter your guesses each round.   The game will automatically restart after a win or loss.

## Prerequisites
A modern browser and an internet connection.   Chrome works best, but others should be fine too.
A modern IDE - it was developed using Visual Studio Code, but any text editor would work, including notepad.
GitHub 
GitBash installed locally

## Installing
1.  Find a Locate an empty directory on your hard drive
2.  Open a bash terminal in that directory
3.  Clone the unit-4-game repo down using  Git   
         "git clone https://github.com/five0ffour/unit-4-game.git"
4.  Open index.html in your favorite browser
        It should display the game board and prompt you for an entry

## Developer notes
index.html:  main entry point and user interface  
input.js:  the main onKeyUp and mouse click events processor, game events    
game.js:   the bulk of the game state, rules handling and solution logic            
prompts.js: the UI interface for the dynamic elements of the page  
tree.js:   rudimentary tree graph to collect permutations for the solution routine logic  

Overall the game is very straightforward.  The only special feature is the solver that finds a valid solution.  It uses a 
recursive algorthim to work down various paths until it finds a match.   There may be faster or more efficient ways to find 
an answer, but this one is fairly successful.

## Built With
Bootstrap 4.0.0 - The CSS framework used
jQuery 3.3.1 - JavaScript library

## Authors
Michael Galanreau - Initial work - Five0fFour

## Acknowledgments
www.subtlepatterns.com  - wallpaper image
crystals banner 