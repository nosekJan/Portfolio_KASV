import {
    nebula,
    blackhole,
    blackhole_exp,
    galaxy_exp,
    css,
    figma,
    git,
    html,
    javascript,
    mongodb,
    reactjs,
    mysql,
    threejs,
    tailwind,
    emo,
    samo,
    matus,
    planetemo,
    planetsamo,
    planetmatus,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experiences",
        title: "Experiences",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
const services = [
    {
        title: "Web Developer",
        icon: blackhole,
    },
    {
        title: "Figma Designer",
        icon: nebula ,
    },
];

const experiences = [
    {
        title: "First year at school",
        company_name: "Košice Academy of Software Development",
        icon: blackhole_exp,
        iconBg: "background-transparent",
        date: "September 2022 - June 2023",
        points: [
            "I learned the basics of developing applications using Java, HTML, CSS, and JavaScript.",
            "I was introduced to the basics of working with databases using MySQL and MongoDB.",
            "For my initial class project, I utilized PHP and Bootstrap technologies to create a web application.",
            "I learned the fundamentals of using Figma and successfully completed my first project using the platform.",
            "In my second class project, I took on the role of a project designer, creating the design using Figma, " +
            "and then implemented it with technologies like Next.js, while also enhancing my proficiency in TailwindCSS " +
            "and React to craft an interactive and visually appealing web application.",
            "At the end of my first year in school, I embarked on learning three.js with React, exploring the exciting realm of 3D graphics and interactive visuals for web development."
        ],
    },
    {
        title: "Second year at school",
        company_name: "Košice Academy of Software Development",
        icon: galaxy_exp,
        iconBg: "background-transparent",
        date: "September 2023 - Present",
        points: [
            "Coming soon ☺♥♥♥♥♥",
        ],
    },
];
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];
const testimonials = [
    {
        avatar: planetemo,
        testimonial:
            "Jan is a highly diligent individual, who attends all meetings on time, and can create designs that fit perfectly into the modern style, " +
            "all within a relatively short period. In my opinion, he belongs to the contemporary group of people and has the ability to captivate " +
            "the majority at first sight.",
        name: "Emo",
        role: "Student",
        school: "Košice Academy of Software Development",
        image: emo,
    },
    {
        avatar: planetsamo,
        testimonial:
            "Jano's passion for design and innate sense of style shine through in every project, leaving a lasting impression on everyone he collaborates with.",
        name: "Samo",
        role: "Student",
        school: "Košice Academy of Software Development",
        image: samo,
    },
    {
        avatar: planetmatus,
        testimonial:
            "Jano is an exceptionally funny and friendly person, recognized for bringing a contagious sense of humor to every interaction. " +
            "His warm and approachable nature makes him a beloved presence in any professional environment.",
        name: "Matus",
        role: "Student",
        school: "Košice Academy of Software Development",
        image: matus,
    },
];


export {services, experiences, technologies, testimonials, };

