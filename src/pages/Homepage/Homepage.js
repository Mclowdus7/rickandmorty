import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import CharacterCard from '../../components/Header/CharacterCard/CharacterCard'
import './Homepage.css'
import Search from '../../components/Header/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'



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
    
    
    const {darkMode} = useContext(ThemeContext)

    

  return (
    <div className={darkMode? 'home-container home-dark':'home-container'}>
      <Search setCharacters={setCharacters}/>
      <h1>Main Characters</h1>
      <div className='characters-container'>
      {
        characters.map(item=><CharacterCard 
                              key={item.id}
                              character={item} />)
        // characters.map(item=><p>{item.name}</p>)
      }
      </div>
    </div>
  )
}

export default Homepage
