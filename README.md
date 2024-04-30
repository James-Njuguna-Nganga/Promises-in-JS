Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.


A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()

Promise chaining: If a .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.

"Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.