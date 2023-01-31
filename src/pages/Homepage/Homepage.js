import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from '../../components/Header/CharacterCard/CharacterCard'
import './Homepage.css'



function Homepage() {
      //create state for characters
      const[characters, setCharacters] = useState([])


    useEffect(
      ()=>{
          //console.log('homepage loaded')
          axios.get("https://rickandmortyapi.com/api/character")
          .then(res => {
            console.log(res.data.results)
            setCharacters(res.data.results)
          })
          .catch(err => console.log(err))
      },[]
    ) //end useEffect

  return (
    <div className='home-container'>
      <h1>Main Characters</h1>
      <div className='characters-container'>
      {
        characters.map(item=><CharacterCard 
                              character={item} />)
        // characters.map(item=><p>{item.name}</p>)
      }
      </div>
    </div>
  )
}

export default Homepage
