const resumeHtml =
  "<p style ='text-align: left;grid-area: text-area;font-family: var(--sans-serif);font-size: ch;font-weight: 400;padding-right: 5%;padding-top: 10%;padding-left: 1ch;padding-bottom: 0;max-width: 65ch;'<br />Currently: <br /> Attending General Assembly software engineering immersive bootcamp. Learning full-stack software development and design, including HTML, CSS, and Javascript.<br /><br /> 2019-2022: <br />Medical Records Bookmarker at Veterans Evaluation Services. Assisted medical professionals by providing condensed files of relevant medical information to expedite veteran disability claims. <br /><br />2017-2019: <br /> Banking industry. Worked as a teller at a bank, and a member service representative at a credit union.<br /></p>";

const aboutMeText =
  `Nice to meet you! I'm a musician currently attending a Software Engineering bootcamp at General Assembly. I love simple and efficient code, minimal and powerful design, and loud but pretty music. I always aim to make my projects accessible and inclusive. Please reach out on my contact page if you would like to know more!`;

const contactHtml =
  '<a href="https://www.github.com/largewater" target="_blank"><img src="./assets/images/GitHub.png" style ="width: auto;height: auto;"></a><a href="https://www.linkedin.com/in/largewater/" target="_blank"><img src="./assets/images/linkedin.png"></a><a href="mailto:nickcyg1992@gmail.com"><img src="./assets/images/gmail.png"</a><a href="https://www.instagram.com/large_beer/?hl=en" target="_blank"><img src="./assets/images/ig.png"</a>';

const homeHtml =
  '<img src ="./assets/images/profilepic.jpg" style="width: auto;height: auto;max-width: 450px;max-height:450px;">';

const works = [
  {
    title: "Tic-Tac-Toe",
    image: "./assets/images/tttimg.png",
    description: "A simple Tic Tac Toe game coded in Javascript, HTML and CSS.",
    github: "https://github.com/LargeWater/ttt-weekend",
    deploy: "https://nicktactoe.netlify.app/",
  },
];

export { aboutMeText, resumeHtml, contactHtml, homeHtml, works };
