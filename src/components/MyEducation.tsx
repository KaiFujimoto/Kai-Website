import React, { forwardRef } from "react";

const myEducation = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const education = {
    1: {
      name: "University of Pennsylvania",
      dates: "2013-2017",
      degree: "Bachelor of Science",
      concentration: "Economics",
      minor: "Music",
    },
  };
  return (
    <div ref={ref} className="inner-section fade-in">
      <div className="section title">My Education</div>
      <div className="body">
        {Object.values(education).map((school, index) => {
          return (
            <div key={index} className="education-item">
              <div className="company-name">{school.name}</div>
              <div className="employed-dates">
                Dates Attended: {school.dates}
              </div>
              <div className="job-title">Degree: {school.degree}</div>
              <div className="job-title">
                Concentration: {school.concentration}
              </div>
              <div className="job-title">Minor: {school.minor}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default myEducation;
