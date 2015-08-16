var assert = require("assert"),
    every = require("../src/index");


describe("every(object, fn, thisArg)", function() {
    it("should loop over array or object until a function returns a falsey value", function() {
        var array = [0, 1, 2],
            object = {
                0: 0,
                1: 1,
                2: 2
            };

        assert.equal(
            every(array, function(value) {
                return value === 1 ? false : true;
            }),
            false
        );

        assert.equal(
            every(object, function(value) {
                return typeof(value) === "number";
            }),
            true
        );
    });
});