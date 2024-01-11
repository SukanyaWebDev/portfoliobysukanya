// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid'
import PortfolioContext from '.../../../src/context/PortfolioContext'
import {Component} from 'react'

import ProjectsView from '../ProjectsView'

import './index.css'

const Projects = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {projectList} = value
      return (
        <div className="main-container1">
          <h1 className="project-heading">Projects</h1>
          <div className="items-container">
            {projectList.map(eachProject => (
              <ProjectsView key={eachProject.id} projectDetails={eachProject} />
            ))}
          </div>
        </div>
      )
    }}
  </PortfolioContext.Consumer>
)

export default Projects
