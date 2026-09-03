import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Presentation from "./pages/presentation/Presentation";
import AboutMe from "./pages/aboutme/AboutMe";
import MySkills from "./pages/skills/MySkills";
import Projects from "./pages/projects/Projects";
import ContactForm from "./pages/contactme/ContactForm";
import { I18nProvider } from "./i18n/I18nContext";

function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-bg font-body text-fg">
        <Navbar />
        <main>
          <Presentation />
          <AboutMe />
          <MySkills />
          <Projects />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
