let shoesAvailable = new Promise((resolve, reject) => {
  let inStock = true;

  if (inStock) {
    //Promise is fulfilled
    resolve("Store has shoes in stock");
  } else {
    //Promise is rejected
    reject("Store does not have shoes in stock");
  }
});

shoesAvailable
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// If promise is fulfilled -> resolve() -> .then()
// If promise is rejected -> reject() -> .catch()

const asyncFunction = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      alert("From asyncFunction!");
      resolve();
    }, 1000)
  );
};

asyncFunction().then(() => alert("Wait for asyncFunction!"));
