/*-------------------------------- Constants --------------------------------*/
import {
  aboutMeText,
  resumeHtml,
  contactHtml,
  homeHtml,
  works,
} from "./data.js"
/*-------------------------------- Variables --------------------------------*/
/*------------------------ Cached Element References ------------------------*/
const samsara = new Audio('./assets/audio/samsara.mp3')
const hourglass = new Audio('./assets/audio/hourglass.mp3')
const aboutBtn = document.querySelector("#about")
const workBtn = document.querySelector("#work")
const resumeBtn = document.querySelector("#resume")
const contactBtn = document.querySelector("#contact")
const titleText = document.querySelector("#title")
const pageText = document.querySelector("#text-area")
const imageSpace = document.querySelector("#image-area")
const homeBtn = document.querySelector("#home-btn")
const samBtn = document.getElementById('samsara')
const hourBtn = document.getElementById('hourglass')
/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener("click", showAbout)
workBtn.addEventListener("click", showWork)
resumeBtn.addEventListener("click", showResume)
contactBtn.addEventListener("click", showContact)
homeBtn.addEventListener("click", homePage)
/*-------------------------------- Functions --------------------------------*/
function homePage() {
  resetFont();
  homeBtn.style.fontSize = "3em"
  pageText.innerHTML =
    "Nick is a Houston, TX based software engineer and musician."
  titleText.textContent = "Nicholas Bailey"
  imageSpace.innerHTML = homeHtml
}
function showContact() {
  resetFont();
  contactBtn.style.fontSize = "3em"
  pageText.innerHTML = "Here's where to get in contact with me:"
  imageSpace.innerHTML = contactHtml
  titleText.textContent = ""
}
function showResume() {
  resetFont();
  resumeBtn.style.fontSize = "3em"
  pageText.innerHTML = resumeHtml
  imageSpace.innerHTML = ""
  titleText.textContent = ""
}
function showAbout() {
  resetFont();
  aboutBtn.style.fontSize = "3em"
  pageText.innerHTML = aboutMeText
  imageSpace.innerHTML = ''
  titleText.textContent = ""
}

function showWork() {
  resetFont();
  workBtn.style.fontSize = "3em"
  imageSpace.innerHTML = ""
  titleText.textContent = ""
  works.map(({ title, image, description, github, deploy }) => {
    pageText.innerHTML = `<div>
      <div>${title}</div>
      <div>${description}</div>
      <div> <a href ="${github}" target="_blank">GitHub</a></div>
      <div><a href="${deploy}" target="_blank"><img src="${image}" style='width: auto;height:auto;max-width:340px;max-height:340px;'></div>
    </div>`
  })
}

function resetFont() {
  aboutBtn.style.fontSize = "2em"
  homeBtn.style.fontSize = "2em"
  contactBtn.style.fontSize = "2em"
  workBtn.style.fontSize = "2em"
  resumeBtn.style.fontSize = "2em"
}

samBtn.addEventListener('click', function(evt){
  samsara.volume = .10
  if(samsara.paused){
    samsara.play()
    samBtn.innerText = 'Pause'
  } else {
    samsara.pause()
    samBtn.innerText = 'Play Samsara'
  }
  if(hourglass.play()){
    hourglass.pause()
    hourBtn.innerText = 'Play Hourglass'
  }
})

hourBtn.addEventListener('click', function(evt){
  hourglass.volume = .10
  if(hourglass.paused){
    hourglass.play()
    hourBtn.innerText = 'Pause'
  } else {
    hourglass.pause()
    hourBtn.innerText = 'Play Hourglass'
  }
  if(samsara.play()){
    samsara.pause()
    samBtn.innerText = 'Play Samsara'
  }
})