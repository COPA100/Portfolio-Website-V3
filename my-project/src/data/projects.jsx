import portfolioV3 from "../assets/portfolioV3.png";
import bookcase from "../assets/bookcase.png";

const projects = [
    {
        id: 1,
        title: "Portfolio Website V3",
        desc: "A personal portfolio showcasing projects, experience, and skills with a clean, responsive design, with an emphasis on reusable components",
        img: portfolioV3,
        tech: [
            "React.js",
            "Tailwind CSS"
        ],
        link: "https://github.com/COPA100/Portfolio-Website-V3",
    },
    {
        id: 2,
        title: "Bookcase",
        desc: "Built a simple book management system that stores data locally, giving me hands-on experience with state management and client-side persistence",
        img: bookcase,
        tech: [
            "HTML",
            "JavaScript",
            "Tailwind CSS"
        ],
        link: "https://github.com/COPA100/Bookcase",
    },
];

export default projects;
