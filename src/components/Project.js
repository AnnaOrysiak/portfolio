import React from 'react';
import '../style/project.css';

class Project extends React.Component {

  state = {
    id: this.props.properties.id,
    project_name: this.props.properties.project_name,
    project_description: this.props.properties.project_description,
    project_url_live: this.props.properties.project_url_live,
    project_url_code: this.props.properties.project_url_code,
    urlMobile: this.props.properties.project_img_mobile,
    urlDesktop: this.props.properties.project_img_desktop,
    mobile: this.props.mobile
  }

  bgImg = {
    backgroundImage: `url(${this.state.mobile ? this.state.urlMobile : this.state.urlDesktop})`
  }

  render() {

    const { id, project_name, project_description, project_url_live, project_url_code } = this.state;

    return (

      <div className='projectArea' style={this.bgImg}>
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
}

export default Project;