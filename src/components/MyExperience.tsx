import React from 'react';

const MyExperience: React.FC = () => {
	const experienceList = [
		{
			"companyName": "Capital One",
			"employedDates": "Oct, 2021 - Present",
			"jobTitle": "Senior Associate - Software Engineer",
			"accomplishments": [
				"Led the design and implementation of a scalable backend architecture for internal audit tools, with a focus on API quality, extensibility, and developer experience. (Python, FastAPI, AWS Aurora, PostgreSQL)",
				"Designed and developed RESTful APIs using FastAPI and Python, backed by a highly available Aurora PostgreSQL database. (Python, FastAPI, PostgreSQL, AWS Aurora)",
				"Built modular endpoints that integrated with Camunda workflows, enabling business teams to manage and adjust processes dynamically with minimal engineering dependency. (Camunda, Typescript, AWS Lambda)",
				"Created reusable, well-documented API interfaces and contributed to internal API design standards through code reviews and team discussions. (Python, FastAPI, Typescript)",
				"Helped drive an org-wide transition to a multi-frontend architecture, developing API contracts and coordinating with frontend engineers to ensure smooth integration. (Typescript, Python, S3, BFF)",
				"Developed component and integration tests for both UI and API layers using Cypress and Behave, integrated with Cucumber and Jira Xray for behavior-driven development. (Typescript, Cypress, Python, Behave, Cucumber, Jira Xray)",
				"Built ephemeral environments using Docker and LocalStack to run isolated API tests, ensuring test coverage and code quality without affecting production environments. (Docker, LocalStack, Python)",
				"Collaborated closely with DevOps, QA, product owners, and external teams to align on API design principles and enforce consistent standards across services. (Python, FastAPI, AWS, Node, Express)"
			]
		},
		{
			"companyName": "Surany Research & Development LLC",
			"employedDates": "July, 2018 - Oct, 2021",
			"jobTitle": "Software Engineer",
			"accomplishments": [
				"Designed and implemented NLP-driven ontologies using Python, NLTK, and Scikit-learn to support chatbot features for internal tools aimed at streamlining software development processes. (Python, NLTK Toolkit, Scikit-learn)",
				"Delivered modular Python components and worked with internal users to iterate on functionality and improve usability. (Python)"
			]
		},
		{
			"companyName": "App Academy",
			"employedDates": "May, 2018 - June, 2018",
			"jobTitle": "Teaching Assistant",
			"accomplishments": [
				"Taught programming fundamentals including Ruby, JavaScript, and React/Redux to entry-level students, emphasizing clean code and development best-practices. (Ruby, JavaScript, React, Redux)",
				"Conducted technical and non-technical interviews, providing actionable feedback to applicants and early-career engineers. (Ruby, JavaScript)"
			]
		}
	];

	return (
		<div className="inner-section">
			<div className="section title">
				My Experience
			</div>
			<div className="section body">
				{
					experienceList.map((experience) => {
						let accomplishments = experience.accomplishments.map(exp => {
										 return (
												<li className="item">
													{exp}
												</li>
											);
										}); 
						return (
							<div className="experience title">
								<div className="company-name">
									{ experience.companyName }
								</div>
								<div className="employed-dates">
									{ experience.employedDates }
								</div>
								<div className="job-title">
									{ experience.jobTitle }
								</div>
								<div className="accomplishments">
									{ accomplishments }
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default MyExperience;

