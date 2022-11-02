function deepEquals(valueOne, valueTwo) {
  //compare primitives
  if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne === "number";
    const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === "number";

    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo;
    //special case: NaN is not equal to NaN
  }
  if (typeof valueOne !== typeof valueTwo) return false;

  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;
  if (valueOne === valueTwo) return true;


  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
        //recursively call deep equals
       if (!deepEquals(valueOne[i], valueTwo[i])) return false 
    }
    return true;
  }
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if(valueOneKeys.length !== valueTwoKeys.length) return false;
  if (!deepEquals(valueOneKeys, valueTwoKeys)) return true;

  for (let i = 0; i < valueOneKeys.length; i++) {
    const key = valueOneKeys[i]
    const valueOneValue = valueOne[key];
    const valueTwoValue = valueTwo[key];
    if(!deepEquals(valueOneValue, valueTwoValue)) return false;
  }


  return true;

}
