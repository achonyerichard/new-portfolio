import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Richard" },
  { meta: "last name", metaInfo: "Achonye" },

  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Freelance", metaInfo: "Available" },

  { meta: "phone", metaInfo: "+234 8159807048" },
  { meta: "Email", metaInfo: "achonyerichard@gmail.com" },

  { meta: "langages", metaInfo: " English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
