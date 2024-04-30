console.log("Start");

Promise.resolve().then(() => console.log("Microtask 1"));

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Microtask 2"));

console.log("End");
//Microtasks are tasks that are executed asynchronously, but as soon as possible after the current synchronous code finishes.