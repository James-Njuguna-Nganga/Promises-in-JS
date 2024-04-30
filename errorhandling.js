function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error fetching data");
    }, 2000);
  });
}

fetchDataWithError()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//Promises provide a .catch() method to handle errors.