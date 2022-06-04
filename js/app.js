/*-------------------------------- Constants --------------------------------*/

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
  imageSpace.innerHTML =
    '<img src="./assets/GitHub.png" style ="width: auto;height: auto; padding-right: 10%;"><img src="./assets/linkedin.png" style="width: auto;height: auto;max-width: 128px;max-height:128px;><img src="./assets/gmail.jpeg" style="width: auto;height: auto;max-width: 200px;max-height:200px;">';
  titleText.textContent = "Contact";
}
function showResume() {
  pageText.innerHTML = "";
  imageSpace.innerHTML = "<p style ='text-align: left;grid-area: text-area;font-family: var(--sans-serif);font-size: 2em;font-weight: 400;padding-right: 5%;padding-top: 10%;padding-left: 1ch; max-width: 65ch;'<br />Currently: <br /> Attending General Assembly software engineering immersive bootcamp. Learning full-stack software development and design.<br /><br /> 2019-2022: <br />Medical Records Bookmarker at Veterans Evaluation Services. Assisted medical practitioners by providing condensed files of relevant medical information to expedite veteran disability claims. <br /><br />2017-2019: <br /> Banking industry. Worked as a teller and member service representative at a bank and a credit union.<br /></p>"
  titleText.textContent = "Resume";
}
function showAbout() {
  pageText.innerHTML =
    "Nice to meet you! I'm a musician currently attending a Software Engineering bootcamp at General Assembly. I love simple and efficient code, minimal and powerful design, and loud but pretty music. I always aim to make my projects accessible and inclusive. Please reach out on my contact page if you would like to know more!";
  titleText.textContent = "About me";
}
function showWork() {
  pageText.innerHTML = "Here are some projects I've done";
  imageSpace.innerHTML =
    '<a href="https://nicktactoe.netlify.app/" target="_blank"><img src ="./assets/tttImg.png" style="width: auto;height: auto;max-width: 500px;max-height:500px;"></a>';
  titleText.textContent = "Work";
}
