AOS.init();

//  Work experience cards
const resumeSection = document.querySelector(".resume-section");
const resumeLink = "https://drive.google.com/file/d/1UZ7eLEOvLzVttgFJp9CWPH2Sp52zFNIC/view?usp=drive_link";

resumeSection.innerHTML = `
    <div class="resume-link">
        <a href="${resumeLink}" target="_blank">View Resume</a>
    </div>
`;

// JavaScript to hide the Resume section on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      resumeSection.style.display = 'none';
  } else {
      resumeSection.style.display = 'block';
  }
});

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: " Industrial Training",
    cardImage: "assets/images/experience-page/madetoureasy.png",
    place: "Made Tour Easy",
    time: "(June, 2023 - July,2023)",
    desp: "Implemented AI/ML/DL use cases, developed models in Python and Java, and explored LLMs",
  },
  {
    title: "Blockchain Developer",
    cardImage: "assets/images/experience-page/time_chain_lab.jpg",
    place: "Contributor @TSOC'23",
    time: "(Mar - Aug, 2023)",
    desp: "<li> As a TSOC blockchain developer, I architect decentralized solutions for secure and transparent transactions.</li> <li> Leveraging TSOC's innovative blockchain technology, I develop smart contracts and implement consensus algorithms.</li> <li> My role involves optimizing blockchain performance and ensuring compliance with industry standards for seamless integration.</li>"
  },
  // {
    // title: "Research Intern",
    // cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    // place: "IIT, Bombay",
    // time: "(Dec, 19 - Jan, 20)",
    // desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "ByteVerse",
    subtitle: "Participated",
    image: "assets/images/experience-page/ByteVerse.jpg",
    desp: "Participated in a college hackathon as part of a team and successfully built a mental health website called UR NORMAL.",
    href: "https://byteverse-nitp.vercel.app/about-us",
  },
  {
    title: "Smart India Hackathon",
    subtitle: "Participated",
    image: "assets/images/experience-page/smart_india_hackthon.jpg",
    desp: "Smart India Hackathon 2023 is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.",
    href: "https://www.sih.gov.in/sih2023",
  },
  {
    title: "HackRx 4.0",
    subtitle: "Participated",
    image: "assets/images/experience-page/HackRx4.0.png",
    desp: "HackRx is the Annual Hackathon hosted by Bajaj Finserv Group where you get a stage for competing against the brightest of geeks, while being mentored by top-developer.",
    href: "https://hackrx.in/",
  },
  // {
  //   title: "Elevate Tech",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/elevate.png",
  //   desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  //   href: "https://elevatetech.codes/",
  // },
  // {
  //   title: "PitchTeen",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/pitchteen.png",
  //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  //   href: "https://www.linkedin.com/company/pitchteen/about/",
  // },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  //   href: "https://hackasolution.devpost.com/",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
