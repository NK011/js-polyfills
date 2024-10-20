const myDebounce = (cb, delay) => {
    let timer;

    return function (...args) {
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

let caller = myDebounce((i) => {
    console.log(i)
}, 2000)


caller(1)
caller(2)
caller(3)
caller(4)
caller(5)

