const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function mySome(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var res = callback(arr[i]);
        if (res) {
            return true;
        }
    }

    return false;
}

function callback(i) {
    return i % 2 === 0;
}

const result = mySome(arr, callback);
console.log(result);

// prototype
function mySome2() {
    for (var i = 0; i < this.length; i++) {
        var res = callback(this[i]);
        if (res) {
            return true;
        }
    }

    return false;
}

Array.prototype.mySome2 = mySome2;
const result2 = arr.mySome2(callback);
console.log(result2);
