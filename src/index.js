var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isObjectLike = require("is_object_like"),
    isLength = require("is_length");


function everyArray(array, callback) {
    var i = array.length;

    while (i--) {
        if (!callback(array[i], i)) {
            return false;
        }
    }

    return true;
}

function everyObject(object, callback) {
    var objectKeys = keys(object),
        i = objectKeys.length,
        key;

    while (i--) {
        key = objectKeys[i];

        if (!callback(object[key], key)) {
            return false;
        }
    }

    return true;
}

module.exports = function every(object, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 2);
    return (isObjectLike(object) && isLength(object.length)) ? everyArray(object, callback) : everyObject(object, callback);
};
