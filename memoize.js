// using array
const memoize = (callback) => {
    let a1 = [];
    let a2 = [];
    let a3 = [];

    function checkCache(a, b) {
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] === a) {
                if (a2[i] === b) {
                    return i;
                }
            }
        }

        return -1;
    }

    return function (a, b) {
        let cacheKey = checkCache(a, b);
        if (cacheKey > -1) {
            console.log("from cache");
            return a3[cacheKey];
        } else {
            let res = callback(a, b);
            a1.push(a);
            a2.push(b);
            a3.push(res);

            return res;
        }
    };
};

// using map
const memoizeWithMap = (callback) => {
    const cache = new Map();

    return function (...args) {
        const cacheKey = JSON.stringify(...args);

        if (cache.has(cacheKey)) {
            console.log("cached in map...");
            return cache.get(cacheKey);
        } else {
            let res = callback(...args);
            cache.set(cacheKey, res);
            return res;
        }
    };
};

const add = (a, b) => {
    return a + b;
};

const memoized = memoize(add);

const res1 = memoized(1, 2);
const res2 = memoized("a", "b");

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 3 };
const res3 = memoized(obj1, obj2);

console.log(memoized(1, 2));
console.log(memoized("a", "b"));
console.log(memoized(obj1, obj2));



// memoized with map
const memoized2 = memoizeWithMap(add);

const ans1 = memoized2(1, 2);
const ans2 = memoized2(1, 3);
const ans3 = memoized2(obj1, obj2);
console.log(memoized2(1, 2));
console.log(memoized2("a", "b"));
console.log(memoized2(obj1, obj2));
