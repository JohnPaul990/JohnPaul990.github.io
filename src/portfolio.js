/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-17423852-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "John Paul Robert Jovito",
  logo_name: "John",
  nickname: "John Paul",
  full_name: "John Paul Robert Jovito",
  subTitle: "FullStack, Blockchain Enthusiast. Always learning.",
  resumeLink: ":javascript",
  mail: "mailto:johnjovito990@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/AllDayDev0x",
  linkedin: "https://www.linkedin.com/in/john-jovito-a02aa3315/",
  gmail: "johnjovito990@gmail.com",
  twitter: "https://x.com/JohnJovito85528",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
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
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "Blockchain Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of Developering Smart Contracts with several frameworks like Hardhat, Truffle, and familiar with tools like Remix and Ganache ",
        "⚡ Well-versed in most usefule ERC/EIPs such as ERC20 / ERC721 / ERC1155 and also EIP712 / EIP1167",
        "⚡ Writing Smart contract and Well-Versed in ERC/EIP ",
        "⚡ Experience with crypto bots like frontrunning, backrunning, sandwitch bot, arbitrage bot, flashbot, and sniping bot",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Web3",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
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
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
   
  ],
};

const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Web, Full Stack and Blockchain role",
  description:
    "I've worked on several positions from web development role to Blockchain role, I'm actively looking for remote Full-Stack & Blockchain Position",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Blockchain Dapp projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const web_projects = {
  data: [
    {
      name: "AI Voice Conversion",
      url: "https://revocalize.ai/",
      description:
        "Create studio-quality AI voices in one-click, or choose from officially licensed AI voice models.",
      image: "revocalize.png",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "TypesScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Veil Exchange",
      url: "https://veil.exchange/",
      description: "Privacy Driven Crypto Exchange. No sign-up or limits",
      image: "veil.png",
      languages: [
        {
          name: "Node.js",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "Golang",
          iconifyClass: "skill-icons:golang",
        },

        {
          name: "TypesScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },

        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },

    {
      name: "Fitpulse.AI",
      url: "https://fitpulse.ai/",
      description:
        "AI-powered fitness assistant based on cutting-edge GPT technology",
      image: "fitpulse.png",
      languages: [

        {
          name: "NEXT",
          iconifyClass: "skill-icons:nextjs-dark",
        },
        {
          name: "TypesScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "jQuery",
          iconifyClass: "simple-icons:jquery",
        },
      ],
    },

    {
      name: "Boom Swap",
      url: "https://boomswap.finance",
      description: "Boomswap enables you to trade tokenised cash, and other real world assets of emerging markets",
      image: "boomswap.png",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "Next.js",
          iconifyClass: "skill-icons:nextjs-dark",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos:ethereum",
        },
      ],
    },
    {
      name: "ETH Token Launcher with Bundle",
      url: "https://eth-bundler.com/",
      description:
        "Opens trading and simultaneously sends multiple swap transactions to the block builder in a bundle",
      image: "eth_bundler.png",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "skill-icons:postgresql-light",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws",
        },
       
      ],
    },
  
  ],
};
const blockchain_projects = {
  data: [
    {
      name: "Boom Swap",
      url: "https://boomswap.finance",
      description: "Boomswap enables you to trade tokenised cash, and other real world assets of emerging markets",
      image: "boomswap.png",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "Next.js",
          iconifyClass: "skill-icons:nextjs-dark",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos:ethereum",
        },
      ],
    },
    {
      name: "ETH Token Launcher with Bundle",
      url: "https://eth-bundler.com/",
      description:
        "Opens trading and simultaneously sends multiple swap transactions to the block builder in a bundle",
      image: "eth_bundler.png",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:nodejs-dark",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "skill-icons:postgresql-light",
        },
        {
          name: "Javascript",
          iconifyClass: "skill-icons:javascript",
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws",
        },
       
      ],
    },
  
    {
      name: "SPARKBLOX - No-code Platform for NFT",
      url: "https://beta.sparkblox.com",
      description:
        "In just a few minutes, you can create and sell programmable NFTs on your website with our user-friendly tools. Enhance your NFTs with engaging experiences by easily upgrading them using our API or manual processes",
      image: "spark.png",
      languages: [
        {
          name: "Next",
          iconifyClass: "skill-icons:nextjs-dark",
        },
        {
          name: "Soldity",
          iconifyClass: "skill-icons:solidity",
        },
        {
          name: "Hardhat",
          iconifyClass: "logos:hardhat-icon",
        },
        {
          name: "TypesScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
        {
          name: "Web3",
          iconifyClass: "logos:web3js",
        },
        {
          name: "Vercel",
          iconifyClass: "skill-icons:vercel-dark",
        },
      ],
    },
    {
      name: "NFT Artifact API",
      url: "http://143.198.108.143/", //https://artifact-app-ewx9q.ondigitalocean.app/?sketchId=2
      description: "Provide Random Artifact for dynamic NFT with API endpoint",
      image: "artifact.png",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Docker",
          iconifyClass: "skill-icons:docker",
        },
        {
          name: "DigitalOcean",
          iconifyClass: "logos:digital-ocean",
        },
      ],
    },
    {
      name: "Slamcoin marketplace",
      url: "https://slamcoin.io/",
      description:
        "NFT marketplace to buy Bubblex NFT with Slamcoin, Build Marketplace smart contract and Slam token contract and Integrate with Frontend and backend",
      image: "slam.png",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Web3",
          iconifyClass: "logos:web3js",
        },
        {
          name: "BSC",
          iconifyClass: "tabler:brand-binance",
        },
        {
          name: "Solidity",
          iconifyClass: "skill-icons:solidity",
        },
        {
          name: "Truffle",
          iconifyClass: "logos:truffle-icon",
        },
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
      ],
    },
    {
      name: "Bubblex NFT",
      url: " ",
      description:
        "Build bubble NFT collection and marketplace and provided NFT breeding solution",
      image: "bubblex.png",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Web3",
          iconifyClass: "logos:web3js",
        },
        {
          name: "BSC",
          iconifyClass: "tabler:brand-binance",
        },
        {
          name: "Solidity",
          iconifyClass: "skill-icons:solidity",
        },
        {
          name: "Truffle",
          iconifyClass: "logos:truffle-icon",
        },
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
      ],
    },

    {
      name: "Woman's world NFT",
      url: "https://rubmarketplace-ae4a4.web.app/",
      description:
        "Womans world is built on the prime web 3 model of inclusiveness. Womans World gives positive web 3 experiences to all holders in hope we all thrive and succeed together.",
      image: "woman.png",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Web3",
          iconifyClass: "logos:web3js",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos:ethereum-color",
        },
        {
          name: "Solidity",
          iconifyClass: "skill-icons:solidity",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "NestJs",
          iconifyClass: "vscode-icons:file-type-nestjs",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
      ],
    },
  ],
};

