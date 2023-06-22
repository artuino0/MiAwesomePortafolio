import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGithub, faPython, faAngular, faVuejs, faCss3, faBootstrap, faJs } from "@fortawesome/free-brands-svg-icons";
import { projects as myProjects } from "../../data/data";
import www from "../../assets/svgs/www.svg";
import github from "../../assets/svgs/github.svg";
import tailwind from "../../assets/svgs/tailwind.svg";
import typescript from "../../assets/svgs/typescript.svg";
import sql from "../../assets/svgs/sql.svg";
import firebase from "../../assets/svgs/firebase.svg";
import mongo from "../../assets/svgs/mongodb.svg";

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(myProjects);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const getIconForTag = (tag: string) => {
    switch (tag) {
      case "React":
        return <FontAwesomeIcon className="text-blue-600" icon={faReact} />;
      case "Bootstrap":
        return <FontAwesomeIcon className="text-purple-700" icon={faBootstrap} />;
      case "Javascript":
        return <FontAwesomeIcon className="text-yellow-500" icon={faJs} />;
      case "CSS":
        return <FontAwesomeIcon className="text-blue-500" icon={faCss3} />;
      case "NodeJS":
        return <FontAwesomeIcon className="text-green-700" icon={faNodeJs} />;
      case "Tailwind":
        return <img src={tailwind} alt="tailwind-brand" className="w-8" />;
      case "MongoDB":
        return <img src={mongo} alt="mongodb-brand" className="w-8" />;
      case "Typescript":
        return <img src={typescript} alt="typescript-brand" className="w-7" />;
      case "MSSQL":
        return <img src={sql} alt="sql-brand" className="w-8" />;
      case "Firebase":
        return <img src={firebase} alt="firebase-brand" className="w-7 absolute -ml-4" />;
      case "Angular":
        return <FontAwesomeIcon className="text-red-600" icon={faAngular} />;
      case "VueJS":
        return <FontAwesomeIcon className="text-green-600" icon={faVuejs} />;
      case "Python":
        return <FontAwesomeIcon className="text-yellow-600" icon={faPython} />;
      default:
        return null;
    }
  };

  return (
    <div id="porfolio" className="bg-white text-dark overflow-hidden relative lg:flex xl:py-24 py-12 xl:px-40 w-full items-center justify-between md:px-20 sm:px-10 px-5">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-lg">Here are some of my projects:</p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="text-center cursor-pointer relative" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <div className="bg-gray-200 h-64 w-full overflow-hidden" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <img src={project.image} className="w-full h-full object-cover" alt="" />
                {hoveredProject === index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-90 bg-gray-800 text-white flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out">
                    <div className="absolute top-3 right-3 flex">
                      {project.link && (
                        <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                          <img src={www} className="w-9" alt="" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className="text-blue-500 ml-4" target="_blank" rel="noopener noreferrer">
                          <img src={github} className="w-9" alt="" />
                        </a>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold bg-opacity-85">{project.title}</h2>
                    <p className="bg-opacity-85">{project.description}</p>
                    <div className="flex text-2xl gap-3">
                      {project.tags.map((tag) => (
                        <p>{getIconForTag(tag)}</p>
                      ))}
                    </div>
                  </div>
                )}
                {hoveredProject !== index && (
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-800 bg-opacity-90 text-white flex items-center justify-center">
                    <h2 className="text-lg font-bold bg-opacity-85">{project.title}</h2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
