import React from 'react';
import '../style/about.css';

const About = (props) => {

  const { about, skills, skill_html, skill_css, skill_js, skill_git, skill_wp, skill_ps, skill_team, technologies, introduction_1, introduction_2, hobby } = props.content;

  return (
    <>
      <div className="aboutSection">
        <h3 className="aboutMe">{about}</h3>
        <div className="myPhoto"></div>

        <div className="introduction">
          <p className="aboutMeIntro">{introduction_1}</p>
          <p className="aboutMeIntro">{introduction_2}</p>
          <p className="aboutMeHobby">{hobby}</p>
        </div>

        <div className="skills">
          <h4 className="skillsHeader">{skills}</h4>
          <div className="skillset">

            <i className="devicon-html5-plain"></i>
            <span className="description">{skill_html}</span>
            <i className="devicon-css3-plain"></i>
            <span className="description">{skill_css}</span>
            <i className="devicon-javascript-plain"></i>
            <span className="description">{skill_js}</span>
            <i className="devicon-git-plain"></i>
            <span className="description">{skill_git}</span>
            <i className="devicon-webpack-plain"></i>
            <span className="description">{skill_wp}</span>
            <i className="devicon-photoshop-plain"></i>
            <span className="description">{skill_ps}</span>
            <i className="fas fa-users"></i>
            <span className="description">{skill_team}</span>
          </div>
          <br /><br />
          <h4 className="skillsHeader">{technologies}</h4>
          <div className="skillset">
            <i className="devicon-react-original"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-express-original"></i>

          </div>
        </div>

      </div>
    </>
  );
}

export default About;