/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
    const indeces = []
    word.split("").forEach((letter, index) => letter == letter.toUpperCase() ? indeces.push(index) : null)
    return indeces
};