const duplicateCount = (string) => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = string.toLowerCase().split("").sort();

  // this array will house the duplicated values so we can
  // get the length of it (or the number of duplicated characters).
  let newArray = [];

  // set a loop for the array
  for (i = 0; i < newString.length; i++) {
    // if the current element equals the following element the push it to the new array AND
    // ONLY if the new array doesn't already include the current element
    if (newString[i] === newString[i + 1] && !newArray.includes(newString[i])) {
      // push elements to new array
      newArray.push(newString[i]);
    }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length;
};
