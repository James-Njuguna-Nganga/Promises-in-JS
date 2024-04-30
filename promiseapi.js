const promise1 = Promise.resolve(5);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "resolved"));

Promise.all([promise1, promise2]).then((values) => {
  console.log(values); // [5, "resolved"]
});
//Promises come with several utility methods like Promise.all, Promise.race, and Promise.resolve.