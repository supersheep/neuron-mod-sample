NR.define(["src/calculator"],function(NR,require){
var Calculator = require("src/calculator");
describe("Calculator", function() {
  describe("pass in interger 1,2", function() {
    it("returns 3", function() {
      var result = Calculator.add(1,2);
      assert(result === 3);
    });
  });
});

});