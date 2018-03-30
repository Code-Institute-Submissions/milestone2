describe("gameSequence", function() {
    
    var gameSequence = [];
    var userSequence = [];
    
    beforeEach(function() {
        var x = gameSequence;
        var y = userSequence;
        sequence = new checkSequence(x,y);
    });

    
    describe("Check function", function() {
        it("should check gameSequence and UserSequence, both are the same", function() {
            
            var gameSequence = [0,1,2,3,1,3,0,2,2,2,1,3,1,1,0,0,1,0,2,3,1,1];
            var userSequence = [0,1,2,3,1,3,0,2,2,2,1,3,1,1,0,0,1,0,2,3,1,1];
            
            var x = gameSequence;
            var y = userSequence;
            
            
            expect(checkSequence(x,y)).toBe(true);
        });
        
        
        it("should check gameSequence and UserSequence, they are different", function() {
            
            var gameSequence = [0,1,2,3,1,3,0,2,2,2,1,3,1,1,0,0,1,0,2,3,1,1];
            var userSequence = [0,1,1,1,1,3,0,2,2,3,1,4,1,1,0,0,1,2,2,3,1,1];
            
            var x = gameSequence;
            var y = userSequence;
            
            
            expect(checkSequence(x,y)).toBe(false);
        });
    });
});