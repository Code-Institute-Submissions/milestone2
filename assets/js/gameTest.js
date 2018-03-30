

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