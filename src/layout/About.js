import React from 'react';

const About = (props) => {

  const { about, introduction, skills } = props.content;

  return (
    <>
      <div className="aboutSection">
        <h3 className="aboutMe">{about}</h3>
        <div className="myPhoto"></div>
        <div className="skills">{skills}</div>
        <div className="introduction">
          <p className="boutMeIntro">{introduction}</p>
        </div>
      </div>
    </>
  );
}

export default About;