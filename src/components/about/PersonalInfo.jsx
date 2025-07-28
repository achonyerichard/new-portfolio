import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Richard" },
  { meta: "last name", metaInfo: "Achonye" },

  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Freelance", metaInfo: "Available" },

  { meta: "phone", metaInfo: "+44 7440769837" },
  { meta: "langages", metaInfo: " English" },
  { meta: "Email", metaInfo: "achonyerichard@gmail.com" },


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
