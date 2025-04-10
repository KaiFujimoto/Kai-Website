import React from 'react';

const MySkills: React.FC = () => {
	const languages = [
		"TypeScript",
		"JavaScript",
		"Python",
		"SQL",
		"HTML",
		"CSS",
		"Ruby",
		"Bash"
	];
	return (
		<div className="inner-section">
			<div className="title">
				Languages
			</div>
			{ languages.map(language => {
				return (
					<li>
						{language}
					</li>
				);
			})
			}
		</div>
	);
};

export default MySkills;

