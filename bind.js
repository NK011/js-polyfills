/*
Table of Contents:
1. Basic Callback Binding Example
    - Simple `myBind` function for binding a callback to an instance and invoking it.
    
2. Prototype-based Bind Polyfill (`myBind2`)
    - First attempt at a `bind` polyfill that adds a method to an instance and invokes it.
    
3. Finite Arguments with Bind Polyfill (`myBind2`)
    - Example of binding finite arguments with `myBind2` function and handling a null instance.
    
4. Improved Bind Polyfill (`myBindImproved`)
    - Enhanced version of the bind polyfill that correctly handles constructor use and argument binding.
    
5. Example Usage of Improved Bind Polyfill
    - Demonstrates binding context and partial arguments using `myBindImproved`.
*/

// 1. Basic Callback Binding Example
function callback(instance) {
    console.log(instance.a, "  >>>> ", instance.b);
}

const myBind = function (callback, instance, ...args) {
    return function (...args) {
        callback(instance);
    };
};

let test = {
    a: "TEST A",
    b: "TEST B",
};

var tryBind = myBind(callback, test);
tryBind();

// 2. Prototype-based Bind Polyfill (`myBind2`)
function callback2(...args) {
    console.log(args);
    console.log(this.a, "  >>>> ", this.b);
}

function myBind2(instance, ...args) {
    instance.methodToBind = this;

    return function (...rest) {
        return instance.methodToBind(...args, ...rest);
    };
}

Function.prototype.myBind2 = myBind2;
var tryBind2 = callback2.myBind2(test, "from try bind 2");
tryBind2("text from function");

// 3. Finite Arguments with Bind Polyfill (`myBind2`)
function multiply(a, b) {
    return a * b;
}

function myBind2(instance, ...args) {
    if (instance === null) {
        instance = {};
    }

    instance.methodToBind = this;

    return function (...rest) {
        return instance.methodToBind(...args, ...rest);
    };
}

Function.prototype.myBind2 = myBind2;
var testing = multiply.myBind2(null, 2, 5, 6);
console.log(testing());




// 4.// Improved Bind Polyfill (`myBindImproved`)

/*
Key Improvements:
1. No Modification to `instance`: 
   We use `apply` to set the `this` context without modifying the original `instance` object.

2. Handling `null` and `undefined`: 
   The `apply` method will correctly handle `null` or `undefined` as `this`, defaulting to the global object 
   in non-strict mode or `undefined` in strict mode.

3. Constructor Behavior: 
   The improved implementation correctly supports using the bound function as a constructor (with `new`).

4. Argument Handling: 
   Arguments are correctly combined and passed to the original function, ensuring both pre-set and invoked 
   arguments are used as expected.
*/

function myBindImproved(instance, ...args) {
    const originalFunction = this;

    return function (...rest) {
        // Handle cases where the function is used as a constructor
        if (this instanceof originalFunction) {
            return new originalFunction(...args, ...rest);
        }
        // Call the function with the provided context and arguments
        return originalFunction.apply(instance, [...args, ...rest]);
    };
}

Function.prototype.myBindImproved = myBindImproved;

// Example usage
function multiply(a, b) {
    return a * b;
}

var testing = multiply.myBindImproved(null, 2);
console.log(testing(5)); // Output: 10
