import React, { useRef, createContext, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import EmailMe from "./components/EmailMe";
import MyExperience from "./components/MyExperience";
import MySkills from "./components/MySkills";
import MyEducation from "./components/MyEducation";
import MiningDashboard from "./pages/MiningDashboard";
import HiddenMiningButton from "./components/HiddenMiningButton";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function MainContent() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const myExperienceRef = useRef<HTMLDivElement | null>(null);
  const mySkillsRef = useRef<HTMLDivElement | null>(null);
  const myEducationRef = useRef<HTMLDivElement | null>(null);
  const emailMeRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <div className="app-body">
        <MenuBar
          scrollToSections={{
            aboutMe: aboutMeRef,
            myExperience: myExperienceRef,
            mySkills: mySkillsRef,
            myEducation: myEducationRef,
            emailMe: emailMeRef,
          }}
        />

        <AboutMe ref={aboutMeRef} />
        <MyExperience ref={myExperienceRef} />
        <MySkills ref={mySkillsRef} />
        <MyEducation ref={myEducationRef} />
        <EmailMe ref={emailMeRef} />
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Router>
        <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
          <ThemeToggle />
          <HomeButton />
          <HiddenMiningButton />

          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/mining" element={<MiningDashboard />} />
          </Routes>
        </div>
      </Router>
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

function HomeButton() {
  const location = useLocation();

  // Only show home button when not on the home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link to="/" className="home-button">
      🏠 Home
    </Link>
  );
}

export default App;
