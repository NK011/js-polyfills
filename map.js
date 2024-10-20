const arr = [1, 2, 3, 4, 5];

const res = arr.map((num, i, nums) => {
    return num + i;
})

// this polyfill taks the array and callback
function myMap(arr, callback) {
    let ans = [];
    for (var i = 0; i < arr.length; i++) {
        var res = callback(arr[i]);
        ans.push(res);
    }

    return ans;
}

function myCallback(i) {
    return i + 1;
}

const result = myMap(arr, myCallback);
console.log(result);

// this polyfill takes a callback
// Attach to Array object
function myMapV2(callback) {
    let ans = [];

    for (var i = 0; i < this.length; i++) {
        let res = callback(this[i], i);
        ans.push(res);
    }

    return ans;
}

Array.prototype.myMapV2 = myMapV2;
const arr2 = [1, 2, 3, 4, 5];

const resultV2 = arr2.myMapV2((item, index) => item + 1);
console.log(resultV2);
