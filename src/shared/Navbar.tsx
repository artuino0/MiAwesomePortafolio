import React, { useEffect, useState } from "react";
import menuSvg from "../assets/menu.svg";
import closeMenuSvg from "../assets/close-menu.svg";

import "./navbar.css";

interface NavbarProps {
  easterEggClicks: number;
  setEasterEggClicks: (clicks: number) => void;
}

const Navbar = ({ easterEggClicks, setEasterEggClicks }: NavbarProps) => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollMenuEffect = `${scrolling || isMobileMenuActive ? "bg-medium py-3 xs:shadow-xl md:shadow-none" : "bg-transparent 2xl:py-9 py-6"} `;

  return (
    <nav className={` ${scrollMenuEffect} text-white fixed w-full z-50 transition-all duration-300 ease-in-out xl:px-40 md:px-15 sm:px-10 px-5`}>
      <div className="flex items-center justify-between">
        <div
          className="select-none text-2xl md:text-3xl font-bold hover:cursor-pointer"
          onClick={() => {
            setEasterEggClicks(easterEggClicks + 1);
            console.log(easterEggClicks);
          }}
        >
          {"<"}arturo<span className="text-primary">.</span>muñoz{"/>"}
        </div>
        <div className="text-white">
          <div className="hidden md:block">
            <MenuItems />
          </div>
          <div className="md:hidden flex items-center justify-center">
            <button className="text-2xl" onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}>
              {isMobileMenuActive ? <img src={closeMenuSvg} alt="close menu" className="h-6 w-6" /> : <img src={menuSvg} alt="menu" className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuActive && <MobileMenu setIsMobileMenuActive={setIsMobileMenuActive} />}
    </nav>
  );
};

const MenuItems = ({ setIsMobileMenuActive }: { setIsMobileMenuActive?: any }) => {
  const menuItems = [
    { title: "HOME", link: "home" },
    { title: "ABOUT ME", link: "aboutme" },
    { title: "SKILLS", link: "skills" },
    { title: "PORTFOLIO", link: "porfolio" },
  ];
  return (
    <ul className="menu flex flex-col md:flex-row gap-4 lg:gap-10 items-center">
      {menuItems.map((item, i) => (
        <li key={i} className="text-white relative hover:text-primary hover:cursor-pointer transition-all duration-300 ease-in-out">
          <a href={`#${item.link}`} onClick={() => setIsMobileMenuActive(false)}>
            {item.title}
          </a>
        </li>
      ))}
      <li>
        <HireMeButton />
      </li>
    </ul>
  );
};

const HireMeButton = (props: { additionalClassNames?: string }) => {
  const scroll = () => {
    const targetElement = document.getElementById("contactme");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scroll}
      type="button"
      className={`hover:text-primary hover:border-primary hireme-btn px-6 flex justify-center items-center gap-3 border-2 w-full rounded-lg 
                 transition-all duration-150 ease-in-out py-1 ${props.additionalClassNames || ""}`}
    >
      CONTACT ME
    </button>
  );
};

const MobileMenu = ({ setIsMobileMenuActive }: { setIsMobileMenuActive: any }) => {
  return (
    <div className="mobile-menu md:hidden text-center w-full transition-all duration-300">
      <ul className="flex flex-col md:flex-row gap-6 mt-6 mb-3 ">
        <MenuItems setIsMobileMenuActive={setIsMobileMenuActive} />
      </ul>
    </div>
  );
};

export default Navbar;
