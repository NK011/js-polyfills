const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myFind(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var res = callback(i, arr[i]);
        if (res) {
            return arr[i];
        }
    }
}

function callback(index, item) {
    return item % 2 === 0;
}

const result = myFind(arr, callback);
console.log(result);

// using prototype
function myFind2(callback) {
    for (var i = 0; i < this.length; i++) {
        var res = callback(i, this[i]);
        if (res) {
            return this[i];
        }
    }
}

Array.prototype.myFind2 = myFind2;

const result2 = arr.myFind2(callback);
console.log(result2);
