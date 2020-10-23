import React from 'react'

import Flashcard from './Flashcard'

function Flashcards({ question, meaningOne }) {
  return (
    <div className="tutorial">
      <Flashcard key={question} question={question} answerOne={meaningOne} />
    </div>
  )
}

export default Flashcards
