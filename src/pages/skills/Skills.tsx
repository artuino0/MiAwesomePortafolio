import angular from "../assets/icons/angular.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import SQl from "../assets/icons/database.svg";
import mongo from "../assets/icons/mongo.png";
import chart from "../assets/icons/chart.svg";
import python from "../assets/icons/python.svg";
import vue from "../assets/icons/vue.png";

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
                <a href="https://community.open-bootcamp.com/user/therealsc/certificaciones/a899d22d-bcee-477c-a431-4ed78caf8b8a" target="_blank">
                  <i className="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </p>
            </li>
            <li className="border-b px-3 pb-9 pt-6 w-full flex gap-6 justify-start items-center">
              <img src={node} width={"48px"} alt="angular-icon" /> Node.js
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
      <div className="bg-image overflow-hidden select-none relative lg:flex pt-20 pb-10 mb:py-24 xl:px-40 w-full items-center justify-between md:px-20 sm:px-10 px-5">
        <h1 className="soft-skills relative text-5xl lg:text-8xl uppercase font-bold">
          <span className="text-primary">Soft</span> <br /> Skills
        </h1>
      </div>
    </>
  );
};

export default Skills;
