import cv from "../../assets/doc/Arturo_Munoz_CV.pdf";

import "./about.css";

const AboutMe = () => {
  return (
    <section id="aboutme" className="bg-white text-dark overflow-hidden relative lg:flex xl:py-24 py-12 xl:px-40 w-full items-center justify-between md:px-20 sm:px-10 px-5">
      <div className="flex flex-col md:flex-row justify-between md:gap-52 gap-12 text-center md:text-left">
        <h1 className="hidden md:block w-fit z-10 realtive text-right lg:text-8xl text-5xl font-black">
          ABOUT
          <br />
          <span className="text-primary">ME</span>
        </h1>

        <div className="md:hidden text-center z-10 realtive lg:text-8xl text-5xl font-black">
          <p>
            ABOUT
            <span className="text-primary"> ME</span>
          </p>
        </div>
        <div className="relative overtext">
          <p className="max-h-52 overflow-auto pb-5">
            Hello! I'm <span className="text-primary font-bold">Arturo Muñoz</span>, a full-stack web developer with experience in Node, Python, and .NET as backends, and React, Angular, and VUEjs as front-ends. I've worked in the meat and fresh
            produce sector, both in local sales and exports, and I'm now looking to expand my career in the tech industry.
            <br />
            <br />
            I'm passionate about creating innovative and scalable solutions to complex problems, and I'm constantly seeking to learn new technologies and tools to improve my work. I consider myself a self-taught person, and I like to stay up to date
            with the latest trends and developments in the programming world.
            <br />
            <br />
            I've also worked on software development projects for companies in different industries, which has allowed me to acquire skills in teamwork, effective communication, and project management. I'm focused on hard work, dedication, and
            creativity to achieve high-quality results.
          </p>
        </div>
      </div>
      <div className="text-center mt-6 md:hidden">
        <a className="text-center mx-auto border-2 border-gray-700 px-3 py-2 rounded-lg" href={cv}>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
