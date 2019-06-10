import React from 'react';
import '../style/project.css';

const Project = (props) => {

 const bgImg = {
    backgroundImage: `url(${props.mobile ? props.properties.project_img_mobile : props.properties.project_img_desktop})`
  }

  const {id, project_name, project_description, project_url_live, project_url_code} = props.properties;

  return ( 
      <div className='projectArea' style={bgImg}>
        <span className='projectId'>{id}</span>
        <h4 className='projectTitle'>{project_name}</h4>
        <p className='projectDescription'>{project_description}</p>
        <div className="projectActions">
          <a href={project_url_live} className={project_url_live ? 'projectAnchor' : 'hidden'}> Live</a>
          <a href={project_url_code} className={project_url_code ? 'projectAnchor' : 'hidden'}> Code </a>
        </div>
      </div >

   );
}
export default Project;