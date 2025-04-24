import React, { createContext, useState, useContext } from 'react';
import './App.css';
import Header from './components/Header';
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

  return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<div className={`${isDarkMode ? "dark" : "light"} App`}>
			  <ThemeToggle />	
				<Header />
				<div className="app-body">
					<AboutMe />
					<MyExperience />
					<MySkills />
					<MyEducation />
					<EmailMe />
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
