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


export {services, experiences, technologies, };

