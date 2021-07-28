// * Found the top paid ✅ 
// * If multiple top-paid persons, return any of them ✅
// * If multiple top-paid persons, return all of them ✅
// * If salaries is empty, should return null ✅

let salaries = {
 "John": 100,
 "Pete": 300,
 "Mary": 250,
 "Walker": 300,
 "Juan": 900,
 "Moisés": 900,
 "Pastén": 900,
 "Castillo": 900,
 "no exist1": null,
 "no exist2": undefined,
 "no exist3": "",
};

let salariesEmpty = {
 "first": null,
 "second": null,
 "third": undefined,
 "four": undefined,
 five: "",
 six: NaN,
}

let foundTopPaidTogether = (arr) => { 
 for(let x in arr){
  if ((Number.isNaN(arr[x]) === Number.isNaN(NaN)) || typeof arr[x] !== "number"){
   return `Sorry, there is no salaries here to evaluate`;
  } else if (typeof arr[x] === "number" ) {
   
  let toArray = Object.entries(arr)
  let toOneDimension = toArray.flat(Infinity)
  let onlyNumbers = toOneDimension.filter(x => typeof x === "number")
  let foundMaxNumber = onlyNumbers.reduce((acc, val) => Math.max(acc,val))
  let namesTopPaided = [];
  
  for(let x in arr){
   if(foundMaxNumber === arr[x]){
    namesTopPaided.push(x)
   }
  }
  
  let toStringNamesTopPaided = namesTopPaided.toString()
  let removeCommas = toStringNamesTopPaided.replace(/,/g, ", ")
  let indexOfLastComma = removeCommas.lastIndexOf(",")
  
  
  String.prototype.replaceAt = function(index, replacement) {
   return (`${this.substr(0, index)} ${replacement}${this.substr(index + replacement.length)}`);
  }
  
  let employeesTopPaidedReturn = removeCommas.replaceAt(indexOfLastComma, "&")
    
  let toReturn = `Top paided employees: "${employeesTopPaidedReturn}", with: ${foundMaxNumber}`
  
  return toReturn
  } 
 }
}

console.log(foundTopPaidTogether(salaries));
/* 
Top paided employees: "Juan, Moisés, Pastén & Castillo", with: 900 
*/

console.log(foundTopPaidTogether(salariesEmpty));
/* 
Sorry, there is no salaries here to evaluate 
*/


/* 
*Code for change some specific character in string is from Cem Kalyoncu
URL: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
Title: How do I replace a character at a particular index in JavaScript?

That code have some issues, like if you use a character to big, will replace the rest of the string.

*/

let foundTopPaidAlone = (arr) => { 
 for(let x in arr){
  if ((Number.isNaN(arr[x]) === Number.isNaN(NaN)) || typeof arr[x] !== "number"){
   return `Sorry, there is no salaries here to evaluate`;
  } else if (typeof arr[x] === "number" ) {
   
  let toArray = Object.entries(arr)
  let toOneDimension = toArray.flat(Infinity)
  let onlyNumbers = toOneDimension.filter(x => typeof x === "number")
  let foundMaxNumber = onlyNumbers.reduce((acc, val) => Math.max(acc,val))
  
  for(let x in arr){
   if(foundMaxNumber === arr[x]){
    finalResult = `The mayor paid person is ${x}, with: ${foundMaxNumber}`
    break
   }
  }
  return finalResult 
  } 
 }
}

console.log(foundTopPaidAlone(salaries));
/* 
The mayor paid person is Juan, with: 900 
*/

console.log(foundTopPaidAlone(salariesEmpty));
/* 
Sorry, there is no salaries here to evaluate
*/