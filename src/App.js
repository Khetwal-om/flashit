import React, { Component } from 'react'

import './styles.css'
import Instructors from './Instructors'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Tutorials from './Tutorials'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Instructors} />
            <Route path="/:instructor" exact component={Tutorials} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
