var assert = require('assert');

let result;
const defaultValue = 0;
const falseInput = "False input!";
function clock(hours,minutes){
	if(!checkInput(hours,minutes)){
		return falseInput;
	};
	if(isDegreeZero(hours,minutes)){
		return defaultValue;
	}else{
		return calculateDegree(hours,minutes);
	}
}
function checkInput(hours,minutes){
	if(hours > 12 || hours < 0 || minutes > 60 || minutes < 0){
		return false
	}
	return true;
}
function isDegreeZero(hours,minutes){
	if((hours*5) === minutes){
		return true;
	}
	return false;
}

function calculateDegree(hours,minutes){
	if(hours === 12){
		return Math.abs(0-minutes)*6;
	}
	return Math.abs(hours*5 - minutes)*6;
}


  describe('#clock()', function() {
    it('Should equal 0 if at the same position', function() {
      assert.equal(clock(12,60), 0);
      assert.equal(clock(11,55), 0);
      assert.equal(clock(10,50), 0);
      assert.equal(clock(9,45), 0);
      assert.equal(clock(8,40), 0);
      assert.equal(clock(7,35), 0);
      assert.equal(clock(6,30), 0);
      assert.equal(clock(5,25), 0);
      assert.equal(clock(4,20), 0);
      assert.equal(clock(3,15), 0);
      assert.equal(clock(2,10), 0);
      assert.equal(clock(1,05), 0);
    });
     it('Should equal 180 if opposite sides', function() {
      assert.equal(clock(12,30), 180);
      assert.equal(clock(6,0), 180);
    });
    it('Should equal 30 one step difference', function() {
      assert.equal(clock(12,10), 30);
      assert.equal(clock(1,20), 30);
    });
  });