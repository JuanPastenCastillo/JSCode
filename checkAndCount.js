/*
*This code check the type of value that is inside of the array. 

-This code work for:
1) numbers
2) bigint
3) string
4) boolean (true or false)
5) null
6) undefined
7) NaN
8) array
9) object
10) symbol
11) function

-This code don't confusing:
1) numbers with NaN (and viceversa)
2) object with null (and viceversa)
3) array with object (despite an array is technically an object, this code recognize this difference)
*/


// *Array with 11 types of value
let myxedArray = [
 10,
 15n,
 "String",
 "String and number at the end 100",
 "200 number at beggining and string",
 "string and 300 number in the midle",
 "400 start and finish with number 400",
 "500",
 "",
 true,
 false,
 null,
 undefined,
 NaN,
 ["Second dimension of this array"],
 {TheKey: "This is a object"},
 Symbol("Unique"),
 (a, b) => {
  return a+b
 },
]

// *This code transform all the values to the type of value that it is in only one word. This doesn't work for NaN
let typeCheck = (value) =>{
 const return_value = Object.prototype.toString.call(value);
  // we can also use regex to do this...
  const type = return_value.substring(
           return_value.indexOf(" ") + 1, 
           return_value.indexOf("]"));
 let typeChecked = type.toLowerCase();
  
 return typeChecked;
}


// *This is the code to check what type of value are in array and count how many have of each one. Also show the index number where is found it
let checkAndCount = (arr) => {
 let acumulateNumber = 0;
 let acumulateBigInt = 0;
 let acumulateString = 0;
 let acumulateBoolean = 0;
 let acumulateNull = 0;
 let acumulateUndefined = 0;
 let acumulateNaN = 0;
 let acumulateArray = 0;
 let acumulateObject = 0;
 let acumulateSymbol = 0;
 let acumulateFunction = 0;
 let valueToDisplay;
 
 console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
 for(let x in arr){  
  if(Number.isNaN(arr[x]) === Number.isNaN(NaN)){
   valueToDisplay = "NaN"
   acumulateNaN++;
  } else if(typeCheck(arr[x]) === "number"){
   valueToDisplay = "number"
   acumulateNumber++
  } else if(typeCheck(arr[x]) === "bigint"){
   valueToDisplay = "bigint"
   acumulateBigInt++
  } else if(typeCheck(arr[x]) === "string"){
   valueToDisplay = "string"
   acumulateString++;
  } else if(typeCheck(arr[x]) === "boolean"){
   valueToDisplay = "boolean"
   acumulateBoolean++;
  } else if(typeCheck(arr[x]) === "null"){
   valueToDisplay = "null"
   acumulateNull++;
  } else if(typeCheck(arr[x]) === "undefined"){
   valueToDisplay = "undefined"
   acumulateUndefined++;
  } else if(typeCheck(arr[x]) === "array"){
   valueToDisplay = "array"
   acumulateArray++;
  } else if(typeCheck(arr[x]) === "object"){
   valueToDisplay = "object"
   acumulateObject++;
  } else if(typeCheck(arr[x]) === "symbol"){
   valueToDisplay = "symbol"
   acumulateSymbol++;
  } else if(typeCheck(arr[x]) === "function"){
   valueToDisplay = "function"
   acumulateFunction++;
  }
  console.log(`You have in the index ${x}, the value: ${valueToDisplay}.`)
  
 }
 console.log(`"■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■"
 You have ${acumulateNumber} for Number
 You have ${acumulateBigInt} for BigInt
 You have ${acumulateString} for String
 You have ${acumulateBoolean} for Boolean
 You have ${acumulateNull} for Null
 You have ${acumulateUndefined} for Undefined
 You have ${acumulateNaN} for NaN
 You have ${acumulateObject} for Object
 You have ${acumulateArray} for Array
 You have ${acumulateSymbol} for Symbol
 You have ${acumulateFunction} for Function
 `)
}

// *Call of the function
checkAndCount(myxedArray)