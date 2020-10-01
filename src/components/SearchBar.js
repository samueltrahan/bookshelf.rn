import React, {useState} from 'react';
import './SearchBar.css'

const SearchBar = ({handleSearchSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  
  return (
    <>
    <div className="ui form">
      <form className="field">
    <label>Search Books</label>
    <input id="input" value={searchTerm} onChange={onInputChange} className="input" type="text"></input><br />
    <button onSubmit={(event) => handleSearchSubmit(event, searchTerm)} className="btn waves-effect waves-light">Submit<i className="material-icons right"></i></button>
      </form>
    </div>
    </>
  )
}

export default SearchBar;