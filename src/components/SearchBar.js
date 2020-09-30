import React, {useState} from 'react';
import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
  }

  
  return (
    <>
    <div className="ui form">
      <form className="field">
    <label>Search Books</label>
    <input id="input" value={searchTerm} onChange={onInputChange} className="input" type="text"></input>
      </form>
    </div>
    </>
  )
}

export default SearchBar;