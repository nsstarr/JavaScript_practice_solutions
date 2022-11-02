// EXAMPLE 1

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then" + message);
}).catch((message) => {
  console.log("This is in the catch" + message);
});

// EXAMPLE 2 - Callback Function

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: ":)",
    });
  } else {
    callback("Thumbs up!");
  }
}

watchTutorialCallback(
  (message) => {
    console.log("Success " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

// EXAMPLE 3 - Callback Function turned into Promise

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: ":)",
      });
    } else {
      resolve("Thumbs up!");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// EXAMPLE 4

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

// EXAMPLE 5

function promiseAll(promises) {
  const outputs = [];
  let settledPromiseCounter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          outputs[i] = value;
          settledPromiseCounter++;
          if (settledPromiseCounter === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
}
