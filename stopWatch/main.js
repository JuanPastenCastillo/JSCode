let miliseconsDOOM = document.body.querySelector("#milisecons")
let seconsDOOM = document.body.querySelector("#secons")
let minutesDOOM = document.body.querySelector("#minutes")
let hoursDOOM = document.body.querySelector("#hours")
let daysDOOM = document.body.querySelector("#days")
let legendDOOM = document.body.querySelector(".legend")
let btnOffOn = document.querySelector(".offOn")
let resetBtn = document.body.querySelector(".reset")

let theFirstOne = 0
let secons = 0;
let minutes = 0;
let hours = 0;
let days = 0;

let stopWatch = function () {



 if (theFirstOne < 1000) {
  miliseconsDOOM.textContent = theFirstOne
  theFirstOne += 1
 } else {
  theFirstOne = 0
  secons += 1;
  seconsDOOM.textContent = secons
  miliseconsDOOM.textContent = theFirstOne
 }
 if (secons === 60) {
  minutes += 1
  minutesDOOM.textContent = minutes
  secons = 0
  seconsDOOM.textContent = secons
 }

 if (minutes === 60) {
  hours += 1
  hoursDOOM.textContent = hours
  minutes = 0;
  minutesDOOM.textContent = minutes
 }

 if (hours === 24) {
  days += 1
  daysDOOM.textContent = days
  hours = 0;
  hoursDOOM.textContent = hours
 }

 legendDOOM.children[0].textContent = `Days: ${days}`
 legendDOOM.children[1].textContent = `Hours: ${hours}`
 legendDOOM.children[2].textContent = `Minutes: ${minutes}`
 legendDOOM.children[3].textContent = `Secons: ${secons}`
}

stopWatch()




let startStopWatch;
function onoff() {
 currentvalue = btnOffOn.textContent;
 // console.log(currentvalue);
 if (currentvalue == "START") {
  btnOffOn.textContent = "STOP";
  btnOffOn.classList.add("stopBtn")
  btnOffOn.classList.remove("startBtn")
  
  // console.log(btnOffOn);
  
  startStopWatch = setInterval(stopWatch, 1)
  // setInterval(stopWatch, 1)
 } else {
  btnOffOn.textContent = "START";
  btnOffOn.classList.remove("stopBtn")
  btnOffOn.classList.add("startBtn")
  
  // clearInterval(setInterval(stopWatch, 1))
  clearInterval(startStopWatch)
 }
}

function resetStopWatch(){
 theFirstOne = 0
 secons = 0;
 minutes = 0;
 hours = 0;
 days = 0;
 
 miliseconsDOOM.textContent = theFirstOne
 seconsDOOM.textContent = secons
 minutesDOOM.textContent = minutes
 hoursDOOM.textContent = hours
 daysDOOM.textContent = days
 
 if(btnOffOn.textContent === "STOP"){
  onoff()
 }
}

btnOffOn.addEventListener("click", onoff)

resetBtn.addEventListener("click", resetStopWatch)
