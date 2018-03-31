Phil Surgenor - Milestone Project 2
===

<br>

## Interactive Frontend Development
[visit the project website here](https://philsurgenor.github.io/milestone2/)

For this project, I decided to build the game Simon. Using HTLM, CSS and Javascript / jQuery. 

This game originated in the 80s as a physical game. The premise of the game is very simple. Simon lights up a colour and you press the same one. Simon then add a colour to the sequence each time. You must complete the sequence in order to move up a level.

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

I created a simple wireframe to lay out the game and it's components. The game must be as responsive as possible, so I used both a phone and a tablet in the mockup.

<br>

#### HTML 5

The HTML markup wasn't very compicated. The main thing was to clearly mark each component by either using an Id or a class. This was to make manipulating these with Javascript easier.

I used the \<audio> tag with the autoplay and muted attributes so that the sound for the game would be preloaded and stored in the browser's cache.

<br>

#### CSS 3

After I had styled all the components and constructed the UI for the game, the trickiest part was to make it responsive. I had to use a very wide range of media queries to make this possible.

<br>

#### Bootstrap 4

I used this for its mobile first approach and made use of the modal capabilities.

<br>

#### Javascript / jQuery

The logic behind the game is built with javascript. I have commented the code to make it easier to follow.

<br>

## Testing

#### Human Testing

The main tests that were carried out were by hands on use of the game. The first test was to make sure the game looked the same across multiple devices. This was achieved with Chrome's developer tools.

After each part of functionality was built it was tested by playing the game. I came across a problem at first when I used setInterval. As setInterval fires at the given interval wether the function has preformed or not, this became a problem when the colours lit up too quickly or not at all. I fixed this by using a recursive setTimeout instead as it was more reliable.

Another problem I had was when the reset button was pressed during the startSequence setTimeout loop or the gameSequence setTimeout loop. After each interval the index variable was set to go up by one each time until it had reached the same length as the sequence. If the reset button was pressed during this time the index would keep going up by one forever, this caused the game to behave erratically. To fix this problem I disabled the reset button during the startSequence and added an else if clause to the gameSequence setTimeout loop.

One other problem I have not been able to solve is most browsers on mobile disable autoplay. This means when you play the game on a mobile device the sounds play when you click a button, or there is user interaction, but they will not play on their own. As Simon is playing the gameSequence, there is no sound.

<br>

#### Unit Testing

One thing a wanted to test automatically was wether the checkSequence function would preform correctly every time. Instead of having to play the game until you reached level 30 to see if the game still preformed as it should, I used Jasmine to preform a simple unit test. You will find this test in the repository. In this test you can enter a sequence as long as you like and test wether the checkSequence function return true or false.

