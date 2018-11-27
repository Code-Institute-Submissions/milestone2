/*  The modal that fires at the begining serves two purposes.
  The first thing it does is show you the instructions, this is great for
user experience as it lets those with no experience with the game get up to speed with how it works
very quickly. There is a small amount of friction for those users who already know how to play it, but the play game
button is still easily accessable.

The second thig the modal does is give a natural way to start playing the game. Instead of the game
just starting on load or the user having to find another start button within the UI, pressing the 'Play Game'
button lets the user stay in control. */
$(window).on("load", function() {

  $("#game-modal").modal("show");
});


$(document).ready(function() {

  var index = 0;
  var level = 0;
  var highScore = 0;
  var gameSequence = [];
  var userSequence = [];
  var resetClicked = false;

  //Sounds
  //  'new Audio adds HTML audio element'
  var startSound = new Audio("assets/sounds/gameStart.mp3");
  var endSound = new Audio("assets/sounds/gameOver.mp3");
  var colourSounds = [
    "assets/sounds/colour1.mp3",
    "assets/sounds/colour2.mp3",
    "assets/sounds/colour3.mp3",
    "assets/sounds/colour4.mp3"
  ];



///////////////////////
// HELPER FUNCTIONS //
/////////////////////

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
    if (level < 10) {
      $("#level, #score").text("0" + level);
    }
    else {
      $("#level, #score").text(level);
    }
  }


  //Display High Score
  function displayHighScore() {
    if (level > highScore) {
      highScore = level;
      if (level < 10) {
        $("#highScore").text("0" + level);
      }
      else {
        $("#highScore").text(level);
      }
    }
  }



  //Game Over Sequence
  function gameOver() {
    endSound.play();
    var gameOverInterval = setInterval(function() {
      $(".colour-btn").toggleClass("colour-btn-light");

      if (resetClicked) {
        clearInterval(gameOverInterval);
      }
    }, 400);
  }


  //Start Light Sequence
  function startLightSequence() {
    // each colour will light in a sequence one after the other
    var startSequence = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0];

    setTimeout(function startSequenceInterval() {
      var id = startSequence[index];
      lightUp(id);
      index++;

      if (index == startSequence.length) {
        return clearTimeout(startSequenceInterval);
      }
      setTimeout(startSequenceInterval, 200);

    }, 200);

  }



  // Randon number from 0 to 3 added to game sequence
  // This number is pushed into an array gameSequence[]
  function getRandomNum() {
    var randomNum = Math.floor(Math.random() * 4);
    gameSequence.push(randomNum);
  }
  
  
  //////////////////////////
  // MAIN GAME FUNCTIONS //
  ////////////////////////


  function gameSequenceGen() {
    // level goes up by one
    resetClicked = false;
    level++;
    displayLevel();
    displayHighScore();

    // Each number 0 to 3 represents a colour that colour will light and play its sound
    // Random 'colour' selected and added to sequence
    getRandomNum();
    
    index = 0;

    /*  At first I had this as a setInterval. Unfortunately this did not work as setInterval
        doesn't wait until the function has completed. This made the lights and sounds fire too quickly
        and the game became unplayable.
        I changed the setInterval to a recursive setTimeout and this solved the problem.
    */
    setTimeout(function sequenceInterval() {
      var id = gameSequence[index];
      lightUp(id);
      playColourSounds(id);
      index++;

      if (index == gameSequence.length) {
        return clearTimeout(sequenceInterval);
      }
      else if (resetClicked) {
        return clearTimeout(sequenceInterval);
      }

      setTimeout(sequenceInterval, 650);

    }, 650);
  }
  

  // This part handles the USER input
  // It adds their sequence to an array which in turn is checked against the gameSequence that was generated earlier
  $(".colour-btn").on("click", function() {
    var id = $(this).attr("id");
    userSequence.push(id);
    lightUp(id);
    playColourSounds(id);

    if (!checkSequence()) {
      return gameOver();
    }
    else if (userSequence.length == gameSequence.length) {
      displayLevel();
      userSequence = [];
      setTimeout(gameSequenceGen, 800);
    }
  });



  function checkSequence() {
    // The userSequence and gameSequence are compared to each other
    // if they match, return true
    // if they don't match return false
    for (i = 0; i < userSequence.length; i++) {
      if (userSequence[i] != gameSequence[i]) {
        return false;
      }
    }
    return true;
  }


  //  This is the main sequence. When the play button or reset button is clicked
  // this sets the sequence below into motion.
  $("#play, #reset").on("click", function() {

    // The reset clicked var is used in the 'gameSequenceGen' and 'gameOver' functions
    // Its purpose is, if true, to clear the intervals, this stops the lights from flashing
    resetClicked = true;

    //  This next section sets the game up and 'resets the game to zero'
    //  It also does the start game sequence
    startLightSequence();
    startSound.play();
    index = 0;
    level = 0;
    gameSequence = [];
    userSequence = [];
    displayLevel();

    /*  The resetDisabled function is used to stop the user from clicking 
      the reset button. I had to add this function as clicking the reset button
      while the startLightSequence and gameSequenceGen where firing, it caused a problem.
      It would start the startLightSequence while the game sequence was trying to fire */
    resetDisabled();
    
    // The gameSequenceGen has a delay so that everything can go in sequence.
    setTimeout(gameSequenceGen, 5000);
  });


});
