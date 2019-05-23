import React from 'react';

const Project = (props) => {
  const { project_name, project_description, project_url_live, project_url_code, project_img_mobile, project_url_desktop } = props.properties;

  console.log(project_img_mobile, project_url_desktop);

  return (
    <>
      <div className='projectArea'>
        <h4 className='projectTitle'>{project_name}</h4>
        <p className='projectDescription'>{project_description}</p>
        <div className='projectLive'>{project_url_live}</div>
        <div className='projectCode'>{project_url_code}</div>
      </div>
    </>
  );
}

export default Project;