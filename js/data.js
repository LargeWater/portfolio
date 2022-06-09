const resumeHtml =
  "<p style ='text-align: left;grid-area: text-area;font-family: var(--sans-serif);font-size: ch;font-weight: 400;padding-right: 5%;padding-top: 10%;padding-left: 1ch;padding-bottom: 0;max-width: 65ch;>'<br />Currently: <br /> Attending General Assembly software engineering immersive bootcamp. Learning full-stack software development and design, including HTML, CSS, Javascript, and more.<br /> <a href='./assets/pdfs/resume.pdf'>Here is my previous experience</a></p>";

const aboutMeText =
  `Nice to meet you!<br /> I'm a musician currently attending a Software Engineering bootcamp at General Assembly.<br /> I love simple and efficient code, minimal and powerful design, and loud but pretty music.<br /> I always aim to make my projects accessible and inclusive.<br /><br /> Please reach out on my contact page if you would like to connect or know more!<br /> <br />If you click the play button on the left, you can hear a song from my band, Angel Aura.</p>`;

const contactHtml =
  '<a href="https://www.github.com/largewater" target="_blank"><img src="./assets/images/GitHub.png" style ="width: auto;height: auto;"></a><a href="https://www.linkedin.com/in/largewater/" target="_blank"><img src="./assets/images/linkedin.png"></a><a href="mailto:nickcyg1992@gmail.com"target="_blank"><img src="./assets/images/gmail.png"</a><a href="https://www.instagram.com/large_beer/?hl=en" target="_blank"><img src="./assets/images/ig.png"</a>';

const homeHtml =
  '<img src ="./assets/images/profilepic.png" style="width: auto;height: auto;max-width: 450px;max-height:450px;filter: invert(18%);">';

const works = [
  {
    title: "Tic-Tac-Toe:",
    image: "./assets/images/tttimg.png",
    description: "A simple Tic Tac Toe game coded in Javascript, HTML and CSS.",
    github: "https://github.com/LargeWater/ttt-weekend",
    deploy: "https://nicktactoe.netlify.app/",
  },
  // {
  //   title: 'placeholder',
  //   image: '',
  //   description: "lorem as well as ipsum, not to mention dolor sit amet.",
  //   github: '#',
  //   deploy: '#',
  // },
]

export { aboutMeText, resumeHtml, contactHtml, homeHtml, works };
