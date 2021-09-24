let seconsDOOM = document.body.querySelector("#secons")
let minutesDOOM = document.body.querySelector("#minutes")
let hoursDOOM = document.body.querySelector("#hours")
let legendDOOM = document.body.querySelector(".legend")
let btnOffOn = document.querySelector(".offOn")
let resetBtn = document.body.querySelector(".reset")
let titleTab = document.head.querySelector("title")

let secons = 0;
let minutes = 0;
let hours = 0;

titleTab.textContent = "00:00 - Juan Pastén Castillo";

let stopWatch = function () {
 if (secons === 0) {
  secons += 1
 }


 if (secons > 0 && secons < 10) {
  seconsDOOM.textContent = "0" + secons
  titleTab.textContent = `${hours}:0${minutes}:0${secons} - Juan Pastén Castillo`

  if (minutes > 9 && minutes < 60) {
   titleTab.textContent = `${hours}:${minutes}:0${secons} - Juan Pastén Castillo`
   if (hours > 0 && hours < 10) {
    titleTab.textContent = `${hours}:${minutes}:0${secons} - Juan Pastén Castillo`
   }
  }
 }


 if (secons > 9 && secons < 60) {
  seconsDOOM.textContent = secons
  titleTab.textContent = `${hours}:0${minutes}:${secons} - Juan Pastén Castillo`
  console.log(titleTab.textContent)

  if (minutes > 9 && minutes < 60) {
   titleTab.textContent = `${hours}:${minutes}:${secons} - Juan Pastén Castillo`
   console.log(titleTab.textContent)
  }
 }

 legendDOOM.children[0].textContent = `Secons: ${secons}`


 if (secons === 60) {
  minutes += 1

  if (minutes > 0 && minutes < 10) {
   minutesDOOM.textContent = "0" + minutes
   titleTab.textContent = `${hours}:0${minutes}:00 - Juan Pastén Castillo`
   console.log(titleTab.textContent)
  }
  if (minutes > 9 && minutes < 60) {
   minutesDOOM.textContent = minutes
   titleTab.textContent = `${hours}:${minutes}:00 - Juan Pastén Castillo`
   console.log(titleTab.textContent)
  }

  legendDOOM.children[1].textContent = `Minutes: ${minutes}`
  secons = 0
  legendDOOM.children[0].textContent = `Secons: ${secons}`
  seconsDOOM.textContent = "0" + secons
 }



 if (minutes === 60) {
  hours += 1
  if (hours > 0 && hours < 10) {
   hoursDOOM.textContent = "0" + hours
   titleTab.textContent = `${hours}:00:00 - Juan Pastén Castillo`
   console.log(titleTab.textContent)
  }
  if (hours > 9) {
   hoursDOOM.textContent = hours
   titleTab.textContent = `${hours}:00:00 - Juan Pastén Castillo`
   console.log(titleTab.textContent)
  }

  legendDOOM.children[2].textContent = `Hours: ${hours}`
  minutes = 0;
  legendDOOM.children[1].textContent = `Minutes: ${minutes}`
  minutesDOOM.textContent = "0" + minutes
 }
 secons += 1
}

legendDOOM.children[0].textContent = `Secons: ${secons}`
legendDOOM.children[1].textContent = `Minutes: ${minutes}`
legendDOOM.children[2].textContent = `Hours: ${hours}`


let startStopWatch;
function onoff() {
 currentvalue = btnOffOn.textContent;
 if (currentvalue == "START") {
  btnOffOn.textContent = "STOP";
  btnOffOn.classList.add("stopBtn")
  btnOffOn.classList.remove("startBtn")

  startStopWatch = setInterval(stopWatch, 1000)

 } else {
  btnOffOn.textContent = "START";
  btnOffOn.classList.remove("stopBtn")
  btnOffOn.classList.add("startBtn")
  clearInterval(startStopWatch)
 }
}

function resetStopWatch() {
 secons = 0;
 minutes = 0;
 hours = 0;

 seconsDOOM.textContent = "00"
 minutesDOOM.textContent = "00"
 hoursDOOM.textContent = "00"

 legendDOOM.children[0].textContent = `Secons: ${secons}`
 legendDOOM.children[1].textContent = `Minutes: ${minutes}`
 legendDOOM.children[2].textContent = `Hours: ${hours}`

 titleTab.textContent = `00:00 - Juan Pastén Castillo`

 if (btnOffOn.textContent === "STOP") {
  onoff()
 }
}

btnOffOn.addEventListener("click", onoff)

resetBtn.addEventListener("click", resetStopWatch)
