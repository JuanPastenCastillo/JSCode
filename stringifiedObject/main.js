let a = [
 {
  "name": "Lindy",
  "breed": "Cymric",
  "color": "white",
  "kittens": [
   {
    "name": "Percy",
    "gender": "m"
   },
   {
    "name": "Thea",
    "gender": "f"
   },
   {
    "name": "Annis",
    "gender": "f"
   }
  ]
 },
 {
  "name": "Mina",
  "breed": "Aphrodite Giant",
  "color": "ginger",
  "kittens": [
   {
    "name": "Doris",
    "gender": "f"
   },
   {
    "name": "Pickle",
    "gender": "f"
   },
   {
    "name": "Max",
    "gender": "m"
   }
  ]
 },
 {
  "name": "Antonia",
  "breed": "Ocicat",
  "color": "leopard spotted",
  "kittens": [
   {
    "name": "Bridget",
    "gender": "f"
   },
   {
    "name": "Randolph",
    "gender": "m"
   }
  ]
 },
 {
  "name": "Gata",
  "breed": "From my mother",
  "color": "black and white",
  "kittens": [{
   "name": "Brigito",
   "gender": "m",
  }
  ]
 }
]

let tryIt = JSON.stringify(a);
let theSame = JSON.parse(tryIt)
// console.dir(theSame);

const section = document.querySelector('section');
const header = document.querySelector('header');

let titleH1 = document.createElement('h1');
titleH1.textContent = "Display all the information from an object stringified"

let titleOfPara1 = document.createElement('h2');
let para1 = document.createElement('p');

let titleOfPara2 = document.createElement('h2');
let para2 = document.createElement('p');

let titleOfPara3 = document.createElement('h2');
let para3 = document.createElement('p');
let para3_0 = document.createElement('p');


let titleOfPara4 = document.createElement('h2');
let para4 = document.createElement('p');

let titleOfPara5 = document.createElement('h2');
let para5 = document.createElement('p');

let titleOfPara6 = document.createElement('h2');
let para6 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

