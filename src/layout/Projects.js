import React from 'react';
import Project from '../components/Project';

const Projects = (props) => {

  const { portfolio, projects } = props.content;
  let projectList = [];

  if (projects) {
    projectList = projects.map(project => <Project key={project.id} properties={project} />);
  }

  return (
    <div className='projectSection'>
      <h3>{portfolio}</h3>
      {projectList}
    </div>
  );
}

export default Projects;