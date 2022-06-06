/*-------------------------------- Constants --------------------------------*/
import { aboutMeText, resumeHtml, contactHtml, workHtml,homeHtml } from "./data.js"
/*-------------------------------- Variables --------------------------------*/
/*------------------------ Cached Element References ------------------------*/
const aboutBtn = document.querySelector("#about")
const workBtn = document.querySelector("#work")
const resumeBtn = document.querySelector("#resume")
const contactBtn = document.querySelector("#contact")
const titleText = document.querySelector("#title")
const pageText = document.querySelector("#text-area")
const imageSpace = document.querySelector("#image-area")
const homeBtn = document.querySelector("#home-btn")
/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener("click", showAbout)
workBtn.addEventListener("click", showWork)
resumeBtn.addEventListener("click", showResume)
contactBtn.addEventListener("click", showContact)
homeBtn.addEventListener("click", homePage)
/*-------------------------------- Functions --------------------------------*/
function homePage() {
  resetFont()
  pageText.innerHTML =
    "Nick is a Houston, TX based software engineer and musician."
  titleText.textContent = "Nicholas Bailey"
  imageSpace.innerHTML = homeHtml
}
function showContact() {
  resetFont()
  contactBtn.style.fontSize = "4em"
  pageText.innerHTML = "Here's where to get in contact with me:"
  imageSpace.innerHTML = contactHtml
  titleText.textContent = ""
}
function showResume() {
  resetFont();
  resumeBtn.style.fontSize = "4em"
  pageText.innerHTML = ""
  imageSpace.innerHTML = resumeHtml
  titleText.textContent = ""
}
function showAbout() {
  resetFont();
  aboutBtn.style.fontSize = "4em"
  pageText.innerHTML = aboutMeText
  imageSpace.innerHTML = ""
  titleText.textContent = ""
}
function showWork() {
  resetFont();
  workBtn.style.fontSize = "4em"
  pageText.innerHTML = "Here are some projects I've done:"
  imageSpace.innerHTML = workHtml
  titleText.textContent = ""
}
function resetFont() {
  aboutBtn.style.fontSize = "2em"
  homeBtn.style.fontSize = "2em"
  contactBtn.style.fontSize = "2em"
  workBtn.style.fontSize = "2em"
  resumeBtn.style.fontSize = "2em"
}