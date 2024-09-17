const arr = [1, 2, 3, 4, 5];

function myFilter(arr, callback) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i]);
        if (res === true) {
            ans.push(arr[i]);
        }
    }

    return ans;
}

function callback(i) {
    return i % 2 === 0;
}

let result = myFilter(arr, callback);
console.log(result);

// prototype
function myFilterV2(callback) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        let res = callback(this[i], i);

        if (res === true) {
            ans.push(this[i]);
        }
    }

    return ans;
}

Array.prototype.myFilterV2 = myFilterV2;
result = arr.myFilterV2((item, i) => item % 2 === 0);
console.log(result);
