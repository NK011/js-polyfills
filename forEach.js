const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myForEach(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

function myCallback(i) {
    console.log("myCallback for " + i);
}

myForEach(arr, myCallback);

console.log("============== prototype =============")
// prototype
function myForEach2(callback) {
    for(var i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
}

Array.prototype.myForEach2 = myForEach2;
arr.myForEach2((item, i) => console.log("myForEach2 for " + item))