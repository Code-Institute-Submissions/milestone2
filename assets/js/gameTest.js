//  This Test is used to check wether the userSequence and gameSequence match.
// Instead of having to play the game we can do this automatically by adding values to an array.
//  This was the only test that really needed to be tested automatically as al other functionally 
// can be tested manually
function checkSequence(x,y) {
    
        var gameSequence = x;
        var userSequence = y;
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