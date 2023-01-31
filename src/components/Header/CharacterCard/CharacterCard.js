import React from 'react'
import './CharacterCard.css'

function CharacterCard({character}) {
  return (
    <div className='character-card'>
      <img src={character.image} alt='character-pic' />
      <p>{character.name}</p>
      <button>See Details</button>
    </div>
  )
}

export default CharacterCard