const mobile_projects = {
  data: [],
};

const reviews = [
  {
    name: "Matt Ryan",
    image: "Matt.jpg",
    feedback:
      "John was amazing!!! He built me one of the best Prescription App I’ve ever seen. John made it fun. I would recommend John to anyone. Thanks John",
    location: "City of London, United Kingdom",
  },
  {
    name: "Albert Lipaev",
    image: "default3.png",
    feedback:
      "John performed exceptionally well, demonstrating remarkable efficiency and speed in completing the task. I can highly recommend John's services.",
    location: "Washington, United States",
  },
  {
    name: "David Tyler",
    location: "City of London, United Kingdom",
    image: "David.jpg",
    feedback:
      "Excellent work from John. Very responsive, worked quickly, and completed all requirements. Will definitely use again.",
  },
 
  {
    name: "Chris Blacklock",
    image: "Chris.jpg",
    location: "Digital & Brand Communications Consultant",
    feedback: "Excellent. Very patient and detail orientated",
  },
  {
    name: "Shah Faisal",
    image: "default1.png",
    location: "Ontario, Canada",
    feedback:
      "The project was carried out quickly. John is reliable and kept us up to date. We would possibly use in the future.",
  },
  {
    name: "Shengwu Jin",
    image: "default2.png",
    feedback:
      "Excellent work! John efficiently solved the complex challenges of integrating Next.js and Express, delivering the solution and deploying it on the server in record time. His Full Stack Development skills are remarkable, and their in-depth knowledge of DevOps is impressive. Thanks",
    location: "Maidenhead, United Kingdom",
  },
  {
    name: "Curtis Delicata",
    image: "Curtis.jpg",
    feedback: "Excellent work carried out and efficient service.",
    location: "Swidon, United Kingdom",
  },
  {
    name: "Albert Kovacs",
    image: "default3.png",
    feedback:
      "John is a top top top freelancer to work with! My whole server was deleted by someone he fixed it in a few hours it was back up running again! I can’t even say how thankful I am! I can only recommend him he is a professional! Thank you again, I’m sure we will continue working together! A++++!",
    location: "Budapest, Hungary",
  },
  {
    name: "Pesach Olbaum",
    image: "default1.png",
    feedback:
      "John was responsive and got me what I wanted in a website. Good guy and a good job",
    location: "London, United Kingdom",
  },
  {
    name: "Martin Langmaid",
    image: "Navugo.jpg",
    feedback: "I highly recommend him.",
    location: "Navugo Group, Exeter, United Kingdom",
  },
];

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  blockchain_projects,
  web_projects,
  mobile_projects,
  reviews,
};
