//Check if a given string is an isogram

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
