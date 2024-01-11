import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Route, Switch, Redirect} from 'react-router-dom'
import About from './components/Protfolio/About'
import Contact from './components/Protfolio/Contact'
import Projects from './components/Protfolio/Projects'
import Home from './components/Protfolio/Home'
import NotFound from './components/NotFound/index'
import PortfolioContext from './context/PortfolioContext'

import './App.css'

const initialList = [
  {
    id: uuidv4(),
    projectName: 'Company assignment',
    projectDescription:
      ' Ive just completed a project that simplifies online shopping.Now, users can effortlessly explore categories tailored for men, women, and kids. The site is designed to be user-friendly on any device, providing a seamless experience whether on a computer, tablet, or phone.The filtering system allows users to refine searches by size, color, and style, making it easy to find exactly what theyre looking for. The website dynamically updates to showcase the latest items, ensuring a fresh and relevant shopping experience.',
    projectLink: 'https://marmetowebsites.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectName: 'Tourism Website',
    projectDescription:
      'Developed tourism website where users can browse through the content, videos and images of popular destinations.Implemented mobile friendly layout using different HTML block, inline elements, and Styled using CSS3 properties such as background, flex, and CSS box model properties.Implemented multiple images of a particular destination in a carousel using bootstrap carousel and virtual tour videos using bootstrap embed component.Technologies used: HTML, CSS, Bootstrap',
    projectLink: 'https://sukanyatourism.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectName: 'Food Munch',
    projectDescription:
      'Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.Implemented product youtube videos by using bootstrap embed and model components.Technologies used: HTML, CSS, Bootstrap',
    projectLink: 'https://sukanyafoodmuch.ccbp.tech',
  },
]

class App extends Component {
  state = {
    projectList: initialList,
  }

  addProjectItem = product => {
    this.setState(prevState => ({
      projectList: [...prevState.projectList, product],
    }))
  }

  render() {
    const {projectList} = this.state

    return (
      <PortfolioContext.Provider
        value={{
          projectList,
          addProject: this.addProjectItem,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </PortfolioContext.Provider>
    )
  }
}

export default App
