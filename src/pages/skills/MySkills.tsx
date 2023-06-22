import angular from "../../assets/icons/angular.svg";
import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/node.svg";
import SQl from "../../assets/icons/database.svg";
import mongo from "../../assets/icons/mongo.png";
import chart from "../../assets/icons/chart.svg";
import python from "../../assets/icons/python.svg";
import vue from "../../assets/icons/vue.png";

import "./skills.css";

import { useState } from "react";
const Skills = () => {
  const [skills, setSkills] = useState(["Effective communication", "Problem-solving", "Critical thinking", "Adaptability", "Teamwork", "Creativity", "Time management", "Leadership", "Empathy", "Continuous learning"]);
  return (
    <>
      <div id="skills" className="bg-image overflow-hidden select-none relative flex flex-col md:flex-row gap-8 md:gap-0 pt-20 pb-10 md:py-24 xl:px-40 w-full items-center justify-between  md:px-20 sm:px-10 px-5">
        <h1 className="hard-skills relative  md:text-left text-center text-5xl lg:text-8xl uppercase font-bold">
          <span className="text-primary">Hard</span> <br /> Skills
        </h1>
        <div className="max-h-80 md:ml-16 overflow-auto flex-grow">
          <ul className="md:text-5xl text-3xl flex flex-col gap-3 mx-6">
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={angular} alt="angular-icon" />{" "}
              <p className="flex items-start">
                Angular
                <a href="https://community.open-bootcamp.com/user/therealsc/certificaciones/d95f15b4-84d6-4b5e-89c9-85378c649ab7" target="_blank">
                  <i className="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </p>
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={react} alt="angular-icon" />{" "}
              <p>
                React
                <a href="https://community.open-bootcamp.com/user/therealsc/certificaciones/8e6f7461-3004-4b73-b01e-53e101ccff47" target="_blank">
                  <i className="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </p>
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={node} width={"48px"} alt="angular-icon" />
              <p>
                Node.js
                <a href="https://www.udemy.com/certificate/UC-02af85e9-7ce9-46de-b0d8-e6bc4bcecd94/" target="_blank">
                  <i className="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </p>
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={SQl} width={"48px"} alt="angular-icon" />
              <p>
                SQL
                <a href="https://community.open-bootcamp.com/user/therealsc/certificaciones/39f51d2f-36db-44bc-8de3-f67c34899368" target="_blank">
                  <i className="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </p>
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={mongo} width={"48px"} alt="angular-icon" /> MongoDB
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={chart} width={"48px"} alt="angular-icon" /> PowerBI
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={python} width={"48px"} alt="angular-icon" /> Python
            </li>
            <li className=" px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={vue} width={"48px"} alt="angular-icon" /> VueJS
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-image text-center md:text-left overflow-hidden select-none relative lg:flex pt-10 pb-10 mb:py-24 xl:px-40 w-full items-center justify-between md:px-20 sm:px-10 px-5">
        <h1 className="soft-skills relative text-5xl lg:text-8xl uppercase font-bold">
          <span className="text-primary">Soft</span> <br /> Skills
        </h1>
        <div className="mt-6 mb-16 flex flex-wrap gap-6 md:pl-24 md:pr-12 justify-center md:justify-normal shadow-sm">
          {skills.map((skill) => (
            <span className="skill flex items-center justify-center px-2 py-2 text-center">
              <div className="bg-white ml-1 mr-2" style={{ width: "6px", height: "6px" }}></div> {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
