var assert = require('chai').assert;
describe('Five', function(){
    // quick check that Chai assertions pulled in
    it('should be above two', function(){
        assert.isAbove(5, 2, '5 is strictly greater than 2');
    });
});

