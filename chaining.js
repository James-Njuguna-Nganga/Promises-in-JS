function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = "User data fetched";
      resolve(userData);
    }, 2000);
  });
}

function fetchUserPosts(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = "User posts fetched";
      resolve({ userData, userPosts });
    }, 2000);
  });
}

fetchUserData()
  .then(fetchUserPosts)
  .then(({ userData, userPosts }) => {
    console.log(userData);
    console.log(userPosts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//Promises can be chained together to execute asynchronous operations sequentially.