// *This is part of the practice of MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON
// fetch('sample.json')
//  .then(response => response.text())
//  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
 let male = 0;
 let totalFemale = 0;
 let noHaveKittens = "";

 let parsedObject = JSON.parse(catString)
 // console.dir(parsedObject);
 // console.log(parsedObject.length);


 let lengthOfParsedObject = parsedObject.length;

 // *Mother name here
 let namesOfMotherCats = motherInfo;
 for (let x = 0;x < lengthOfParsedObject;x++) {
  namesOfMotherCats += `${parsedObject[x].name}, `
 }
 namesOfMotherCats = namesOfMotherCats.replace(/,\s*$/, "").replace(/,(?=[^,]*$)/, ' and') + ".";
 motherInfo = namesOfMotherCats
 console.log(motherInfo);
 console.log("■■■■■■■■■■■■■■■■■■■");

 //*Name, breed and color of every mother
 let bredAndColorOfMothers = "";
 for (let i = 0;i < lengthOfParsedObject;i++) {
  bredAndColorOfMothers += `
  The mother ${parsedObject[i].name} are "${parsedObject[i].breed}", in color "${parsedObject[i].color.charAt(0).toUpperCase() + parsedObject[i].color.slice(1)}".
   `
 }
 console.log(bredAndColorOfMothers);
 console.log("■■■■■■■■■■■■■■■■■■■");

 // *The total of kittens, how many male, female and and wich no have kittens
 let totalOfKittensDOOM = ""
 for (let x = 0;x < lengthOfParsedObject;x++) {

  if (parsedObject[x].kittens.length > 0) {

   for (let i = 0;i < parsedObject[x].kittens.length;i++) {

    if (parsedObject[x].kittens[i].gender === "m") {

     male += 1

    } else if (parsedObject[x].kittens[i].gender === "f") {
     totalFemale += 1

    } else {
     noHaveKittens += parsedObject[x].name
    }
   }
  }
 }

 totalOfKittensDOOM += `
 The total of kittens are: ${male + totalFemale}.
 The total of male kittens are: ${male}.
 The total of male kittens are: ${totalFemale}
 `
 console.log(`The total of kittens are:`, male + totalFemale);
 console.log(`The total of male kittens are: `, male);
 console.log(`The total of male kittens are: `, totalFemale);

 let whosDontHaveKittens = "";
 if (noHaveKittens.length > 0) {
  // console.log(`Tha cats: "${noHaveKittens}", dont have kittens`);
  whosDontHaveKittens += `Tha cats: "${noHaveKittens}", dont have kittens`
 } else {
  // console.log(`Every in the list have kittens`);
  whosDontHaveKittens = `Every in the list have kittens`;
 }
 console.log("■■■■■■■■■■■■■■■■■■■");


 // *How many kittens have every mother
 let howManyKittensForEveryMother = ""
 for (let x = 0;x < lengthOfParsedObject;x++) {
  if (parsedObject[x].name) {
   // console.log(`${parsedObject[x].name} have ${parsedObject[x].kittens.length} kittens`);
   howManyKittensForEveryMother += `
   ${parsedObject[x].name} have ${parsedObject[x].kittens.length} kittens. `
  }
 }
 console.log(howManyKittensForEveryMother);
 console.log("■■■■■■■■■■■■■■■■■■■");

 // * What are the name of the cats of every mother
 let mothersAndKittens = {}
 for (let x = 0;x < lengthOfParsedObject;x++) {
  for (let i = 0;i < parsedObject[x].kittens.length;i++) {
   mothersAndKittens[parsedObject[x].name] += `, ${parsedObject[x].kittens[i].name}`
  }
 }

 let mapToNamesOfKittens = new Map(Object.entries(mothersAndKittens))

 let noUndefinedKittens = []
 for (let x of mapToNamesOfKittens) {
  noUndefinedKittens.push(x[1].replace(/undefined, /, ""))
 }
 let mothersNames = []
 for (let x of mapToNamesOfKittens) {
  mothersNames.push(x[0])
 }

 let finalObjectMothersAndKittensName = {}
 for (let x = 0;x < mothersNames.length;x++) {
  finalObjectMothersAndKittensName[mothersNames[x]] = noUndefinedKittens[x]
 }

 let namesOfKittensOfMothers = ""
 for (let x in finalObjectMothersAndKittensName) {
  // console.log(`The mother cat: "${x}" have the follow kittens: "${finalObjectMothersAndKittensName[x].replace(/,(?=[^,]*$)/, ' and') + "."}"`);
  namesOfKittensOfMothers += `
  The mother cat: "${x}" have the follow kittens: "${finalObjectMothersAndKittensName[x].replace(/,(?=[^,]*$)/, ' and') + "."}"`

 }

 console.log(namesOfKittensOfMothers);
 console.log("■■■■■■■■■■■■■■■■■■■");


 // * Gender of kittens of evert mother
 let theGenderOfKittens = {}
 for (let x = 0;x < lengthOfParsedObject;x++) {
  for (let i = 0;i < parsedObject[x].kittens.length;i++) {
   theGenderOfKittens[parsedObject[x].name] += `, ${parsedObject[x].kittens[i].gender}`
  }
 }

 let mapToGenderOfKittens = new Map(Object.entries(theGenderOfKittens))

 let noUndefinedGenderKittens = []
 for (let x of mapToGenderOfKittens) {
  noUndefinedGenderKittens.push(x[1].replace(/undefined, /, ""))
 }
 let mothersNamesGender = []
 for (let x of mapToGenderOfKittens) {
  mothersNamesGender.push(x[0])
 }

 let objectMothersAndKittensGender = {}
 for (let x = 0;x < mothersNames.length;x++) {
  objectMothersAndKittensGender[mothersNamesGender[x]] = noUndefinedGenderKittens[x]
 }

 let mapMothersAndKittensGender = new Map(Object.entries(objectMothersAndKittensGender))

 let countGender = []
 for (let x of mapMothersAndKittensGender.values()) {
  countGender.push(x)
 }

 let howManyMaleAndFemale = {}
 for (let x = 0;x < countGender.length;x++) {
  if (countGender[x]) {
   howManyMaleAndFemale[mothersNamesGender[x]] = `have ${(countGender[x].match(/m/g) || []).length} males and ${(countGender[x].match(/f/g) || []).length} females kittens`
  }
 }

 let howManyMaleAndFemaleDOOM = ""
 for (let x in howManyMaleAndFemale) {
  // console.log(`${x} ${howManyMaleAndFemale[x]}`);
  howManyMaleAndFemaleDOOM += `
  ${x} ${howManyMaleAndFemale[x]}.`
 }
 console.log(howManyMaleAndFemaleDOOM);
 console.log("■■■■■■■■■■■■■■■■■■■");

 titleOfPara1.textContent = "Mother's names"
 para1.textContent = motherInfo; // 

 titleOfPara2.textContent = "Mother's info"
 para2.textContent = bredAndColorOfMothers;

 titleOfPara3.textContent = "Total of kittens"
 para3.textContent += totalOfKittensDOOM;
 para3_0.textContent += whosDontHaveKittens;

 titleOfPara4.textContent = "How much kittens have every Mother"
 para4.textContent = howManyKittensForEveryMother;

 titleOfPara5.textContent = "Names of kittens of every Mother"
 para5.textContent = namesOfKittensOfMothers;

 titleOfPara6.textContent = "How much of every gender have every Mother"
 para6.textContent = howManyMaleAndFemaleDOOM;
}

String.prototype.replaceAt = function (index, replacement) {
 return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

displayCatInfo(JSON.stringify(a))

header.appendChild(titleH1)

section.appendChild(titleOfPara1)
section.appendChild(para1);

section.appendChild(titleOfPara2)
section.appendChild(para2);

section.appendChild(titleOfPara3)
section.appendChild(para3);
section.appendChild(para3_0);

section.appendChild(titleOfPara4)
section.appendChild(para4);

section.appendChild(titleOfPara5)
section.appendChild(para5);

section.appendChild(titleOfPara6)
section.appendChild(para6);