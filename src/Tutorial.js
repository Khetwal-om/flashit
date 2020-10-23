import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Flashcard from './Flashcard'

import './Tutorial.css'

class Tutorial extends Component {
  state = {
    selectedTutorial: null
  }
  componentDidMount() {
    this.setState({
      selectedTutorial: this.props.tutorials[0]
    })
  }
  onTutorialSelect = (tutorial) => {
    this.setState({
      selectedTutorial: tutorial
    })
  }
  render() {
    const { title, tutorials } = this.props
    console.log(this.state.selectedTutorial)
    return (
      <div className="tutorial">
        <article>
          <NavLink to="/">back</NavLink>
          <h1>{title}</h1>
          {this.state.selectedTutorial && this.state.selectedTutorial.title}
          {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <Flashcard
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
              />
            ))}
          {tutorials.map((tutorial) => (
            <div
              className="tutorial"
              onClick={() => {
                this.onTutorialSelect(tutorial)
              }}
            >
              {tutorial.title}
            </div>
          ))}
        </article>
      </div>
    )
  }
}

export default Tutorial
