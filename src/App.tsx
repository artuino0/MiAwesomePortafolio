import { useState } from "react";
import Navbar from "./shared/Navbar";

import "./App.css";
import Doge from "./shared/Doge";
import Presentation from "./pages/presentation/Presentation";
import AboutMe from "./pages/aboutme/AboutMe";
import Skills from "./pages/skills/MySkills";
import Projects from "./pages/projects/Projects";
import ContactForm from "./pages/contactme/ContactForm";

function App() {
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  return (
    <div className="App font-grotesk relative">
      <Navbar setEasterEggClicks={setEasterEggClicks} easterEggClicks={easterEggClicks} />
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
      {/* <Navbar />
      <div className="bg-light mx-40" style={{ height: "1px" }}></div> */}
      {easterEggClicks >= 5 ? <Doge setEasterEggClicks={setEasterEggClicks} /> : <></>}
    </div>
  );
}

export default App;
