import React from "react";

const experienceContent = [
  {
    year: "March 2025 - present",
    position: "Frontend Engineer",
    compnayName: "IQM Solutions",
    details: `Developed comprehensive test stories using Storybook and Chromatic to ensure component functionality, visual consistency, and user experience.`,
  }
  ,
  {
    year: "October 2024 - March 2025",
    position: "Software Developer",
    compnayName: "Miva University (ULesson)",
    details: `•Developed and optimised an open univerisity student and admin portal , automating processes for student results and improving disbursement speed, resulting in higher client satisfaction and increased operational productivity.`,
  },
  {
    year: "June 2023 – July 2024",
    position: "Senior Software Developer",
    compnayName: "Huiospay Finance",
    details: `•Architected and deployed RESTful APIs for Huiospay’s digital banking system, enhancing customer experience and increasing system efficiency by 35%, enabling faster transactions and better service delivery.`,
  }
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
