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
const aboutBtn = document.querySelector("#about")
const workBtn = document.querySelector("#work")
const resumeBtn = document.querySelector("#resume")
const contactBtn = document.querySelector("#contact")
const titleText = document.querySelector("#title")
const pageText = document.querySelector("#text-area")
const imageSpace = document.querySelector("#image-area")
const homeBtn = document.querySelector("#home-btn")
const playBtn = document.getElementById('play')
const musicText = document.getElementById('music-text')
/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener("click", showAbout)
workBtn.addEventListener("click", showWork)
resumeBtn.addEventListener("click", showResume)
contactBtn.addEventListener("click", showContact)
homeBtn.addEventListener("click", homePage)
playBtn.addEventListener('click', playMusic)
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
  pageText.innerHTML = works.map(work => 
    `<div>
      <div>${work.title}</div>
      <div>${work.description}</div>
      <div> <a href ="${work.github}" target="_blank">GitHub</a></div>
      <div><a href="${work.deploy}" target="_blank"><img src="${work.image}" style='width: auto;height:auto;max-width:340px;max-height:340px;justify-content: center;text-align:center;'></a></div>
    </div>`
  ).join('')
}

function resetFont() {
  aboutBtn.style.fontSize = "2em"
  homeBtn.style.fontSize = "2em"
  contactBtn.style.fontSize = "2em"
  workBtn.style.fontSize = "2em"
  resumeBtn.style.fontSize = "2em"
}

function playMusic(){
  samsara.volume = .10
  if(samsara.paused){
    samsara.play()
    playBtn.innerText = '||'
    musicText.innerText = 'Now playing: Samsara by Angel Aura(my band!)'
  } else {
    samsara.pause()
    playBtn.innerHTML = '&#9658'
    musicText.innerText = ''
  }
}