import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import EmailMe from './components/EmailMe';
import MyExperience from './components/MyExperience';
import MySkills from './components/MySkills';


function App() {
  return (
    <div className="App">
      <Header />
			<div className="app-body">
				<AboutMe />
				<MyExperience />
				<MySkills />
				<EmailMe />
 			</div>
			<Footer />
		</div>
  );
}

export default App;
