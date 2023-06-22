import cv from "../../assets/doc/Arturo_Munoz_CV.pdf";

const HireMeButton = () => (
  <a className="w-fit z-20 relative border-2 mt-10 font-normal text-lg px-6 py-1 rounded-lg flex hover:text-primary hover:border-primary transition-colors duration-150 ease-in-out" href={cv} target="_blank">
    HIRE ME
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-3 filter hover:hue-rotate-71">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M8 13H14M8 17H16M13 3H5V5M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19M19 9V12M5 10V21H19V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  </a>
);

export default HireMeButton;
