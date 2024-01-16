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
    krby_liptov_mockup,
    angular,
    typescript,
    java,
    to_do_list_mockup,
    financial_dashboard_mockup,

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
            "During the second year, I expanded my programming knowledge in Java and simultaneously focused on completing various assignments.",
            "I devoted myself intensively to working on my 3D web portfolio, where I combined my skills in design and programming to visualize 3D components directly on my website.",
            "Over time, I acquired advanced skills in the Figma tool and utilized them to create sophisticated designs for web applications.",
            "During my studies, I acquainted myself with TypeScript, thereby expanding my programming knowledge.",
            "I learned to work effectively with Material Design 3, enabling me to create modern and user-friendly interfaces with stylistic consistency.",
            "I collaborated on a school project in Angular, where we used Tailwind CSS for efficient style management.",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Java",
        icon: java,
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
            "Jan is a great web developer and designer! His creative skills and attention to detail shine in every project. " +
            "Working with him is not just productive but also enjoyable. He's the go-to person for turning ideas into stunning websites. Highly recommended!",
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
const projects = [
    {
        name: "Krby Liptov",
        description:
            "A proposal for redesigning the website of Krby Liptov company, where customers can choose a product based on their needs," +
            " view a gallery of completed products, and place orders for services or products through an order form.",
        tags: [
            {
                name: "figma",
            },
        ],
        image: krby_liptov_mockup,
        source_code_link: "https://www.figma.com/file/wVAg6vecL2rnoU15sWGeA6/KRBY-LIPTOV?type=design&node-id=1004%3A3&mode=design&t=ZvhN1ldHPw6axjIJ-1",
    },
    {
        name: "To Do List",
        description:
            "This to-do list is a minimalist and intuitive application designed with Material Design 3 principles, " +
            "providing users with a seamless and visually pleasing task management experience.",
        tags: [
            {
                name: "figma",
            },
        ],
        image: to_do_list_mockup,
        source_code_link: "https://www.figma.com/file/WAimG2JgtXyeloyFpw73gI/Material-3-Design-Kit-(Community)?type=design&node-id=54722-24862&mode=design&t=oU3qLYYjItp7dFGz-0",
    },
    {
        name: "Financial Dashboard",
        description:
            "Transform your financial experience with this Figma-designed dashboard. This intuitive interface delivers a user-friendly platform to effortlessly track investments," +
            " monitor expenses, and make informed financial decisions.\n",
        tags: [
            {
                name: "figma",
            },
        ],
        image: financial_dashboard_mockup,
        source_code_link: "https://www.figma.com/file/wVAg6vecL2rnoU15sWGeA6/KRBY-LIPTOV?type=design&node-id=1004%3A3&mode=design&t=ZvhN1ldHPw6axjIJ-1",
    },
];


export {services, experiences, technologies, testimonials, projects};

