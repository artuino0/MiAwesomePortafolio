import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGithub, faPython, faAngular, faVuejs, faCss3, faBootstrap, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";
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
        return <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faReact} />;
      case "Bootstrap":
        return <FontAwesomeIcon className="text-purple-700 text-2xl" icon={faBootstrap} />;
      case "Javascript":
        return <FontAwesomeIcon className="text-yellow-500 text-2xl" icon={faJs} />;
      case "HTML":
        return <FontAwesomeIcon className="text-orange-500 text-2xl" icon={faHtml5} />;
      case "CSS":
        return <FontAwesomeIcon className="text-blue-500 text-2xl" icon={faCss3} />;
      case "NodeJS":
        return <FontAwesomeIcon className="text-green-700 text-2xl" icon={faNodeJs} />;
      case "Tailwind":
        return <img src={tailwind} alt="tailwind-brand" className="w-8" />;
      case "MongoDB":
        return <img src={mongo} alt="mongodb-brand" className="w-7" />;
      case "Typescript":
        return <img src={typescript} alt="typescript-brand" className="w-7 -mt-[5px]" />;
      case "MSSQL":
        return <img src={sql} alt="sql-brand" className="w-8" />;
      case "Express":
        return <p className="bg-gray-400 text-xs rounded-md px-2 py-1">Express</p>;
      case "VB.net":
        return <img src={"https://www.portalgsti.com.br/media/uploads/fernandopalma/vb-net.png"} alt="vbnet-brand" className="w-7" />;
      case "MySQL":
        return <img src={"https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"} alt="mysql-brand" className="w-7" />;
      case "Excel":
        return <img src={"https://1000marcas.net/wp-content/uploads/2020/12/Microsoft-Excel-Logo-2013.png"} alt="mysql-brand" className="w-7" />;
      case "Angular":
        return <FontAwesomeIcon className="text-red-600 text-2xl" icon={faAngular} />;
      case "VueJS":
        return <FontAwesomeIcon className="text-green-600 text-2xl" icon={faVuejs} />;
      case "Python":
        return <FontAwesomeIcon className="text-yellow-600 text-2xl" icon={faPython} />;
      default:
        return null;
    }
  };

  return (
    <div id="porfolio" className="bg-white text-dark overflow-hidden relative lg:flex xl:py-24 py-12 xl:px-40 w-full items-center justify-between md:px-20 sm:px-10 px-5">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-5xl font-bold">Projects</h1>
        <hr />
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-4">
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
                    <div className="flex gap-3 mt-1 h-7 items-center">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{getIconForTag(tag)}</span>
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
