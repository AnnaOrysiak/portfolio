import React from 'react';
import '../style/about.css';
import Hobbies from '../components/Hobbies';

const About = props => {
  const {
    about,
    soft_skills,
    skill_team,
    skill_communication,
    skill_tasks,
    skill_learn,
    skill_nonconflicting,
    skills_prompt,
    hard_skills,
    skill_html,
    skill_css,
    skill_js,
    skill_git,
    skill_wp,
    skill_ps,
    skill_react,
    skill_sass,
    skill_bootstrap,
    skill_nodejs,
    skill_mongodb,
    skill_express,
    introduction_1,
    introduction_2,
    hobby_anime,
    hobby_fantasy,
    hobby_er
  } = props.content;

  return (
    <>
      <div className='aboutSection'>
        <h3 className='aboutMe'>{about}</h3>
        <div className='myPhoto'></div>

        <div className='introduction'>
          <p className='aboutMeIntro'>{introduction_1}</p>
          <p className='aboutMeIntro'>{introduction_2}</p>
          <Hobbies
            hobby_anime={hobby_anime}
            hobby_fantasy={hobby_fantasy}
            hobby_er={hobby_er}
            counter={props.counter}
          />
        </div>

        <div className='skills'>
          <h4 className='skillsHeader'>{soft_skills}</h4>
          <div className='skillset'>
            <span className='description none'>{skills_prompt}</span>
            <i className='fas fa-users'></i>
            <span className='description'>{skill_team}</span>
            <i className='fas fa-comments'></i>
            <span className='description'>{skill_communication}</span>
            <i className='fas fa-tasks'></i>
            <span className='description'>{skill_tasks}</span>
            <i className='fas fa-user-graduate'></i>
            <span className='description'>{skill_learn}</span>
            <i className='fas fa-hands-helping'></i>
            <span className='description'>{skill_nonconflicting}</span>
          </div>

          <br />
          <br />

          <h4 className='skillsHeader'>{hard_skills}</h4>
          <div className='skillset'>
            <span className='description none'>{skills_prompt}</span>
            <i className='devicon-html5-plain'></i>
            <span className='description'>{skill_html}</span>
            <i className='devicon-css3-plain'></i>
            <span className='description'>{skill_css}</span>
            <i className='devicon-javascript-plain'></i>
            <span className='description'>{skill_js}</span>
            <i className='devicon-git-plain'></i>
            <span className='description'>{skill_git}</span>
            <i className='devicon-webpack-plain'></i>
            <span className='description'>{skill_wp}</span>
            <i className='devicon-photoshop-plain'></i>
            <span className='description'>{skill_ps}</span>
            <i className='devicon-react-original'></i>
            <span className='description'>{skill_react}</span>
            <i className='devicon-sass-original'></i>
            <span className='description'>{skill_sass}</span>
            <i className='devicon-bootstrap-plain'></i>
            <span className='description'>{skill_bootstrap}</span>
            <i className='devicon-nodejs-plain'></i>
            <span className='description'>{skill_nodejs}</span>
            <i className='devicon-mongodb-plain-wordmark'></i>
            <span className='description'>{skill_mongodb}</span>
            <i className='devicon-express-original'></i>
            <span className='description'>{skill_express}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
