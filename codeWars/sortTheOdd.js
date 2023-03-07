//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const evenNumbers = []
  const oddNumbers = []
  const result = []
 for (i = 0; i < array.length; i++) {
   const number =  array[i]
    console.log(number)
   if (number % 2 ==0) {
     evenNumbers.push(number)
       }
   if (number % 2 !== 0) {
     oddNumbers.push(number)
   }
 }
 oddNumbers.sort((a,b) => a - b )
  for (let i = 0; i < array.length; i++) {
    const number =  array[i]
    if (number % 2 == 0) {
      result.push(evenNumbers.shift())
    } else {
      result.push(oddNumbers.shift())
    }
  }
  
  return result
}
