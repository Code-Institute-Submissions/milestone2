$(window).on('load',function(){
        $('#game-modal').modal('show');
    });

    
$(document).ready(function() {
    
    var index        = 0;
    var level        = 0;
    var score        = 0;
    var highScore    = 0;
    var gameSequence = [];
    var userSequence = [];
    
    
    //Makes buttons light up
    function lightUp(id) {
        $("#" + id).addClass("colour-btn-light");
        
        setTimeout(function() {
            $("#" + id).removeClass("colour-btn-light");
        }, 300);
    }
    
    
    //Start Light Sequence
    function startLightSequence() {
        // each colour will light in a sequence one after the other
        var startSequence = [0,1,3,2,0,1,3,2,0,1,3,2,0];
        var sequenceInterval = setInterval(function() {
            var id = startSequence[index];
            lightUp(id);
            index++;
            
            if(index == startSequence.length) {
                clearInterval(sequenceInterval);
            }
            
        }, 200);
    }
    
    // Randon number from 1 to 3 added to game sequence
    // This number is pushed into an array gameSequence[]
    function getRandomNum() {
        var randomNum = Math.floor(Math.random()*4);
        gameSequence.push(randomNum);
    }
    
    
    function gameSequenceGen() {
        // Random 'colour' selected and added to sequence
        getRandomNum();
        
        // Each number 0 to 3 represents a colour that colour will light and play its sound
        
        alert("finished");
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
    
    
    //When play or reset button clicked
    $("#play, #reset").on("click", function() {
        startLightSequence();
        index        = 0;
        level        = 0;
        score        = 0;
        gameSequence = [];
        userSequence = [];
        setTimeout(gameSequenceGen, 5000);
    });
    
});
