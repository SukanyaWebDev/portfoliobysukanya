import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import PortfolioContext from '.../../../src/context/PortfolioContext'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
  }

  onChangeName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  renderForm = () => (
    <PortfolioContext.Consumer>
      {value => {
        const {projectDescription, projectLink, projectName} = this.state
        const {addProject} = value

        const onSubmitForm = event => {
          console.log('clicked')
          event.preventDefault()

          const newProject = {
            id: uuidv4(),
            projectName,
            projectLink,
            projectDescription,
          }
          addProject(newProject)

          this.setState(() => ({
            projectName: '',
            projectLink: '',
            projectDescription: '',
          }))
        }

        return (
          <div className="formCon">
            <form className="form-container" onSubmit={onSubmitForm}>
              <div className="input-container">
                <label htmlFor="projectName">Project Name </label>
                <input
                  type="text"
                  name="projectName"
                  value={projectName}
                  onChange={this.onChangeName}
                  id="projectName"
                />
              </div>
              <div className="input-container">
                <label htmlFor="projectLink">Project Link </label>
                <input
                  type="text"
                  name="projectLink"
                  value={projectLink}
                  onChange={this.onChangeLink}
                  id="projectLink"
                />
              </div>
              <div className="input-container">
                <label htmlFor="projectDescription">Project Description </label>
                <textarea
                  name="projectDescription"
                  value={projectDescription}
                  onChange={this.onChangeDescription}
                  id="projectDescription"
                />
              </div>

              <div className="btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
        )
      }}
    </PortfolioContext.Consumer>
  )

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="bottom-Container">
          <div className="container-1">
            <h1 className="heading">Hello,My name is Sukanya Talari</h1>
            <p>
              Hey there! I'm <span className="special">Talari Sukanya</span>, a
              seasoned web developer with a flair for transforming concepts into
              captivating online experiences. Over the course of my career, I've
              honed my skills in front-end and back-end technologies,
              specializing in HTML, CSS, JavaScript, React.js, and Node.js.
            </p>
            <Link to="/projects">
              <button type="button" className="project-btn">
                Projects
              </button>
            </Link>
            <button type="button" className="linkdin-btn">
              LinkedIn
            </button>
          </div>
          <div className="container-2">
            <img
              src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1704383253/imageimage1_cpkabc.jpg"
              alt="image1"
              className="image"
            />
          </div>
        </div>
        {this.renderForm()}
      </div>
    )
  }
}

export default Home
