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
    var isCorrect    = false;
    
    
    //Makes buttons light up
    function lightUp(id) {
        $("#" + id).addClass("colour-btn-light");
        
        setTimeout(function() {
            $("#" + id).removeClass("colour-btn-light");
        }, 400);
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
    
    
    //Display Level
    function displayLevel() {
        if(level<10) {
            $("#level").text("0" + level);
        } else {
            $("#level").text(level);
        }
    }

    
    
    
    function gameSequenceGen() {
        // level goes up by one
        level++;
        displayLevel();
        //TEST
        console.log("level - " + level);
        
        // Random 'colour' selected and added to sequence
        getRandomNum();
        
        // TEST
        console.log("Game Sequence - " + gameSequence);
        
        // Each number 0 to 3 represents a colour that colour will light and play its sound
        index=0;
        
        var sequenceInterval = setInterval(function() {
            var id = gameSequence[index];
            lightUp(id);
            index++;
            
            if(index == gameSequence.length) {
                clearInterval(sequenceInterval);
            }
        }, 650);
    }
    
    // When colour button clicked
    $(".colour-btn").on("click", function() {
       var id = $(this).attr("id");
       userSequence.push(id);
       lightUp(id);
       
       //TEST
       console.log("User Sequence - " + userSequence);
    });
    
    
    
    function checkSequence() {
        // The userSequence and gameSequence are compared to each other
        // if they match, return true
        // if they don't match return false
    }
    
    
    function gameOver() {
        // Game over sound plays
        // All four colours flash together continuously until reset button is clicked
        alert("GAME OVER!!!");
    }
    
    
    //When play or reset button clicked
    $("#play, #reset").on("click", function() {
        startLightSequence();
        index        = 0;
        level        = 0;
        score        = 0;
        gameSequence = [];
        userSequence = [];
        displayLevel();
        setTimeout(gameSequenceGen, 5000);
    });
    
});
