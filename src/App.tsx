import React, { useRef, createContext, useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import EmailMe from "./components/EmailMe";
import MyExperience from "./components/MyExperience";
import MySkills from "./components/MySkills";
import MyEducation from "./components/MyEducation";
import CryptoFun from "./components/CryptoFun";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const myExperienceRef = useRef<HTMLDivElement | null>(null);
  const mySkillsRef = useRef<HTMLDivElement | null>(null);
  const myEducationRef = useRef<HTMLDivElement | null>(null);
  const emailMeRef = useRef<HTMLDivElement | null>(null);
  const cryptoFunRef = useRef<HTMLDivElement | null>(null);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
        <ThemeToggle />
        <Header />
        <div className="app-body">
          <MenuBar
            scrollToSections={{
              aboutMe: aboutMeRef,
              myExperience: myExperienceRef,
              mySkills: mySkillsRef,
              myEducation: myEducationRef,
              emailMe: emailMeRef,
              cryptoFun: cryptoFunRef,
            }}
          />

          <AboutMe ref={aboutMeRef} />
          <MyExperience ref={myExperienceRef} />
          <MySkills ref={mySkillsRef} />
          <MyEducation ref={myEducationRef} />
          <EmailMe ref={emailMeRef} />
          <CryptoFun ref={cryptoFunRef} />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { isDarkMode, setIsDarkMode } = context;

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default App;
