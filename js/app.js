/*-------------------------------- Constants --------------------------------*/
import { aboutMeText, resumeHtml, contactHtml } from "./data.js";
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const aboutBtn = document.querySelector("#about");
const workBtn = document.querySelector("#work");
const resumeBtn = document.querySelector("#resume");
const contactBtn = document.querySelector("#contact");
const titleText = document.querySelector("#title");
const pageText = document.querySelector("#text-area");
const imageSpace = document.querySelector("#image-area");
const homeBtn = document.querySelector("#home-btn")

/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener("click", showAbout);
workBtn.addEventListener("click", showWork);
resumeBtn.addEventListener("click", showResume);
contactBtn.addEventListener("click", showContact);
homeBtn.addEventListener("click", homePage)

/*-------------------------------- Functions --------------------------------*/
function homePage() {
  pageText.innerHTML =
    "Nick is a Houston, TX based software engineer and musician.";
  titleText.textContent = "Nicholas Bailey";
  imageSpace.innerHTML =
    '<img src ="./assets/profilepic.jpg" style="width: auto;height: auto;max-width: 350px;max-height:350px;">';
}

function showContact() {
  pageText.innerHTML = "Here's where to get in contact with me:";
  imageSpace.innerHTML = contactHtml;
  titleText.textContent = "Contact";
}
function showResume() {
  pageText.innerHTML = "";
  imageSpace.innerHTML = resumeHtml
  titleText.textContent = "Resume";
}
function showAbout() {
  pageText.innerHTML =
    aboutMeText
    imageSpace.innerHTML= ''
  titleText.textContent = "About me";
}
function showWork() {
  pageText.innerHTML = "Here are some projects I've done";
  imageSpace.innerHTML =
    '<a href="https://nicktactoe.netlify.app/" target="_blank"><img src ="./assets/tttImg.png" style="width: auto;height: auto;max-width: 350px;max-height:350px;"></a>';
  titleText.textContent = "Work";
}
