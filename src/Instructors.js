import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchMyInstructors } from './actions'
import Instructor from './Instructor'
import './Instructors.css'

class Instructors extends Component {
  componentDidMount() {
    this.props.fetchMyInstructors()
  }

  render() {
    return (
      <div className="container">
        {this.props.instructors.map((instructor) => (
          <Instructor
            key={instructor.name}
            name={instructor.name}
            imageOne={instructor.imageOne}
            tutorialNumbers={instructor.tutorials.length}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { instructors: state }
}

export default connect(mapStateToProps, { fetchMyInstructors })(Instructors)
