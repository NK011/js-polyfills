const arr = ["a", "b", "c", "d", "e"];

function myReduce(callback, acc = "") {
  for (var i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  return acc;
}

function callback(acc, item) {
  return acc + item;
}

const res = myReduce(callback, "");
console.log("result is = ", res);

// prototype
function myReduce2(callback, acc = "") {
  for (var i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }

  return acc;
}

Array.prototype.myReduce2 = myReduce2;

const res2 = arr.myReduce2(callback, "");
console.log(res2);
