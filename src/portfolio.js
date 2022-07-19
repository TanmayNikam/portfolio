/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Tanmay",
  logo_name: "Tanmay_N",
  nickname: "Tanmay",
  full_name: "Tanmay Nikam",
  subTitle: "Full Stack Developer, undergrad student. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1wzvSzVt-rGnj0sMAo9SFMPPiEfEddIGH/view?usp=sharing",
  mail: "mailto:tanmaynikam2002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/TanmayNikam",
  linkedin: "https://www.linkedin.com/in/tanmay-nikam-607993192/",
  gmail: "tanmaynikam2002@gmail.com",
  gitlab: "",
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building front end using ReactJS and Redux",
        "⚡ Creating application backend in Node, Express & Firebase",
        "⚡ Worked with NOSQL databases, mongodb and firestore",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const education = {
  education: [
    {
      title: "International institute of information technology (IIIT)",
      duration: "2019-2023",
      score: "8.4 CGPA",
      location_city: "Raipur",
      location_state: "Chhattisgarh",
      location_country: "India",
      description: "Bachelor of Technology",
      sec_details: "Computer Science & Engineering",
      color: "#fef54b",
      text: "#1d1d1d",
    },
    {
      title: "Pace jr. science college",
      duration: "2017-2019",
      score: "83.38%",
      location_city: "Mumbai",
      location_state: "Maharashtra",
      location_country: "India",
      description: "HSC (XII)",
      sec_details: "",
      color: "#fef54b",
      text: "#1d1d1d",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: " ",
  description: "I'm currently working as a SDE Intern at a startup.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "SDE Intern",
          company: "Stleath Startup",
          logo_path: "stealth_startup.png",
          duration: "April 2022 - Present",
          location: "Remote",
          description:
            "I worked on developing backend with firebase and node, and frontend with react and redux. Also worked on webhooks and API Integrations.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My best experience is to create web development projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // profile_image_path: "tanmay.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Medical Chatbot",
      url: "https://github.com/TanmayNikam/Chatbot",
      description:
        "Built a primitive chatbot to diagnoze users based on their symptoms with various ML classification algorithms. Built a primitive intention recogniser.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
          color: "#F7931E",
        },
      ],
    },
    {
      id: "1",
      name: "Fitness Logger",
      url: "https://github.com/TanmayNikam/exercise_tracker_app",
      description:
        "Allows user to manually keep logs of their fitness activity and nutrtion intake. Integrated exercieses and nutrition API. Implemented authentication with JWT.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
      ],
    },
    {
      id: "2",
      name: "Book-A-Book",
      url: "https://github.com/TanmayNikam/book-a-book",
      description:
        "Built a mern stack e-commerce application for books. Performed authentication using JWT, integrated braintree payment getway to process realtime payments.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
      ],
    },
    {
      id: "3",
      name: "Email Client",
      url: "https://github.com/TanmayNikam/Email-client",
      description:
        "Built an email client with java. Sent mails using JavaMail API and developed a GUI application using Java FX.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  education,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
