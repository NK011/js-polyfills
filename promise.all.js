const p1 = new Promise((resolve, reject) => {
    console.log("p1 invoked");

    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved P1")
        resolve("P1");
    }, 1000);
});

// make 3 more promises like above
const p2 = new Promise((resolve, reject) => {
    console.log("p2 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p2")
        resolve("P2");
    }, 7000);
});

const p3 = new Promise((resolve, reject) => {
    console.log("p3 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p3")
        resolve("P3");
    }, 2000);
});

const p4 = new Promise((resolve, reject) => {
    console.log("p4 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p4")
        resolve("P4");
    }, 1000);
});

const promises = [p1, p2, p3, p4];

// basic polyfill
// async function myAll(promises) {
//     let arr = [];
//     for (var i = 0; i < promises.length; i++) {
//         const response = await promises[i]
//             .then((res) => res)
//             .catch((err) => {
//                 throw new Error(err);
//             });
//         arr.push(response);
//     }
//     console.log(arr);
//     return arr;
// }

// const result = myAll(promises);
// console.log(result);

// Improvements -
/*
1. Promise.all() returns a promise.
2. It provesses all promises concurrently, not sequentially.
3. If any fails throws error.
*/

const myAllImproved = (promises) => {
    return new Promise((resolve, reject) => {
        let promisesResolved = 0;
        let results = new Array(promises.length);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                    results[index] = res;
                    promisesResolved++;

                    if (promisesResolved === results.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });

        if (promises.length === 0) {
            resolve(results);
        }
    });
};

myAllImproved(promises)
    .then((res) => console.log("Resolved  => ", res))
    .catch((err) => console.log("Error => ", err));
