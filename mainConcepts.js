// Callback
function fetchDataCallback(callback) {
  setTimeout(() => {
    const data = "Data fetched with a callback";
    callback(data);
  }, 1000);
}

// Promise
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched with a Promise";
      resolve(data);
    }, 1000);
  });
}

// Promise Chaining
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      resolve(processedData);
    }, 1000);
  });
}

// Error Handling with Promises
function fetchRejectedData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: Data fetch failed");
    }, 1000);
  });
}

// Promise API
const promise1 = Promise.resolve("Resolved Promise");
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Resolved after 1 second"));

Promise.all([promise1, promise2])
  .then((values) => {
    console.log("Promise.all resolved:", values);
  })
  .catch((error) => {
    console.error("Promise.all error:", error);
  });

// Promisification
function readFileAsync(filePath) {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  return readFile(filePath, "utf8");
}

// Microtasks
console.log("Start");

Promise.resolve().then(() => console.log("Microtask 1"));

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Microtask 2"));

console.log("End");

// Async/Await
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Data received with async/await:", data);

    const processedData = await processData(data);
    console.log("Processed data:", processedData);

    const fileData = await readFileAsync("example.txt");
    console.log("File data:", fileData);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();

// Using Callback
fetchDataCallback((data) => {
  console.log("Data received with callback:", data);
});

// Error handling with Promises
fetchRejectedData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
