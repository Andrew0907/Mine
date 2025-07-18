import fpt from "../assets/images/fpt-telecom.png";
import freelancer from "../assets/images/freelancer.png";
import github from "../assets/images/github.png";
import hachinet from "../assets/images/hachinet.png";

import { blue, green, pink, yellow } from "../utils";

export const experiences = [
  {
    logo: hachinet,
    name: "Hachinet Software",
    joined: "04/2022",
    end: "Now",
    title: "Full Stack Developer<br />System Administrator",
    bio: "Developed and maintained various projects. Built Rest API's for various use cases. <br /><br />Maintained and monitored servers and services.",
    color: yellow,
  },
  {
    logo: github,
    name: "Open Source",
    joined: "02/2022",
    end: "05/2022",
    title: "Freelancer & Open Source Contributor",
    bio: "Worked on various projects from basic static sites to dynamic complex websites using many technologies. <br /><br />Contributed or created open-source projects on GitHub.",
    color: pink,
  },
  {
    logo: fpt,
    name: "FPT Telecom",
    joined: "12/2021",
    end: "02/2022",
    title: "Full Stack Developer",
    bio: "Collaborated with the team to develop and maintain the company's website. <br /><br />Developed and maintained the company's internal tools.",
    color: green,
  },
  {
    logo: freelancer,
    name: "Freelancer",
    joined: "06/2021",
    end: "12/2021",
    title: "Full Stack Developer & Tutor",
    bio: "Helped clients to build their websites and web applications or fix bugs. <br /><br />Worked as a tutor to help students learn programming or solve their problems.",
    color: blue,
  },
];
