$(window).on('load',function(){
        $('#game-modal').modal('show');
    });

    
$(document).ready(function() {
    
    var index        = 0;
    var level        = 0;
    var highScore    = 0;
    var gameSequence = [];
    var userSequence = [];
    var resetClicked = false;
    
    //Sounds
    var startSound = new Audio("assets/sounds/gameStart.mp3");
    var endSound = new Audio("assets/sounds/gameOver.mp3");
    var colourSounds = [
        "assets/sounds/colour1.mp3",
        "assets/sounds/colour2.mp3",
        "assets/sounds/colour3.mp3",
        "assets/sounds/colour4.mp3"
        ];
        
        
    //To play colour sounds
    function playColourSounds(id) {
        var sound = new Audio(colourSounds[id]);
        sound.play();
    }
    
    
    
    //Makes buttons light up
    function lightUp(id) {
        $("#" + id).addClass("colour-btn-light");
        
        setTimeout(function() {
            $("#" + id).removeClass("colour-btn-light");
        }, 400);
    }
    
    
    
    //Disables Reset Button
    function resetDisabled() {
        $("#reset").prop("disabled", true);
        
        setTimeout(function() {
            $("#reset").prop("disabled", false);
        }, 5000);
    }

    
    
    //Display Level
    function displayLevel() {
        if(level<10) {
            $("#level, #score").text("0" + level);
        } else {
            $("#level, #score").text(level);
        }
    }
    
    
    //Display High Score
    function displayHighScore() {
        if(level > highScore) {
            highScore = level;
            if(level<10) {
                $("#highScore").text("0" + level);
            } else {
                $("#highScore").text(level);
            }
        }
    }
    
    
    
    //Game Over Sequence
    function gameOver() {
        endSound.play();
        var gameOverInterval = setInterval(function() {
            $(".colour-btn").toggleClass("colour-btn-light");
            
            if(resetClicked) {
                clearInterval(gameOverInterval);
            }
        }, 400);
    }
    
    
    //Start Light Sequence
    function startLightSequence() {
        // each colour will light in a sequence one after the other
        var startSequence = [0,1,3,2,0,1,3,2,0,1,3,2,0];
        
        setTimeout(function startSequenceInterval() {
            var id = startSequence[index];
                lightUp(id);
                index++;
                
                console.log("Index - " + index);
            
            if(index == startSequence.length) {
                return clearTimeout(startSequenceInterval);
            }
            setTimeout(startSequenceInterval, 200);
           
        }, 200);
        
    }
    
    
    
    // Randon number from 1 to 3 added to game sequence
    // This number is pushed into an array gameSequence[]
    function getRandomNum() {
        var randomNum = Math.floor(Math.random()*4);
        gameSequence.push(randomNum);
    }

    
    function gameSequenceGen() {
        // level goes up by one
        resetClicked = false;
        level++;
        displayLevel();
        displayHighScore();
        console.log("high score - " + highScore);
        //TEST
        console.log("level - " + level);
        
        // Random 'colour' selected and added to sequence
        getRandomNum();
        
        // TEST
        console.log("Game Sequence - " + gameSequence);
        
        // Each number 0 to 3 represents a colour that colour will light and play its sound
        index=0;
         
        setTimeout(function sequenceInterval() {
            var id = gameSequence[index];
                lightUp(id);
                playColourSounds(id);
                index++;
                
                console.log("Index - " + index);
            
            if(index == gameSequence.length) {
                return clearTimeout(sequenceInterval);
            } else if( resetClicked ) {
               return clearTimeout(sequenceInterval);
            }
                
            setTimeout(sequenceInterval, 650);
           
        }, 650);
        
        
    }
    
    // When colour button clicked
    $(".colour-btn").on("click", function() {
       var id = $(this).attr("id");
       userSequence.push(id);
       lightUp(id);
       playColourSounds(id);
       
       //TEST
       console.log("User Sequence - " + userSequence);
       
       if(!checkSequence()) {
          return gameOver();
       } else if(userSequence.length == gameSequence.length) {
           displayLevel();
           userSequence = [];
           setTimeout(gameSequenceGen, 800);
       }
    });
    
    
    
    function checkSequence() {
        // The userSequence and gameSequence are compared to each other
        // if they match, return true
        // if they don't match return false
        for(i=0; i<userSequence.length; i++) {
            if(userSequence[i] != gameSequence[i]) {
                return false;
            } 
        }
        return true;
    }
    
    
    
    //When play or reset button clicked
    $("#play, #reset").on("click", function() {
        resetClicked = true; 
        startLightSequence();
        startSound.play();
        console.log("Start Sequence Finished");
        index        = 0;
        level        = 0;
        gameSequence = [];
        userSequence = [];
        displayLevel();
        resetDisabled();
        setTimeout(gameSequenceGen, 5000);
    });
    

});
