import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Frontend ",
    projects: 21,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Backend ",
    projects: 4,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Full Stack",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I love to build attractive and fascinating, static as well as dynamic websites. Reagarding the same, I can help you in building elegant and interesting websites for your work, business or anything else."
];

export const skills = [
  {
    place: "Frontend Development Skills",
    tenure: "Tech Stack",
    role: "React with Typescript",
    detail:
      "HTML, CSS, Saas, Bootstrap, TailWind, Javascript, JQuery, TypeScript, React",
  },
  {
    place: "Backend Development Skills",
    tenure: "Tech Stack",
    role: "Node & Express",
    detail:
      "Node.js and Express.js",
  },
   
    
  {
  place: "Database",
  tenure: "SQL & NoSQL",
  role: "MySQL & MongoDB",
  detail:
    "MySQL, PostgreSQL, MongoDB and Mongoose",
},

  {
    place: "Prgramming Languages and Tools",
    tenure: "Including Additional Stuffs",
    role: "Java & C++",
    detail:
      "Other Stuffs: Git, GitHub, VScode, Firebase, PostMan, RestAPIs, Authentication & Security, etc ",
  },

];

export const comments = [
  {
    name: "Abhinandan Pandey",
    post: "Creative Head",
    comment:
      "You always find a way to get it done – and done well. It's really admirable how you always see projects through from conception to completion.",
    img: "./people1.png",
  },
  {
    name: "Aditi Singh",
    post: "Web Developer",
    comment:
      "I'll say just amazing and fabulous. Really like the way you present your work.",
    img: "./people2.png",
  },
  
  {
    name: "Vishrut Verma",
    post: "Development Manager",
    comment:
      "Wow! Just when I thought your work couldn’t get any better. I was blown away by seeing your projects.",
    img: "./people3.png",
  },
  {
    name: "Ritik Rithalia",
    post: "Data Analyst",
    comment:
      "The app is easy to use and has substantially refined client communication..",
    img: "./people4.png",
  },
  {
    name: "Vivek Shukla",
    post: "Data Scientist",
    comment:
      "Your projects show that how comfortable you are with tackling new technologies, which makes you ideal for your role.",
    img: "./people5.jpeg",
  },
  {
    name: "Vinay Kumar Yadav",
    post: "Software Engineer",
    comment:
      "Your projects show the depth knowledge of your skills. Amazed to see your work.",
    img: "./people6.jpg",
  },
  {
    name: "Vinita Rai",
    post: "Project Manager",
    comment:
      "Really fantastic design looking fascinating to the eyes.",
    img: "./people7.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
