// import images
import Hero_person from "../src/assets/images/Hero/7AB291E5-A2C3-411F-97E1-A5EB2BD48767 (1).png";

import figma from "../src/assets/images/Skills/java.png";
import sketch from "../src/assets/images/Skills/sketch.png";
import ps from "../src/assets/images/Skills/spring-boot.png";
import reactjs from "../src/assets/images/Skills/react.png";
import nodejs from "../src/assets/images/Skills/angular.png";
import python from "../src/assets/images/Skills/python.png";

import services_logo1 from "../src/assets/images/Services/logo1.png";
import services_logo2 from "../src/assets/images/Services/logo2.png";
import services_logo3 from "../src/assets/images/Services/logo3.png";

import project1 from "../src/assets/images/projects/img1.png";
import project2 from "../src/assets/images/projects/img2.png";
import project3 from "../src/assets/images/projects/img3.png";
import person_project from "../src/assets/images/projects/person.png";

import avatar1 from "../src/assets/images/Testimonials/avatar1.png";
import avatar2 from "../src/assets/images/Testimonials/avatar2.png";
import avatar3 from "../src/assets/images/Testimonials/avatar3.png";
import avatar4 from "../src/assets/images/Testimonials/avatar4.png";

import Hireme_person from "../src/assets/images/Hireme/person.png";
import Hireme_person2 from "../src/assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Zamhar",
    LastName: "Raa'd",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Angular js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Spring Boot",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Css / Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "JavaScript / jQuery / Ajex",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mhmdzamhar@gmail.com",
        icon: GrMail,
        link: "mailto:mhmdzamhar@gmail.com",
      },
      {
        text: "+94 7694 32266",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "zamharrad",
        icon: BsInstagram,
        link: "https://www.instagram.com/zamharrad/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
