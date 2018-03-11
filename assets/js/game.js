$(document).ready(function() {
    
    function gameStart() {
        // When reset button is clicked the game will begin
        // each colour will light in a sequence one after the other and then they will all flash together twice
    }
    
    
    function gameSequenceGen() {
        // a number from 0 to 3 is chosen randonly
        // This number is pushed into an array gameSequence[]
        // Each number 0 to 3 represents a colour that colour will light and play its sound
    }
    
    
    function userSequenceGen() {
        // The user press the colours in the same sequence as the game generated
        // Each time he presses a colour, the number that corresponds to that colour is pushed into an array userSequence[]
    }
    
    function checkSequence() {
        // The userSequence and gameSequence are compared to each other
        // if they match, gameSequenceGen() is triggered again and the whole thing is repeated
        // if they don't match the game is ended andgameOver() is triggered
    }
    
    function gameOver() {
        // Game over sound plays
        // All four colours flash together continuously until reset button is clicked
    }
    
    
});