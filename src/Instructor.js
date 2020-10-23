import React from 'react'
import { NavLink } from 'react-router-dom'
import './Instructor.css'

function Instructor({ name, imageOne, tutorialNumbers }) {
  return (
    <div className="container">
      <NavLink to={`/${name}/`}>
        <article>
          <h1>{name}</h1>
          <img src={imageOne} alt="" />

          <p>{tutorialNumbers}</p>
        </article>
      </NavLink>
    </div>
  )
}

export default Instructor
