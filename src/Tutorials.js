import React, { Component } from 'react'

import { connect } from 'react-redux'
import Tutorial from './Tutorial'
class Instructors extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.match.params.instructor)
    // const searchTutorials = this.props.match.params.instructor
    const filterInstrutors = this.props.instructors.filter(
      (instructor) => instructor.name === this.props.match.params.instructor
    )

    console.log(filterInstrutors)
    return (
      <div className="container">
        {this.props.instructors
          .filter(
            (instructors) =>
              instructors.name === this.props.match.params.instructor
          )
          .map((instructor) => (
            <Tutorial
              // instructor={instructor.name}
              key={instructor.name}
              title={instructor.name}
              tutorials={instructor.tutorials}
            />
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { instructors: state }
}

export default connect(mapStateToProps, {})(Instructors)
