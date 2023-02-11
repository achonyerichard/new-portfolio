import React from "react";

const experienceContent = [
  {
    year: "June 2022 - present",
    position: "Web Developer",
    compnayName: "Emplug",
    details: `Designed and implemented a micro-advertising platfrom using ReactJs on the frontend which was able to post ads with sms using third party inegrations.
    Developed a memberhip, forum and voting poll platform with automated inernal processes.
    Designed and developed a job application platform and optimized user experience by creating a global search which filters applicants by location and age.
    Designed the companies landing page which included blog posts and newsletters.`,
  }
  ,
  {
    year: "March 2022 - June 2022",
    position: "Junior Frontend Developer",
    compnayName: "Yoodule",
    details: `Developed and implemented e-commerce web apps with checkout and cart functionalities using Shopify.
    Implemented reviews by integrating review apps in Shopify and other third party Shopify integrations.
    Developed and wrote custom scrits in Shopify to tender to customer and user needs .`,
  },
  {
    year: " November  2021 - March 2022",
    position: "React Web Developer ",
    compnayName: "Loctech Appstation",
    details: `Developed an Emloyee Management System for a freight forwarding company which help cut down company loses signnificantly.
    Developed a school management system which handles application form data .
    Developed User Stories using Xmind to create proper projec flow and management`,
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
