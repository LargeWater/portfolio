/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const aboutBtn = document.querySelector('#about')
const workBtn = document.querySelector('#work')
const resumeBtn = document.querySelector('#resume')
const contactBtn = document.querySelector('#contact')


/*----------------------------- Event Listeners -----------------------------*/
aboutBtn.addEventListener('click', handleClick)
workBtn.addEventListener('click', handleClick)
resumeBtn.addEventListener('click', handleClick)
contactBtn.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

function handleClick() {
  console.log('click')
}