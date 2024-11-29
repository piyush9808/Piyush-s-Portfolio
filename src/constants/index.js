import { logo, meta, shopify, starbucks,kaash, tesla } from "../assets/images";
import {

    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Kaash Light Enginners",
        icon: kaash,
        iconBg: "#000000",
        date: "April 2023 - October 2023",
        points: [
            "Led primary website development, significantly expanding the customer base.",
            "Developed a sophisticated carbon calculator with dynamic fields and decreasing input levels using jQuery.",
            "Utilized a versatile toolkit, including Three.js, Neon Cursor, jQuery, JavaScript, React.js, and CSS.",
            "Enhanced user experience with interactive elements such as Three.js, Neon Cursor, and jQuery.",
            "Successfully summarized complex data into concise bullet points, highlighting key project achievements."
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Metaverse Ventures Private Limited",
        icon: kaash,
        iconBg: "#fbc3bc",
        date: "March 2024 - April 2024",
        points: [
          " Redesign User Interface: Redesigned the user interface for enhanced front-end experience, improving usability and visual appeal.",
          " Established Direct OTC Trading Mechanism: Established a direct mechanism for OTC trading transactions,ensuring secure and transparent trades between parties.",
          " Created Integrated Marketplaces: Created integrated marketplaces encompassing DEX, cross-chain OTC, and direct OTC functionalities, providing a comprehensive trading solution.",
          " Website Frontend Development: Developed Frontend of Website and implemented all the functions to fetch datafrom backend and to show all the transactions and developed overall ui of the website."
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CryptoCurrency Price Screener',
        description:  'Cryptomart, a leading cryptocurrency project, is powered by React JS (CRA) for efficient development and Tailwind CSS for a user-friendly, responsive interface. Cryptomart is a dynamic, user-centric solution, uniting technology and design for comprehensive cryptocurrency tracking. Recharts and CoinGecko APIs further solidify Cryptomart standing in the evolving cryptocurrency landscape.',
       
        link: 'https://cypto-mart.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'ChainHouse:Blockchain Land Registry Marketplace',
        description: 'Developed a robust, Ethereum-based land registration system that facilitates secure land transactions and ownership transfers while optimizing efficiency and transparency through smart contract technology.',
       
        link: 'https://chainhouse-steel.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'BrainAI-AI Services Landing page',
        description: 'Designed and built a website for ai services company with parallax effect and dynamic effects of components and elements.',
        link: 'https://brainai-iota.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'QuestionAI',
        description: 'Create mock interview sessions tailored to your professional experience,get instant feedback on your answers along with correct responses',
        link: 'https://questionai-one.vercel.app/sign-in?redirect_url=https%3A%2F%2Fquestionai-one.vercel.app%2F',
    },
//     {
//         iconUrl: estate,
//         theme: 'btn-back-black',
//         name: 'Real-Estate Application',
//         description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
//         link: 'https://github.com/adrianhajdin/projects_realestate',
//     },
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
]
