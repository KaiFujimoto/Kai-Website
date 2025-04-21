import React from 'react';

const myEducation: React.FC = () => {
	const education = {
		1: {
			'name': 'University of Pennsylvania',
			'dates': '2013-2017',
			'degree': 'Bachelor of Science',
			'concentration': 'Economics',
			'minor': 'Music'
		}
	};
	return (
		<div>
			<div className="section title">
				My Education
			</div>
			<div>
				{
					Object.values(education).map( school => {
						return (
							<div className="experience title">
								<div className="company-name">
									{school.name}
								</div>
								<div className="employed-dates">
									Dates Attended: {school.dates}
								</div>
								<div className="job-title">
									Degree: {school.degree}
								</div>
								<div className="job-title">
									Concentration: {school.concentration}
								</div>
								<div className="job-title">
									Minor: {school.minor}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	);
};

export default myEducation;
