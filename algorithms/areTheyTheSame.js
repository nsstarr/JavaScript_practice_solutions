// [Details]
// Given two array a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the “same” elements, with the same multiplicities. “Same” means, here, that the elements in b are the elements in a squared, regardless of the order.

// Example
// Valid arrays

// a = [121, 144, 19, 161, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
//   sort the numbers in ascending order
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
//   The every() method tests whether all elements in the array pass the test implemented by the provided function. 
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
