import React, {useEffect, useState} from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function CharacterDetails() {
    //I need the id from the url
    const {id} = useParams();

    //create state for character data

    const [character, setCharacter] = useState()

    //https://rickandmortyapi.com/api/character/2

    useEffect (
        ()=>{
            //call api to get info for this character
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res =>{
                console.log(res.data)
                setCharacter(res.data)
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
        }, []
    )

  return (
    <div className='details-container'>
        <img src={character?.image} alt={character?.name} />
        <div className='char-info'>
            <h3>{character?.name}</h3>
            <ul>
                <li>{character?.gender}</li>
                <li>{character?.species}</li>
                <li>{character?.status}</li>
            </ul>
        </div>
      
    </div>
  )
}

export default CharacterDetails
