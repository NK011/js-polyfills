const arr = [1, 3, 4, 5, 7, 9];

function myEvery(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var res = callback(arr[i]);
        if (!res) {
            return false;
        }
    }

    return true;
}

function myCallback(i) {
    return i % 2 === 1;
}

const result = myEvery(arr, myCallback);
console.log("result : ", result);

// prototype
function myEvery2(callback) {
    for (var i = 0; i < this.length; i++) {
        var res = callback(this[i]);
        if (!res) {
            return false;
        }
    }

    return true;
}

Array.prototype.myEvery2 = myEvery2;

const result2 = arr.myEvery2(myCallback);
console.log("prototype result: ", result2);
