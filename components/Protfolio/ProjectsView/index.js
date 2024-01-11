import './index.css'

const ProjectsView = props => {
  const {projectDetails} = props
  const {projectName, projectLink, projectDescription} = projectDetails

  const openLink = () => {
    window.open(projectLink, '_blank')
  }

  return (
    <div className="other-component">
      <div className="project-container">
        <p>{projectName}</p>
        <p>{projectDescription}</p>
        <img src={projectLink} alt={projectName} />
        <br />
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {projectLink}
        </a>
        <br />
        <button onClick={openLink} type="button" className="button-for-link">
          View Project
        </button>
      </div>
    </div>
  )
}

export default ProjectsView
