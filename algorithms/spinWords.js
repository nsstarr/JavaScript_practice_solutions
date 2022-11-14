// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//1st Iteration
function spinWords(string) {
  const updated = [];
  const stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      let reversed = stringArray[i].split("").reverse().join("");
      updated.push(reversed);
    }
    if (stringArray[i].length < 5) {
      updated.push(stringArray[i]);
    }
  }
  return String(updated.join(" "));
}
