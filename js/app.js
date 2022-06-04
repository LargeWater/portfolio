/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const aboutBtn = document.querySelector('#about')
const workBtn = document.querySelector('#work')
const resumeBtn = document.querySelector('#resume')
const contactBtn = document.querySelector('#contact')
const titleText = document.querySelector('#title')
const pageText = document.querySelector('#text-area')
const imageSpace = document.querySelector('#image-area')


/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener('click', showAbout)
workBtn.addEventListener('click', showWork)
resumeBtn.addEventListener('click', showResume)
contactBtn.addEventListener('click', showContact)

/*-------------------------------- Functions --------------------------------*/
function homePage() {

}

function showContact() {
  pageText.innerHTML = "Here's where to get in contact with me:"
  titleText.textContent = 'Contact'
}
function showResume() {
  pageText.innerHTML = "Here's where to get in contact with me:"
  titleText.textContent = 'Resume'
}
function showAbout() {
  pageText.innerHTML = ""
  titleText.textContent = 'About me'
}
function showWork() {
  pageText.innerHTML = "Here are some projects I've done"
  imageSpace.innerHTML = '<a href="https://nicktactoe.netlify.app/" target="_blank"><img src ="./assets/tttImg.png"></a>'
  titleText.textContent = 'Work'
}

