const Throttle = {
    lastTime: 0,

    myThrottle(cb, delay) {
        let now = new Date().getTime();
        if (now - this.lastTime < delay) return;

        this.lastTime = now;
        cb();
    },
};

Throttle.myThrottle(() => {
    console.log("first");
}, 2000);
Throttle.myThrottle(() => {
    console.log("second");
}, 2000);
Throttle.myThrottle(() => {
    console.log("third");
}, 2000);
Throttle.myThrottle(() => {
    console.log("fourth");
}, 2000);
Throttle.myThrottle(() => {
    console.log("fifth");
}, 2000);

setTimeout(() => {
    Throttle.myThrottle(() => {
        console.log("sixth");
    }, 2000);
}, 2000);
