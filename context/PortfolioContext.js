import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid'
const projectnew = []
const PortfolioContext = React.createContext({
  projectList: [],
  addProject: () => {},
})

export default PortfolioContext
