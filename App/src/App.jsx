import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import SkillsScroll from "./components/FloatingSkills";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <SkillsScroll />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
