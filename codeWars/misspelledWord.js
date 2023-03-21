/*
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/

function mispelled(word1, word2) {
  var differ = 0,
      largest = Math.max(word1.length, word2.length);
  for(var i = 0; i < largest; i++) {
    //check if index is not present
    if(word1.indexOf(word2[i]) == -1) {
      differ++;
    }
  }
  if(differ <= 1) {
    return true;
  } else {
    return false;
  }
}