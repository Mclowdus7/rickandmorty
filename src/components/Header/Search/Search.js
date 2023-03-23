import React, {useState} from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //create state to hold search input
    const [searchValue, setSearchValue] = useState('')

    // const handleChange =(e)=>{
    //       console.log(e)
    //       //store the input value
    //       setSearchValue(e.target.value)
    // }


    //https://rickandmortyapi.com/api/character/?name=rick
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchValue)
        //I need to call api to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res =>{
          console.log(res.data.results)
          setCharacters(res.data.results)

          //clear textbox
          setSearchValue('')
        })
        .catch(err => {
           
          if (err.response.status === 404) {
            alert('No Matching Characters')
          }
          else {
            console.log(err) 
          }

        })
        
    }

  return (
    <form className='search-container'
      onSubmit = {handleSubmit}>
      <input type='text'
             onChange={(e)=>setSearchValue(e.target.value)}
             value={searchValue}
             placeholder='Search All Characters'
             />
    </form>
  )
}

export default Search
