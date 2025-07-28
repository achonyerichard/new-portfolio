import React from "react";

const skillsContent = [
  {  heroImage: "img/hero/dark.jpg", skillName: "EXPRESS" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "NODEJS" },
  { skillClass: "p66", skillPercent: "66", skillName: "NEXTJS" },
  { skillClass: "p95", skillPercent: "95", skillName: "SHOPIFY" },
  { skillClass: "p50", skillPercent: "50", skillName: "VUE" },
  { skillClass: "p65", skillPercent: "65", skillName: "REACT NATIVE" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className=''>
          <img
              src={`img/hero/${skillsContent.heroMobileImage}.jpg`}
              className="img-fluid main-img-mobile  d-none w-10 h-10"
              alt="hero man"
            />
          </div>
          
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
