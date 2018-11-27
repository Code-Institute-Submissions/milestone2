Phil Surgenor - Milestone Project 2
===

<br>

## Interactive Frontend Development
[visit the project website here](https://philsurgenor.github.io/milestone2/)

For this project, I was tasked to build a memory game. I decided to bulid a replica of the Simon memory game.
The game originated in the 80s as a physical game. The premise of the game is very simple. Simon lights up a colour and you press the same one. Simon then adds a colour to the sequence each time. You must complete the sequence in order to move up a level.

This game is a good way to pass the time and have a bit of fun.

<br>

## UX

It was important to me that the UI replicate the physical game as closely as possible. I wanted the game to be comfortable to play on many devices. You can see from the wireframes I made sure all the components needed where added at this stage. I had to use various media queries to make sure the game looked right on mobile and tablet, both in landscape and portrait and on desktop.

It was important that the coloured buttons gave feedback to the user, both by lighting up and making a sound. Unfortunately many mobile browsers disable autoplay audio. I would have to do more research to see if there is some sort of javascript library that can stop this from happening. This could be done in a future development stage.

A modal appears when you first land on the game page. This was a conscience decision I made early on as it give the user access to the instructions immediately. For those that know how to play, the play game button is clearly visible, so there isn't a lot of user journey friction.

<br>

## Technologies

 - Balsamiq Mockups
 - HTML 5
 - CSS 3
 - Bootstrap 4
 - Javascript
 - jQuery library

<br>

#### Balsamiq Mockups

I created a simple wireframe to lay out the game and it's components. The game must be as responsive as possible, so I used both a phone and a tablet wireframes in the mockup.

<br>

#### HTML 5

The HTML markup wasn't very compicated. The main thing was to clearly mark each component by either using an Id or a class. This was to make manipulating them with Javascript easier.

I used the \<audio> tag with the autoplay and muted attributes so that the sound for the game would be preloaded and stored in the browser's cache.

<br>

#### CSS 3

I wanted to make all the components for the game purley from CSS. After I had styled all the components and constructed the UI for the game, the trickiest part was to make it responsive. I had to use a very wide range of media queries to make this possible.

<br>

#### Bootstrap 4

I used this for its mobile first approach and made use of the modal capabilities.

<br>

#### Javascript / jQuery

The logic for this project was written in javascript. I made use of the jQuery library throughout. I have commented the code to make it easier to follow.

<br>

## Testing

#### Manual Testing

The main tests that were carried out were by physically using the game. The first test was to make sure the game looked the same across multiple devices. This was achieved with Chrome's developer tools, and using my phone and tablet to access the game. I had to add media queries to the css for device widths and in some cases the device orientation (portrait / landscape).

After each part of functionality was built it was tested by playing the game. I came across a problem at first when I used setInterval in gameSequenceGen. As setInterval fires at the given interval wether the function has preformed or not, this became a problem when the colours lit up too quickly or not at all. I fixed this by using a recursive setTimeout instead as it was more reliable.

I tested the scoring, making sure every level I went up,the score also moved in the correct increment. To make the level display corectly, I added a simple if statement to check wether the level was greater than 10, if it wasn't then a '0' was palce before the level number. This made the display look more like the physical LED counters on the real game. 

Another problem I had was when the reset button was pressed during the startSequence setTimeout loop or the gameSequence setTimeout loop. After each interval the index variable was set to go up by one each time until it had reached the same length as the sequence. If the reset button was pressed during this time the index would keep going up by one forever, this caused the game to behave erratically. To fix this problem I disabled the reset button during the startSequence and added an 'else if' clause to the gameSequence setTimeout loop.

One other problem I have not been able to solve is most browsers on mobile disable autoplay. This means when you play the game on a mobile device the sounds play when you click a button, or there is user interaction, but they will not play on their own. As Simon is playing the gameSequence, there is no sound.

Other tesing included, checking all links worked correctly and making sure it worked in other major browsers.

<br>

#### Unit Testing

One thing a wanted to test automatically was wether the checkSequence function would preform correctly every time. Instead of having to play the game until you reached level 30 to see if the game still preformed as it should, I used Jasmine to preform a simple unit test. You will find this test in the repository. In this test you can enter a sequence as long as you like and test wether the checkSequence function return true or false.

#### JS Lint

I used this to test that my javascript was valid. Below are the warnings I recieved:

    9.24 Use double quotes, not single quotes.
    $(window).on('load', function() {
    
    9.21 This function needs a "use strict" pragma.
    $(window).on('load', function() {
    (using "use strict" caused a bug)
    
    10.5 Use double quotes, not single quotes.
      $('#game-modal').modal('show');
      
    10.26 Use double quotes, not single quotes.
      $('#game-modal').modal('show');
      
    14.18 This function needs a "use strict" pragma.
    $(document).ready(function() {
    (using "use strict" caused a bug)
    
    24.23 Undeclared 'Audio'.
      var startSound = new Audio("assets/sounds/gameStart.mp3");
      (not fixed but works)
      
    25.21 Undeclared 'Audio'.
      var endSound = new Audio("assets/sounds/gameOver.mp3");
      (not fixed but works)
      
    41.20 Undeclared 'Audio'.
        var sound = new Audio(colourSounds[id]);
        (not fixed but works)
        
    116.11 Unexpected expression '++' in statement position.
          index++;
          (++ is still valid)
          
    118.16 Expected '===' and instead saw '=='.
          if (index == startSequence.length) {
          
    135.1 Unexpected trailing space.
      
    136.1 Unexpected trailing space.
      
    145.9 Unexpected expression '++' in statement position.
        level++;
        (++ is still valid)
        
    152.3 Unexpected trailing space.
        
    164.11 Unexpected expression '++' in statement position.
          index++;
          (++ is still valid)
          
    166.16 Expected '===' and instead saw '=='.
          if (index == gameSequence.length) {
          
    169.6 Unexpected 'else'.
          else if (resetClicked) {
          
    177.1 Unexpected trailing space.
        
    190.33 Expected '===' and instead saw '=='.
        else if (userSequence.length == gameSequence.length) {
        
    203.42 Expected '+= 1' and instead saw '++'.
        for (i = 0; i < userSequence.length; i++) {
          
    204.26 Expected '!==' and instead saw '!='.
          if (userSequence[i] != gameSequence[i]) {
          
    230.73 Unexpected trailing space.
        /*  The resetDisabled function is used to stop the user from clicking 
        
    235.3Unexpected trailing space.
    
I corrected most of them. After some research, using ++ is still valid, so I left it as is.
Using the "use strict pragma" caused a bug so  left it as is

<br>

#### HTML Validator

I recieved two warnings using W3C validator.

The type attribute is unnecessary for JavaScript resources.
From line 12, column 5; to line 12, column 59

Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
From line 43, column 5; to line 43, column 23

I corrected the javascript warning, I didn't need a heading in the sepcified section.

<br>

#### CSS Validator

After putting the code through the validator, there were a number of warnings and errors that came from bootstrap, but my stylesheet was fine

<br>

## Deployment
Once I was confident I had all the files, html, css, js, audio together and that the folder structure was correct. I did one final test in my development environment.

To deploy this site to GitHub Pages, I made sure all my files were pushed to this GitHub repository. I then selected settings, found the GitHub Pages section, made sure the source was the master branch and saved it. I then tested the site again to make sure it worked exactly as it did in the development stage.
