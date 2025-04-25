import React, { useRef, createContext, useState, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import EmailMe from './components/EmailMe';
import MyExperience from './components/MyExperience';
import MySkills from './components/MySkills';
import MyEducation from './components/MyEducation';

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function App() {
	
	const [isDarkMode, setIsDarkMode] = useState(false);

	const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const myExperienceRef = useRef<HTMLDivElement | null>(null);
	const mySkillsRef = useRef<HTMLDivElement | null>(null);
	const myEducationRef = useRef<HTMLDivElement | null>(null);
	const emailMeRef = useRef<HTMLDivElement | null>(null);

  return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<div className={`${isDarkMode ? "dark" : "light"} App`}>
			  <ThemeToggle />	
				<Header />
				<div className="app-body">
					<MenuBar scrollToSections={{ 
						aboutMe: aboutMeRef, 
						myExperience: myExperienceRef, 
						mySkills: mySkillsRef,
						myEducation: myEducationRef,
						emailMe: emailMeRef }} />
					
					<AboutMe ref={aboutMeRef}/>
					<MyExperience ref={myExperienceRef}/>
					<MySkills ref={mySkillsRef}/>
					<MyEducation ref={myEducationRef}/>
					<EmailMe ref={emailMeRef}/>
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
		<button className={isDarkMode ? "light" : "dark" } onClick={() => setIsDarkMode(!isDarkMode)}>
			Toggle to {isDarkMode ? "Light" : "Dark"} Mode!
		</button>
	);
}

export default App;
