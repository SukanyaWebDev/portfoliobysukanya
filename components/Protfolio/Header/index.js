import {Link} from 'react-router-dom'
import PortfolioContext from '.../../../src/context/PortfolioContext'
import './index.css'

const Header = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {projectList} = value
      return (
        <div className="header-container">
          <h1 className="name-heading">Sukanya Talari</h1>
          <div>
            <ul className="list-items">
              <Link to="/about" className="link-item">
                About
              </Link>
              <Link to="/projects" className="link-item">
                Projects <span>{projectList.length}</span>
              </Link>
              <Link to="/contact" className="link-item">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      )
    }}
  </PortfolioContext.Consumer>
)

export default Header
