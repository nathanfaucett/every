var tape = require("tape"),
    every = require("..");


tape("every(object, callback[, thisArg]) tests whether all elements in the object pass the test implemented by the provided function", function(assert) {

    function fn(value, key) {
        return value === key;
    }

    assert.equals(every({
        a: "a",
        b: "b",
        c: "c"
    }, fn), true);
    assert.equals(every({
        a: "a",
        b: "c",
        c: "d"
    }, fn), false);

    assert.equals(every([0, 1, 2, 3, 4], fn), true);
    assert.equals(every([1, 1, 2, 3, 4], fn), false);

    assert.end();
});
