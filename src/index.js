var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayEvery = require("array-every"),
    objectEvery = require("object-every");


module.exports = every;


function every(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(value) ?
        arrayEvery(value, callback) :
        objectEvery(value, callback);
}
