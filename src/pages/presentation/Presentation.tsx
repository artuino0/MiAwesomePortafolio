import PresentationHeader from "./PresentationHeader";
import SocialButtons from "./SocialButtons";
import HireMeButton from "./HireMeButton";
import SelfieImage from "./SelfieImage";

import "./presentation.css";

const Presentation = () => (
  <div id="home" className="bg-image overflow-hidden select-none relative lg:flex pt-20 pb-10 mb:py-24 xl:px-40 lg:h-screen w-full items-center justify-between md:px-20 sm:px-10 px-5">
    <div className="relative md:w-full">
      <PresentationHeader />
      <div className="text-lg mt-5 z-20 relative">
        LET'S GET IN TOUCH:
        <SocialButtons />
      </div>
      <HireMeButton />
      <SelfieImage isHidden={false} className="lg:hidden z-10 -right-32 md:-right-24 absolute -bottom-10 transform scale-x-[-1] grayscale lg:h-full contrast-125 w-96 lg:w-full" />
    </div>
    <SelfieImage className="hidden lg:block absolute right-0 z-10 transform scale-x-[-1] grayscale contrast-125" style={{ width: "52%" }} />
    <div className="hidden -z-10 md:h-screen absolute -bottom-0 -right-20 lg:static lg:flex flex-grow justify-end"></div>
  </div>
);

export default Presentation;
