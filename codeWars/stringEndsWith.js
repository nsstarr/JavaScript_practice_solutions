// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


//1. substring() Approach 

function solution(str, ending){
  return str.substr(-ending.length) === ending
}

console.log(solution("sesame", "same"))

//2. endsWith() Approach

function solution2(str, ending){
  return str.endsWith(ending)
}

console.log(solution("sesame", "same"))