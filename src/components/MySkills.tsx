import React, { forwardRef } from 'react';

const MySkills = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
	const BEFrameworks = [
		"Node.js",
		"Express.js",
		"FastAPI (Python)",
		"Terraform (Infrastructure as Code)",
		"pytest (Testing in Python)",
	];

	const FEFrameworks = [
		"React.js",
		"Redux",
		"Jest (Testing)",
		"React Testing Library",
		"SASS/SCSS"
	];

	const CloudDevOps = [
		"AWS (Lambda, API Gateway, S3, EC2, RDS, DynamoDB, CloudFront, CloudWatch, AURORA)",
		"Docker",
		"GitHub Actions",
		"CloudFormation (some experience)",
		"New Relic, DataDog, Observe (Monitoring/Observability)",
		"Jenkins"
	];

	const ToolsPlatforms = [
		"PostgreSQL",
		"Aurora RDS",
		"Git/GitHub",
		"Slack",
		"Jira",
		"VS Code",
		"vim",
		"MacOS",
		"G Suite"
	];

	const mySkills: { [key: string]: string[] } = {
		"languages": languages,
		"Backend Frameworks": BEFrameworks,
		"Frontend Frameworks": FEFrameworks,
		"Cloud & DevOps": CloudDevOps,
		"Other Tools & Platforms": ToolsPlatforms
	};
	return (
		<div ref={ref} className="inner-section">
			<div className="section title">
				My Skills
			</div>
			<div className="myskills">
			{ 
				Object.keys(mySkills).map(skill => {
					let list = mySkills[skill].map((detail) => {
						return (
							<li>
								{detail}
							</li>
						);
					});
					return (
						<div>
							<div className="title">
								{skill.toUpperCase()}
							</div>
							{list}
						</div>
					);
				})
			}
			</div>
		</div>
	);
});

export default MySkills;

