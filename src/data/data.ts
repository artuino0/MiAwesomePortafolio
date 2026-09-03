export interface Project {
  /** key into translations.work.projects */
  id: string;
  /** short stack label shown on the card thumb */
  stack: string;
  tags: string[];
  link: string;
  github: string;
}

export const GITHUB_PROFILE = "https://github.com/artuino0";

export const projects: Project[] = [
  {
    id: "portfolio",
    stack: "REACT",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "",
    github: "https://github.com/artuino0/MiAwesomePortafolio",
  },
  {
    id: "aquapay-front",
    stack: "REACT",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "",
    github: "https://github.com/artuino0/AquaPay-Client",
  },
  {
    id: "aquapay-back",
    stack: "NODE.JS",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/artuino0/AquaPay-Server",
  },
  {
    id: "truck-tracking",
    stack: "IONIC",
    tags: ["Ionic", "Angular", "Firebase"],
    link: "",
    github: "https://github.com/artuino0/truck-tracking-pt",
  },
  {
    id: "zipcode-api",
    stack: "NODE.JS",
    tags: ["Node.js", "Express", "MSSQL"],
    link: "",
    github: "https://github.com/artuino0/zipcode-server",
  },
  {
    id: "donut-films",
    stack: "REACT",
    tags: ["React", "Tailwind", "TypeScript"],
    link: "https://donutfilmsco.com/",
    github: "",
  },
  {
    id: "mosino",
    stack: "REACT",
    tags: ["React", "Tailwind", "TypeScript"],
    link: "https://mosinioweb.web.app/",
    github: "",
  },
  {
    id: "resource-manager",
    stack: "REACT",
    tags: ["React", "CSS"],
    link: "https://dashboard-bi-demo.netlify.app/",
    github: "",
  },
  {
    id: "regex-decrypter",
    stack: "REACT",
    tags: ["React", "TypeScript", "CSS"],
    link: "https://digitalhype-jamc-react.netlify.app/",
    github: "https://github.com/artuino0/dh-decrypter",
  },
];
