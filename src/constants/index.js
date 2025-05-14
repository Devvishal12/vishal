const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },

];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/java.png",
    },
    {
        imgPath: "/images/logos/Nextjs1.png",
    },
    {
        imgPath: "/images/logos/genAI.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/project.png",
        title: "Academic Projects",
        desc: "Developed 10+ web apps, including a full-stack e-commerce platform.",
    },
    {
        imgPath: "/images/code1.png",
        title: "Programming Skills",
        desc: "Proficient in Java, Python, JavaScript, and React, with 200+ hours of coding.",
    },
    {
        imgPath: "/images/cer.png",
        title: "Certifications",
        desc: "Earned certifications in Full-Stack Development and Data Structures from Coursera.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React ",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python ",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend ",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: " Three.js",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        keyAchievement:
            "Developed a responsive web application that improved user engagement by 20% during the internship.",
        imgPath: "/images/code-development.png",
        logoPath: "/images/css.svg",
        title: "Web Development Intern",
        date: "June 2024 - August 2024",
        responsibilities: [
            "Assisted in building and testing frontend features for a company website using HTML, CSS, and JavaScript.",
            "Collaborated with senior developers to implement UI/UX designs.",
            "Optimized web pages for faster load times and better responsiveness.",
        ],
    },
    {
        keyAchievement:
            "Created a student management system that streamlined data handling, earning top marks in project evaluation.",
        imgPath: "/images/sql.png",
        logoPath: "/images/php.svg",
        title: "BCA Academic Project",
        date: "January 2023 - June 2023",
        responsibilities: [
            "Designed and developed a student management system using PHP and MySQL.",
            "Integrated frontend and backend components for seamless data flow.",
            "Presented the project to faculty, receiving positive feedback for functionality and design.",
        ],
    },
    {
        keyAchievement:
            "Delivered a Web app prototype that secured client approval for further development funding.",
        imgPath: "/images/api.png",
        logoPath: "/images/react.svg",
        title: "Freelance Web App Developer",
        date: "March 2025 - May 2025",
        responsibilities: [
            "Developed a cross-platform mobile app prototype using React for a local startup.",
            "Integrated REST APIs to fetch and display dynamic content.",
            "Conducted user testing to refine app features based on feedback.",
        ],
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/vishal-r-139352276/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    expCards,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};