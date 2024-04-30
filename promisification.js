const fs = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);

readFileAsync("example.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//Promisification is the conversion of functions that use callbacks into functions that return promises.