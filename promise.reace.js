// Implement a polyfill for `Promise.race`, which returns the result of the first promise to resolve or reject in an iterable.

const p1 = new Promise((resolve, reject) => {
    console.log("p1 invoked");

    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved P1");
        reject("P1");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    console.log("p2 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p2");
        resolve("P2");
    }, 7000);
});

const p3 = new Promise((resolve, reject) => {
    console.log("p3 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p3");
        resolve("P3");
    }, 2000);
});

const p4 = new Promise((resolve, reject) => {
    console.log("p4 invoked");
    setTimeout(() => {
        console.log(new Date().getTime());
        console.log("Resolved p4");
        reject("P4");
    }, 1000);
});

const promises = [p1, p2, p3, p4];

function myRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// myRace(promises)
//     .then((res) => {
//         console.log("Race got settled with success of =>> ", res);
//     })
//     .catch((error) =>
//         console.log("Race got settled with failure of =>> ", res)

Promise.race([p1, p4])
    .then((res) => {
        console.log("Race got settled with success of =>> ", res);
    })
    .catch((error) =>
        console.log("Race got settled with failure of =>> ", error)
    );
