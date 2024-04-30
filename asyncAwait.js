async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();
//Async/await is a syntactic sugar built on top of promises, making asynchronous code easier to read and write.