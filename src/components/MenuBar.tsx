import React from "react";

interface MenuBarProps {
	scrollToSections: {
		aboutMe: React.RefObject<HTMLDivElement | null>;
		myExperience: React.RefObject<HTMLDivElement | null>;
		mySkills: React.RefObject<HTMLDivElement | null>;
		myEducation: React.RefObject<HTMLDivElement | null>;
		emailMe: React.RefObject<HTMLDivElement | null>;
	};
}

const MenuBar: React.FC<MenuBarProps> = ({ scrollToSections }) => {
	
	const handleScroll = (section: keyof typeof scrollToSections) => {
		const sectionRef = scrollToSections[section];
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav>
			<div onClick={() => handleScroll("aboutMe")}> About Me </div>
			<div onClick={() => handleScroll("myExperience")}> My Experience </div>
			<div onClick={() => handleScroll("mySkills")}> My Skills </div>
			<div onClick={() => handleScroll("myEducation")}> My Education </div>
			<div onClick={() => handleScroll("emailMe")}> Email Me </div>
		</nav>
	);
};

export default MenuBar;
