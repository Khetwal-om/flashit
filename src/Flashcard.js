import React from 'react'

import './Flashcard.css'

function Flashcard({ question, answerOne }) {
  return (
    <div className="tutorial">
      <article className="flashcard">
        <h1 className="flashcard__question">{question}</h1>
        <h1 className="flashcard__answer">{answerOne}</h1>
      </article>
    </div>
  )
}

export default Flashcard
